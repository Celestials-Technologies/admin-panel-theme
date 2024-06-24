// components/Sidebar.js
import React from 'react';
import { IMenu } from '@/app/interface/sidebar';
import SidebarMenu from './sideBarMenu';

interface Props {
    menuBody: IMenu[];
    isCollapsed: boolean;
  }

const SidebarBody: React.FC<Props> = ({ menuBody, isCollapsed }) => {
  return (
    <div className='mt-4'>
      {menuBody.map((menu, index) => (
        <SidebarMenu menu={menu} key={`menu-${index}`} isCollapsed={isCollapsed}/>
      ))}  
    </div>
  );
};
export default SidebarBody;
