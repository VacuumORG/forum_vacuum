import Sidebar from './Sidebar'
import EditUserContainer from './EditUserContainer'
import UploadAvatar from './Sidebar/UploadAvatar'

export default function ProfileSettings() {
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
