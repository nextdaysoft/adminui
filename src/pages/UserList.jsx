import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BarChart from "../components/BarChart";
import { CustomSpinner } from "../components/CustomSpinner";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const userType = "user";
  useEffect(() => {
    //const apiUrl1="http://localhost:1200/api/v1/admin/allUsers"
    const apiUrl1 =
      "https://famous-foal-khakis.cyclic.app/api/v1/admin/allUsers";
    axios
      .get(apiUrl1)
      .then((response) => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleDelete = (userId) => () => {
    // Modified to return a function
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
  const handleNavigation = () => {
    navigate(``);
  };
  return (
    <>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <div className="w-full ">
          <div className="max-w-screen-lg w-full overflow-hidden shadow-md">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-2">#</th>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Number</th>
                  <th className="text-left p-2">Note</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.userId}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.number}</td>
                    <td className="p-2">{user.note}</td>
                    <td className="p-2 flex gap-2">
                      <Link
                        to={`/users/${user._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
                      >
                        View More
                      </Link>
                      <Link
                        // to={`/notify/${user._id}`}
                        to={`/notify/${user._id}?userType=${userType}`}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
                      >
                        Send Notification
                      </Link>
                      <button
                        onClick={handleDelete(user._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
