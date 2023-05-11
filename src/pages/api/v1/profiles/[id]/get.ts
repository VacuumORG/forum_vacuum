import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '~/lib/authGuard'
import { CodeSuccess } from '~/lib/statusCode'
import { TokenResponseModel } from '~/models/auth'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const resolved = await auth(_req, res, 'GET')
  if (!resolved) return

  const response = {
    token: {
      user_id: resolved.user!.id,
      refresh_token: resolved.session!.refresh_token,
      access_token: resolved.session!.access_token,
      token_type: resolved.session!.token_type,
    },
  } as TokenResponseModel
  return res.status(CodeSuccess.OK).json({ ...response, user: resolved.user! })
}
