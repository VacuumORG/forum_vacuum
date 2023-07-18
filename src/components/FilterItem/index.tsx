import { FunctionComponent } from 'react'
import { useFilter } from '@/hooks/useFilter'

interface FilterItemProps {
  titleTag?: string
  descriptionTag?: string
  icon?: JSX.Element
  lengthPostWithTag?: number
}

const FilterItem: FunctionComponent<FilterItemProps> = ({
  titleTag,
  descriptionTag,
  icon,
  lengthPostWithTag,
}: FilterItemProps) => {
  lengthPostWithTag = lengthPostWithTag ?? 0
  const { mainFilter, setMainFilter } = useFilter()

  const handleChange = (value: string) => {
    if (mainFilter === value) {
      setMainFilter('')
    } else {
      setMainFilter(value)
    }
  }

  return (
    <div
      onClick={() => handleChange(titleTag || '')}
      className={`flex gap-[13px] rounded-md p-2 items-center justify-start cursor-pointer ${
        titleTag === mainFilter ? 'tagActive' : 'tag'
      } hover:bg-g08`}
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

export default FilterItem
