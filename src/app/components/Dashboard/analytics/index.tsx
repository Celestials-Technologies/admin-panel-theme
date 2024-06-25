'use client';

import Orders from './Orders';
import AnalyticsPerformance from './performance';

const AnalyticsDashboard = () => {
  return (
    <div>
      Top Performing Strategies
      <AnalyticsPerformance
        heading="top performing workflows"
        subHeading="Workflow Name"
      />
      <Orders />
    </div>
  );
};

export default AnalyticsDashboard;
