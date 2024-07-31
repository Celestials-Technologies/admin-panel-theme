import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface Props {
  hideLegend?: boolean;
  dataSet: number[];
  labelSet: string[];
}

const DoughnutChart: React.FC<Props> = ({ dataSet, labelSet }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: labelSet,
    datasets: [
      {
        label: '# of Votes',
        data: dataSet,
        backgroundColor: ['#A2D9A4', '#DD506A', 'blue'],
        borderColor: ['#A2D9A4', '#DD506A', 'blue'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
