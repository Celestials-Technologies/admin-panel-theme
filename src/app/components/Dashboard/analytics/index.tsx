'use client';

import { useEffect, useState } from 'react';

import type {
  IAnalyticsOrders,
  IAnalyticsPerformance,
  IAnalyticsRevenue,
} from '@/app/interface/dashboard';
import DashboardAPI from '@/app/services/dashboard';

import AudienceGrowth from './audienceGrowth';
import { initialOrders, initialRevenue } from './initials';
import Order from './Order';
import AnalyticsPerformance from './performance';
import Revenue from './Revenue';
import EmailPerformance from './EmailPerformance';

const AnalyticsDashboard = () => {
  const [workFlowData, setWorkFlowData] = useState<IAnalyticsPerformance[]>([]);
  const [campaignData, setCampaignData] = useState<IAnalyticsPerformance[]>([]);
  const [revenueData, setRevenueData] =
    useState<IAnalyticsRevenue>(initialRevenue);
  const [ordersData, setOrdersData] = useState<IAnalyticsOrders>(initialOrders);

  const topPerformanceArray = [
    {
      index: 1,
      heading: 'top performing workflows',
      subHeading: 'Workflow Name',
      data: workFlowData,
    },
    {
      index: 2,
      heading: 'top performing campaigns',
      subHeading: 'Campaign Name',
      data: campaignData,
    },
  ];

  useEffect(() => {
    DashboardAPI.getDashBoardData()
      .then(({ data }) => {
        setWorkFlowData(data?.workFlow);
        setCampaignData(data?.campaign);
        setRevenueData(data?.revenue);
        setOrdersData(data?.orders);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message || 'Something went wrong');
      });
  }, []);

  return (
    <div className="mx-30">
      <h2 className="heading mt-7">Top Performing Strategies</h2>
      <div className="flex gap-5 md:flex-row flex-col">
        {topPerformanceArray.map((option) => {
          return (
            <AnalyticsPerformance
              key={option.index}
              heading={option.heading}
              subHeading={option.subHeading}
              data={option.data}
            />
          );
        })}
      </div>
      <h2 className="heading mt-7">Revenue</h2>
      <Revenue data={revenueData} />
      <h2 className="heading mt-7">Orders</h2>
      <Order data={ordersData} />

      <h2 className="heading mt-7">Email Performance</h2>
      <EmailPerformance />

      <h2 className="heading mt-7">Audience Growth</h2>
      <AudienceGrowth />
    </div>
  );
};

export default AnalyticsDashboard;
