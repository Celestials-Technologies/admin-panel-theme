'use client';

import DashboardAPI from '@/app/services/dashboard';
import Orders from './Orders';
import AnalyticsPerformance from './performance';
import { useEffect, useState } from 'react';
import { IWorkFlow } from '@/app/interface/dashboard';

const AnalyticsDashboard = () => {
  const [workFlowData, setWorkFlowData] = useState<IWorkFlow[]>([]);

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
      data: workFlowData,
    },
  ];

  useEffect(() => {
    DashboardAPI.getworkFlowData()
      .then(({ data }) => {
        const Package: IWorkFlow[] = data;
        setWorkFlowData(Package);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message || 'Something went wrong');
      });
  }, []);
  
  return (
    <div className="mx-30">
      Top Performing Strategies
      <div className='flex'>
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
      <Orders />
    </div>
  );
};

export default AnalyticsDashboard;
