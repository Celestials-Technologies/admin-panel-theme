'use client';

import { useState } from 'react';

import type { ITabs } from '@/interface/dashboard';

import ActivitySvg from '~/svgs/activitySvg';
import AynalaticsSvg from '~/svgs/aynalaticsSvg';
import CalendarSvg from '~/svgs/CalendarSvg';
import Tabs from '@/components/Tabs/tabs';
import { AccountSettingsTabs } from '@/enums/accountSetting';
import AccountSettingsActiveTab from '@/components/AccountSettings';

const AccountSettings = () => {
  const tabs: ITabs[] = [
    { id: 1, name: AccountSettingsTabs.Overview, svg: <AynalaticsSvg /> },
    { id: 2, name: AccountSettingsTabs.Users, svg: <CalendarSvg /> },
    { id: 3, name: AccountSettingsTabs.Billing, svg: <ActivitySvg /> },
    { id: 4, name: AccountSettingsTabs.Stores, svg: <ActivitySvg /> },
    { id: 5, name: AccountSettingsTabs.Profile, svg: <ActivitySvg /> },
  ];
  const initialTab = { id: 1, name: AccountSettingsTabs.Overview, svg: '' };

  const [activeTab, setActiveTab] = useState<ITabs>(initialTab);
  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <AccountSettingsActiveTab activeTab={activeTab} />
    </div>
  );
};

export default AccountSettings;
