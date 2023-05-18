import { UUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { GetTopicModel } from '~/models/topic'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  let response

  const { id } = _req.query as unknown as GetTopicModel

  switch (_req.method) {
    case 'PATCH':
      response = await updateLikes(res, id)
      break

    default:
      return res
        .status(CodeClientError.MethodNotAllowed)
        .json({ message: 'Method not allowed' })
  }
}

async function getTopicById(id: UUID): Promise<{ data: any; error: any }> {
  const { data, error } = await supabase
    .from('topics')
    .select('id, likes')
    .eq('id', id)
    .single()
  return { data, error }
}

async function updateLikes(res: NextApiResponse, id: UUID) {
  const { data } = await getTopicById(id)
  const update_likes = data.likes + 1
  const { error: updateError } = await supabase
    .from('topics')
    .update({ likes: update_likes })
    .eq('id', id)

  if (updateError) {
    return res.status(CodeServerError.InternalServerError).json(updateError)
  }

  return res.status(CodeSuccess.OK).json({
    id: data.id,
    likes: update_likes,
  })
}
