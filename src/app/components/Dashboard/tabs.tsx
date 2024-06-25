import { ITabs } from '@/app/interface/dashboard';
import React from 'react';
import TabItem from './tabItem';

interface Props {
  activeTab: ITabs;
  setActiveTab: (val: ITabs) => void;
  tabs: ITabs[];
}
const DashboardTabs: React.FC<Props> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className={`flex gap-3 bg-white px-30`}>
      {tabs.map((tab) => {
        return (
          <TabItem
            tab={tab}
            key={tab.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      })}
    </div>
  );
};
export default DashboardTabs;
