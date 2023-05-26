import { CreateTopicModel } from '~/models/topic'
import { CommentUpdateModel } from '~/models/comments'
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
