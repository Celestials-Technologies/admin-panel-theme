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
      className={`font-poppins p-3 text-sm uppercase sm:px-5 ${
        activeTab.id === tab.id
          ? 'text-ryzeoBlue border-b border-ryzeoBlue '
          : ' text-textGrey'
      } `}
    >
      {tab.name}
    </button>
  </div>
  );
};
export default TabItem;
