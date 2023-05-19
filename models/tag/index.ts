import { UUID } from 'crypto'

export interface GetATagModel {
  id: UUID
  name: string
}

export interface ListTagsModel {
  tags: GetATagModel[]
}
