import { UUID } from 'crypto'

export interface UserProfileModel {
  name: string
  email: string
  password: string
  avatar_url: string
}

export interface UserIdModel {
  user_id: UUID
}
