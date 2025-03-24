import React from 'react';
import BarChart from './BarChart';
import Image from 'next/image';

interface BarChartCardProps {
  title: string;
  actualValue: number;
  percentage: number;
  label: string;
  barColor?: string;
  data: {
    data: number[];
  };
}

function BarChartCard({
  title,
  actualValue,
  percentage,
  data,
  label,
  barColor,
}: BarChartCardProps) {
  return (
    <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
      <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
        {title}
      </p>
      <div className="flex items-end">
        <h2 className="font-gilroyBold text-212121 text-3xl leading-10">{actualValue}</h2>
        <div className="mb-2 ml-4 flex items-center">
          <span>
            <Image src="/images/up-arrow.png" alt="up-arrow" width={10} height={10} />
          </span>
          <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">{percentage}</span>
        </div>
      </div>
      <div className="mt-4 h-full w-full md:mt-7">
        <BarChart
          labels={['Jan 1', 'Jan 7', 'Jan 14', 'Jan 28']}
          chartData={data.data}
          barColor={barColor || '#A292D8'}
          label={label}
        />
      </div>
    </div>
  );
}

export default BarChartCard;
