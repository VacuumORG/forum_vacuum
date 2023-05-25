import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <section className="max-w-[250px] h-[18.350rem] -mt-9">
      <div className="flex items-center gap-6">
        <Image
          src="/unsplashAvatar.jpg"
          alt="avatar"
          width={115}
          height={115}
          className="object-cover rounded-full relative"
        />

        <h2 className="font-bold text-2xl whitespace-nowrap">
          John Silvio Santos Costa Doe
        </h2>
      </div>
      <h2 className="font-bold text-xl mt-[2.6875rem]">Em Geral</h2>
      <div className="flex flex-col pt-[2.8125rem]">
        <Link href="" className="font-bold text-[0.8125rem] text-default">
          Editar informações
        </Link>
        {/**
         * <Link
          href=""
        >
          Atividade
        </Link>
        <Link
          href=""
        >
          Comentários
        </Link>
         */}
      </div>
    </section>
  )
}
