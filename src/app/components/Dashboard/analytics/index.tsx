'use client';

import { useEffect, useState } from 'react';

import type {
  IAnalyticsAudienceGrowth,
  IAnalyticsEmailPerformance,
  IAnalyticsOrders,
  IAnalyticsPerformance,
  IAnalyticsRevenue,
} from '@/app/interface/dashboard';
import DashboardAPI from '@/app/services/dashboard';

import AudienceGrowth from './audienceGrowth';
import EmailPerformance from './EmailPerformance';
import {
  initialAudienceGrowth,
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
  const [audienceData, setAudienceData] = useState<IAnalyticsAudienceGrowth>(
    initialAudienceGrowth
  );

  const [emailPerformance, setEmailPerformance] = useState<
    IAnalyticsEmailPerformance[]
  >([]);

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

  const dashboardDataHandler = () => {
    DashboardAPI.getDashBoardData()
      .then(({ data }) => {
        setWorkFlowData(data?.workFlow);
        setCampaignData(data?.campaign);
        setRevenueData(data?.revenue);
        setOrdersData(data?.orders);
        setAudienceData(data?.audienceGrowth);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message || 'Something went wrong');
      });
  };

  const emailDataHandler = () => {
    DashboardAPI.grabEmailData()
      .then(({ data }) => {
        console.log('data: ', data);
        setEmailPerformance(data.emailPerformance);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message || 'Something went wrong');
      });
  };

  useEffect(() => {
    dashboardDataHandler();
    emailDataHandler();
  }, []);

  return (
    <div className="mx-30">
      <h2 className="heading mt-7">Top Performing Strategies</h2>
      <div className="flex flex-col gap-5 md:flex-row">
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
      <h2 className="heading mt-[50px]">Revenue</h2>
      <Revenue data={revenueData} />
      <h2 className="heading mt-[50px]">Orders</h2>
      <Order data={ordersData} />

      <h2 className="heading mt-[50px]">Email Performance</h2>
      <EmailPerformance data={emailPerformance} />

      <h2 className="heading mt-[50px]">Audience Growth</h2>
      <AudienceGrowth data={audienceData} />
    </div>
  );
};

export default AnalyticsDashboard;
