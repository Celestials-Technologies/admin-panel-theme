// components/Sidebar.js
import React from 'react';

import type { ITabs } from '@/app/interface/dashboard';

interface Props {
  activeTab: ITabs;
  setActiveTab: (val: ITabs) => void;
  tab: ITabs;
}
const TabItem: React.FC<Props> = ({ activeTab, setActiveTab, tab }) => {
  return (
    <button
      type="button"
      onClick={() => {
        setActiveTab(tab);
      }}
      key={tab.id}
      className={`relative flex items-center gap-2.5 border-b p-3 ${
        activeTab.id === tab.id ? 'border-ryzeoBlue' : 'border-transparent'
      }`}
    >
      <span className={`${activeTab.id === tab.id ? 'tabIsActive' : ''} `}>
        {tab.svg}
      </span>
      <p
        className={`font-poppins text-sm font-medium capitalize  ${
          activeTab.id === tab.id ? 'text-ryzeoBlue' : 'text-textGrey'
        } `}
      >
        {tab.name}
      </p>
    </button>
  );
};
export default TabItem;
