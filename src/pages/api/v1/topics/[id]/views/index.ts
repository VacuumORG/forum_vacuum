import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { UUID } from 'crypto'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  // TODO: Check if user is authenticated with AuthGuard from lib/authGuard.ts
  // NOTE: The AuthGuard is broken, so it is not being used.

  // TODO: Specify which information to fetch for each post on this route.
  const { id } = req.query as { id: UUID }

  const { data: topicsN, error: topicsError } = await supabase
    .from('topics')
    .select('views')
    .eq('id', id)

  let newNumberViews: number

  if (topicsError) {
    // Tratamento do Erro
  } else if (topicsN && topicsN.length > 0) {
    const currentViews = topicsN[0].views

    newNumberViews = currentViews + 1

    const { data, error } = await supabase
      .from('topics')
      .update({ views: newNumberViews })
      .eq('id', id)

    if (error) {
      return res.status(CodeServerError.InternalServerError).json(error)
    }

    return res.status(CodeSuccess.OK).json(data)
  }
}
