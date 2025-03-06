import React from 'react';

import { DashboardWorkflowTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';

import AllWorkflows from './AllWorkflows';
import OverviewsDashboard from './overview';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardWorkflowTabs.overview:
      return <OverviewsDashboard />;
    case DashboardWorkflowTabs.AllWorkflows:
      return <AllWorkflows />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
