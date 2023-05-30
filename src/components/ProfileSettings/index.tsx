import { FunctionComponent } from 'react'
import Sidebar from './Sidebar'
import ChangeAvatarForm from './ChangeAvatarForm'
import { UUID } from 'crypto'

interface ProfilesSettingsProps {
  user: {
    id: UUID
    name: string
    avatarUrl?: string
  }
}

const ProfileSettings: FunctionComponent<ProfilesSettingsProps> = ({
  user,
}) => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex items-center justify-center gap-6 w-[75%]">
        <ChangeAvatarForm />

        <h2 className="font-bold text-2xl whitespace-nowrap">{user.name}</h2>
      </div>
      <Sidebar />
    </div>
  )
}

export default ProfileSettings
