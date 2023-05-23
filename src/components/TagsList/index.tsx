import { FunctionComponent } from 'react'
import Tag from '../Tag'

interface TagsListProps {
  list: string[]
}

const TagList: FunctionComponent<TagsListProps> = ({ list }) => {
  return (
    <li>
      {list.map((tag) => (
        <Tag key={tag} nameTag={tag} />
      ))}
    </li>
  )
}

export default TagList
