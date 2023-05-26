import { UUID } from 'crypto'

export interface CommentCreateModel {
  content: string
  topic_id: UUID
  user_id: UUID
}

export interface CommentUpdateModel {
  content: string
}
