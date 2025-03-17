// components/Sidebar.js
import React from 'react';

import type { ITabs } from '@/app/interface/dashboard';
import Button from '../Button';

interface Props {
  activeTab: ITabs;
  setActiveTab: (val: ITabs) => void;
  tab: ITabs;
}
const TabItem: React.FC<Props> = ({ activeTab, setActiveTab, tab }) => {
  return (
    <Button
      type="button"
      onClick={() => {
        setActiveTab(tab);
      }}
      key={tab.id}
      className={`relative flex items-center gap-2.5 border-b p-3 font-[inter] text-sm font-medium ${
        activeTab.id === tab.id ? 'border-ryzeoBlue' : 'border-transparent'
      }`}
    >
      <span className={`${activeTab.id === tab.id ? 'tabIsActive' : ''} `}>{tab.svg}</span>
      <p
        className={`font-poppins text-sm font-medium capitalize  ${
          activeTab.id === tab.id ? 'text-ryzeoBlue' : 'text-textGrey'
        } `}
      >
        {tab.name}
      </p>
    </Button>
  );
};
export default TabItem;
