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
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        // display: false,
        // color: 'rgba(217,143,7,0.1)',
      },
    },
  },
};



// const data = {
//   labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Dataset 2',
//       data: [12, 19, 3, 5, 1, 3],
//       fill: 'start',
//         backgroundColor: "#003c5a25",
//         borderColor: "#003C5A"
//     },
//   ],
// };

// const data2 = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "First dataset",
//         data: [33, 53, 85, 41, 44, 65],
//         fill: 'start',
//         backgroundColor: "#003c5a25",
//         borderColor: "#003C5A"
//       }
//     ]
//   };

export default function App(props) {

  const { data } = props

  return (<div className='w-full' >
    <Line options={options} data={data} />
  </div>)
}
