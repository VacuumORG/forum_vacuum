import { NextApiResponse, NextApiRequest } from 'next'
import { supabase } from '../../../../lib/connection'

type LoginBody = {
  email: string
  password: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password }: LoginBody = req.body
  if (!email || !password) {
    return res.status(400).json({
      message: 'Missing email or password',
    })
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (!error) {
    return res.status(200).json({ data })
  }

  return res.status(error.status!).json({
    type: error.name,
    message: error.message,
  })
}
