import { FunctionComponent } from 'react'

interface TagsInHighProps {
  titleTag?: string
  descriptionTag?: string
  alt?: string
  iconSelected?: boolean
  width?: number
  height?: number
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
        <span className="relative">
          {titleTag}
          {followsAmount ? (
            <div className="absolute bottom-3 text-white right-[-20px] text-xs text-center align-middle rounded-[30%] bg-purple-600 w-4 h-4">
              {followsAmount}
            </div>
          ) : null}
        </span>
        <p>{descriptionTag}</p>
      </div>
    </div>
  )
}

export default TagsInHigh
