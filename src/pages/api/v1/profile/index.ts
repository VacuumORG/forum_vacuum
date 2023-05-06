import { NextApiResponse, NextApiRequest } from 'next'
import { supabase } from '~/lib/connection'
import { CodeClientError, CodeSuccess } from '~/lib/statusCode'
import { UserProfileModel } from '~/models/profile'

export default async function createUserProfile(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != 'POST') {
    return res
      .status(CodeClientError.MethodNotAllowed)
      .json({ message: 'Method not allowed' })
  }

  const {
    name,
    email,
    password,
    avatar_url = null,
  } = req.body as UserProfileModel

  if (!name || !email || !password) {
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'Bad request' })
  }

  // FIX-ME: Como será o tramite da URL de Avatar, no momento, estou recebendo uma url mesmo.
  const URL_WITH_IMG_FILE_REG = /(https?:)(\/\/)?(.*)[.](.*)[.](jpg|png)/gm
  if (avatar_url && !URL_WITH_IMG_FILE_REG.test(avatar_url)) {
    return res
      .status(CodeClientError.BadRequest)
      .json({ message: 'Bad request' })
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        avatar_url,
      },
    },
  })

  if (error) {
    return res.status(error.status!).json({
      message: error.message,
    })
  }

  return res.status(CodeSuccess.OK).json({
    data,
  })
}
