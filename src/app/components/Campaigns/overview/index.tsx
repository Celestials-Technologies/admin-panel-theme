'use client';

import Image from 'next/image';
import Statistics from './statistics';
import SubscribersCard from '@/app/utils/AreaChart';
import BarChart from '@/app/utils/BarChartCard/BarChart';
// import LineChart from '@/app/utils/lineChartCard/lineChart';
import LineChartCard from '@/app/utils/lineChartCard';

const OverviewDashboard = () => {
  const revenueMetrics = [
    {
      title: 'REVENUE GENERATED',
      value: '$120K',
      growth: '20%',
      growthType: 'positive',
      chartType: 'bar',
      stats: { last7Days: '100000', lastMonth: '100000', last90Days: '100000' },
    },
    {
      title: 'ORDERS GENERATED',
      value: '450',
      growth: '20%',
      growthType: 'positive',
      chartType: 'bar',
      stats: { last7Days: '100000', lastMonth: '100000', last90Days: '100000' },
    },
    {
      title: 'AVERAGE ORDER VALUE',
      value: '$120K',
      growth: '20%',
      growthType: 'positive',
      chartType: 'line',
      stats: { last7Days: '100000', lastMonth: '100000', last90Days: '100000' },
    },
  ];

  const engagementMetrics = [
    {
      title: 'OPEN RATE',
      value: '18%',
      growth: '20%',
      growthType: 'positive',
      chartType: 'bar',
      stats: { last7Days: '1.8%', lastMonth: '2.2%', last90Days: '2%' },
    },
    {
      title: 'CLICK RATE',
      value: '18%',
      growth: '20%',
      growthType: 'positive',
      chartType: 'bar',
      stats: { last7Days: '1.8%', lastMonth: '2.2%', last90Days: '2%' },
    },
    {
      title: 'REVENUE GENERATED',
      value: '18%',
      growth: '20%',
      growthType: 'positive',
      chartType: 'bar',
      stats: { last7Days: '2%', lastMonth: '2.2%', last90Days: '1.8%' },
    },
  ];

  const reachMetrics = [
    {
      title: 'Total emails sent',
      value: '120',
      growth: '20%',
      growthType: 'positive',
      graphImage: '/images/reach-linear-graph.png',
      chartData: [
        { value: 0 },
        { value: 85 },
        { value: 95 },
        { value: 75 },
        { value: 90 },
        { value: 85 },
        { value: 95 },
      ],
    },
    {
      title: 'Opens',
      value: '120',
      growth: '15%',
      growthType: 'negative',
      graphImage: '/images/reach-linear-graph2.png',
      chartData: [
        { value: 0 },
        { value: 75 },
        { value: 60 },
        { value: 85 },
        { value: 70 },
        { value: 90 },
        { value: 80 },
      ],
    },
    {
      title: 'Clicks',
      value: '120',
      growth: '20%',
      growthType: 'positive',
      graphImage: '/images/reach-linear-graph.png',
      chartData: [
        { value: 0 },
        { value: 45 },
        { value: 35 },
        { value: 50 },
        { value: 40 },
        { value: 55 },
        { value: 45 },
      ],
    },
    {
      title: 'Deliverability',
      value: '98%',
      growth: '20%',
      growthType: 'positive',
      graphImage: '/images/reach-linear-graph.png',
      chartData: [
        { value: 0 },
        { value: 98 },
        { value: 96 },
        { value: 99 },
        { value: 97 },
        { value: 98 },
        { value: 99 },
      ],
    },
  ];

  const audienceMetrics = [
    {
      title: 'Subscribers',
      value: '120%',
      growth: '20%',
      growthType: 'positive',
      graphImage: '/images/subscriber-graph.png',
      chartData: [
        { value: 0 },
        { value: 75 },
        { value: 70 },
        { value: 80 },
        { value: 85 },
        { value: 90 },
        { value: 95 },
      ],
    },
    {
      title: 'Unsubscribers',
      value: '120%',
      growth: '5.1%',
      growthType: 'negative',
      graphImage: '/images/unsubscriber-graph.png',
      chartData: [
        { value: 0 },
        { value: 8 },
        { value: 12 },
        { value: 7 },
        { value: 9 },
        { value: 6 },
        { value: 5 },
      ],
    },
    {
      title: 'Spam Complaints',
      value: '18%',
      growth: '20%',
      growthType: 'positive',
      graphImage: '/images/subscriber-graph.png',
      chartData: [
        { value: 0 },
        { value: 3 },
        { value: 1 },
        { value: 2 },
        { value: 1 },
        { value: 2 },
        { value: 1 },
      ],
    },
  ];

  const renderMetricCard = (metric: any, index: number, totalItems: number) => {
    return (
      <div
        key={index}
        className={`w-full md:w-6/12 md:${index === 0 ? 'pr-3.5' : index === totalItems - 1 ? 'pl-3.5' : 'px-[7px]'} lg:w-4/12 ${index > 0 ? 'mt-5 md:mt-0' : ''}`}
      >
        <div className="border-md boxShadow rounded-lg border border-gray400">
          <div className="rounded-t-lg bg-white px-2.5 pt-6 sm:px-3.5 lg:px-7">
            <p className="mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wide text-grey600">
              {metric.title}
            </p>
            <div className="flex items-end">
              <h2 className="font-gilroy-bold text-3xl leading-10 text-titleBlack">
                {metric.value}
              </h2>
              <div className="mb-2 ml-4 flex items-center">
                <span>
                  <Image
                    src={
                      metric.growthType === 'positive'
                        ? '/images/up-arrow.png'
                        : '/images/unsubscribe-down-arrow.png'
                    }
                    alt={`${metric.growthType}-arrow`}
                    width={10}
                    height={10}
                  />
                </span>
                <span
                  className={`fs-15 font-gilroySemibold ml-1 leading-4 ${metric.growthType === 'positive' ? 'text-18a558' : 'text-fd445f'}`}
                >
                  {metric.growth}
                </span>
              </div>
            </div>
            <div className="mt-4 h-48 md:mt-7">
              {/* <img className="mx-auto h-full w-full" src={metric.chartImage} alt="Graph" /> */}
              {metric.chartType === 'bar' ? (
                <BarChart
                  labels={['Jan 1', 'Jan 7', 'Jan 14', 'Jan 28']}
                  chartData={[30, 60, 22, 70]}
                  barColor={'#FBB846'}
                  label={'Revenue'}
                />
              ) : (
                <LineChartCard
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
              )}
            </div>
            <div className="mt-4 flex h-10 items-start justify-center">
              <div className="flex items-start">
                <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                  Current Period
                </span>
              </div>
              <div className="flex items-start pl-7">
                <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                  Previous Period
                </span>
              </div>
            </div>
          </div>
          {metric.stats && <Statistics {...metric.stats} />}
        </div>
      </div>
    );
  };

  const renderReachCard = (metric: any, index: number) => {
    return (
      <div
        key={index}
        className={`mx-auto w-full md:mx-0 md:w-6/12 lg:w-3/12 ${index > 0 ? 'mt-5 md:mt-0' : ''}`}
      >
        <SubscribersCard
          title={metric.title}
          actualValue={metric.value}
          percentage={metric.growth}
          data={metric.chartData}
          barColor={metric.growthType === 'positive' ? '#60A5FA' : '#FD445F'}
        />
      </div>
    );
  };

  return (
    <div className="mx-[15px] md:mx-30">
      <h2 className="heading mt-7 font-gilroy-bold leading-5">Top Performing Strategies</h2>
      <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
        <div className="md:px-1.5">
          <div>
            <h1 className="text-424242 mb-4 mt-7 font-gilroy-bold text-xl leading-5">Revenue</h1>
            <div className="font-inter flex flex-col flex-wrap items-center gap-5 md:flex-row lg:flex-nowrap">
              {revenueMetrics.map((metric, index) =>
                renderMetricCard(metric, index, revenueMetrics.length),
              )}
            </div>
          </div>

          <div>
            <h1 className="text-424242 mb-4 mt-12 font-gilroy-bold text-xl leading-5">
              Engagement
            </h1>
            <div className="font-inter flex flex-col flex-wrap items-center gap-5 md:flex-row lg:flex-nowrap">
              {engagementMetrics.map((metric, index) =>
                renderMetricCard(metric, index, engagementMetrics.length),
              )}
            </div>
          </div>

          <h1 className="text-424242 mb-4 mt-12 font-gilroy-bold text-xl leading-5">Reach</h1>
          <div className="font-inter flex flex-col flex-wrap items-center gap-5 md:flex-row lg:flex-nowrap">
            {reachMetrics.map((metric, index) => renderReachCard(metric, index))}
          </div>

          <h1 className="text-424242 mb-4 mt-12 font-gilroy-bold text-xl leading-5">
            Audience Growth
          </h1>
          <div className="font-inter flex flex-col flex-wrap items-center gap-5 md:flex-row lg:flex-nowrap">
            {audienceMetrics.map((metric, index) => renderReachCard(metric, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDashboard;
