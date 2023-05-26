import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response;
  switch(req.method) {
    case "GET":
      response = await getTopicById(req)
    break
    default:
      return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
    break
  }

  // TODO: Check if user is authenticated with AuthGuard from lib/authGuard.ts
  // NOTE: The AuthGuard is broken, so it is not being used.

  // TODO: Specify which information to fetch for each post on this route.

  if (response.error) {
    return res.status(CodeServerError.InternalServerError).json(response.error)
  }

  return res.status(CodeSuccess.OK).json(response.data)
}

async function getTopicById(req: NextApiRequest){
  const { data, error } = await supabase
    .from('profiles')
    .select(
      'id, name, topics (id, title, content, views, likes), comments (id, content, likes)'
    )
    .eq('id', req.query.id)

  return {data, error}
}
