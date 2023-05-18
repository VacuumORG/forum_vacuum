import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { LoginModel, TokenResponseModel } from '~/models/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(CodeClientError.MethodNotAllowed).json({
      message: 'Method not allowed',
    })
  }

  const { email, password } = req.body as LoginModel

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  const response = {
    token: {
      access_token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
      token_type: data.session?.token_type,
      user_id: data.user?.id,
    },
  } as TokenResponseModel

  return res.status(CodeSuccess.OK).json(response)
}
