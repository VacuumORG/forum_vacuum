import api from '../api'

interface Profile {
  email: string
  password: string
  name: string
}

export const createProfile = async (profile: Profile): Promise<Profile> => {
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
  const response = await api.get(`/profiles/${id}:profile`)
  return response.data
}
