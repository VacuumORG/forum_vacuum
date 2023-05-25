import Sidebar from './Sidebar'
import EditUserContainer from './EditUserContainer'

export default function ProfileSettings() {
  return (
    <div className="flex">
      <Sidebar />
      <EditUserContainer />
    </div>
  )
}
