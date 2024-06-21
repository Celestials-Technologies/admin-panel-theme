// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IMenu } from '@/app/interface/sidebar';
import MainMenu from './mainMenu';
import SubMenu from './subMenu';

interface Props {
  menu: IMenu;
}
const SidebarMenu: React.FC<Props> = ({ menu }) => {
  return (
    <div className="flex h-14 cursor-pointer border-l-2 text-center">
      {!menu.subMenus ? <MainMenu menu={menu} /> : <SubMenu menu={menu} />}
    </div>
  );
};
export default SidebarMenu;
