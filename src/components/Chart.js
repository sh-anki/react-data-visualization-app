import React from "react";
import { Line } from "react-chartjs-2";

function Chart(props) {
  return (
    <div className="chart">
      <Line
        data={props.data}
        options={{
          responsive: true,
          maintainAspectRatio: false,

          legend: {
            display: true,
            position: "right"
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Readings"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Index"
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}

export default Chart;
