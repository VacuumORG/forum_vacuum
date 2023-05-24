import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { CreateTopicModel, ListAllTopicsModel } from '~/models/topic'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response

  switch (req.method) {
    case 'GET':
      response = await getTopics(req)
      break

    case 'POST':
      response = await createTopic(req)
      break

    default:
      return res
        .status(CodeClientError.MethodNotAllowed)
        .json({ message: 'Method not allowed' })
  }

  if (response.error) {
    return res.status(CodeServerError.InternalServerError).json(response.error)
  }

  return res.status(CodeSuccess.OK).json(response.data)
}

async function getTopics(req: NextApiRequest) {
  const {
    qtdTopics = 20,
    orderBy = 'created_at',
    startTopic = 0,
  } = req.query as ListAllTopicsModel

  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .order(`${orderBy}`, { ascending: false })
    .range(startTopic, startTopic + qtdTopics)

  return { data, error }
}
async function createTopic(req: NextApiRequest) {
  const { title, content, user_id } = req.body as CreateTopicModel

  const { data, error } = await supabase.from('topics').insert([
    {
      title: title,
      content: content,
      user_id: user_id,
    },
  ])

  return { data, error }
}
