'use client';

import { IWorkFlow } from "@/app/interface/dashboard";

interface Props {
  heading: string;
  subHeading: string;
  data: IWorkFlow[];
}
const AnalyticsPerformance: React.FC<Props> = ({ heading, subHeading, data }) => {
  return (
    <div>
      <div className="flex">
        <div>{heading}</div>
        <div>View Report</div>
      </div>
      <div className="flex">
        <div>{subHeading}</div>
        <div>Revenue</div>
      </div>
      <div>
        {data.map((option, index)=> {
          return(
            <div key={`${option.name}${index}`}>
               <div>{option.name}</div>
               <div>{option.revenue}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AnalyticsPerformance;
