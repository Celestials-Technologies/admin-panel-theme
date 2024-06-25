'use client';

import DashboardAPI from '@/app/services/dashboard';
import Orders from './Orders';
import AnalyticsPerformance from './performance';
import { useEffect, useState } from 'react';
import { IWorkFlow } from '@/app/interface/dashboard';

const AnalyticsDashboard = () => {
  const [workFlowData, setWorkFlowData] = useState<IWorkFlow[]>([]);
  useEffect(() => {
    DashboardAPI.workFlow()
      .then(({ data }) => {
        const Package: IWorkFlow[] = data;
        setWorkFlowData(Package);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message || 'Something went wrong');
      });
  }, []);
  return (
    <div className='mx-30'>
      Top Performing Strategies
      <AnalyticsPerformance
        heading="top performing workflows"
        subHeading="Workflow Name"
        data={workFlowData}
      />
      <Orders />
    </div>
  );
};

export default AnalyticsDashboard;
