import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const CollectorCard = ({
  collectorId,
  name,
  email,
  profileImage,
  isPending,
  isRejected,
}) => {
  return (
    <Link
      to={
        isPending
          ? `/pendingCollectors/${collectorId}`
          : isRejected
          ? `/rejectedCollectors/${collectorId}`
          : `/collectors/${collectorId}`
      }
    >
      <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg hover:bg-gray-50 hover:scale-105">
        <div className="relative">
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-full h-40 object-cover opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-full"
            />
          ) : (
            <FaUser className="w-full h-40 object-cover opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-full" />
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="relative z-10 text-gray-800">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectorCard;
