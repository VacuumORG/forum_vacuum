import Image from 'next/image'
import Link from 'next/link'
import UploadAvatar from './UploadAvatar'
import EditUserContainer from '../EditUserContainer'

export default function Sidebar() {
  return (
    <section className="h-[18.350rem] flex justify-center gap-6">
      <div className="">
        <h2 className="font-bold text-xl">Em Geral</h2>
        <div className="flex flex-col pt-[2.8125rem]">
          <Link href="" className="font-bold text-[0.8125rem] text-default">
            Editar informações
          </Link>
        </div>
      </div>
      <EditUserContainer />
    </section>
  )
}
