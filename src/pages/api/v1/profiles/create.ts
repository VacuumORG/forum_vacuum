import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { TokenResponseModel } from '~/models/auth'
import { UserCreateModel } from '~/models/profile'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, name } = _req.body as unknown as UserCreateModel
  if (!email || !password || !name) {
    return res.status(CodeClientError.BadRequest).json({
      message: 'Bad Request',
    })
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  })

  if (error) {
    return res.status(CodeServerError.InternalServerError).json({
      message: error.message,
    })
  }

  const response = {
    token: {
      user_id: data.user!.id,
      refresh_token: data.session!.refresh_token,
      access_token: data.session!.access_token,
      token_type: data.session!.token_type,
    },
  } as TokenResponseModel
  return res.status(CodeSuccess.OK).json(response)
}
