'use client';

import { IWorkFlow } from "@/app/interface/dashboard";
import Image from "next/image";
import ArrowIconSvg from "../../../../../public/svgs/ArrowIconSvg";

interface Props {
  heading: string;
  subHeading: string;
  data: IWorkFlow[];
}
const AnalyticsPerformance: React.FC<Props> = ({ heading, subHeading, data }) => {
  return (
    <div className="w-1/2 bg-white shadow-stripeShadow300 rounded-lg mt-4 p-7">
      <div className="flex justify-between">
        <p className="uppercase cardSubTitle">{heading}</p>
        <button className="flex items-center gap-2">
          <p className="text-13 font-medium text-textGrey">
            View Report
          </p>
          <Image height={18} width={18} src={'svgs/arrowRight.svg'} alt="arrowRight" />
        </button>
      </div>
      <div className="flex mt-6 justify-between px-2 py-2.5 bg-grey100">
        <div className="flex items-center gap-1">
          <p className="text-titleGrey flex items-center text-sm font-semibold">{subHeading}</p>
          <ArrowIconSvg fillColor='#757575' />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-titleGrey text-sm font-semibold">Revenue</p>
          <ArrowIconSvg fillColor='#757575' />
        </div>
      </div>
      <div>
        {data.map((option, index) => {
          return (
            <div className="flex justify-between items-center px-2 h-[52px]" key={`${option.name}${index}`}>
              <p className="font-medium text-13 text-textGrey">{option.name}</p>
              <p className="font-medium text-13 text-textGrey">{option.revenue}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AnalyticsPerformance;
