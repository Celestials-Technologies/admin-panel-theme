// components/Sidebar.js
import Image from 'next/image';
import React from 'react';

import type { IMenu } from '@/app/interface/sidebar';

interface Props {
  menu: IMenu;
  isCollapsed: boolean;
}
const MainMenu: React.FC<Props> = ({ menu, isCollapsed }) => {
  return (
    <>
      <div
        className={`flex min-h-[36px] items-center hover:bg-blue100  ${isCollapsed ? 'justify-center' : 'justify-between px-3'}  `}
      >
        <div className="flex items-center">
          <Image
            className=""
            src={menu.image}
            alt=""
            width={isCollapsed ? 24 : 18}
            height={isCollapsed ? 24 : 18}
          />
          {!isCollapsed && (
            <p className="mx-3 text-13 font-medium text-textGrey">
              {menu.text}
            </p>
          )}
        </div>

        {!!menu.optionalSvg && !isCollapsed && (
          <div className="">
            <Image
              className="select-none object-contain"
              src={menu.optionalSvg}
              alt=""
              width={26}
              height={18}
            />
          </div>
        )}
      </div>
      {menu.lineBreak ? (
        <div className="my-1.5 h-px w-full bg-borderGrey" />
      ) : null}
    </>
  );
};
export default MainMenu;
