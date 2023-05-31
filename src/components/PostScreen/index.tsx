import { FunctionComponent } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Chat, Eye, PaperPlaneRight } from '@phosphor-icons/react'
import UpvoteDownvote from '../UpvoteDownvote'
import UserAvatar from '../UserAvatar'

interface PostScreenProps {
  id: string
  nameUser: string
  userImg: StaticImageData
  imgPost: StaticImageData
  title: string
  tags: string[]
  content: string
  hora: string | number
  dia: string
  likes: number
  views: number
  coments: number
}

const PostScreen: FunctionComponent<PostScreenProps> = ({
  id,
  nameUser,
  userImg,
  imgPost,
  title,
  tags,
  content,
  hora,
  dia,
  likes,
  views,
  coments,
}) => {
  return (
    <section className="bg-g06 p-5 rounded flex flex-col gap-6 max-w-[650px] w-[630px]">
      <article className="flex w-full justify-between">
        <div className="flex">
          <div className="mr-4">
            <UserAvatar img={userImg} alf="" />
          </div>

          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col">
                <span className="font-medium mb-1">{nameUser}</span>
                <span className="text-gray-400 text-xs leading-3">
                  Há {hora} horas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-gray-400 text-xs">Data de Criação: {dia}</span>
        </div>
      </article>

      <article>
        <h1 className="font-semibold">{title}</h1>
        <div className="flex gap-3 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] text-[var(--default)] font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      <article className="bg-g08 shadow-2xl flex p-5 rounded max-w-[590px] gap-4">
        <div className="flex w-[40%] justify-center items-center">
          <Image src={imgPost} alt="image post" className="rounded" />
        </div>
        <p className="text-xs w-[60%]">{content}</p>
      </article>

      <article className="mt-[-14px] flex justify-between items-center">
        <div>
          <UpvoteDownvote like={likes} />
        </div>

        <div className="flex gap-2 text-xs text-gray-400">
          <span className="flex items-center gap-1  transition-all cursor-pointer hover:text-gray-500">
            <Eye /> {views} visualizações
          </span>
          <span className="flex items-center gap-1 transition-all cursor-pointer hover:text-gray-500">
            <Chat />
            {coments} comentários
          </span>
          <span className="flex items-center gap-1 transition-all cursor-pointer hover:text-gray-500">
            <PaperPlaneRight className="-rotate-[25deg]" />
            compartilhar
          </span>
        </div>
      </article>

      <article className="text-[10px] text-gray-400">
        <p>
          Última Atualização: <br /> {dia}
        </p>
      </article>
    </section>
  )
}

export default PostScreen
