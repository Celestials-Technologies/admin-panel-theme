'use client';

interface Props {
  heading: string;
  subHeading: string;
}
const AnalyticsPerformance: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <div>
      <div>
        <div>{heading}</div>
        <div>View Report</div>
      </div>
      <div>
        <div>{subHeading}</div>
        <div>View Report</div>
      </div>
    </div>
  );
};

export default AnalyticsPerformance;
