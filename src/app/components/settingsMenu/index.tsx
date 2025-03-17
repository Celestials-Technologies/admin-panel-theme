import React from 'react';

import { DashboardSettingsTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';
import SettingsOverview from './SettingsOverview';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardSettingsTabs.Overview:
      return <SettingsOverview />;
    case DashboardSettingsTabs.Users:
      return <SettingsOverview />;
    case DashboardSettingsTabs.Billing:
      return <SettingsOverview />;
    case DashboardSettingsTabs.Stores:
      return <SettingsOverview />;
    case DashboardSettingsTabs.Profile:
      return <SettingsOverview />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
