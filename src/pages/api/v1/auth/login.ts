import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { LoginModel } from '~/models/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body as LoginModel

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

  return res.status(CodeSuccess.OK).json(data)
}
