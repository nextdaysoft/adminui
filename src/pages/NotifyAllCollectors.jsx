import React from 'react'
import Notify from '../components/Notify'
const NotifyAllCollectors = () => {
   //const apiUrl="http://localhost:1200/api/v1/admin/collector/notifyAllCollectors"
   const apiUrl='https://famous-foal-khakis.cyclic.app/api/v1/admin/collector/notifyAllCollectors';
  return (
    <div className='mt-3'>
        <Notify heading={"Notification To All Collectors"} apiUrl={apiUrl}/>
    </div>
  )
}

export default NotifyAllCollectors