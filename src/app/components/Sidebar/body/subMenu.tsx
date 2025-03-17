// components/Sidebar.js
import React, { useState } from 'react';

import type { IMenu } from '@/app/interface/sidebar';

import MainMenu from './mainMenu';
import SubMenuItem from './subMenuItem';

interface Props {
  menu: IMenu;
  isCollapsed: boolean;
}

const SubMenu: React.FC<Props> = ({ menu, isCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (menu.subMenus) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className={`cursor-pointer  ${menu.subMenus ? 'hover:bg-blue100' : ''}`}
      >
        <MainMenu
          menu={menu}
          isCollapsed={isCollapsed}
          hasSubMenu={!!menu.subMenus}
          isOpen={isOpen}
        />
      </div>
      {isOpen && menu.subMenus && (
        <div className="px-3 transition-all duration-200 ease-in-out">
          {menu.subMenus.map((subMenu, subIndex) => (
            <SubMenuItem subMenu={subMenu} key={`submenu-${subIndex}`} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
