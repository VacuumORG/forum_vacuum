import { CurrencyCircleDollar } from '@phosphor-icons/react'
import { FunctionComponent } from 'react'

interface TagsInHighProps {
  titleTag: string
  lengthPostWithTag: number
  alt: string
  iconSelected: string | number | boolean
  width?: number
  height?: number
}

const TagsInHigh: FunctionComponent<TagsInHighProps> = ({
  titleTag,
  lengthPostWithTag,
  alt,
  iconSelected,
  width = 60,
  height = 60,
}: TagsInHighProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      {iconSelected == true ? (
        <div className="flex items-center justify-center gap-5 h-16 mt-10 w-72 cursor-pointer">
          <CurrencyCircleDollar
            width={width}
            height={height}
            alt={alt}
            color="theme-color-title-tags-in-high"
            className="p-2 rounded-md theme-icon-and-container-selected-tags-in-high"
          />

          <div>
            <h1 className="text-lg theme-color-title-tags-in-high">
              {' '}
              #{titleTag}
            </h1>

            <p className="text-sm theme-color-length-post-Tag-tags-in-high">
              {' '}
              {lengthPostWithTag} postagens com a tag
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-5 h-16 rounded-md mt-10 w-72 cursor-pointer theme-icon-and-container-selected-tags-in-high">
          <CurrencyCircleDollar
            width={width}
            height={height}
            alt={alt}
            className="p-2 rounded-md theme-background-icon-and-container-selected-tags-in-high theme-selected-title-tags-in-high"
          />

          <div>
            <h1 className="text-lg theme-selected-title-tags-in-high">
              {' '}
              #{titleTag}
            </h1>

            <p className="text-sm theme-color-length-post-Tag-tags-in-high">
              {' '}
              {lengthPostWithTag} postagens com a tag
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default TagsInHigh
