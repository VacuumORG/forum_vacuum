export interface GetATagModel {
  id: number
  name: string
}

export interface ListTagsModel {
  tags: GetATagModel[]
}
