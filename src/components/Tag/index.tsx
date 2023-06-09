import { FunctionComponent } from 'react'
import TagsInHigh from '../TagsInHigh'

interface TagProps {
  nameTag: string
}

const Tag: FunctionComponent<TagProps> = ({ nameTag }) => {
  return (
    <>
      <TagsInHigh titleTag={`#${nameTag}`} />
    </>
  )
}

export default Tag
