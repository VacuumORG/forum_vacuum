import { UUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = _req.query as { id: UUID }

  let response

  switch (_req.method) {
    case 'GET':
      response = await getCommentInformation(_req, id)
      break

    case 'PATCH':
      response = await editComment(_req, id)
      break

    case 'DELETE':
      response = await deleteComment(_req, id)
      break

    default:
      return res
        .status(CodeClientError.MethodNotAllowed)
        .json({ message: 'Method not allowed' })
  }

  const { data, error } = response

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  return res.status(CodeSuccess.OK).json(data)
}

async function getCommentInformation(_req: NextApiRequest, id: UUID) {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('id', id)
  return { data, error }
}

async function editComment(
  _req: NextApiRequest,
  id: UUID
): Promise<{ data: any; error: any }> {
  // TODO: Atualizar essa rota para ter proteção do AuthGuard.
  const { content } = _req.body
  const { data, error } = await supabase
    .from('comments')
    .update({ content: content })
    .eq('id', id)

  return { data, error }
}

async function deleteComment(
  _req: NextApiRequest,
  id: UUID
): Promise<{ data: any; error: any }> {
  // TODO: Atualizar essa rota para ter proteção do AuthGuard.

  const { data, error } = await supabase.from('comments').delete().eq('id', id)

  return { data, error }
}
