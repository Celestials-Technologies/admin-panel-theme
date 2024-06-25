import type { IAnalyticsRevenue } from '@/app/interface/dashboard';

import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsRevenue;
}
const Revenue: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-lg bg-white px-30 py-4 shadow-stripeShadow300">
      <div className="max-w-[375px]">
        <InfoBox
          title={'Ryzeo Return on investment'}
          info={`${data.return}X`}
        />
        <div className="flex justify-between">
          <InfoBox
            className="w-1/2"
            title={'Total Revenue'}
            info={`$${data.total}`}
          />
          <InfoBox
            className="w-1/2"
            title={'Revenue by Ryzeo'}
            info={`$${data.ryzeo}`}
          />
        </div>
        <div className="flex justify-between">
          <InfoBox
            className="w-1/2"
            title={'From workflows'}
            info={`$${data.workFlow}`}
          />
          <InfoBox
            className="w-1/2"
            title={'From Campaigns'}
            info={`$${data.campaign}`}
          />
        </div>
        <InfoBox title={'Spent on Ryzeo'} info={'$15,000'} />
      </div>
    </div>
  );
};
export default Revenue;
