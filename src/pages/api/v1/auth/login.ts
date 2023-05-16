import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { LoginModel, TokenResponseModel } from '~/models/auth'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== 'POST') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  const { email, password } = _req.body as LoginModel

  if (!email || !password) {
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'Bad request' })
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  const token = {
    user_id: data.user!.id,
    refresh_token: data.session!.refresh_token,
    access_token: data.session!.access_token,
    token_type: data.session!.token_type,
  } as unknown as TokenResponseModel

  return res.status(CodeSuccess.OK).json(token)
}
