import { FunctionComponent, LiHTMLAttributes } from 'react'

interface TagsInHighProps extends LiHTMLAttributes<Element> {
  titleTag?: string
  descriptionTag?: string
  icon?: JSX.Element
  lengthPostWithTag?: number
  selected: boolean
}

const TagsInHigh: FunctionComponent<TagsInHighProps> = ({
  titleTag,
  descriptionTag,
  icon,
  lengthPostWithTag,
  selected,
}: TagsInHighProps) => {
  lengthPostWithTag = lengthPostWithTag ?? 0
  return (
    <div
      className={
        selected
          ? 'tagActive'
          : 'flex gap-[13px] rounded-md p-2 items-center justify-start cursor-pointer tag hover:bg-g08'
      }
    >
      {icon}
      <div className="flex flex-col gap-[0.2rem]">
        <h1 className="leading-[15.85px] font-bold text-[13px] tracking-wider">
          {titleTag}
        </h1>
        <p className="font-normal text-[9px] leading-[12px] text-g09 tracking-tight">
          {descriptionTag
            ? `${descriptionTag}`
            : `${lengthPostWithTag} postagens com a tag`}
        </p>
      </div>
    </div>
  )
}

export default TagsInHigh
