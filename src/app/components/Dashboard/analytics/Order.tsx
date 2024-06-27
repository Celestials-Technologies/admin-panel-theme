import type { IAnalyticsOrders } from '@/app/interface/dashboard';

import BarChart from '../../Charts/barChart';
import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsOrders;
}
const Order: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-4 flex rounded-lg bg-white px-30 py-4 shadow-stripeShadow300">
      <div className="max-w-[375px]">
        <InfoBox title={'Total Orders'} info={`${data.total}`} />

        <div className="flex justify-between">
          <InfoBox
            className="w-1/2 pt-6"
            title={'From workflows'}
            info={`${data.workFlow}`}
          />
          <InfoBox
            className="w-1/2 pt-6"
            title={'From campaigns'}
            info={`${data.campaign}`}
          />
        </div>
      </div>
      <div className="App">
        <BarChart
          labels={['Jan 1', 'Jan 7', 'Jan 14', 'Jan 28']}
          chartData={[1, 2, 3, 100]}
          barColor={undefined}
        />
      </div>
    </div>
  );
};
export default Order;
