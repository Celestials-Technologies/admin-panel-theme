/* eslint-disable import/no-extraneous-dependencies */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Filler, Tooltip);

export type BarChartProps = {
  labels?: string[];
  chartData?: number[];
  barColor?: string | undefined;
  height?: number;
  width?: number;
};

const BarChart = ({
  labels,
  chartData,
  barColor,
  height,
  width,
}: BarChartProps) => {
  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#0D2326',
        titleFontColor: '#1C1E21',
        bodyFontColor: '#1C1E21',
        borderColor: '#ffffff20',
        borderWidth: 1,
      },
    },
    responsive: true,

    x: {
      display: true,
      grid: {
        display: false,
      },
      border: { color: 'transparent', dash: [3, 5] },
      ticks: {
        color: `${'#8A8F9C'}`,
        font: {
          family: 'Poppins',
          size: 10,
          weight: '500',
        },
      },
    },
    y: {
      display: true,
      grid: {
        display: true,
        color: '#DBDDDF',
      },
      border: { color: 'transparent', dash: [3, 5] },
      ticks: {
        color: `${'#8A8F9C'}`,
        font: {
          family: 'Poppins',
          size: 10,
          weight: '500',
        },
        min: 0,
        max: 30,
        stepSize: 1,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: barColor || '#DD506A',
        borderRadius: 1,
      },
    ],
  };

  return (
    <Bar
      height={`${height}px` || 112}
      width={`${width}px` || 305}
      className="w-full"
      options={options}
      data={data}
    />
  );
};

export default BarChart;
