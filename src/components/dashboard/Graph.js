import { scaleService } from "chart.js";
import React from "react";
import { useState } from "react";
import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

function Graph() {
  var options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
          },
        },
      ],
    },
  };
  const [lData, setLdata] = useState({
    labels: ["Travellers", "Taxi Drivers", "Guides", "hotels"],
    datasets: [
      {
        label: "Users",
        data: [25, 15, 35, 60],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(235, 225, 52, 0.7)",
          "rgba(73, 235, 52, 0.7)",
          "rgba(52, 104, 235, 0.7)",
        ],
      },
    ],
  });
  return (
    <div>
      <Bar options={options} data={lData} />
    </div>
  );
}

export default Graph;
