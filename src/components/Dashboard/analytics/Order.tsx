import type { IAnalyticsOrders } from '@/interface/dashboard';

import BarChart from '../../Charts/barChart';
import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsOrders;
}
const Order: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h2 className="heading  mt-[25px] font-gilroy-bold leading-5 lg:mt-[50px]">
        Orders
      </h2>
      <div className="boxShadowDashBoard mt-4 flex flex-col gap-4 rounded-lg bg-white px-3.5 py-6 sm:px-7 lg:flex-row xl:gap-0">
        <div className="lg:w-[34.092%] lg:min-w-[300px]">
          <InfoBox
            className=" w-full lg:max-w-[375px]"
            title={'Total Orders'}
            info={`${data.total}`}
          />
          <div className="flex w-full flex-col justify-between  sm:flex-row lg:max-w-[375px]">
            <InfoBox
              className="w-full pt-4 sm:w-1/2 lg:pt-6"
              title={'From workflows'}
              info={`${data.workFlow}`}
            />
            <InfoBox
              className="w-full pt-4 sm:w-1/2 lg:pt-6"
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
    </>
  );
};
export default Order;
