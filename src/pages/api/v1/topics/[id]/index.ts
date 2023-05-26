import { NextApiRequest, NextApiResponse } from 'next'
import {
  GetTopicModel,
  ListAllTopicsModel,
  TopicModel,
} from '../../../../../../models/topic'
import {
  CodeClientError,
  CodeServerError,
  CodeSuccess,
} from '../../../../../../lib/statusCode'
import { supabase } from '../../../../../../lib/connection'
import { UUID } from 'crypto'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = _req.query as unknown as GetTopicModel

  let response
  switch (_req.method) {
    case 'GET':
      response = await getTopicById(_req, id)
      break

    case 'DELETE':
      response = await deleteTopicById(_req, id)
      break

    default:
      return res
        .status(CodeClientError.MethodNotAllowed)
        .json({ message: 'Method is not allowed' })
  }

  if (response.error) {
    return res.status(CodeServerError.InternalServerError).json(response.error)
  }

  return res.status(CodeSuccess.OK).json(response.data)
}

async function getTopicById(req: NextApiRequest, id: UUID) {
  const { data, error } = await supabase.from('topics').select().eq('id', id)

  return { data, error }
}

async function deleteTopicById(req: NextApiRequest, id: UUID) {
  const { data, error } = await supabase.from('topics').delete().eq('id', id)

  return { data, error }
}
