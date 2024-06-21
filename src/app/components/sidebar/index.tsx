// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import { sideMenusBody, sideMenusFooter } from './sidebarMocks';
import Image from 'next/image';
import { sidebarProps } from './sidebarProps';
import SidebarMenu from './sideBarMenu';

const Sidebar: React.FC<sidebarProps> = ({ heading, headingSvg }) => {
  return (
    <div className="sidebar">
      {headingSvg && (
        <div className="ml-[22px] mr-[18px] flex h-6 w-6 self-center">
          <Image
            className="select-none object-contain"
            src={headingSvg}
            alt=""
            width={24}
            height={24}
          />
        </div>
      )}
      <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
        {heading}
      </p>
      {sideMenusBody.map((menu, index) => (
        <SidebarMenu menu={menu} key={`menu-${index}`} />
      ))}

      <div>
        {sideMenusFooter.map((menu, index) => (
          <SidebarMenu menu={menu} key={`menu-${index}`} />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
