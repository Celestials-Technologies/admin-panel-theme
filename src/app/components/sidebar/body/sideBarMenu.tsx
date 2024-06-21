// components/Sidebar.js
import React from 'react';
import { IMenu } from '@/app/interface/sidebar';
import MainMenu from './mainMenu';
import SubMenu from './subMenu';
import Link from 'next/link';

interface Props {
  menu: IMenu;
}
const SidebarMenu: React.FC<Props> = ({ menu }) => {
  return (
    <div className="flex h-14 cursor-pointer border-l-2 text-center">
      {!!menu.subMenus ? (
        <SubMenu menu={menu} />
      ) : (
        <Link href={menu.link || '#'}>
          <MainMenu menu={menu} />
        </Link>
      )}
    </div>
  );
};
export default SidebarMenu;
