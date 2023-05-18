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

  const { email } = _req.body
  if (!email) {
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'Email is required' })
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/profile/update-password',
  })

  if (error) {
    return res
      .status(CodeServerError.InternalServerError)
      .json({ message: error.message })
  }

  if (!data) {
    return res
      .status(CodeClientError.NotFound)
      .json({ message: 'User not found' })
  }

  return res.status(CodeSuccess.OK).json({ message: 'OK' })
}
