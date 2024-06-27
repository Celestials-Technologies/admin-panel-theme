import type { IAnalyticsRevenue } from '@/app/interface/dashboard';

import BarChart from '../../Charts/barChart';
import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsRevenue;
}
const Revenue: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-4 flex rounded-lg bg-white  px-30 pb-7 lg:pb-0 boxShadowDashBoard overflow-hidden flex-col lg:flex-row">
      <div className="w-full lg:w-[34.092%] min-w-[300px]">
        <InfoBox className='w-full max-w-[375px] pt-6'
          title={'Ryzeo Return on investment'}
          info={`${data.return}X`}
        />
        <div className="flex justify-between  w-full lg:max-w-[375px]">
          <InfoBox
            className="w-1/2 pt-6"
            title={'Total Revenue'}
            info={`$${data.total}`}
          />
          <InfoBox
            className="w-1/2 pt-6"
            title={'Revenue by Ryzeo'}
            info={`$${data.ryzeo}`}
          />
        </div>
        <div className="flex justify-between  w-full lg:max-w-[375px]">
          <InfoBox
            className="w-1/2 pt-6"
            title={'From workflows'}
            info={`$${data.workFlow}`}
          />
          <InfoBox
            className="w-1/2 pt-6"
            title={'From Campaigns'}
            info={`$${data.campaign}`}
          />
        </div>
        <InfoBox className='w-1/2 lg:max-w-[375px] pt-6' title={'Spent on Ryzeo'} info={'$15,000'} />
      </div>
      <div className="App w-full lg:w-auto xl:w-[65.9%] pt-4 lg:pt-6 max-h-[382px] lg:max-h-[unset]">
        <BarChart
          labels={['Jan 1', 'Jan 7', 'Jan 14', 'Jan 28']}
          chartData={[1, 2, 3, 100]}
          barColor={undefined}
          height={419}
          width={785}
        />
      </div>
    </div>
  );
};
export default Revenue;
