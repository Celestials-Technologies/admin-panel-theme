import React from 'react';

interface StatisticsProps {
  last7Days: string;
  lastMonth: string;
  last90Days: string;
}

function Statistics({ last7Days, lastMonth, last90Days }: StatisticsProps) {
  return (
    <div className="rounded-b-lg border-t border-gray400 bg-white px-3.5 py-6 lg:px-7">
      <h4 className="mb-2.5 text-base font-semibold leading-5 text-titleBlack">Stats</h4>
      <div className="font-inter flex items-center justify-between">
        <div>
          <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">LAST 7 DAYS</p>
          <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
            {last7Days}
          </p>
        </div>
        <div>
          <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">LAST MONTH</p>
          <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
            {lastMonth}
          </p>
        </div>
        <div>
          <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">LAST 90 DAYS</p>
          <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
            {last90Days}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
