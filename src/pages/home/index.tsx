import Menu from '@/components/Menu'
import NewTopic from '@/components/NewTopic'
import Topic from '@/components/Topic'
import UserArea from '@/components/UserArea'
import UserAvatar from '@/components/UserAvatar'
import Head from 'next/head'
import { Spinner, Star } from '@phosphor-icons/react'
import { getTopics } from '@/api/services/topicsService'
import { useEffect, useState } from 'react'
import { TopicModel } from '~/models/topic'
import TagsInHigh from '@/components/FilterByTagInHigh/TagsInHigh'

export default function Home() {
  const [topics, setTopics] = useState<TopicModel[]>([])

  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        const topicResponse = await getTopics()
        setTopics(topicResponse)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTopicData()
  }, [])
  return (
    <>
      <Head>
        <title>Forum Vacuum - Home Pageee</title>
        <meta name="description" content="Comunidade de desenvolvimento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu className="flex items-center justify-between flex-wrap px-20 bg-g06">
        <UserArea
          icon={<UserAvatar alf="avatar do usuario" img="/user_avatar.png" />}
          userName="rickchaves29"
          message="bem vindo,"
        />
      </Menu>
      <main className="flex my-8 gap-5 justify-center">
        <section className="flex flex-col gap-12">
          <ul className="flex flex-col py-5 px-3 gap-5 rounded-md tag-main">
            <li>
              <TagsInHigh
                selected={false}
                lengthPostWithTag={0}
                titleTag="mais recentes"
                descriptionTag="veja as últimas postagens"
                icon={
                  <Spinner
                    width={35}
                    height={35}
                    alt="icones da tag de topics mais recentes"
                  />
                }
              />
            </li>
            <li>
              <TagsInHigh
                selected={false}
                lengthPostWithTag={8}
                titleTag="populares"
                descriptionTag="postagens mais acessadas hoje"
                icon={
                  <Star
                    width={35}
                    height={35}
                    alt="icones da tag de topics mais recentes"
                  />
                }
              />
            </li>
          </ul>
          <ul className="flex flex-col py-5 px-3 gap-5 rounded-md tag-main">
            <h1 className="font-bold">tags populares</h1>
            <li>
              <TagsInHigh
                selected={false}
                lengthPostWithTag={8}
                titleTag="mais recentes"
              />
            </li>
            <li>
              <TagsInHigh selected={false} titleTag="populares" />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-8">
          <NewTopic username="rickchaves29" avatar="/user_avatar.png" />
          <Topic topics={topics} />
        </section>
      </main>
    </>
  )
}
