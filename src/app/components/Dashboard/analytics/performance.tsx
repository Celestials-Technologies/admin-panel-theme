'use client';

import { IAnalyticsPerformance } from '@/app/interface/dashboard';
import Image from 'next/image';
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
    <div className="mt-4 w-1/2 rounded-lg bg-white p-7 shadow-stripeShadow300">
      <div className="flex justify-between">
        <p className="cardSubTitle uppercase">{heading}</p>
        <button className="flex items-center gap-2">
          <p className="text-13 font-medium text-textGrey">View Report</p>
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
          <p className="flex items-center text-sm font-semibold text-titleGrey">
            {subHeading}
          </p>
          <ArrowIconSvg fillColor="#757575" />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-sm font-semibold text-titleGrey">Revenue</p>
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
                <p className="text-13 font-medium text-textGrey">
                  {option.name}
                </p>
                <p className="text-13 font-medium text-textGrey">
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
