import { FunctionComponent } from 'react'

interface TagsInHighProps {
  titleTag?: string
  descriptionTag?: string
  iconSelected?: boolean
  icon?: JSX.Element
  followsAmount?: number
}

const TagsInHigh: FunctionComponent<TagsInHighProps> = ({
  titleTag,
  descriptionTag,
  iconSelected,
  icon,
  followsAmount,
}: TagsInHighProps) => {
  return (
    <div className="flex gap-2 rounded-md p-2 items-center justify-start cursor-pointer tag">
      {icon}
      <div>
        <span className="relative font-bold text-base leading-4">
          {titleTag}
          {followsAmount ? (
            <div className="absolute bottom-3 text-white right-[-20px] text-xs text-center align-middle rounded-[30%] bg-purple-600 w-4 h-4">
              {followsAmount}
            </div>
          ) : null}
        </span>
        <p className="font-normal text-xs leading-3 theme-color-description-tag-high">
          {descriptionTag}
        </p>
      </div>
    </div>
  )
}

export default TagsInHigh
