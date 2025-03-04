// components/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { ISubMenu } from '@/app/interface/sidebar';
import { usePathname } from 'next/navigation';
interface Props {
  subMenu: ISubMenu;
  isCollapsed: boolean;
}
const SubMenuItem: React.FC<Props> = ({ subMenu, isCollapsed }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(subMenu?.link || '');
  return (
    <Link
      href={subMenu.link}
      className={`${isActive ? 'bg-blue100' : ''}  group ml-5 flex h-9 rounded pl-[10px] hover:bg-blue100 `}
    >
      {subMenu.image ? (
        <Image
          className="select-none object-contain"
          src={subMenu.image}
          alt=""
          width={24}
          height={24}
        />
      ) : null}
      {!isCollapsed && (
        <p className="font-poppins select-none self-center text-xs font-medium leading-[19px] text-grey300">
          {subMenu.text}
        </p>
      )}
    </Link>
  );
};
export default SubMenuItem;
