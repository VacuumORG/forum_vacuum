import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { data: tags, error } = await supabase.from('tags').select('id, name')

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  if (error) {
    return res.status(404).json(error)
  }
  return res.status(200).json(tags)
}
