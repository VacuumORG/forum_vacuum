import { FunctionComponent } from 'react'

import EditUserContainer from './EditUserContainer'
import Sidebar from './Sidebar'

const Container: FunctionComponent = () => {
  return (
    <div className="flex justify-center gap-6 py-10">
      <Sidebar />
      <EditUserContainer />
    </div>
  )
}

export default Container
