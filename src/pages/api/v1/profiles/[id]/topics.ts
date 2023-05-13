import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

/**
 * Uma função de manipulador de API que busca informações do banco de dados Supabase para um usuário específico,
 * especificado no parâmetro de consulta. Apenas permite solicitações GET.
 *
 * @param {NextApiRequest} req - A requisição HTTP recebida.
 * @param {NextApiResponse} res - A resposta HTTP.
 * @return {Promise<void>} - Uma Promessa que resolve quando a resposta foi enviada.
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
    .from('topics')
    .select(
      'id, created_at, updated_at, title, content, views, likes, tags, images, docs'
    )
    .eq('user_id', req.query.id)

  if (error) {
    return res.status(CodeServerError.InternalServerError).json(error)
  }

  return res.status(CodeSuccess.OK).json(data)
}
