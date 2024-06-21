// components/Sidebar.js
import React from 'react';
import { sidebarProps } from './sidebarProps';
import SidebarHeader from './header';
import SidebarBody from './body';

const Sidebar: React.FC<sidebarProps> = ({ header, menuBody, menuFooter }) => {
  return (
    <div className=" bg-grey100 sidebar w-[220px] h-[100vh] max-w-[220px]">
      <SidebarHeader header={header} />
      <SidebarBody menuBody={menuBody} />
      <SidebarBody menuBody={menuFooter} /> {/* for footer items */}
    </div>
  );
};
export default Sidebar;
