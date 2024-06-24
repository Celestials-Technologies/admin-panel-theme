'use client';
import DashboardTabs from '@/app/components/Dashboard/tabs';
import { ITabs } from '@/app/interface/dashboard';
import { useState } from 'react';

const Dashboard = () => {
  const tabs: ITabs[] = [
    { id: 1, name: 'Analytics', svg: '' },
    { id: 2, name: 'Calender', svg: '' },
    { id: 3, name: 'Activity', svg: '' },
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
    </div>
  );
};

export default Dashboard;
