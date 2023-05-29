import CodeAuthBox from '@/components/CodeAuthBox'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Modal from '@/components/Modal'
import SignUp from '@/components/SignUp'
import SignUpAvatar from '@/components/SignUpAvatar'
import TagsInHigh from '@/components/TagsInHigh'
import Topic from '@/components/Topic'
import UserArea from '@/components/UserArea'
import Head from 'next/head'
import { Spinner, Star } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { getAllTags } from '@/api/services/tagsInHighService'
import { getTopics } from '@/api/services/topicsService'
import { TopicModel } from '~/models/topic'

interface TagsInHighProps {
  id?: string
  name?: string
  descriptionTag?: string
  icon?: JSX.Element
  lengthPostWithTag?: number
}

export default function Home() {
  const loginRef = useRef<HTMLDialogElement>(null)
  const signUpRef = useRef<HTMLDialogElement>(null)
  const [topics, setTopics] = useState<TopicModel[]>([])

  const [step, setStep] = useState<number>(1)

  const nextStep = () => {
    setStep((c) => (c === 3 ? 3 : c + 1))
  }
  const backStep = () => {
    setStep((c) => (c === 1 ? 1 : c - 1))
  }

  const [tags, setTags] = useState<TagsInHighProps[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getAllTags()
      setTags(data)
    }
    const fetchTopicData = async () => {
      try {
        const topicResponse = await getTopics()
        setTopics(topicResponse)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTopicData()
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Forum Vacuum - Home Page</title>
        <meta name="description" content="Comunidade de desenvolvimento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu className="flex items-center justify-between flex-wrap px-20 bg-g06">
        <UserArea
          onClickEventOne={() => loginRef.current?.showModal()}
          onClickEventTwo={() => signUpRef.current?.showModal()}
        />
      </Menu>
      <main className="flex my-8 gap-5 justify-center">
        <section className="flex flex-col gap-12">
          <ul className="flex flex-col py-3 px-2 gap-5 rounded-md bg-g08">
            <li>
              <TagsInHigh
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
          <ul className="flex flex-col py-3 px-2 gap-5 rounded-md  bg-g08">
            <h1 className="font-bold">tags populares</h1>
            {tags.map((tag) => {
              return (
                <li key={tag.id}>
                  <TagsInHigh titleTag={tag.name} />
                </li>
              )
            })}
          </ul>
        </section>
        <section className="flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold">Assuntos do Momento</h1>
            <span>
              <b
                onClick={() => signUpRef.current?.showModal()}
                className="text-[var(--default)] cursor-pointer"
              >
                Cadastre-se
              </b>{' '}
              para postar
            </span>
          </div>
          <Topic topics={topics} />
        </section>
      </main>
      <Modal ref={loginRef}>
        <Login modalRef={loginRef} />
      </Modal>
      <Modal ref={signUpRef}>
        {step === 1 && <SignUp modalRef={signUpRef} nextStep={nextStep} />}
        {step === 2 && (
          <CodeAuthBox
            modalRef={signUpRef}
            nextStep={nextStep}
            backStep={backStep}
          />
        )}
        {step === 3 && (
          <SignUpAvatar modalRef={signUpRef} backStep={backStep} />
        )}
      </Modal>
    </>
  )
}
