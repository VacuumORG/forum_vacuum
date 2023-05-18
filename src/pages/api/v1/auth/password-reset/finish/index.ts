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

  const { token, new_password } = _req.body as {
    token: string
    new_password: string
  }
  if (!token || !new_password) {
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'Token or new password is required' })
  }

  const data = await supabase.from('auth.users').select('*')

  return res.status(CodeSuccess.OK).json(data)
}
