import { scaleService } from "chart.js";
import React from "react";
import { useState } from "react";
import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

function GraphPie() {
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
        data: [6, 6, 6, 7],
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
      <Pie width={200} data={lData} />
    </div>
  );
}

export default GraphPie;
