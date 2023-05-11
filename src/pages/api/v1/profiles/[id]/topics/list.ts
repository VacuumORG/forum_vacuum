import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '~/lib/authGuard'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { UserIdModel } from '~/models/profile'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const resolved = await auth(_req, res, 'GET')
  if (!resolved) return

  const { id } = _req.query as unknown as UserIdModel
  if (!id || id != resolved.user!.id)
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'Bad Request' })

  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .eq('user_id', id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json({
      message: error.message,
    })
  }

  const response = {
    token: {
      user_id: resolved.user!.id,
      refresh_token: resolved.session!.refresh_token,
    },
    data,
  }
  return res.status(CodeSuccess.OK).json(response)
}
