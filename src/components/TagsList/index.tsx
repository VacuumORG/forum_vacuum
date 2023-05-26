import { useEffect, useState } from 'react'
import Tag from './Tag'
import { axiosClient } from '@/services/axiosClient'
import { UUID } from 'crypto'

interface TagsListProps {
  list: string[]
}

type Tag = {
  id: UUID
  name: string
}

const fetchData = async (): Promise<Tag[]> => {
  const { data } = await axiosClient.get('/api/v1/tags')
  return data
}

const TagList = () => {
  const [tags, setTags] = useState<Tag[] | null>(null)

  useEffect(() => {
    const getTags = async () => {
      try {
        const result = await fetchData()

        setTags(result)
      } catch (err) {
        console.log(err)
      }
    }

    getTags()
  }, [])
  return (
    <li>
      {tags?.map((tag: Tag) => (
        <Tag key={tag.id} nameTag={tag.name} />
      ))}
    </li>
  )
}

export default TagList
