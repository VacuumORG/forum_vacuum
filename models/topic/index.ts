import { UUID } from 'crypto'

export interface ListAllTopicsModel {
  startTopic?: number
  qtdTopics?: number
  orderBy?: string
}

export interface GetTopicModel {
  id: UUID
}

export interface TopicModel {
  id: UUID
  title: string
  content: string
  views: number
  likes: number
  created_at: string
  updated_at: string
  tags: object
  images: object
  docs: object
  user_id: UUID
}
