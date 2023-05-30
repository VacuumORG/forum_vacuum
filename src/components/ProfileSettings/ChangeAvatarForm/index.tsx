import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const ChangeAvatarForm: FunctionComponent = () => {
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedFile, setSelectedFile] = useState<File>()

  const handleUploadAvatar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(selectedFile)
  }

  const handleFileChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files.length > 0) {
      const file = target.files[0]

      if (file.type.includes('image/')) {
        setSelectedImage(URL.createObjectURL(file))
        setSelectedFile(file)
      } else {
        window.alert('Please select an image file.')
      }
    }
  }

  return (
    <form onSubmit={handleUploadAvatar}>
      <div className="w-[110px] h-[110px] relative flex justify-center items-center border-2 rounded-full bg-gray-200 -mt-9  group">
        <Image
          src={selectedImage ? selectedImage : '/unsplashAvatar.jpg'}
          alt={'UserName'}
          fill
          sizes="(max-width: 106px) 100vw, (max-width: 106px) 50vw, 33vw"
          className="rounded-full w-auto h-auto"
          priority
        />

        <label
          htmlFor="file"
          className=" py-1 px-4 text-white font-bold justify-center text-center items-center rounded-[0.25rem] bg-gray-900 opacity-70 invisible group-hover:visible transition-all duration-100 ease-in-out cursor-pointer"
        >
          Mudar
        </label>
        <input
          id="file"
          type="file"
          accept="image/*"
          name="updateAvatar"
          onChange={handleFileChange}
          className="z-20 cursor-pointer flex-1 hidden h-full rounded-full bg-transparent"
        />
        <div className="flex w-[39px] h-[29px] absolute bg-g08 px rounded-full justify-center bottom-0 right-0">
          <Image
            src="/edit-circle.svg"
            alt="Mudar imagem de avatar"
            width={24}
            height={24}
            className="w-auto h-auto"
          />
        </div>
      </div>
      {selectedImage && (
        <Button
          className="theme-btn py-1 text-[13px] px-[1.625rem] mt-5 rounded font-semibold opacity-75 hover:opacity-100 duration-300 transition-all"
          type="submit"
          title="Aplicar"
        />
      )}
    </form>
  )
}

export default ChangeAvatarForm
