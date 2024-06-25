'use client';

interface Props {
  heading: string;
  subHeading: string;
}
const AnalyticsPerformance: React.FC<Props> = ({ heading, subHeading }) => {
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
    </div>
  );
};

export default AnalyticsPerformance;
