'use client';

import { useState } from 'react';

import type { ITabs } from '@/app/interface/dashboard';

import AynalaticsSvg from '../../../../public/svgs/aynalaticsSvg';
import CalendarSvg from '../../../../public/svgs/CalendarSvg';
import DashboardActiveTab from '@/app/components/Workflow';
import DashboardTabs from '@/app/utils/ui/TabsUI/tabs';

const Blast = () => {
  const tabs: ITabs[] = [
    { id: 1, name: 'Overview', svg: <AynalaticsSvg /> },
    { id: 2, name: 'All Workflows', svg: <CalendarSvg /> },
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
