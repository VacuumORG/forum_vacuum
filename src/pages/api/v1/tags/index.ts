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

  const { data: tags, error } = await supabase.from('tags').select('id, name')

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }
  return res.status(CodeSuccess.OK).json(tags)
}
