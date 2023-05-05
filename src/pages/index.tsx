import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Modal from '@/components/Modal'
import TagsInHigh from '@/components/TagsInHigh'
import Topic from '@/components/Topic'
import Head from 'next/head'
import { useRef } from 'react'

export default function Home() {
  const modelRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <Head>
        <title>Forum Vaccun - Home Page</title>
        <meta name="description" content="Comunidade de desenvolvimento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu />
      <main className="flex my-8 justify-evenly">
        <section className="flex flex-col gap-12">
          <ul className="flex flex-col py-3 px-2 gap-5 rounded-md  theme-bg-content-grey-08">
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
          <ul className="flex flex-col py-3 px-2 gap-5 rounded-md  theme-bg-content-grey-08">
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
          <div>
            <h1 className="text-2xl font-bold">Assuntos do Momento</h1>
            <span>
              <b
                onClick={() => modelRef.current?.showModal()}
                className="text-[var(--default)] cursor-pointer"
              >
                Cadastre-se
              </b>{' '}
              para postar
            </span>
          </div>
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
      <Modal ref={modelRef}>
        <Login />
      </Modal>
    </>
  )
}
