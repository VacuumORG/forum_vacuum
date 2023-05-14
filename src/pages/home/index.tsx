import Menu from '@/components/Menu'
import NewTopic from '@/components/NewTopic'
import TagsInHigh from '@/components/TagsInHigh'
import Topic from '@/components/Topic'
import UserArea from '@/components/UserArea'
import UserAvatar from '@/components/UserAvatar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Forum Vacuum - Home Page</title>
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
          <ul className="flex flex-col py-3 px-2 gap-5 rounded-md  bg-g08">
            <li>
              <TagsInHigh
                iconSelected
                width={35}
                height={35}
                alt="icones da tag de topics mais recentes"
                titleTag="mais recentes"
              />
            </li>
            <li>
              <TagsInHigh
                followsAmount={8}
                iconSelected
                width={35}
                height={35}
                alt="icones da tag de topics mais recentes"
                titleTag="populares"
              />
            </li>
          </ul>
          <ul className="flex flex-col py-3 px-2 gap-5 rounded-md  bg-g08">
            <h1 className="font-bold">tags populares</h1>
            <li>
              <TagsInHigh
                iconSelected={false}
                width={35}
                height={35}
                alt="icones da tag de topics mais recentes"
                titleTag="mais recentes"
              />
            </li>
            <li>
              <TagsInHigh
                iconSelected
                width={35}
                height={35}
                alt="icones da tag de topics mais recentes"
                titleTag="populares"
              />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-8">
          <NewTopic username="rickchaves29" avatar="/user_avatar.png" />
          <ul className="flex flex-col gap-8">
            <li>
              <Topic
                autor="henrique"
                commentsAmount={4}
                likesAmount={5}
                viewsAmount={10}
                title="pão de batata"
                datetime="29/07/1999"
              />
            </li>
            <li>
              <Topic
                autor="henrique"
                commentsAmount={4}
                likesAmount={5}
                viewsAmount={10}
                title="pão de batata"
                datetime="29/07/1999"
              />
            </li>
            <li>
              <Topic
                autor="henrique"
                commentsAmount={4}
                likesAmount={5}
                viewsAmount={10}
                title="pão de batata"
                datetime="29/07/1999"
              />
            </li>
            <li>
              <Topic
                autor="henrique"
                commentsAmount={4}
                likesAmount={5}
                viewsAmount={10}
                title="pão de batata"
                datetime="29/07/1999"
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
