import { useRef } from 'react'
import Head from 'next/head'

import Menu from '@/components/Menu'
import Banner from '@/components/BannerProfile'
import Sidebar from '@/components/ProfileSettings/Sidebar'
import EditUserContainer from '@/components/ProfileSettings/EditUserContainer'
import UserLogged from '@/components/UserLogged'

export default function UserProfile() {
  return (
    <>
      <Head>
        <title>Forum Vacuum - User profile</title>
        <meta name="description" content={`${'User profile'}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu className="flex items-center justify-between flex-wrap px-20 bg-g06">
        <UserLogged />
      </Menu>
      <Banner />
      <main className="flex gap-5 justify-center">
        <Sidebar />
        <EditUserContainer />
      </main>
    </>
  )
}
