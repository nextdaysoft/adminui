import React from 'react'
import Notify from '../components/Notify'

const NotifyAll = () => {
  //const apiUrl="http://localhost:1200/api/v1/admin/all/notifyAll"
  const apiUrl='https://famous-foal-khakis.cyclic.app/api/v1/admin/all/notifyAll';
  return (
    <div className='mt-3'>
        <Notify heading={"Notification To All"} apiUrl={apiUrl}/>
    </div>
  )
}

export default NotifyAll