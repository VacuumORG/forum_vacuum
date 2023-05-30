import { UUID } from 'crypto'

export interface CommentCreateModel {
  content: string
  topic_id: UUID
  user_id: UUID
}

export interface CommentUpdateModel {
  content: string
}

export interface CommentModel {
  id: UUID
  created_at: string
  updated_at: string
  topic_id: UUID
  content: string
  likes: number
}
