import { CommentCreateModel } from '~/models/comments'
import { CommentUpdateModel } from '~/models/comments'
import api from '../api'

export const createComment = async (
  commentCreateBody: CommentCreateModel
): Promise<null> => {
  try {
    await api.post('/comments', commentCreateBody)
    return null
  } catch (error) {
    throw new Error('Não foi possível criar o comentário')
  }
}

export async function getCommentsById(id: number) {
  const response = await api.get(`/comments/${id}`)
  return response.data
}

export const updateCommentById = async (
  id: number,
  commentUpdateBody: CommentUpdateModel
): Promise<null> => {
  try {
    const response = await api.patch(`/comments/${id}`, commentUpdateBody)
    return response.data
  } catch (error) {
    throw new Error('Não foi possível atualizar o comentário')
  }
}

export async function deleteComment(id: number) {
  try {
    await api.delete(`/comments/${id}`)
    return null
  } catch (error) {
    throw new Error('Não foi possível deletar o comentário')
  }
}
