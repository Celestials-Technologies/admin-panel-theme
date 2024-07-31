import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export type LineChartProps = {
  lineColor?: boolean;
  labels?: string[];
  chartData?: number[];
};

const LineChart = ({ lineColor, labels, chartData }: LineChartProps) => {
  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
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
        stepSize: 50,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        fill: true,
        backgroundColor: ({
          chart: { ctx },
        }: {
          chart: { ctx: CanvasRenderingContext2D };
        }) => {
          const bg = ctx.createLinearGradient(0, 0, 0, 400);
          if (lineColor) {
            bg.addColorStop(0, 'rgba(135, 186, 137, 0.25)');
            bg.addColorStop(0.8, 'rgba(135, 186, 137, 0.00)');
          } else {
            bg.addColorStop(0, 'rgba(234, 103, 35, 0.25)');
            bg.addColorStop(0.8, 'rgba(234, 103, 35, 0.00)');
          }
          return bg;
        },
        borderColor: lineColor ? '#87BA89' : '#EA6723',
        pointRadius: 5,
        pointBorderColor: 'transparent',
        pointBackgroundColor: `${
          chartData?.length !== 1
            ? 'transparent'
            : lineColor
              ? '#87BA8980'
              : '#EA672380'
        }`,
      },
    ],
  };

  return (
    <Line
      height={112}
      width={305}
      data={data}
      className="mr-5 w-full"
      options={options}
    />
  );
};

export default LineChart;
