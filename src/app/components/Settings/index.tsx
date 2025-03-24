import React from 'react';

import { DashboardEmailSettingsTemplatesTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';
import ProfileSettings from './ProfileSettings';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardEmailSettingsTemplatesTabs.Overview:
      return <ProfileSettings />;
    case DashboardEmailSettingsTemplatesTabs.User:
      return <ProfileSettings />;
    case DashboardEmailSettingsTemplatesTabs.Billing:
      return <ProfileSettings />;
    case DashboardEmailSettingsTemplatesTabs.Stores:
      return <ProfileSettings />;
    case DashboardEmailSettingsTemplatesTabs.Profile:
      return <ProfileSettings />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
