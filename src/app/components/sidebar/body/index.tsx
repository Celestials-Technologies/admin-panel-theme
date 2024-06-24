// components/Sidebar.js
import React from 'react';
import { IMenu } from '@/app/interface/sidebar';
import SidebarMenu from './sideBarMenu';

interface Props {
    menuBody: IMenu[];
  }

const SidebarBody: React.FC<Props> = ({ menuBody }) => {
  return (
    <div className='mt-4'>
      {menuBody.map((menu, index) => (
        <SidebarMenu menu={menu} key={`menu-${index}`} />
      ))}  
    </div>
  );
};
export default SidebarBody;
