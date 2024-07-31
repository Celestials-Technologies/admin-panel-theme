import type { IAnalyticsEmailPerformance } from '@/interface/dashboard';

import DoughnutChart from '../../Charts/DoughnutChart';
import InfoBox from './infoBox';

interface IProps {
  data: IAnalyticsEmailPerformance[];
}

const EmailPerformance: React.FC<IProps> = (props) => {
  const { data } = props;

  const infoBoxCommonProps =
    'bg-white border-dividerColor w-full flex justify-center items-center flex-col h-[170.5px]';
  return (
    <>
      <h2 className="heading mt-[25px] lg:mt-[50px] font-gilroy-bold leading-5">Email Performance</h2>
      <div className="mt-4 flex gap-5 flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/2 flex-wrap items-center justify-between md:flex-nowrap rounded-lg	overflow-hidden boxShadowDashBoard">
          <div className="w-full">
            {data
              .filter((_, index) => index < 2)
              .map((email, index) => {
                return (
                  <InfoBox
                    key={`email_performance_${index}`}
                    className={`${infoBoxCommonProps} ${index === 0 ? 'border-b-[0.5px] border-r-[0.5px]' : ''}`}
                    title={email.title}
                    info={email.info.toString()}
                    description={email.description}
                  />
                );
              })}
          </div>

          <div className="w-full">
            {data
              .filter((_, index) => index >= 2)
              .map((email, index) => {
                return (
                  <InfoBox
                    key={`email_performance_${index}`}
                    className={`${infoBoxCommonProps} ${index === 1 ? 'border-t-[0.5px] border-l-[0.5px]' : ''}`}
                    title={email.title}
                    info={email.info.toString()}
                    description={email.description}
                  />
                );
              })}
          </div>
        </div>
        <div className="lg:size-[120px]  w-full lg:w-1/2 md:h-[330px] lg:h-[341px] bg-white py-6 px-7 rounded-lg boxShadowDashBoard overflow-hidden">
          <DoughnutChart
            dataSet={[24, 22, 33]}
            labelSet={['Sent in workflows', 'Sent in campaigns', 'Available']}
          />
        </div>
      </div>
    </>
  );
};

export default EmailPerformance;
