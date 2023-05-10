import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from './connection'
import { httpVerb, httpVerbGuard } from './httpVerbGuard'
import { CodeClientError } from './statusCode'

export async function auth(
  req: NextApiRequest,
  res: NextApiResponse,
  ...httpVerbs: httpVerb[]
) {
  const released = httpVerbGuard(req, res, ...httpVerbs)
  if (!released) return

  let token = req.body.session as {
    refresh_token: string
  }

  if (!token) {
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'BadRequest' })
  }

  const {
    data: { user, session },
    error,
  } = await supabase.auth.refreshSession(token)

  if (error) {
    return res
      .status(CodeClientError.Unauthorized)
      .json({ message: 'Unauthorized' })
  }

  return { session, user }
}
