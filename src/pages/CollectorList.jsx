import React, { useState, useEffect } from "react";
import CollectorCard from "../components/CollectorCard";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { CustomSpinner } from "../components/CustomSpinner";
const CollectorList = () => {
  const [collectors, setCollectors] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const userType = "collector";
  useEffect(() => {
    // Axios GET request to fetch data
    //const apiUrl1="http://localhost:1200/api/v1/admin/allCollectors"
    const apiUrl1 =
      "https://famous-foal-khakis.cyclic.app/api/v1/admin/allCollectors";
    axios
      .get(apiUrl1)
      .then((response) => {
        //  console.log(response.data.collectors);
        setCollectors(response.data.collectors);
        setIsLoading(false);
      })
      .catch((err) => {
        // Handle error
        setError(err);
      });
  }, []);

  const handleDelete = (collectorId) => {
    // Modified to return a function
    //const apiUrl2=`http://localhost:1200/api/v1/collector/delete/${collectorId}`
    const apiUrl2 = `https://famous-foal-khakis.cyclic.app/api/v1/collector/delete/${collectorId}`;
    return () => {
      axios
        .delete(apiUrl2)
        .then((response) => {
          toast.success("Collector Deleted Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: false,
          });
          // Assuming you have access to the navigate function here
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
                  <th className="text-left p-2">Id</th>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Number</th>
                  <th className="text-left p-2">Gender</th>
                  <th className="text-left p-2">Experience</th>
                  <th className="text-left p-2">Note</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {collectors.map((collector, index) => (
                  <tr
                    key={collector._id}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{collector.fullName}</td>
                    <td className="p-2">{collector.email}</td>
                    <td className="p-2">{collector.phoneNumber}</td>
                    <td className="p-2">{collector.gender}</td>
                    <td className="p-2">{collector.yearOfExperience}</td>
                    <td className="p-2">{collector.note}</td>
                    <td className="p-2 flex gap-2">
                      <Link
                        to={`/collectors/${collector._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
                      >
                        View More
                      </Link>
                      <Link
                        // to={`/notify/${collector._id}`}
                        to={`/notify/${collector._id}?userType=${userType}`}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
                      >
                        Send Notification
                      </Link>
                      <button
                        onClick={handleDelete(collector._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md shadow-md"
                      >
                        <FaTrashAlt />
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

export default CollectorList;
