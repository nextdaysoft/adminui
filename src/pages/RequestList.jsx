import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CustomSpinner } from "../components/CustomSpinner";
const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //const apiUrl="http://localhost:1200/api/v1/request/getAllRequest"
  const apiUrl =
    "https://famous-foal-khakis.cyclic.app/api/v1/request/getAllRequest";
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        //console.log(response.data.requestsWithDetails);
        setRequests(response.data.requestsWithDetails);
        setIsLoading(false);
      })
      .catch((error) => {
        //console.log(error);
        setError(error);
      });
  }, []);
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
                  <th className="text-left p-2">User Name</th>
                  <th className="text-left p-2">Collector Name</th>
                  <th className="text-left p-2">Test Names</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr
                    key={request.userId}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{request.userName}</td>
                    <td className="p-2">{request.collectorName}</td>
                    <td className="p-2">
                      {/* Mapping through the testNames array */}
                      <ul>
                        {request.testNames.map((testName, idx) => (
                          <li key={idx}>{testName}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-2">{request.status}</td>
                    <td className="p-2">{request.totalAmount}</td>
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

export default RequestList;
