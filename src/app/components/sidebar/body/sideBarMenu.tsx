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
    <div className="mx-2.5">
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
