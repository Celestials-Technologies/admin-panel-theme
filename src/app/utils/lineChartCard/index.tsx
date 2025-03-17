import React from 'react';
import LineChart from './lineChart';

interface LineChartCardProps {
  title?: string;
  actualValue?: number;
  percentage?: number;
  data: {
    data: number[];
    lineColor: string;
    label: string;
  }[];
  xAxisValues?: string[];
}

function LineChartCard({ title, actualValue, percentage, data }: LineChartCardProps) {
  return (
    <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
      {title && (
        <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
          {title}
        </p>
      )}
      <div className="flex items-end">
        {actualValue && (
          <h2 className="font-gilroyBold text-212121 text-3xl leading-10">{actualValue}%</h2>
        )}
        {percentage && (
          <div className="mb-2 ml-4 flex items-center">
            <span>
              <img src="images/up-arrow.png" />
            </span>
            <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
              {percentage}%
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 md:mt-7">
        <LineChart datasets={data} />
      </div>
      <div className="mt-4 flex items-start justify-center sm:mt-7">
        <div className="flex items-start">
          <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
          <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
            Current Period
          </span>
        </div>
        <div className="flex items-start pl-7">
          <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
          <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
            Previous Period
          </span>
        </div>
      </div>
    </div>
  );
}

export default LineChartCard;
