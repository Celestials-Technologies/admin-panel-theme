'use client';

import { useEffect, useState } from 'react';

import type {
  IAnalyticsAudianceGrowth,
  IAnalyticsOrders,
  IAnalyticsPerformance,
  IAnalyticsRevenue,
} from '@/app/interface/dashboard';
import DashboardAPI from '@/app/services/dashboard';

import AudienceGrowth from './audienceGrowth';
import {
  initialAudianceGrowth,
  initialOrders,
  initialRevenue,
} from './initials';
import Order from './Order';
import AnalyticsPerformance from './performance';
import Revenue from './Revenue';

const AnalyticsDashboard = () => {
  const [workFlowData, setWorkFlowData] = useState<IAnalyticsPerformance[]>([]);
  const [campaignData, setCampaignData] = useState<IAnalyticsPerformance[]>([]);
  const [revenueData, setRevenueData] =
    useState<IAnalyticsRevenue>(initialRevenue);
  const [ordersData, setOrdersData] = useState<IAnalyticsOrders>(initialOrders);
  const [audianceData, setAudianceData] = useState<IAnalyticsAudianceGrowth>(
    initialAudianceGrowth
  );

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
        setAudianceData(data?.audianceGrowth);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message || 'Something went wrong');
      });
  }, []);

  return (
    <div className="mx-30">
      <h2 className="heading mt-7">Top Performing Strategies</h2>
      <div className="flex gap-5">
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

      <h2 className="heading mt-7">Audience Growth</h2>
      <AudienceGrowth data={audianceData} />
    </div>
  );
};

export default AnalyticsDashboard;
