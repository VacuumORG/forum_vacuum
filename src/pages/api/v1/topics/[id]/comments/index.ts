import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== 'GET') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  // TODO: Check if user is authenticated with AuthGuard from lib/authGuard.ts
  // NOTE: The AuthGuard is broken, so it is not being used.

  // TODO: Specify which information to fetch for each post on this route.

  const { data, error } = await supabase
    .from('comments')
    .select('id, created_at, updated_at, topic_id, content, likes')
    .eq('topic_id', _req.query.id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  return res.status(CodeSuccess.OK).json(data)
}
