import DoughnutChart from '@/app/components/Charts/DoughnutChart';
import React from 'react';

interface DoughnutChartCardProps {
  title: string;
  dataSet: string[] | number[];
  labelSet: string[];
  percentage: number;
  total: string | number;
}

function DoughnutChartCard({
  title,
  dataSet,
  labelSet,
  percentage,
  total,
}: DoughnutChartCardProps) {
  return (
    <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-5 xl:px-7">
      <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
        {title}
      </p>
      <div className="flex items-end">
        <h2 className="font-gilroyBold text-212121 text-3xl leading-10">{total}</h2>
        <div className="mb-2 ml-4 flex items-center">
          <span>
            <img src="images/up-arrow.png" />
          </span>
          <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pt-3 sm:flex-row sm:pt-6">
        <div className="h-auto w-full pr-2">
          {/* <img className="w-full" src="images/pie-chart.png" alt="Chart" /> */}
          <DoughnutChart dataSet={dataSet.map(Number)} labelSet={labelSet} />
        </div>
      </div>
    </div>
  );
}

export default DoughnutChartCard;
