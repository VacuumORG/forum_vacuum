import { NextApiResponse, NextApiRequest } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { UserIdModel } from '~/models/profile'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method != 'GET') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method is not allowed' })
  }

  // TODO: implementar a proteção com autenticação

  const { id } = _req.query as unknown as UserIdModel

  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .eq('user_id', id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json({
      message: error.message,
    })
  }

  return res.status(CodeSuccess.OK).json(data)
}
