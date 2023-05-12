import { UUID } from 'crypto'

export interface UserProfileModel {
  name: string
  email: string
  password: string
  avatar_url: string
}

export interface UserIdModel {
  id: UUID
}

export interface UserCreateModel {
  email: string
  password: string
  name: string
}
