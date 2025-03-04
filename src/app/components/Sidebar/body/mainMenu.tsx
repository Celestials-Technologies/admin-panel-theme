// components/Sidebar.js
import Image from 'next/image';
import React from 'react';

import type { IMenu } from '@/app/interface/sidebar';

interface Props {
  menu: IMenu;
  isCollapsed: boolean;
  hasSubMenu?: boolean;
  isOpen?: boolean;
}

const MainMenu: React.FC<Props> = ({ menu, isCollapsed, hasSubMenu, isOpen }) => {
  return (
    <>
      <div
        className={`flex min-h-[36px] items-center ${isCollapsed ? 'justify-center' : 'justify-between px-3'}`}
      >
        <div className="flex items-center">
          <Image
            className=""
            src={menu.image}
            alt=""
            width={isCollapsed ? 24 : 18}
            height={isCollapsed ? 24 : 18}
          />
          {!isCollapsed && <p className="mx-3 text-13 font-medium text-textGrey">{menu.text}</p>}
        </div>

        {hasSubMenu && !isCollapsed && (
          <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {!hasSubMenu && !!menu.optionalSvg && !isCollapsed && (
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
      {menu.lineBreak ? <div className="h-px w-full bg-borderGrey" /> : null}
    </>
  );
};

export default MainMenu;
