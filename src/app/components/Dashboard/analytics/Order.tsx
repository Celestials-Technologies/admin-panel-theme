import type { IAnalyticsOrders } from '@/app/interface/dashboard';

import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsOrders;
}
const Order: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-lg bg-white px-30 py-4 shadow-stripeShadow300">
      <div className="max-w-[375px]">
        <InfoBox title={'Total Orders'} info={`${data.total}`} />

        <div className="flex justify-between">
          <InfoBox
            className="w-1/2"
            title={'From workflows'}
            info={`${data.workFlow}`}
          />
          <InfoBox
            className="w-1/2"
            title={'From campaigns'}
            info={`${data.campaign}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Order;
