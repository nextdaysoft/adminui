import React from 'react'
import Notify from '../components/Notify'

const NotifyAllUsers = () => {
  // const apiUrl="http://localhost:1200/api/v1/admin/user/notifyAllUsers"
  const apiUrl="https://famous-foal-khakis.cyclic.app/api/v1/admin/user/notifyAllUsers"
  return (
    <div className='mt-3'>
        <Notify heading={"Notification To All Users"} apiUrl={apiUrl}/>
    </div>
  )
}

export default NotifyAllUsers