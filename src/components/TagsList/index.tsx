import { FunctionComponent } from 'react'
import Tag from '../Tag'

interface TagsListProps {
  tagsList: string[]
}

const TagList: FunctionComponent<TagsListProps> = ({ tagsList }) => {
  return (
    <li>
      {tagsList.map((tag) => (
        <Tag nameTag={tag} />
      ))}
    </li>
  )
}

export default TagList
