import api from '../api'

export async function getCountViewsTopic(id: number) {
  const response = await api.get(`/topics/${id}/views`)
  return response.data
}

export async function updateViewsTopic(id: number) {
  const response = await api.patch(`/topics/${id}/views`)
  return response.data
}
