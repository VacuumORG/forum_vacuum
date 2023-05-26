import api from '../api'

export async function getAllTags() {
  const response = await api.get('/tags')
  return response.data
}
