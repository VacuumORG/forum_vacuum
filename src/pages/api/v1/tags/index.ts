import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { data: tags, error } = await supabase.from('tags').select('id, name')

  if (error) {
    return res.json(error)
  }

  return res.json(tags)
}
