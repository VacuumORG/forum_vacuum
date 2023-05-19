import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== 'POST') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  const { content, topic_id, user_id } = _req.body
  if (!content) {
    return { data: null, error: { message: 'You need write something' } }
  }

  const { data, error } = await supabase.from('comments').insert([
    {
      content: content,
      topic_id: topic_id,
      user_id: user_id,
    },
  ])

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }
  return res.status(CodeSuccess.Created).json(data)
}
