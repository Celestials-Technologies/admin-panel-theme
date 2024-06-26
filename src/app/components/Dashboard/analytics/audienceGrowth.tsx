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
    'bg-white mt-4 w-full flex justify-center items-center flex-col rounded-lg stripeShadow300';

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 lg:flex-nowrap xl:gap-6">
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
      <div>
        <LineChart
          chartData={[24, 22, 33]}
          labels={['Total Subscribers', 'Newly added', 'Unsubscribed']}
        />
      </div>
    </div>
  );
};

export default AudienceGrowth;
