import { FunctionComponent, useState } from 'react'
import { ArrowUp, ArrowDown, Chat } from '@phosphor-icons/react'

interface UpvoteDownvoteProps {
  like: number
}

const UpvoteDownvote: FunctionComponent<UpvoteDownvoteProps> = ({ like }) => {
  const [likes, setLikes] = useState(like)
  const [isLiked, setIsLiked] = useState<Boolean>(false)
  const [isDesliked, setIsDesliked] = useState<Boolean>(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else if (!isLiked && isDesliked) {
      setLikes(likes + 2)
      setIsLiked(true)
      setIsDesliked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
      setIsDesliked(false)
    }
  }
  const handleDeslike = () => {
    if (isDesliked) {
      setLikes(likes + 1)
      setIsDesliked(false)
    } else if (!isDesliked && isLiked) {
      setLikes(likes - 2)
      setIsLiked(false)
      setIsDesliked(true)
    } else {
      setLikes(likes - 1)
      setIsDesliked(true)
      setIsLiked(false)
    }
  }

  return (
    <section className="flex row m-2 gap-2 items-center">
      <button
        onClick={handleLike}
        className={`border-2 ${
          isLiked ? 'border-purple-600' : 'border-gray-400'
        } ${
          isLiked ? 'text-purple-600' : ''
        } rounded text-xs py-1 px-2 hover:text-purple-600`}
      >
        <ArrowUp />
      </button>
      <span className="flex justify-center items-center p-2 w-12 text-xs text-gray-300 font-sans font-medium rounded-2xl bg-g08">
        {likes}
      </span>
      <button
        onClick={handleDeslike}
        className={`border-2 ${
          isDesliked ? 'border-purple-600' : 'border-gray-400'
        } ${
          isDesliked ? 'text-purple-600' : ''
        } rounded text-xs py-1 px-2 hover:text-purple-600`}
      >
        <ArrowDown />
      </button>
    </section>
  )
}

export default UpvoteDownvote
