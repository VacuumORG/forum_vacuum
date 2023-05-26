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
  return (
    <div className="flex gap-2 rounded-md p-2 items-center justify-start cursor-pointer tag theme-icon-and-container-selected-tags-in-high">
      <div className="flex items-center justify-center gap-5 h-16 mt-10 w-72 cursor-pointer relative font-bold text-base leading-4 theme-icon-and-container-selected-tags-in-high">
        {icon}

        <div>
          <h1 className="text-lg"> # {titleTag}</h1>

          <p className="text-sm leading-3 theme-color-description-tag-high">
            {' '}
            {lengthPostWithTag} postagens com a tag
          </p>
        </div>
      </div>
    </div>
  )
}

export default TagsInHigh
