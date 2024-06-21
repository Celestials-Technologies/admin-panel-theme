// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import { sideMenusBody, sideMenusFooter } from './sidebarMocks';
import Image from 'next/image';
import { sidebarProps } from './sidebarProps';

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
        <div
          key={`menu-${index}`}
          className="flex h-14 cursor-pointer border-l-2 text-center"
        >
          {!menu.subMenus ? (
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
          ) : (
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
                {menu.subMenus.map((subMenu, subIndex) => (
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
          )}
        </div>
      ))}

      <div>
        {sideMenusFooter.map((menu, index) => {
          return (
            <Link key={`key${index}`} href={menu.link || ''}>
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
