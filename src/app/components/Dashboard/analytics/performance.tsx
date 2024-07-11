'use client';

import Image from 'next/image';

import type { IAnalyticsPerformance } from '@/app/interface/dashboard';

import ArrowIconSvg from '../../../../../public/svgs/ArrowIconSvg';

interface Props {
  heading: string;
  subHeading: string;
  data: IAnalyticsPerformance[];
}
const AnalyticsPerformance: React.FC<Props> = ({
  heading,
  subHeading,
  data,
}) => {
  return (
    <div className="mt-4 w-full rounded-lg bg-white px-5 sm:px-7 py-7 lg:p-[22px] shadow-stripeShadow300 lg:w-1/2">
      <div className="flex justify-between items-center gap-1">
        <p className="cardSubTitle uppercase font-interSemiBold">{heading}</p>
        <button className="flex items-center gap-2">
          <p className="text-13 font-medium text-textGrey whitespace-nowrap sm:whitespace-normal font-interMedium">View Report</p>
          <Image
            height={18}
            width={18}
            src={'svgs/arrowRight.svg'}
            alt="arrowRight"
          />
        </button>
      </div>
      <div className="mt-6 flex justify-between bg-grey100 px-2 py-2.5">
        <div className="flex items-center gap-1">
          <p className="flex items-center text-sm font-semibold text-titleGrey font-interSemiBold">
            {subHeading}
          </p>
          <ArrowIconSvg fillColor="#757575" />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-sm font-semibold text-titleGrey font-interSemiBold">Revenue</p>
          <ArrowIconSvg fillColor="#757575" />
        </div>
      </div>
      <div>
        {!!data.length &&
          data.map((option, index) => {
            return (
              <div
                className="flex h-[52px] items-center justify-between px-2"
                key={`${option.name}${index}`}
              >
                <p className="text-13 font-medium text-textGrey font-interMedium">
                  {option.name}
                </p>
                <p className="text-13 font-medium text-textGrey font-interMedium">
                  {option.revenue}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AnalyticsPerformance;
