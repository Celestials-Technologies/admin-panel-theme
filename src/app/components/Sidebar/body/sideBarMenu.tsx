// components/Sidebar.js
import Link from 'next/link';
import React from 'react';

import type { IMenu } from '@/app/interface/sidebar';
import { usePathname } from 'next/navigation';


import MainMenu from './mainMenu';
import SubMenu from './subMenu';

interface Props {
  menu: IMenu;
  isCollapsed: boolean;
}
const SidebarMenu: React.FC<Props> = ({ menu, isCollapsed }) => {
  const pathname = usePathname();

  const isActive = pathname === menu.link;

  return (
    <div className={`${isCollapsed ? 'mx-1' : 'mx-2.5'}`}>
      {menu.subMenus ? (
        <SubMenu menu={menu} isCollapsed={isCollapsed} />
      ) : (
        <Link className={` block hover:bg-blue100 ${isActive ? 'bg-blue100' : ''} `} href={menu.link || '#'}>
          <MainMenu menu={menu} isCollapsed={isCollapsed} />
        </Link>
      )}
    </div>
  );
};
export default SidebarMenu;
