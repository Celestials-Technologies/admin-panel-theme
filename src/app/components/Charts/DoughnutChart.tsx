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
        backgroundColor: ['#A292D8', '#2EA1F9', '#FBB846', '#75E079'],
        borderColor: ['#A292D8', '#2EA1F9', '#FBB846', '#75E079'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    cutout: '75%',
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="h-[200px] w-[200px]">
        <Doughnut data={data} options={options} />
      </div>
      <div className="w-full md:w-1/3">
        <div className="flex flex-col gap-6">
          {labelSet.map((label, index) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <div className="flex items-center">
                <div
                  className="h-4 w-4 rounded-sm"
                  style={{ backgroundColor: data?.datasets[0] ? data?.datasets[0].backgroundColor?.[index] : ''  }}
                />
                <span className="text-616161 ml-2 text-xs font-normal leading-3">{label}</span>
              </div>
              <span className="text-616161 ml-1 text-xs font-medium leading-3">
                {data?.datasets[0] ? data?.datasets[0].data?.[index] : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
