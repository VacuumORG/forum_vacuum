import { NextApiResponse, NextApiRequest } from 'next'
import { supabase } from '~/lib/connection'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { data, error } = await supabase.from('categories').select('*')

  if (error) {
    return res.status(500).json(error)
  }

  return res.status(200).json(data)
}
