import { NextApiRequest, NextApiResponse } from 'next'
import { TokenResponseModel } from '~/models/auth'
import { supabase } from './connection'
import { CodeClientError } from './statusCode'

export async function auth(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'BadRequest' })
  }

  const {
    data: { user, session },
    error,
  } = await supabase.auth.refreshSession({
    refresh_token: token,
  })

  if (error) {
    return res
      .status(CodeClientError.Unauthorized)
      .json({ message: 'Unauthorized' })
  }

  return {
    token: {
      user_id: user!.id,
      refresh_token: session!.refresh_token,
      access_token: session!.access_token,
      token_type: session!.token_type,
    },
  } as TokenResponseModel
}
