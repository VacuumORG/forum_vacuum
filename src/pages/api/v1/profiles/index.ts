import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeServerError, CodeSuccess } from '~/lib/statusCode'

const DATA_RESULT_PER_PAGE = 25

/**
 * Uma função assíncrona que lida com as requisições HTTP para criar e listar perfis.
 *
 * @param {NextApiRequest} req - O objeto de requisição HTTP de entrada.
 * @param {NextApiResponse} res - O objeto de resposta HTTP de saída.
 * @return {Promise<void>} - Uma Promise que resolve quando a função termina de manipular a requisição.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response

  switch (req.method) {
    case 'GET':
      response = await listProfiles(req)
      break

    case 'POST':
      response = await createProfile(req)
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

/**
 * Recupera uma lista de perfis com suporte de paginação.
 *
 * @param {NextApiRequest} _req - O objeto de requisição.
 * @return {Promise<{ data: any; error: any }>} - Um objeto contendo a lista de perfis e quaisquer erros que ocorreram.
 */
async function listProfiles(
  _req: NextApiRequest
): Promise<{ data: any; error: any }> {
  const offset = calculatePaginationOffset(_req)

  const { data, error } = await supabase
    .from('profiles')
    .select('id, name')
    .range(offset, offset + DATA_RESULT_PER_PAGE)

  return { data, error }
}

/**
 * Calcula o deslocamento de paginação com base no número da página solicitada.
 *
 * @param {NextApiRequest} request - O objeto de requisição contendo o parâmetro de consulta da página.
 * @return {number} O deslocamento de paginação calculado.
 */
function calculatePaginationOffset(request: NextApiRequest): number {
  const page = parseInt(request.query.page as string) || 0
  if (page == 0) return 0

  // page = 1 -> offset = 25 +1
  // page = 2 -> offset = 50 +1
  // page = 3 -> offset = 75 +1

  return page * 25 + 1
}

/**
 * Cria um perfil de usuário usando e-mail, senha e nome fornecidos no corpo da solicitação HTTP.
 *
 * @async
 * @param {NextApiRequest} _req - O objeto de solicitação HTTP.
 * @return {Promise<{ data: any; error: any }>} Um objeto com as propriedades `data` e `error`.
 * A propriedade `data` contém os dados do usuário registrado e a propriedade `error` contém um objeto de erro se o registro falhar.
 */
async function createProfile(
  _req: NextApiRequest
): Promise<{ data: any; error: any }> {
  const { email, password, name } = _req.body
  if (!email || !password || !name) {
    return { data: null, error: { message: 'Missing fields' } }
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  })

  return { data, error }
}
