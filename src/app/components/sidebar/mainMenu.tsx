// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IMenu } from '@/app/interface/sidebar';

interface Props {
  menu: IMenu;
}
const MainMenu: React.FC<Props> = ({ menu }) => {
  return (
    <Link href={menu.link || '#'}>
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
          {menu.optionalSvg && (
            <div className="ml-[22px] mr-[18px] flex h-6 w-6 self-center">
              <Image
                className="select-none object-contain"
                src={menu.optionalSvg}
                alt=""
                width={24}
                height={24}
              />
            </div>
          )}
        </Link>
  );
};
export default MainMenu;
