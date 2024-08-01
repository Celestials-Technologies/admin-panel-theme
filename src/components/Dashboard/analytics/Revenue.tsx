import type { IAnalyticsRevenue } from '@/interface/dashboard';
import BarChart from '../../Charts/barChart';
import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsRevenue;
}
const Revenue: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h2 className="heading mt-[25px] !font-gilroy-bold leading-5 lg:mt-[50px]">
        Revenue
      </h2>

      <div className="boxShadowDashBoard mt-4 flex flex-col  overflow-hidden rounded-lg bg-white pb-7 lg:flex-row lg:pb-0">
        <div className="w-full min-w-[300px] lg:w-[32.328%]">
          <InfoBox
            className="font- w-full px-5 pt-6 sm:max-w-[375px] sm:px-7"
            title={'Ryzeo Return on investment'}
            info={`${data.return}X`}
          />
          <div className="flex w-full flex-col justify-between sm:flex-row lg:max-w-[375px]">
            <InfoBox
              className="w-full px-5 pt-4 sm:w-1/2 sm:px-7 lg:pt-6"
              title={'Total Revenue'}
              info={`$${data.total}`}
            />
            <InfoBox
              className="w-full px-5 pt-4 sm:w-1/2 sm:px-7 lg:pt-6"
              title={'Revenue by Ryzeo'}
              info={`$${data.ryzeo}`}
            />
          </div>
          <div className="flex w-full flex-col justify-between sm:flex-row lg:max-w-[375px]">
            <InfoBox
              className="w-full px-5 pt-4 sm:w-1/2 sm:px-7 lg:pt-6"
              title={'From workflows'}
              info={`$${data.workFlow}`}
            />
            <InfoBox
              className="w-full px-5 pt-4 sm:w-1/2 sm:px-7 lg:pt-6"
              title={'From Campaigns'}
              info={`$${data.campaign}`}
            />
          </div>
          <InfoBox
            className="w-1/2 px-5 pt-4 sm:px-7 lg:max-w-[375px] lg:pt-6"
            title={'Spent on Ryzeo'}
            info={'$15,000'}
          />
        </div>
        <div className="App max-h-[418px] w-full max-w-[740px] px-5 pt-4 sm:pl-7 sm:pr-7 lg:max-h-[unset] lg:w-[65%] lg:max-w-[unset] lg:pt-6 xl:w-[67.9%]">
          <BarChart
            labels={['Jan 1', 'Jan 7', 'Jan 14', 'Jan 28']}
            chartData={[1, 2, 3, 100]}
            barColor={undefined}
            height={456}
            width={795}
          />
        </div>
      </div>
    </>
  );
};
export default Revenue;
