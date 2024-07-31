import React from 'react';

import { DashboardTabs } from '@/enums/dashboard';
import type { ITabs } from '@/interface/dashboard';

import ActivityDashboard from './activity';
import AnalyticsDashboard from './analytics';
import CalendarDashboard from './calendar';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardTabs.Analytics:
      return <AnalyticsDashboard />;
    case DashboardTabs.Calendar:
      return <CalendarDashboard />;
    case DashboardTabs.Activity:
      return <ActivityDashboard />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
