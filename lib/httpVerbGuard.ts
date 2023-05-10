import { NextApiRequest, NextApiResponse } from 'next'
import { CodeClientError } from './statusCode'

export type httpVerb =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH'

export function httpVerbGuard(
  req: NextApiRequest,
  res: NextApiResponse,
  ...httpVerbs: httpVerb[]
) {
  // Verificando se a requisição está dentro do limite de httpVerbs
  if (httpVerbs && !httpVerbs.includes(req.method! as httpVerb)) {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  return { res }
}
