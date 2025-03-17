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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export type LineChartProps = {
  datasets: Array<{
    data: number[];
    lineColor: string;
    label: string;
  }>;
  xAxisValues?: string[];
  yAxisValues?: number[];
};

const LineChart = ({ datasets, yAxisValues = [0, 20, 40, 60, 80, 100] }: LineChartProps) => {
  // Calculate min and max once to avoid recursive calculations
  const minValue = Math.min(...yAxisValues);
  const maxValue = Math.max(...yAxisValues);
  const stepSize = Math.ceil((maxValue - minValue) / 5);
  
  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: 'bottom' as const,
        align: 'center' as const,
        labels: {
          boxWidth: 8,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            family: 'Poppins',
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          color: '#F0F0F0',
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          color: '#8A8F9C',
          font: {
            family: 'Poppins',
            size: 12,
          },
        },
      },
      y: {
        display: true,
        position: 'left' as const,
        grid: {
          display: true,
          color: '#F0F0F0',
          drawBorder: false,
        },
        ticks: {
          color: '#8A8F9C',
          font: {
            family: 'Poppins',
            size: 12,
          },
          callback: function (value: number) {
            return value + '%';
          },
          stepSize: stepSize,
        },
        min: minValue,
        max: maxValue,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      fill: false,
      pointBackgroundColor: dataset.lineColor,
      borderColor: dataset.lineColor,
      pointRadius: 4,
      pointBorderColor: dataset.lineColor,
      pointBorderWidth: 2,
      tension: 0.4,
    })),
  };

  return <Line height={200} data={data} options={options as any} />;
};

export default LineChart;
