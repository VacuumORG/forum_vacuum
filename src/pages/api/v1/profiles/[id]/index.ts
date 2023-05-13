import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

/**
 * Um manipulador de rota da API que busca informações para um perfil específico
 * identificado pelo parâmetro de consulta id fornecido. Somente solicitações GET são permitidas.
 *
 * @param {NextApiRequest} req - Objeto da solicitação.
 * @param {NextApiResponse} res - Objeto de resposta.
 * @return {Promise<void>} Uma promessa que resolve quando a função termina de executar.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  // TODO: Check if user is authenticated with AuthGuard from lib/authGuard.ts
  // NOTE: The AuthGuard is broken, so it is not being used.

  // TODO: Specify which information to fetch for each post on this route.

  const { data, error } = await supabase
    .from('profiles')
    .select('id, name, topics (id, title, content, views, likes)')
    .eq('id', req.query.id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  return res.status(CodeSuccess.OK).json(data)
}
