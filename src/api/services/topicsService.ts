import { CreateTopicModel } from '~/models/topic'
import api from '../api'

export const createTopic = async (
  topicCreateBody: CreateTopicModel
): Promise<null> => {
  try {
    await api.post('/topics', topicCreateBody)
    return null
  } catch (error) {
    throw new Error('Não foi possível criar o tópico')
  }
}

export async function getTopics(startTopic: number) {
  const response = await api.get(`/topics/?startTopic=${startTopic}`)
  return response.data
}

export async function getTopicById(id: number) {
  const response = await api.get(`/topics/${id}`)
  return response.data
}

export async function deleteTopic(id: number) {
  try {
    await api.delete(`/topics/${id}`)
    return null
  } catch (error) {
    throw new Error('Não foi possível deletar o tópico')
  }
}
