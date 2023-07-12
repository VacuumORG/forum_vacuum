import CodeAuthBox from '@/components/CodeAuthBox'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Modal from '@/components/Modal'
import SignUp from '@/components/SignUp'
import SignUpAvatar from '@/components/SignUpAvatar'
import Topics from '@/components/Topic'
import UserArea from '@/components/UserArea'
import Head from 'next/head'
import { Spinner, Star } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { getAllTags } from '@/api/services/tagsInHighService'
import { getTopics } from '@/api/services/topicsService'
import { TopicModel } from '~/models/topic'

import {
  createTopic,
  getTopicById,
  deleteTopic,
} from '@/api/services/topicsService'
import { CreateTopicModel } from '~/models/topic'

import EventWarning from '@/components/EventWarning'
import FilterItem from '@/components/FilterItem'

import FilterByTagInHigh from '@/components/FilterByTagInHigh'

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
  const [topicById, setTopicById] = useState(null)
  const [topics, setTopics] = useState<TopicModel[]>([])

  const [step, setStep] = useState<number>(1)
  const [tags, setTags] = useState<TagsInHighProps[]>([])

  const nextStep = () => {
    setStep((c) => (c === 3 ? 3 : c + 1))
  }
  const backStep = () => {
    setStep((c) => (c === 1 ? 1 : c - 1))
  }

  const fetchGetTopicById = async (topicId: number) => {
    try {
      const topicData = await getTopicById(topicId)
      setTopicById(topicData)
    } catch (error) {
      console.error('Erro ao achar o tópico:', error)
    }
  }

  const handleCreateTopic = async (topicData: CreateTopicModel) => {
    try {
      await createTopic(topicData)
      alert('Tópico criado com sucesso!')
    } catch (error) {
      console.error('Erro ao criar o tópico:', error)
    }
  }

  const handleDeleteTopic = async (topicId: number) => {
    try {
      await deleteTopic(topicId)
      alert('Tópico deletado com sucesso!')
    } catch (error) {
      console.error('Erro ao deletar o tópico:', error)
    }
  }

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
          <ul className="flex flex-col py-3 px-2 gap-5 rounded-md bg-g06">
            <li>
              <FilterItem
                titleTag="mais recentes"
                descriptionTag="veja as últimas postagens"
                icon={
                  <Spinner
                    width={35}
                    height={35}
                    alt="icones da tag de topics mais recentes"
                    className="fill-white bg-g08 p-1 rounded"
                  />
                }
              />
            </li>
            <li>
              <FilterItem
                titleTag="populares"
                descriptionTag="postagens mais acessadas hoje"
                icon={
                  <Star
                    width={35}
                    height={35}
                    alt="icones da tag de topics mais recentes"
                    className="fill-white bg-g08 p-1 rounded"
                  />
                }
              />
            </li>
          </ul>
          <FilterByTagInHigh tags={tags} />
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
          <Topics topics={topics} />
        </section>
        <section className="flex flex-col">
          <div className="bg-g06 gap-5 py-3 px-2 rounded-md w-56">
            <h2 className="font-bold leading-4 text-sm tracking-wider mt-1 ml-3">
              eventos
            </h2>
            <EventWarning
              author="John Doe"
              day={10}
              month={10}
              key={'idaleatorio'}
              datetime="2007-05-08 12:35:29"
              description="Evento no Discord aula de postman com varios detalhesde como testar suas rotas independente da linguagem em que vc esta desenvolvendo."
              title="Evento de Postman Criando um titulo imenso para ver se o layout vai quebrar"
            />
            <EventWarning
              author="John Doe"
              day={10}
              month={10}
              key={'idaleatorios'}
              datetime="2007-05-08 12:35:29"
              description="Evento no Discord aula de postman com varios detalhesde como testar suas rotas independente da linguagem em que vc esta desenvolvendo."
              title="Evento de Postman Criando um titulo imenso para ver se o layout vai quebrar"
            />
            <EventWarning
              author="John Doe"
              day={10}
              month={10}
              key={'idaleatorioa'}
              datetime="2007-05-08 12:35:29"
              description="Evento no Discord aula de postman com varios detalhesde como testar suas rotas independente da linguagem em que vc esta desenvolvendo."
              title="Evento de Postman Criando um titulo imenso para ver se o layout vai quebrar"
            />
          </div>
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
