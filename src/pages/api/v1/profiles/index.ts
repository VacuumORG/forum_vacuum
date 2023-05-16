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

function calculatePaginationOffset(request: NextApiRequest): number {
  const page = parseInt(request.query.page as string) || 0
  if (page == 0) return 0
  return page * 25 + 1
}

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
