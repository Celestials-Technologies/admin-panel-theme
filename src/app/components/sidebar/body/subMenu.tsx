// components/Sidebar.js
import React from 'react';
import { IMenu } from '@/app/interface/sidebar';
import MainMenu from './mainMenu';
import SubMenuItem from './subMenuItem';

interface Props {
  menu: IMenu;
}
const SubMenu: React.FC<Props> = ({ menu }) => {
  return (
    <div className="relative">
      <MainMenu menu={menu} />
      <div className="ml-8">
        {menu.subMenus &&
          menu.subMenus.map((subMenu, subIndex) => (
            <SubMenuItem subMenu={subMenu} key={`submenu-${subIndex}`} />
          ))}
      </div>
    </div>
  );
};
export default SubMenu;
