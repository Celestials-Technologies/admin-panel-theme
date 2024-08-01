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
      <h2 className="heading mt-[25px] font-gilroy-bold leading-5 lg:mt-[50px]">
        Email Performance
      </h2>
      <div className="mt-4 flex flex-col gap-5 lg:flex-row">
        <div className="boxShadowDashBoard flex w-full flex-wrap items-center justify-between overflow-hidden rounded-lg	md:flex-nowrap lg:w-1/2">
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
                    className={`${infoBoxCommonProps} ${index === 1 ? 'border-l-[0.5px] border-t-[0.5px]' : ''}`}
                    title={email.title}
                    info={email.info.toString()}
                    description={email.description}
                  />
                );
              })}
          </div>
        </div>
        <div className="boxShadowDashBoard  w-full overflow-hidden rounded-lg bg-white px-7 py-6 md:h-[330px] lg:size-[120px] lg:h-[341px] lg:w-1/2">
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
