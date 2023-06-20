import { FunctionComponent } from 'react'
import Head from 'next/head'

import ProfileSettings from '@/components/ProfileSettings'
import Menu from '@/components/Menu'
import Banner from '@/components/ProfileSettings/BannerProfile'
import UserLogged from '@/components/UserLogged'

import { UUID } from 'crypto'

const UserProfile: FunctionComponent = () => {
  const user = {
    id: 'dd01e76a-9c5c-472f-8316-b20614193d00' as UUID,
    name: 'John Silvio Santos Costa Doe',
    avatarUrl: '/unsplashAvatar.jpg',
  }

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

      <main className="flex flex-col gap-5">
        <Banner />
        <ProfileSettings user={user} />
      </main>
    </>
  )
}

export default UserProfile
