import React from 'react';

import type { ITabs } from '@/interface/dashboard';

import { AccountSettingsTabs } from '@/enums/accountSetting';
import AccountOverview from './overview';
import AccountBilling from './billing';
import AccountProfile from './profile';
import AccountStores from './stores';
import AccountUsers from './users';

interface Props {
  activeTab: ITabs;
}

const AccountSettingsActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case AccountSettingsTabs.Overview:
      return <AccountOverview />;
    case AccountSettingsTabs.Billing:
      return <AccountBilling />;
    case AccountSettingsTabs.Profile:
      return <AccountProfile />;
    case AccountSettingsTabs.Stores:
      return <AccountStores />;
    case AccountSettingsTabs.Users:
      return <AccountUsers />;
    default:
      return <></>;
  }
};

export default AccountSettingsActiveTab;
