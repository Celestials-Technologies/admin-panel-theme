'use client';

import type { IAnalyticsPerformance } from '@/app/interface/dashboard';

// import ArrowIconSvg from '../../../../../public/svgs/ArrowIconSvg';
import ArrowIcon from '../../../../../public/svgs/ArrowIcon';
import ArrowRight from '../../../../../public/svgs/ArrowRight';
import Button from '@/app/utils/ui/Button';

interface Props {
  heading: string;
  subHeading: string;
  data: IAnalyticsPerformance[];
}
const AnalyticsPerformance: React.FC<Props> = ({ heading, subHeading, data }) => {
  return (
    <div className="mt-4 w-full rounded-lg bg-white px-5 py-7 shadow-stripeShadow300 sm:px-7 lg:w-1/2 lg:p-[22px]">
      <div className="flex items-center justify-between gap-1">
        <p className="cardSubTitle font-interSemiBold uppercase">{heading}</p>
        <Button className="flex items-center gap-2">
          <p className="whitespace-nowrap font-interMedium text-13 font-medium text-textGrey sm:whitespace-normal">
            View Report
          </p>
          <div className="size-[18px]">
            <ArrowRight />
          </div>
        </Button>
      </div>
      <div className="mt-6 flex justify-between bg-grey100 px-2 py-2.5">
        <div className="flex items-center gap-1">
          <p className="flex items-center font-interSemiBold text-sm font-semibold text-titleGrey">
            {subHeading}
          </p>
          <ArrowIcon />
        </div>
        <div className="flex items-center gap-1">
          <p className="font-interSemiBold text-sm font-semibold text-titleGrey">Revenue</p>
          <ArrowIcon />
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
                <p className="font-interMedium text-13 font-medium text-textGrey">{option.name}</p>
                <p className="font-interMedium text-13 font-medium text-textGrey">
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
