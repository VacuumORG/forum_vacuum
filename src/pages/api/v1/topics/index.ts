import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
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
    return res.status(405).json({ message: 'Method is not allowed' })
  }
  const { data: topics, error } = await supabase
    .from('topics')
    .select('*')
    .order(`${orderBy}`, { ascending: true })
    .range(startTopic, startTopic + qtdTopics - 1)

  if (error) {
    return res.json(error)
  }

  return res.json(topics)
}
