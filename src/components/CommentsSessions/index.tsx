import { FunctionComponent, useState } from 'react'

import UserAvatar from '../UserAvatar'
import UpvoteDownvote from '../UpvoteDownvote'
import UserImg from '../../../public/user_avatar.png'
import { Chat } from '@phosphor-icons/react'
import Markdown from '../Markdown'

interface CommentSessionsProps {
  author: string
  content: string
  hora: string
  id: string
  like: number
  user: string
  userImage: StaticImageData
}

const CommentsSessions: FunctionComponent<CommentSessionsProps> = ({
  id,
  author,
  hora,
  content,
  like,
  user,
  userImage,
}) => {

  const [response, setResponse] = useState<boolean>(false)

  const operator = response == true ? "response-active" : "response-disabled"

  return (
    <article className="flex flex-col items-start mb-4">
      <div className="flex">
        <div className="mr-4">
          <UserAvatar img={UserImg} alf="Thaissa" />
        </div>

        <div className="flex flex-col">
          <span className="font-medium mb-1">{author}</span>
          <span className="text-gray-400 text-sm leading-3">{hora}</span>
          <p className="bg-g08 rounded-md mt-5 py-3 px-9 shadow-2xl max-w-4xl">
            {content}
          </p>
          <div className="flex items-center">
            <UpvoteDownvote like={like} />
            <Chat onClick={() => {setResponse(oldRes => !oldRes)}} size={32} className={`${operator} cursor-pointer response-chat`} />
          </div>
        </div>
        
      </div>

      <Markdown response={response} userAvatar={userImage} userName={user} />

    </article>
  )
}

export default CommentsSessions
