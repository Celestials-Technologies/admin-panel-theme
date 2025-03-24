'use client';

import { useState } from 'react';

import type { ITabs } from '@/app/interface/dashboard';

import AynalaticsSvg from '../../../../public/svgs/aynalaticsSvg';
import CalendarSvg from '../../../../public/svgs/CalendarSvg';
import DashboardActiveTab from '@/app/components/Settings';
import DashboardTabs from '@/app/components/Settings/tabs';

const Settings = () => {
  const tabs: ITabs[] = [
    { id: 1, name: 'Overview', svg: <AynalaticsSvg /> },
    { id: 2, name: 'Users', svg: <CalendarSvg /> },
    { id: 3, name: 'Billing', svg: <CalendarSvg /> },
    { id: 4, name: 'Stores', svg: <CalendarSvg /> },
    { id: 5, name: 'Profile', svg: <CalendarSvg /> },

  ];
  const initialTab = { id: 1, name: 'Overview', svg: '' };

  const [activeTab, setActiveTab] = useState<ITabs>(initialTab);
  return (
    <div>
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <DashboardActiveTab activeTab={activeTab} />
    </div>
  );
};

export default Settings;
