'use client';
import DashboardActiveTab from '@/app/components/Dashboard';
import DashboardTabs from '@/app/components/Dashboard/tabs';
import { ITabs } from '@/app/interface/dashboard';
import { useState } from 'react';
import AynalaticsSvg from '../../../../public/svgs/aynalaticsSvg';
import CalendarSvg from '../../../../public/svgs/CalendarSvg';
import ActivitySvg from '../../../../public/svgs/activitySvg';

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
      <DashboardTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <DashboardActiveTab activeTab={activeTab}/>
    </div>
  );
};

export default Dashboard;
