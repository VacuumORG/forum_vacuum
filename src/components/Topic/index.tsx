import { FunctionComponent } from 'react'
import UserAvatar from '../UserAvatar'
import TipsTag from '../TipsTag'
import { TopicModel } from '~/models/topic'
import Image from 'next/image'

interface TopicsPageProps {
  topics: TopicModel[]
}

const Topic: FunctionComponent<TopicsPageProps> = ({
  topics,
}: TopicsPageProps) => {
  return (
    <ul className="flex flex-col gap-8">
      {topics.map((topic, index) => (
        <li key={index}>
          <div className="flex rounded gap-6 max-w-screen-sm py-6 px-5 theme-topic-container">
            <Image
              src="/vacuum_logo.png"
              alt="imagem principal do tipico"
              width={100}
              height={100}
            />
            <section className="flex flex-col gap-3">
              <h1 className="font-bold">{topic.title}</h1>
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
                    <span className="text-xs">{'Autor'}</span>
                    <time
                      dateTime={topic.created_at}
                      className="text-xs theme-topic-datetime"
                    >
                      {topic.created_at}
                    </time>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xs">{topic.views} visualizações</span>
                  <span className="text-xs">{topic.likes} curtidas</span>
                  <span className="text-xs">{'0'} comentários</span>
                </div>
              </div>
            </section>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Topic
