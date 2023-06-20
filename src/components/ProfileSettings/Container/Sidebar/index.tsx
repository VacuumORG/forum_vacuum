import { FunctionComponent } from 'react'
import Link from 'next/link'

const Sidebar: FunctionComponent = () => {
  return (
    <section className="w-[220px]">
      <h2 className="font-bold text-xl">Em Geral</h2>
      <div className="flex flex-col pt-[2.8125rem]">
        <Link href="" className="font-bold text-[0.8125rem] text-default">
          Editar informações
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
