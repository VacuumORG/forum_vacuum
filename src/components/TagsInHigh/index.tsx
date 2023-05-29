import { FunctionComponent } from 'react'

interface TagsInHighProps {
  titleTag?: string
  descriptionTag?: string
  icon?: JSX.Element
  lengthPostWithTag?: number
}

const TagsInHigh: FunctionComponent<TagsInHighProps> = ({
  titleTag,
  descriptionTag,
  icon,
  lengthPostWithTag,
}: TagsInHighProps) => {
  lengthPostWithTag = lengthPostWithTag ?? 0
  return (
    <div className="flex gap-2 rounded-md p-2 items-center justify-start cursor-pointer tag theme-icon-and-container-selected-tags-in-high">
      {icon}
      <div>
        <h1 className="text-lg"> # {titleTag}</h1>

        <p className="text-sm leading-3 theme-color-description-tag-high"></p>
        <p className="font-normal text-xs leading-3 theme-color-description-tag-high">
          {descriptionTag
            ? `${descriptionTag}`
            : `${lengthPostWithTag} postagens com a tag`}
        </p>
      </div>
    </div>
  )
}

export default TagsInHigh
