import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { guard } from '~/lib/httpVerbGuard'
import { CodeServerError, CodeSuccess } from '~/lib/statusCode'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const resolved = guard(_req, res, 'GET')
  if (!resolved) return

  const { data, error } = await supabase.from('profiles').select('*')

  if (error) {
    return res.status(CodeServerError.InternalServerError).json({
      message: error.message,
    })
  }

  return res.status(CodeSuccess.OK).json(data)
}
