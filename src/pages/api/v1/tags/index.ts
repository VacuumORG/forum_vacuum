import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '~/lib/connection'



export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  let { data: tags, error } = await supabase.from('tags').select('id, name')

  if (error) {
    res.json(error)
  }

  return res.json(tags)
}
