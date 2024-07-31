// components/Sidebar.js
import React from 'react';

import type { IMenu } from '@/interface/sidebar';

import MainMenu from './mainMenu';
import SubMenuItem from './subMenuItem';

interface Props {
  menu: IMenu;
  isCollapsed: boolean;
}
const SubMenu: React.FC<Props> = ({ menu, isCollapsed }) => {
  return (
    <div className="relative">
      <MainMenu menu={menu} isCollapsed={isCollapsed} />
      <div className="">
        {menu.subMenus &&
          menu.subMenus.map((subMenu, subIndex) => (
            <SubMenuItem
              subMenu={subMenu}
              key={`submenu-${subIndex}`}
              isCollapsed={isCollapsed}
            />
          ))}
      </div>
    </div>
  );
};
export default SubMenu;
