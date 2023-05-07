import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { TopicModel } from '~/models/topics/TopicModel'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    qtdTopics = 20,
    orderBy = 'created_at',
    startTopic = 0,
  } = _req.query as TopicModel

  if (_req.method != 'GET') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method is not allowed' })
  }
  const { data: topics, error } = await supabase
    .from('topics')
    .select('*')
    .order(`${orderBy}`, { ascending: true })
    .range(startTopic, startTopic + qtdTopics - 1)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  return res.status(CodeSuccess.OK).json(topics)
}
