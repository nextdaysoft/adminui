import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import Notify from "../components/Notify";
import axios from 'axios'
const NotifySpecficPerson = () => {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userType = searchParams.get('userType');
    
  
    //console.log(id)
    const [isCollector, setIsCollector] = useState(null);
    const [isUser, setIsUser] = useState(null);
    const [collectorFcmToken, setCollectorFcmToken] = useState(null);
    const [userFcmToken, setUserFcmToken] = useState(null);
    const [name, setName] = useState(null);
  
    //const apiUrl=`http://localhost:1200/api/v1/admin/${userType}/${id}`
    const apiUrl=`https://famous-foal-khakis.cyclic.app/api/v1/admin/${userType}/${id}`
    useEffect(() => {
      axios
        .get(apiUrl)
        .then((response) => {
         // console.log(response)
          if (response.data?.collector) {
            setIsCollector(response.data.collector);
            if (response.data.collector.fcmToken) {
              setCollectorFcmToken(response.data.collector.fcmToken);
              setName(response.data.collector.fullName);
            }
          }
          if (response.data?.user) {
            setIsUser(response.data.user);
            if (response.data.user.fcmToken) {
              setUserFcmToken(response.data.user.fcmToken);
              setName(response.data.user.name);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]); // Include id in the dependency array to trigger the effect on id change
  return (
    <div>
        {
            (collectorFcmToken || userFcmToken) && (
                <Notify 
                apiUrl={"http://localhost:1200/api/v1/admin/person/notify"}
                 fcmToken={collectorFcmToken || userFcmToken}
                 heading={`Send Notification To ${name}`} />
              )
        }
    
    </div>
  );
};

export default NotifySpecficPerson;
