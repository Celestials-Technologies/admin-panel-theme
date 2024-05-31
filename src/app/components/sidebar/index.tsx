// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import { sideMenus, sideMenusTwo } from './sidebarMocks';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <div className="sidebar">
      {sideMenus.map((menu, index) => {
        return (
          <Link key={`key${index}`} href={menu.link}>
            <div
              className={`flex h-14 cursor-pointer border-l-2  text-center 
                                    `}
            >
              <div className="ml-[22px] mr-[18px] flex h-6 w-6 self-center">
                <Image
                  className="select-none object-contain"
                  src={menu.image}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <p
                className={`font-poppins select-none self-center text-[15px] font-medium leading-[19px]
                                    `}
              >
                {menu.text}
              </p>
              {menu.optionalSvg ? (
                <div className="ml-[22px] mr-[18px] flex h-6 w-6 self-center">
                  <Image
                    className="select-none object-contain"
                    src={menu.optionalSvg}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              ) : null}
            </div>
          </Link>
        );
      })}

      <div>
        {sideMenusTwo.map((menu, index) => {
          return (
            <Link key={`key${index}`} href={menu.link}>
              <div
                className={`$ flex h-14 cursor-pointer  border-l-2 text-center`}
              >
                <div className="ml-[22px] mr-[18px] h-6 w-6 self-center">
                  <Image
                    className="select-none object-contain"
                    src={menu.image}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <p
                  className={`font-poppins select-none self-center text-[15px] font-medium leading-[19px] `}
                >
                  {menu.text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
