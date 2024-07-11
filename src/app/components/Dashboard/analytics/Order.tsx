import type { IAnalyticsOrders } from '@/app/interface/dashboard';

import BarChart from '../../Charts/barChart';
import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsOrders;
}
const Order: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-4 flex-col lg:flex-row flex rounded-lg bg-white px-3.5 sm:px-7 py-6 boxShadowDashBoard gap-4 xl:gap-0">
      <div className="lg:w-[34.092%] lg:min-w-[300px]">
        <InfoBox className=' w-full lg:max-w-[375px]' title={'Total Orders'} info={`${data.total}`} />

        <div className="flex flex-col sm:flex-row justify-between  w-full lg:max-w-[375px]">
          <InfoBox
            className="w-full sm:w-1/2 pt-4 lg:pt-6"
            title={'From workflows'}
            info={`${data.workFlow}`}
          />
          <InfoBox
            className="w-full sm:w-1/2 pt-4 lg:pt-6"
            title={'From campaigns'}
            info={`${data.campaign}`}
          />
        </div>
      </div>
      <div className="App w-fulls h-full lg:h-[unset] lg:w-[65.8%]">
        <BarChart
          labels={['Jan 1', 'Jan 7', 'Jan 14', 'Jan 28']}
          chartData={[1, 2, 3, 100]}
          barColor={undefined}
          height={289}
          width={785}
        />
      </div>
    </div>
  );
};
export default Order;
