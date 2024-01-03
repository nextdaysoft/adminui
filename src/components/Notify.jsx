import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Notify = ({ heading, apiUrl, fcmToken }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fcmToken) {
      const requestdata = {
        title,
        body: message,
        fcmToken,
      };
      axios
        .post(apiUrl, requestdata)
        .then((response) => {
          console.log(response);
          toast.success("Message Sent Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: false,
          });
          setTitle("");
          setMessage("");
        })
        .catch((error) => {
          toast.error("Error in Sending Message", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: false,
          });
          setError(error);
        });
    } else {
      const requestdata = {
        title,
        body: message,
      };
      axios
        .post(apiUrl, requestdata)
        .then((response) => {
          //console.log(response);
          toast.success("Message Sent Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: false,
          });
          setTitle("");
          setMessage("");
        })
        .catch((error) => {
          toast.error("Error in Sending Message", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: false,
          });
          setError(error);
        });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-red-300"
            placeholder="Enter title..."
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-red-300 h-32 resize-none"
            placeholder="Enter your message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Notify;
