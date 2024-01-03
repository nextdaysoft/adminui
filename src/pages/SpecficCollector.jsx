import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SpecficCollector = () => {
  const { collectorId } = useParams();
  const [collector, setCollector] = useState({});
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isAccepcted, setIsAccepcted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    //const apiUrl1=`http://localhost:1200/api/v1/admin/collector/${collectorId}`
    const apiUrl1 = `https://famous-foal-khakis.cyclic.app/api/v1/admin/collector/${collectorId}`;
    axios
      .get(apiUrl1)
      .then((response) => {
        console.log(response.data.collector);
        const fetchedCollector = response.data.collector;
        setCollector(response.data.collector);
        if (fetchedCollector.verificationStatus === "Pending") {
          setIsPending(true);
        }
        if (fetchedCollector.verificationStatus === "Accepcted") {
          setIsAccepcted(true);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [collectorId]);
  const handleAccept = () => {
    const requestdata = {
      verificationStatus: "Accepcted",
    };
    //const apiUrl2= `http://localhost:1200/api/v1/admin/verify-collector/${collectorId}`,
    const apiUrl2 = `https://famous-foal-khakis.cyclic.app/api/v1/admin/verify-collector/${collectorId}`;
    axios
      .put(apiUrl2, requestdata)
      .then((response) => {
        console.log(response.data);
        toast.success("Accepcted Collector Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        navigate("/collectors");
      })
      .catch((error) => {
        toast.error("Error in Accepcting Collector", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        setError(error);
      });
  };
  const handleReject = () => {
    const requestdata = {
      verificationStatus: "Rejected",
    };
    //const apiUrl3=`http://localhost:1200/api/v1/admin/verify-collector/${collectorId}`;
    const apiUrl3 = `https://famous-foal-khakis.cyclic.app/api/v1/admin/verify-collector/${collectorId}`;
    axios
      .put(apiUrl3, requestdata)
      .then((response) => {
        console.log(response.data);
        toast.success("Rejected Collector Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        navigate("/rejectedCollectors");
      })
      .catch((error) => {
        toast.error("Error in Rejecting Collector", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        setError(error);
      });
  };
  const handleDelete = () => {
    //const apiUrl4=`http://localhost:1200/api/v1/collector/delete/${collectorId}`
    const apiUrl4 = `https://famous-foal-khakis.cyclic.app/api/v1/collector/delete/${collectorId}`;
    axios
      .delete(apiUrl4)
      .then((response) => {
        // console.log(response.data);
        toast.success("Collector Deleted Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        navigate("/collectors");
      })
      .catch((error) => {
        toast.error("Error in Deleting Collector", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        setError(error);
      });
  };
  return (
    <div className="bg-gray-100 min-h-screen py-8 overflow-hidden">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-4">
        <div className="flex items-center justify-center mb-2">
          {collector.profileImage ? (
            <img
              src={collector.profileImage}
              alt={collector.name}
              className="w-full h-40 object-cover opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-full"
            />
          ) : (
            <FaUser className="w-full h-40 object-cover opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-full" />
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {collector.name}
        </h2>
        <div className="mb-2">
          <label htmlFor="email" className="text-gray-600 block mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={collector.email}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label htmlFor="gender" className="text-gray-600 block mb-1">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            value={collector.gender}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="text-gray-600 block mb-1">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={collector.phoneNumber}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="text-gray-600 block mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={collector.address}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exp" className="text-gray-600 block mb-1">
            Experience
          </label>
          <input
            type="text"
            id="exp"
            value={collector.yearOfExperience}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label htmlFor="note" className="text-gray-600 block mb-1">
            Note
          </label>
          <input
            type="text"
            id="note"
            value={collector.note}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label htmlFor="test1" className="text-gray-600 block mb-1">
            Tests
          </label>
          {collector.testNames?.map((test) => (
            <input
              key={test}
              type="text"
              id="test"
              value={test}
              className="w-full border-b border-gray-300 py-1 px-2 bg-transparent mb-1"
              readOnly
            />
          ))}

          <input
            type="text"
            id="test2"
            value={collector.test2}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent mb-1"
            readOnly
          />
          <input
            type="text"
            id="test3"
            value={collector.test3}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label htmlFor="uploadedDocs" className="text-gray-600 block mb-1">
            Uploaded Documents
          </label>
          {collector.certificates && collector.certificates.length > 0 ? (
            <div>
              {collector.certificates.map((certificate, index) => (
                <img
                  key={index}
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                  className="certificate-image"
                />
              ))}
            </div>
          ) : (
            <p>No documents uploaded</p>
          )}
          {isPending ? (
            <div className="flex justify-center space-x-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAccept}
              >
                Accepct
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleReject}
              >
                Reject
              </button>
            </div>
          ) : (
            ""
          )}
          {isAccepcted ? (
            <div className="flex  justify-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecficCollector;
