'use client';
import DashboardActiveTab from '@/app/components/Dashboard';
import DashboardTabs from '@/app/components/Dashboard/tabs';
import { ITabs } from '@/app/interface/dashboard';
import { useState } from 'react';
import Aynalatics from '../../../../public/images/svgs/aynalatics';
import Calendar from '../../../../public/images/svgs/Calendar';
import Activity from '../../../../public/images/svgs/activity';

const Dashboard = () => {
  const tabs: ITabs[] = [
    { id: 1, name: 'Analytics', svg: <Aynalatics /> },
    { id: 2, name: 'Calendar', svg: <Calendar /> },
    { id: 3, name: 'Activity', svg: <Activity /> },
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
