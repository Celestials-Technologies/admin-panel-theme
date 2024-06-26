import InfoBox from './infoBox';
import type { IAnalyticsEmailPerformance } from '@/app/interface/dashboard';

interface IProps {
  data: IAnalyticsEmailPerformance[];
}

const EmailPerformance: React.FC<IProps> = (props) => {
  const { data } = props;

  const infoBoxCommonProps =
    'bg-white border-[0.5px] border-dividerColor w-full flex justify-center items-center flex-col stripeShadow300';
  return (
    <div className="mt-4">
      <div className="flex w-1/2 flex-wrap items-center justify-between md:flex-nowrap">
        <div className="w-full">
          {data
            .filter((_, index) => index < 2)
            .map((email: any, index: number) => {
              return (
                <InfoBox
                  key={`email_performance_` + index}
                  className={infoBoxCommonProps}
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
            .map((email: any, index: number) => {
              return (
                <InfoBox
                  key={`email_performance_` + index}
                  className={infoBoxCommonProps}
                  title={email.title}
                  info={email.info.toString()}
                  description={email.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default EmailPerformance;
