import type { IAnalyticsAudianceGrowth } from '@/app/interface/dashboard';

import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsAudianceGrowth;
}

const AudienceGrowth: React.FC<Props> = ({ data }) => {
  const audianceGrowthArray = [
    { id: 1, title: 'Total Subscribers', value: `${data.total}` },
    { id: 2, title: 'Newly added', value: `${data.new}` },
    { id: 3, title: 'Unsubscribed', value: `${data.unsubscribed}` },
    { id: 4, title: 'Deleted/Removed', value: `${data.deleted}` },
  ];
  const infoBoxCommonProps =
    'bg-white mt-4 w-full flex justify-center items-center flex-col rounded-lg stripeShadow300';

  return (
    <div className="flex flex-wrap items-center justify-between gap-6">
      {audianceGrowthArray.map((option) => {
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
  );
};

export default AudienceGrowth;
