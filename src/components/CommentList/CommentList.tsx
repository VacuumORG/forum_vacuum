import { FunctionComponent } from 'react'
import CommentsSessions from '../CommentsSessions'
import { UUID } from 'crypto'

interface CommentData {
  userId: UUID
  id: number
  topicId: UUID
  author: string
  hora: string
  content: string
  like: number
  user: string
  userImage: string
}

interface CommentListProps {
  comments: CommentData[]
}

const CommentList: FunctionComponent<CommentListProps> = ({ comments }) => {
  return (
    <section className="bg-g06 p-6 rounded-md">
      <article className="w-full flex gap-7 flex-row-reverse text-gray-400 pr-12">
        <span className="flex font-bold cursor-pointer hover:text-gray-500">
          Mais antigos
        </span>
        <span className="flex font-bold cursor-pointer hover:text-gray-500">
          Mais recentes
        </span>
        <span className="flex font-bold cursor-pointer hover:text-gray-500">
          Mais votados
        </span>
      </article>

      {comments.map((comment) => (
        <CommentsSessions
          key={comment.id}
          id={comment.id}
          topicId={comment.topicId}
          userId={comment.userId}
          author={comment.author}
          hora={comment.hora}
          content={comment.content}
          like={comment.like}
          user={comment.user}
          userImage={comment.userImage}
        />
      ))}
    </section>
  )
}

export default CommentList
