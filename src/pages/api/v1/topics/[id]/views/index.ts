import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'
import { UUID } from 'crypto'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response;

  const { id } = req.query as { id: UUID }

  switch(req.method) {
    case "PATCH":
      response = await updateViewsInTopic(id)
      break
    case "GET":
      response = await getCountViewsInTopic(id)
      break

    default:
      return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  // TODO: Check if user is authenticated with AuthGuard from lib/authGuard.ts
  // NOTE: The AuthGuard is broken, so it is not being used.

  // TODO: Specify which information to fetch for each post on this route.
  

    if (response.error) {
      return res.status(CodeServerError.InternalServerError).json(response.error)
    }

    return res.status(CodeSuccess.OK).json(response.data)
}

async function updateViewsInTopic(id: UUID): Promise<{data: any, error: any}> {
  const { data: topicsN, error: topicsError } = await supabase
    .from('topics')
    .select('views')
    .eq('id', id)
    .single()

  let newNumberViews: number

  if (topicsError) {
    return { data:topicsN, error: topicsError  }
  }
  const currentViews = topicsN.views

    newNumberViews = currentViews + 1

    const { data, error } = await supabase
      .from('topics')
      .update({ views: newNumberViews })
      .eq('id', id)

    return {data: newNumberViews, error}
}

async function getCountViewsInTopic(id: UUID) {
  const { data, error } = await supabase
    .from('topics')
    .select('views')
    .eq('id', id)
    .single()

  return {data: data?.views, error}
}
