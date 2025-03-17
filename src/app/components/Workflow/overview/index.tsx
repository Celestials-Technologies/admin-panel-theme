'use client';

import SubscribersCard from '@/app/utils/AreaChart';
import BarChartCard from '@/app/utils/BarChartCard';
import DoughnutChartCard from '@/app/utils/DoughnutChartCard';
import LineChartCard from '@/app/utils/lineChartCard';

const OverviewDashboard = () => {
  return (
    <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
      <div className="md:px-1.5">
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-7 text-xl leading-5">
            Conversion Report
          </h1>
          <div className="font-inter flex flex-col items-center md:flex-row">
            <div className="w-full md:w-6/12 md:pr-2.5">
              <DoughnutChartCard
                title="Ryzeo Total Number of Sales"
                total={'1979'}
                percentage={20}
                dataSet={[24, 22, 33, 20]}
                labelSet={['Sent in workflows', 'Sent in campaigns', 'Available', 'Sales']}
              />
            </div>
            <div className="mt-5 w-full md:mt-0 md:w-6/12 md:pl-2.5">
              <DoughnutChartCard
                title="Ryzeo Total Sales"
                total={'$1979'}
                percentage={20}
                dataSet={['40', '30', '12', '11']}
                labelSet={['Sent in workflows', 'Sent in campaigns', 'Available', 'Sales']}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-12 text-xl leading-5">Email Report</h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="w-full md:w-6/12 md:pr-4 lg:w-4/12">
              <LineChartCard
                title="Open Rate"
                actualValue={18}
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
            <div className="mt-5 w-full md:mt-0 md:w-6/12 md:px-2 lg:w-4/12">
              <LineChartCard
                title="Click Rate"
                actualValue={18}
                percentage={20}
                data={[
                  {
                    data: [10, 20, 50],
                    lineColor: '#FBB846',
                    label: 'Current Period',
                  },
                  {
                    data: [60, 40, 20],
                    lineColor: '#A292D8',
                    label: 'Previous Period',
                  },
                ]}
              />
            </div>
            <div className="mt-5 w-full md:w-6/12 md:pr-4 lg:mt-0 lg:w-4/12 lg:pl-4 lg:pr-0">
              <LineChartCard
                title="Conversion rate"
                actualValue={18}
                percentage={20}
                data={[
                  {
                    data: [10, 20, 50],
                    lineColor: '#FBB846',
                    label: 'Current Period',
                  },
                  {
                    data: [44, 12, 70],
                    lineColor: '#A292D8',
                    label: 'Previous Period',
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-12 text-xl leading-5">Orders</h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="w-full md:w-6/12 md:pr-4 lg:w-4/12">
              <BarChartCard
                title="Orders"
                actualValue={18}
                percentage={20}
                data={{ data: [1, 2, 3, 100] }}
                label="Current Period"
              />
            </div>
            <div className="mt-5 w-full md:mt-0 md:w-6/12 md:px-2 lg:w-4/12">
              <BarChartCard
                title="Click Rate"
                actualValue={18}
                percentage={20}
                data={{ data: [8, 32, 3, 100] }}
                label="Current Period"
              />
            </div>
            <div className="mt-5 w-full md:w-6/12 md:pr-4 lg:mt-0 lg:w-4/12 lg:pl-4 lg:pr-0">
              <LineChartCard
                title="Conversion rate"
                actualValue={18}
                percentage={20}
                data={[
                  {
                    data: [10, 20, 50],
                    lineColor: '#FBB846',
                    label: 'Current Period',
                  },
                  {
                    data: [44, 12, 70],
                    lineColor: '#A292D8',
                    label: 'Previous Period',
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-12 text-xl leading-5">
            Audience Growth
          </h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="mx-auto w-full md:mx-0 md:w-6/12 lg:w-4/12  lg:pr-0">
              {/* <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white pl-3.5 pt-6 lg:pl-7">
                <div className="relative flex items-end justify-between">
                  <div className="mb-6">
                    <p className="text-757575 mb-4 text-xs font-semibold uppercase leading-4 tracking-wider">
                      Subscribers
                    </p>
                    <h2 className="fs-28 font-gilroyBold text-424242 leading-7">120%</h2>
                    <div className="mt-2.5 flex items-center">
                      <span>
                        <img src="images/up-arrow.png" />
                      </span>
                      <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                        20%
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-0 lg:w-40 xl:w-60">
                    <img className="w-full" src="images/subscriber-graph.png" />
                  </div>
                </div>
              </div> */}
              <SubscribersCard
                title="Subscribers"
                actualValue={120}
                percentage={20}
                data={[
                  { value: 0 },
                  { value: 60 },
                  { value: 75 },
                  { value: 100 },
                  { value: 90 },
                  { value: 95 },
                  { value: 100 },
                ]}
                barColor="#60A5FA"
                growthType="+"
              />
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:mt-0 md:w-6/12 md:pl-5 lg:mx-6 lg:w-4/12 lg:pl-0">
              <SubscribersCard
                title="Unsubscribers"
                actualValue={120}
                percentage={5.1}
                data={[
                  { value: 0 },
                  { value: 100 },
                  { value: 75 },
                  { value: 33 },
                  { value: 90 },
                  { value: 31 },
                  { value: 31 },
                ]}
                barColor="#FD445F"
              />
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:w-6/12 lg:mt-0 lg:w-4/12">
              <SubscribersCard
                title="Spam complaints"
                actualValue={140}
                percentage={9.3}
                data={[
                  { value: 0 },
                  { value: 80 },
                  { value: 65 },
                  { value: 50 },
                  { value: 60 },
                  { value: 75 },
                  { value: 90 },
                ]}
                barColor="#60A5FA"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDashboard;
