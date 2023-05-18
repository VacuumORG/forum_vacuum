import { FunctionComponent, RefObject, useState } from 'react'
import Button from '../Button'
import Image from 'next/image'
import { User, CaretLeft } from '@phosphor-icons/react'

interface SignUpAvatarProps {
  modalRef?: RefObject<HTMLDialogElement>
  backStep?: () => void
}

const SignUpAvatar: FunctionComponent<SignUpAvatarProps> = ({backStep, modalRef}) => {
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedFile, setSelectedFile] = useState<File>()

  function handlerSignUpAvatar(e: any) {
    e.preventDefault()
    modalRef?.current?.close()
  }

  return (
    <div className="w-full h-full flex flex-col gap-1 py-10 px-20">
      <div className="flex justify-between">
        <div className="flex">
          <CaretLeft
            alt="Voltar"
            width={16}
            height={16}
            className="mr-1 fill-white cursor-pointer align-text-top"
          />
          <a className="theme-text text-xs cursor-pointer" onClick={() => backStep!()}>voltar</a>
        </div>
        <p className="theme-text text-xs">Etapa 3 de 3</p>
      </div>

      <h1 className="theme-text font-bold text-2xl mt-4 mb-3">
        Escolha seu avatar
      </h1>
      <p className="theme-text text-xs mb-3">Escolha sua foto de perfil.</p>
      <label className="w-160 h-160">
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0]
              setSelectedImage(URL.createObjectURL(file))
              setSelectedFile(file)
            }
          }}
        />
        <div
          className="flex 
 justify-center items-center mt-5 mb-10"
        >
          <div
            className="w-[160px] h-[160px] bg-white rounded-full flex 
 justify-center items-center cursor-pointer border-1 border-solid border-purple-600 shadow"
          >
            {selectedImage ? (
              <Image src={selectedImage} alt="" className="object-cover" />
            ) : (
              <User
                alt="User Avatar"
                width={100}
                height={100}
                className="object-cover"
              />
            )}
          </div>
        </div>
      </label>
      <Button
        onClick={handlerSignUpAvatar}
        className="theme-btn p-1 rounded font-bold"
        type="submit"
        title="finalizar cadastro"
      />

      <p
        className="theme-text text-xs mt-2 mb-3 flex 
 justify-center items-center cursor-pointer"
 onClick={() => modalRef?.current?.close()}
      >
        Pular esta etapa
      </p>
    </div>
  )
}

export default SignUpAvatar
