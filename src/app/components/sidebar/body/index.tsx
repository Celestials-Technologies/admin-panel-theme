// components/Sidebar.js
import React from 'react';
import { IMenu } from '@/app/interface/sidebar';
import SidebarMenu from './sideBarMenu';

interface Props {
    menuBody: IMenu[];
  }

const SidebarBody: React.FC<Props> = ({ menuBody }) => {
  return (
    <React.Fragment>
      {menuBody.map((menu, index) => (
        <SidebarMenu menu={menu} key={`menu-${index}`} />
      ))}  
    </React.Fragment>
  );
};
export default SidebarBody;
