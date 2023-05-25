import api from '../api'

export async function getProfiles() {
  const response = await api.get('/profiles')
  return response.data
}

export async function getProfileById(id: number) {
  const response = await api.get(`/profiles/${id}:profile`)
  return response.data
}
