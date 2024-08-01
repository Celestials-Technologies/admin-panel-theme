import React from 'react';

import type { ITabs } from '@/interface/dashboard';

import TabItem from './tabItem';

interface Props {
  activeTab: ITabs;
  setActiveTab: (val: ITabs) => void;
  tabs: ITabs[];
}
const Tabs: React.FC<Props> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className={`flex flex-wrap gap-3  bg-white md:px-30`}>
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
export default Tabs;
