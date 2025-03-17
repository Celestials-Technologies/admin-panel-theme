'use client';

import { useState } from 'react';

import DashboardActiveTab from '@/app/components/Campaigns';
import DashboardTabs from '@/app/utils/ui/TabsUI/tabs';
import type { ITabs } from '@/app/interface/dashboard';

import AynalaticsSvg from '../../../../../public/svgs/aynalaticsSvg';
import CalendarSvg from '../../../../../public/svgs/CalendarSvg';

const Blast = () => {
  const tabs: ITabs[] = [
    { id: 1, name: 'Overview', svg: <AynalaticsSvg /> },
    { id: 2, name: 'Campaign Emails', svg: <CalendarSvg /> },
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

export default Blast;
