import { UUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = _req.query as { id: UUID }

  if (_req.method !== 'GET') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  return res.status(CodeSuccess.OK).json(data)
}
