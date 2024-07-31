// components/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { ISubMenu } from '@/interface/sidebar';

interface Props {
  subMenu: ISubMenu;
  isCollapsed: boolean;
}
const SubMenuItem: React.FC<Props> = ({ subMenu, isCollapsed }) => {
  return (
    <Link href={subMenu.link} className="flex">
      <div className="ml-[22px] mr-[18px] flex size-6 self-center">
        <Image
          className="select-none object-contain"
          src={subMenu.image}
          alt=""
          width={24}
          height={24}
        />
      </div>
      {!isCollapsed && (
        <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
          {subMenu.text}
        </p>
      )}
    </Link>
  );
};
export default SubMenuItem;
