import React, {useEffect, useState} from 'react';

import { Line } from 'react-chartjs-2';

// import faker from 'faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: [12, 19, 3, 5, 1, 3],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235)',
      fill: true,
    },
  ],
};

const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: 'start',
        backgroundColor: "#003c5a25",
        borderColor: "#003C5A"
      }
    ]
  };

export default function App() {

    const [cl, setcl] = useState(false)

  return (<div onClick={() => setcl(true)}>
      <Line options={options} data={cl ? data2 : data}  />;
  </div>)
}
