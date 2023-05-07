import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { GetTopicModel } from '~/models/topic'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = _req.query as unknown as GetTopicModel

  if (_req.method != 'GET') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method is not allowed' })
  }

  const { data, error } = await supabase.from('topics').select().eq('id', id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  return res.status(CodeSuccess.OK).json(data)
}
