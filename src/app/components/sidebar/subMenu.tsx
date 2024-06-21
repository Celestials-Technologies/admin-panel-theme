// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IMenu } from '@/app/interface/sidebar';

interface Props {
  menu: IMenu;
}
const SubMenu: React.FC<Props> = ({ menu }) => {
  return (
    <div className="relative">
      <div className="flex w-full cursor-pointer items-center">
        <div className="ml-[22px] mr-[18px] flex h-6 w-6 self-center">
          <Image
            className="select-none object-contain"
            src={menu.image}
            alt=""
            width={24}
            height={24}
          />
        </div>
        <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
          {menu.text}
        </p>
      </div>
      <div className="ml-8">
        {menu.subMenus &&
          menu.subMenus.map((subMenu, subIndex) => (
            <Link key={`submenu-${subIndex}`} href={subMenu.link}>
              <div className="ml-[22px] mr-[18px] flex h-6 w-6 self-center">
                <Image
                  className="select-none object-contain"
                  src={subMenu.image}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
                {subMenu.text}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default SubMenu;
