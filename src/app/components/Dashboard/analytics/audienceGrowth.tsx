import type { IAnalyticsAudienceGrowth } from '@/app/interface/dashboard';

import LineChart from '../../Charts/lineChart';
import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsAudienceGrowth;
}

const AudienceGrowth: React.FC<Props> = ({ data }) => {
  const audienceGrowthArray = [
    { id: 1, title: 'Total Subscribers', value: `${data.total}` },
    { id: 2, title: 'Newly added', value: `${data.new}` },
    { id: 3, title: 'Unsubscribed', value: `${data.unsubscribed}` },
    { id: 4, title: 'Deleted/Removed', value: `${data.deleted}` },
  ];
  const infoBoxCommonProps =
    'bg-white mt-4 w-full md:w-[49%] lg:w-full flex justify-center items-center flex-col rounded-lg boxShadowDashBoard h-[139px]';

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between lg:gap-3 lg:w-[auto] lg:flex-nowrap xl:gap-6">
        {audienceGrowthArray.map((option) => {
          return (
            <InfoBox
              key={option.id}
              className={infoBoxCommonProps}
              title={option.title}
              info={option.value}
            />
          );
        })}
      </div>
      <div className='w-full lg:w-[49.1%] 2xl:w-[49.5%] mt-4 boxShadowDashBoard px-5 sm:px-7 py-6 rounded-lg bg-white'>
        <LineChart
          chartData={[24, 22, 33]}
          labels={['Total Subscribers', 'Newly added', 'Unsubscribed']}
        />
      </div>
    </div>
  );
};

export default AudienceGrowth;
