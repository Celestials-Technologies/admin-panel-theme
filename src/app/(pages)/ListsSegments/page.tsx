'use client';

import { useState } from 'react';

import type { ITabs } from '@/app/interface/dashboard';

import AynalaticsSvg from '../../../../public/svgs/aynalaticsSvg';
import CalendarSvg from '../../../../public/svgs/CalendarSvg';
import DashboardActiveTab from '@/app/components/ListsSegments';
import DashboardTabs from '@/app/utils/ui/TabsUI/tabs';

const Blast = () => {
  const tabs: ITabs[] = [
    { id: 1, name: 'Lists & Segments', svg: <AynalaticsSvg /> },
    { id: 2, name: 'Subscribers', svg: <CalendarSvg /> },
    { id: 3, name: 'Filters', svg: <CalendarSvg /> },
    { id: 4, name: 'Segments Definition', svg: <CalendarSvg /> },
  ];
  const initialTab = { id: 1, name: 'Lists & Segments', svg: '' };

  const [activeTab, setActiveTab] = useState<ITabs>(initialTab);
  return (
    <div>
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <DashboardActiveTab activeTab={activeTab} />
    </div>
  );
};

export default Blast;
