// components/Sidebar.js
import React from 'react';
import Image from 'next/image';
import { IMenu } from '@/app/interface/sidebar';

interface Props {
  menu: IMenu;
  isCollapsed: boolean;
}
const MainMenu: React.FC<Props> = ({ menu, isCollapsed }) => {
  return (
    <>
      <div
        className={`flex hover:bg-blue100 min-h-[36px] items-center  ${isCollapsed ? 'justify-center' : 'px-3 justify-between'}  `}
      >

        <div className="flex items-center">
          <Image className="" src={menu.image} alt="" width={isCollapsed ? 24 : 18} height={isCollapsed ? 24 : 18} />
          {!isCollapsed && <p className="text-textGrey text-13 mx-3 font-medium">{menu.text}</p>}
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
      {menu.lineBreak ? <div className='h-[1px] w-full my-1.5 bg-borderGrey' /> : null}
    </>
  );
};
export default MainMenu;
