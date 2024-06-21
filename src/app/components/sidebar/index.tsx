// components/Sidebar.js
import React from 'react';
import { sidebarProps } from './sidebarProps';
import SidebarMenu from './sideBarMenu';
import SidebarHeader from './sideBarHeader';

const Sidebar: React.FC<sidebarProps> = ({ header, menuBody, menuFooter }) => {
  return (
    <div className="sidebar">
      <SidebarHeader header={header} />

      {menuBody.map((menu, index) => (
        <SidebarMenu menu={menu} key={`menu-${index}`} />
      ))}
      <br />
      <br />
      <br />

      <div>
        {menuFooter.map((menu, index) => (
          <SidebarMenu menu={menu} key={`menu-${index}`} />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
