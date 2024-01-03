import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const UserCard = ({ userId, name, email, profileImage }) => {
  return (
    <Link to={`/users/${userId}`}>
      <div className="max-w-xs mx-auto overflow-hidden shadow-md">
        <table className="w-full table-auto">
          <tbody>
            <tr className="bg-gray-100">
              <td className="w-1/4 p-2 font-bold">Name:</td>
              <td className="p-2">{name}</td>
            </tr>
            <tr>
              <td className="w-1/4 p-2 font-bold">Email:</td>
              <td className="p-2">{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Link>
  );
};

export default UserCard;
