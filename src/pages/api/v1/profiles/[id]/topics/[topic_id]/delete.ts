import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '~/lib/authGuard'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { TokenResponseModel } from '~/models/auth'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const resolved = await auth(_req, res, 'DELETE')
  if (!resolved) return

  const { id, topic_id } = _req.query as { id: string; topic_id: string }
  if (!id || id != resolved.user!.id || !topic_id)
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'Bad Request' })

  const { data: _, error } = await supabase
    .from('topics')
    .delete()
    .eq('id', topic_id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json({
      message: error.message,
    })
  }

  const response = {
    token: {
      user_id: resolved.user!.id,
      refresh_token: resolved.session!.refresh_token,
      access_token: resolved.session!.access_token,
      token_type: resolved.session!.token_type,
    },
  } as TokenResponseModel
  return res.status(CodeSuccess.OK).json(response)
}
