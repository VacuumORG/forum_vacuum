import { UserCreateModel } from '~/models/profile'
import api from '../api'

export const createProfile = async (
  profile: UserCreateModel
): Promise<UserCreateModel> => {
  try {
    const response = await api.post('/profiles', profile)
    return response.data
  } catch (error) {
    throw new Error('Não foi possível criar a conta')
  }
}

export async function getProfiles() {
  const response = await api.get('/profiles')
  return response.data
}

export async function getProfileById(id: number) {
  const response = await api.get(`/profiles/${id}`)
  return response.data
}

//Profile/Comments /Get Post by User Id
export async function GetPostbyUserId(id: number) {
  const response = await api.get(`/profiles/${id}/comments`)
  return response.data
}

//Profile/Topics /Get Topics by User Id
export async function GetTopicsbyUserId(id: number) {
  const response = await api.get(`/profiles/${id}/topics`)
  return response.data
}
