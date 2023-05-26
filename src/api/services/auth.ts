import { LoginModel } from '~/models/auth'
import api from '../api'
import { setCookie } from 'cookies-next'

export const login = async (loginModel: LoginModel): Promise<string> => {
  try {
    const response = await api.post('/auth/login/', loginModel)
    const userData = response.data
    const token = userData.token
    setCookie('token', token)
    return token
  } catch (error) {
    throw new Error('Usuário ou senha inválidos')
  }
}
