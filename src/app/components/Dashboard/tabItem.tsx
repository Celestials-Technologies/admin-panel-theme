// components/Sidebar.js
import { ITabs } from '@/app/interface/dashboard';
import React from 'react';

interface Props {
  activeTab: ITabs;
  setActiveTab: (val: ITabs)=> void;
  tab: ITabs;
}
const TabItem: React.FC<Props> = ({ activeTab, setActiveTab, tab }) => {
  
  return (
    <div key={tab.id} className="relative">
    <button
      onClick={() => {
        setActiveTab(tab);
      }}
      type="button"
      className={`font-poppins rounded p-3 text-sm uppercase  tracking-[-0.21px] text-[#8A8F9C] sm:px-5 ${
        activeTab.id === tab.id
          ? ' dark:bg-dark-medium bg-white text-black '
          : ' text-gray-text'
      } `}
    >
      {tab.name}
    </button>
  </div>
  );
};
export default TabItem;
