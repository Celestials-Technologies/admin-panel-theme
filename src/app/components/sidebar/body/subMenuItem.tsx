// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ISubMenu } from '@/app/interface/sidebar';

interface Props {
  subMenu: ISubMenu;
}
const SubMenuItem: React.FC<Props> = ({ subMenu }) => {
  return (
    <Link href={subMenu.link}>
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
  );
};
export default SubMenuItem;
