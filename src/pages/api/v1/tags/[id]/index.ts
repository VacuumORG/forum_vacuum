import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { GetATagModel } from '~/models/tag'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== 'GET') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  const { id: tagId } = _req.query as unknown as GetATagModel

  const { data: tags, error } = await supabase.from('tags').select('id, name').eq('id', tagId!)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }
  return res.status(CodeSuccess.OK).json(tags[0])
}
