import { FunctionComponent, ReactNode } from 'react'
import TagsInHigh from './TagsInHigh'
import { useFilter } from '@/hooks/useFilter'
import { getIconByName } from '../Icons/getIconByName'

interface TagsInHigh {
  id?: string
  name?: string
  descriptionTag?: string
  icon?: ReactNode
  lengthPostWithTag?: number
}

interface FilterByPopularTagProps {
  tags?: TagsInHigh[]
}

const FilterByPopularTag: FunctionComponent<FilterByPopularTagProps> = ({
  tags,
}) => {
  const { popularTag, setPopularTag } = useFilter()

  const handleChangeTag = (value: string) => {
    if (value === popularTag) {
      setPopularTag('')
    } else {
      setPopularTag(value)
    }
  }

  return (
    <ul className="flex flex-col gap-5 bg-g06 py-3 px-2 rounded-md">
      <li className="mt-1 ml-3">
        <h2 className="font-bold leading-4 text-sm tracking-wider">
          tags populares
        </h2>
      </li>

      {tags?.map((tag) => {
        const icon = getIconByName(tag.name!)
        return (
          <li key={tag.id} onClick={() => handleChangeTag(tag.name!)}>
            <TagsInHigh
              key={tag.id}
              icon={icon}
              titleTag={tag.name}
              selected={popularTag === tag.name}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default FilterByPopularTag
