import { FunctionComponent } from 'react'
import TagsInHigh from '@/components/FilterByTagInHigh/TagsInHigh'

interface TagProps {
  nameTag: string
}

const Tag: FunctionComponent<TagProps> = ({ nameTag }) => {
  return (
    <>
      <TagsInHigh titleTag={`#${nameTag}`} selected={false} />
    </>
  )
}

export default Tag
