import React from 'react';

import { DashboardCampaignTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';

import CampaignEmailsDashboard from './campaignEmails';
import OverviewsDashboard from './overview';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardCampaignTabs.overview:
      return <OverviewsDashboard />;
    case DashboardCampaignTabs.campaignEmails:
      return <CampaignEmailsDashboard />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
