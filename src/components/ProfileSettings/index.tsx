import { FunctionComponent } from 'react'
import Sidebar from './Sidebar'
import UploadAvatar from './UploadAvatar'

const ProfileSettings: FunctionComponent = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex items-center justify-center gap-6 w-[75%]">
        <UploadAvatar />

        <h2 className="font-bold text-2xl whitespace-nowrap">
          John Silvio Santos Costa Doe
        </h2>
      </div>
      <Sidebar />
    </div>
  )
}

export default ProfileSettings
