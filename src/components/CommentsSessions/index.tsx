import { FunctionComponent, useState } from 'react'
import {
  updateCommentById,
  deleteComment,
} from '@/api/services/commentsService'
import { UUID } from 'crypto'
import UserAvatar from '../UserAvatar'
import UpvoteDownvote from '../UpvoteDownvote'
import { Chat, DotsThree } from '@phosphor-icons/react'
import Markdown from '../Markdown'
import { CommentUpdateModel } from '~/models/comments'

interface CommentSessionsProps {
  author: string
  content: string
  hora: string
  id: number
  topicId: UUID
  userId: UUID
  like: number
  user: string
  userImage: string
}

const CommentsSessions: FunctionComponent<CommentSessionsProps> = ({
  id,
  topicId,
  userId,
  author,
  hora,
  content,
  like,
  user,
  userImage,
}) => {
  const [response, setResponse] = useState<boolean>(false)
  const [showOptions, setShowOptions] = useState(false)

  const operator = response == true ? 'response-active' : 'response-disabled'

  const handleUpdateComment = async () => {
    try {
      const updatedComment: CommentUpdateModel = {
        content: content,
      }

      await updateCommentById(id, updatedComment)
      alert('Comentário atualizado com sucesso!')
    } catch (error) {
      throw new Error('Não foi possível atualizar o comentário')
    }
  }

  const handleDeleteComment = async () => {
    try {
      await deleteComment(id)
      alert('Comentário excluído com sucesso!')
    } catch (error) {
      throw new Error('Não foi possível deletar o comentário')
    }
  }

  const toggleOptions = () => {
    setShowOptions((prevState) => !prevState)
  }

  const handleOptionClick = (option: string) => {
    if (option === 'update') {
      handleUpdateComment()
    } else if (option === 'delete') {
      handleDeleteComment()
    }
    toggleOptions()
  }

  return (
    <article className="flex flex-col items-start mb-4">
      <div className="flex">
        <div className="mr-4">
          <UserAvatar img={userImage} alf="Thaissa" />
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-medium mb-1">{author}</span>
              <span className="text-gray-400 text-sm leading-3">{hora}</span>
            </div>

            <button onClick={toggleOptions}>
              <DotsThree className="text-xl transition-all cursor-pointer hover:bg-slate-600 rounded-full" />
            </button>
          </div>

          <p className="bg-g08 rounded-md mt-5 py-3 px-9 shadow-2xl max-w-4xl">
            {content}
          </p>
          <div className="flex items-center">
            <UpvoteDownvote like={like} />
            <Chat
              onClick={() => {
                setResponse((oldRes) => !oldRes)
              }}
              size={32}
              className={`${operator} cursor-pointer response-chat `}
            />
          </div>
        </div>
      </div>

      {showOptions && (
        <div className="origin-top-right absolute right-28 mt-10 w-48 rounded-md shadow-lg bg-g08 ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            <li
              className="px-4 py-2 text-sm transition-all hover:bg-gray-500 cursor-pointer"
              onClick={() => handleOptionClick('update')}
            >
              Editar Comentário
            </li>
            <li
              className="px-4 py-2 text-sm transition-all hover:bg-gray-500 cursor-pointer"
              onClick={() => handleOptionClick('delete')}
            >
              Excluir Comentário
            </li>
          </ul>
        </div>
      )}

      <Markdown
        response={response}
        userAvatar={userImage}
        userName={user}
        userId={userId}
        topicId={topicId}
      />
    </article>
  )
}

export default CommentsSessions
