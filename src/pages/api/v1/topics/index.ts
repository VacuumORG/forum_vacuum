import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { ListAllTopicsModel } from '~/models/topic'

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

async function getTopics(req: NextApiRequest){
  const {
    qtdTopics = 20,
    orderBy = 'created_at',
    startTopic = 0,
  } = req.query as ListAllTopicsModel

  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .order(`${orderBy}`, { ascending: true })
    .range(startTopic, startTopic + qtdTopics - 1)

  return {data, error}
}
async function createTopic(req: NextApiRequest){
}
