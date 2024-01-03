import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SpecficUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //const apiUrl1=`http://localhost:1200/api/v1/admin/user/${userId}`
    const apiUrl1 = `https://famous-foal-khakis.cyclic.app/api/v1/admin/user/${userId}`;
    axios
      .get(apiUrl1)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        setError(error);
      });
  }, [userId]);
  const handleDelete = () => {
    //const apiUrl2=`http://localhost:1200/api/v1/user/delete/${userId}`
    const apiUrl2 = `https://famous-foal-khakis.cyclic.app/api/v1/user/delete/${userId}`;
    axios
      .delete(apiUrl2)
      .then((response) => {
        toast.success("User Deleted Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        navigate("/users");
      })
      .catch((error) => {
        toast.error("Error in Deleting User", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: false,
        });
        setError(error);
      });
  };
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <div className="flex items-center justify-center mb-4">
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-full h-40 object-cover opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-full"
            />
          ) : (
            <FaUser className="w-full h-40 object-cover opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-full" />
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {user.name ? user.name : "User"}
        </h2>
        <div className="mb-4">
          <label htmlFor="company" className="text-gray-600 block mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={user.email}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="text-gray-600 block mb-1">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={user.number}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="alternateNumber" className="text-gray-600 block mb-1">
            Alternate Number
          </label>
          <input
            type="text"
            id="alternateNumber"
            value={user.alternateNumber}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="note" className="text-gray-600 block mb-1">
            Note
          </label>
          <input
            type="text"
            id="note"
            value={user.note}
            className="w-full border-b border-gray-300 py-1 px-2 bg-transparent"
            readOnly
          />
        </div>
        <div className="flex  justify-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecficUser;
