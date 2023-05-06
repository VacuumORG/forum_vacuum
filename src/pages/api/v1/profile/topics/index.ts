import { NextApiResponse, NextApiRequest } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { UserIdModel } from '~/models/profile'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != 'POST') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method is not allowed' })
  }

  // TODO: implementar a proteção com autenticação

  const { user_id } = req.body as UserIdModel

  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .eq('user_id', user_id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json({
      message: error.message,
    })
  }

  return res.status(CodeSuccess.OK).json(data)
}
