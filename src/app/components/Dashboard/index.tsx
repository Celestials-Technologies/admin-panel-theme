import { DashboardTabs } from '@/app/enums/dashboard';
import { ITabs } from '@/app/interface/dashboard';
import React from 'react';
import AnalyticsDashboard from './analytics';
import CalendarDashboard from './calendar';
import ActivityDashboard from './activity';

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
