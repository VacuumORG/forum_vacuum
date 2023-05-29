import Image from 'next/image'
import { FunctionComponent } from 'react'
import UserAvatar from '../UserAvatar'
import TipsTag from '../TipsTag'

export interface TopicProps {
  id: number
  title: string
  datetime?: string
  viewsAmount: number
  commentsAmount: number
  likesAmount: number
  autor: string
}

const Topic: FunctionComponent<TopicProps> = ({
  id,
  title,
  datetime,
  viewsAmount,
  commentsAmount,
  likesAmount,
  autor,
}: TopicProps) => {
  return (
    <div className="flex rounded gap-6 max-w-screen-sm py-6 px-5 theme-topic-container">
      <Image
        src="/vacuum_logo.png"
        alt="imagem principal do tipico"
        width={100}
        height={100}
      />
      <section className="flex flex-col gap-3">
        <h1 className="font-bold">{title}</h1>
        <div className="flex flex-wrap gap-3 justify-start items-center">
          <TipsTag content="seo" />
          <TipsTag content="javascript" />
        </div>
        <div className="flex items-center justify-between gap-7">
          <div className="flex gap-3">
            <UserAvatar
              img="/vacuum_logo.png"
              alf="componente que representa o avatar do usuário"
            />
            <div className="flex flex-col">
              <span className="text-xs">{autor}</span>
              <time
                dateTime={datetime}
                className="text-xs theme-topic-datetime"
              >
                {datetime}
              </time>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xs">{viewsAmount} visualizações</span>
            <span className="text-xs">{likesAmount} curtidas</span>
            <span className="text-xs">{commentsAmount} comentários</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Topic
