import { FunctionComponent, useState } from 'react'
import Image from 'next/image'

const UploadAvatar: FunctionComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  const [checkFile, setCheckFile] = useState(false)

  const imageHandler = (e: any) => {
    setSelectedFile(e.target.files[0])
    setCheckFile(true)
  }

  const imageSubmission = () => {
    if (checkFile) {
      alert('File Uploaded')
      console.log(selectedFile)
    } else {
      alert('select a file')
    }
  }

  return (
    <div className="w-[110px] h-[110px] relative flex justify-center items-center border-2 rounded-full bg-gray-200 -mt-9  group">
      <Image
        src="/unsplashAvatar.jpg"
        alt="UserName avatar"
        fill
        className="rounded-full"
      />
      <label
        htmlFor="file"
        className=" py-1 px-4 text-white font-bold justify-center text-center items-center rounded-[0.25rem] bg-gray-900 opacity-70 invisible group-hover:visible transition-all duration-100 ease-in-out"
      >
        Mudar
      </label>
      <input
        id="file"
        type="file"
        name="file"
        onChange={imageHandler}
        className="z-20 cursor-pointer flex-1 hidden h-full rounded-full bg-transparent"
      />
      <div className="flex w-[39px] h-[29px] absolute bg-g08 px rounded-full justify-center bottom-0 right-0">
        <Image
          src="/edit-circle.svg"
          alt="Mudar imagem de avatar"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}

export default UploadAvatar
