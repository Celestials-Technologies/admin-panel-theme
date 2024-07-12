import type { IAnalyticsRevenue } from '@/app/interface/dashboard';
import BarChart from '../../Charts/barChart';
import InfoBox from './infoBox';

interface Props {
  data: IAnalyticsRevenue;
}
const Revenue: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h2 className="heading mt-[25px] lg:mt-[50px] !font-gilroy-bold leading-5">Revenue</h2>

      <div className="mt-4 flex rounded-lg bg-white  pb-7 lg:pb-0 boxShadowDashBoard overflow-hidden flex-col lg:flex-row">
        <div className="w-full lg:w-[32.328%] min-w-[300px]">
          <InfoBox className='w-full sm:max-w-[375px] pt-6 px-5 sm:px-7 font-'
            title={'Ryzeo Return on investment'}
            info={`${data.return}X`}
          />
          <div className="flex justify-between flex-col sm:flex-row w-full lg:max-w-[375px]">
            <InfoBox
              className="w-full sm:w-1/2 pt-4 lg:pt-6 px-5 sm:px-7"
              title={'Total Revenue'}
              info={`$${data.total}`}
            />
            <InfoBox
              className="w-full sm:w-1/2 pt-4 lg:pt-6 px-5 sm:px-7"
              title={'Revenue by Ryzeo'}
              info={`$${data.ryzeo}`}
            />
          </div>
          <div className="flex justify-between flex-col sm:flex-row w-full lg:max-w-[375px]">
            <InfoBox
              className="w-full sm:w-1/2 pt-4 lg:pt-6 px-5 sm:px-7"
              title={'From workflows'}
              info={`$${data.workFlow}`}
            />
            <InfoBox
              className="w-full sm:w-1/2 pt-4 lg:pt-6 px-5 sm:px-7"
              title={'From Campaigns'}
              info={`$${data.campaign}`}
            />
          </div>
          <InfoBox className='w-1/2 lg:max-w-[375px] pt-4 lg:pt-6 px-5 sm:px-7' title={'Spent on Ryzeo'} info={'$15,000'} />
        </div>
        <div className="App w-full max-w-[740px] lg:max-w-[unset] lg:w-[65%] xl:w-[67.9%] pt-4 px-5 sm:pl-7 sm:pr-7 lg:pt-6 max-h-[418px] lg:max-h-[unset]">
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
