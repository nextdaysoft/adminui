import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
const BarChart = ({ data }) => {
  const [pendingRequest, setPendingRequest] = useState(0);
  const [rejectedRequest, setRejectedRequest] = useState(0);
  const [accepctedRequest, setAccepctedRequest] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:1200/api/v1/request/getAllRequestWithStatus")
      .then((response) => {
        console.log(response.data);
        setPendingRequest(response.data.pendingRequests);
        setRejectedRequest(response.data.rejectedRequests);
        setAccepctedRequest(response.data.accepctedRequests);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ maxWidth: "650px" }}>
      <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: ["Pending Request", "Rejected", "Accepcted"],
          datasets: [
            {
              // Label for bars
              label: "total count/value",
              // Data or value of your each variable
              data: [pendingRequest, rejectedRequest, accepctedRequest],
              // Color of each bar
              backgroundColor: ["aqua", "green", "red", "yellow"],
              // Border color of each bar
              borderColor: ["aqua", "green", "red", "yellow"],
              borderWidth: 0.5,
            },
          ],
        }}
        // Height of graph
        height={400}
        options={{
          maintainAspectRatio: false,

          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false, // Remove y-axis gridlines
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false, // Remove x-axis gridlines
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
