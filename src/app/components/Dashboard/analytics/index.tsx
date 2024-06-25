'use client';

import DashboardAPI from '@/app/services/dashboard';
import AnalyticsPerformance from './performance';
import { useEffect, useState } from 'react';
import {
  IAnalyticsOrders,
  IAnalyticsPerformance,
  IAnalyticsRevenue,
} from '@/app/interface/dashboard';
import Revenue from './Revenue';
import Order from './Order';
import { initialOrders, initialRevenue } from './initials';

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
      <div className="flex  gap-5">
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
      Revenue
      <Revenue data={revenueData} />
      Orders
      <Order data={ordersData} />
    </div>
  );
};

export default AnalyticsDashboard;
