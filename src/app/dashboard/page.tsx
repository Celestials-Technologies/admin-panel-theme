'use client';

import { useState } from 'react';

import DashboardActiveTab from '@/components/Dashboard';
import type { ITabs } from '@/interface/dashboard';

import Tabs from '@/components/Tabs/tabs';
import ActivitySvg from '~/svgs/activitySvg';
import AynalaticsSvg from '~/svgs/aynalaticsSvg';
import CalendarSvg from '~/svgs/CalendarSvg';

const Dashboard = () => {
  const tabs: ITabs[] = [
    { id: 1, name: 'Analytics', svg: <AynalaticsSvg /> },
    { id: 2, name: 'Calendar', svg: <CalendarSvg /> },
    { id: 3, name: 'Activity', svg: <ActivitySvg /> },
  ];
  const initialTab = { id: 1, name: 'Analytics', svg: '' };

  const [activeTab, setActiveTab] = useState<ITabs>(initialTab);
  return (
    <div>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <DashboardActiveTab activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;
