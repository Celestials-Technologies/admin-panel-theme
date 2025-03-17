import React from 'react';

import { DashboardProfilesTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';
import ProfilesOverview from './ProfilesOverview';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardProfilesTabs.Overview:
      return <ProfilesOverview />;
    case DashboardProfilesTabs.Email:
      return <ProfilesOverview />;
    case DashboardProfilesTabs.Activity:
      return <ProfilesOverview />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
