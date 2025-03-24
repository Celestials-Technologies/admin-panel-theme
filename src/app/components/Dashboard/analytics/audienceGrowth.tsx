import type { IAnalyticsAudienceGrowth } from '@/app/interface/dashboard';
import InfoBox from './infoBox';
import LineChartCard from '@/app/utils/charts/lineChartCard';

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
      <div className="flex flex-wrap items-center justify-between lg:w-auto lg:flex-nowrap lg:gap-3 xl:gap-6">
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
      <div className="boxShadowDashBoard mt-4 w-full rounded-lg bg-white px-5 py-6 sm:px-7 lg:w-[49.1%] 2xl:w-[49.5%]">
        <LineChartCard
          title={'Total Subscribers'}
          actualValue={24}
          percentage={20}
          data={[
            {
              data: [10, 20, 70],
              lineColor: '#FBB846',
              label: 'Current Period',
            },
            {
              data: [80, 40, 20],
              lineColor: '#A292D8',
              label: 'Previous Period',
            },
          ]}
        />
      
      </div>
    </div>
  );
};

export default AudienceGrowth;
