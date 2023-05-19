import { FunctionComponent } from 'react'

import UserAvatar from '../UserAvatar'
import UpvoteDownvote from '../UpvoteDownvote'
import UserImg from '../../../public/user_avatar.png'

interface CommentSessionsProps {
  author: string
  content: string
  hora: string
  id: string
  like: number
}

const CommentsSessions: FunctionComponent<CommentSessionsProps> = ({
  id,
  author,
  hora,
  content,
  like,
}) => {
  return (
    <article className="flex items-start mb-4">
      <div className="mr-4">
        <UserAvatar img={UserImg} alf="Thaissa" />
      </div>

      <div className="flex flex-col">
        <span className="font-medium mb-1">{author}</span>
        <span className="text-gray-400 text-sm leading-3">{hora}</span>
        <p className="bg-g08 rounded-md mt-5 py-3 px-9 shadow-2xl max-w-4xl">
          {content}
        </p>
        <UpvoteDownvote like={like} />
      </div>
    </article>
  )
}

export default CommentsSessions
