import React from "react";

import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);
const Circuitboard = () => {
  const dataset1 = {
    label: "Team 1",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(75,192,192,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [1, 10, 23, 34, 65, 92, 123, 235, 235, 235, 340],
  };
  const dataset2 = {
    label: "Team 2",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(192,75,192,0.4)",
    borderColor: "rgba(192,75,192,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(192,75,192,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(192,75,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [1, 20, 43, 66, 75, 92, 122, 124, 285, 295, 310],
  };

  const dataset3 = {
    label: "Team 3",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(192,192,75,0.4)",
    borderColor: "rgba(192,192,75,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(192,192,75,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(192,192,75,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [1, 92, 122, 200, 200, 250, 300, 310, 310, 320, 320],
  };

  const data = {
    labels: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [dataset1, dataset2, dataset3],
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full h-full">
        <h2 className="uppercase text-[1em] sm:text-[2em] md:text-[4em] tracking-[0.1em]">
          Circuit Board 2023
        </h2>
      </div>

      <div className="flex items-center justify-center w-auto h-full shadow-xl bg-[#EEEBFD] py-12">
        <div className="flex w-[60vh] hover:scale-110 ease-in duration-300 bg-[#dfdcec] rounded-xl">
          <Line data={data} width={200} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Circuitboard;
