import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from './db'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: users, error } = await supabase.from('users').select('*')

  if (error) {
    res.json(error)
  }

  return res.json(users)
}
