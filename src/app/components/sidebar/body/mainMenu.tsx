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
    <div
      className={`flex hover:bg-blue100 min-h-[36px] items-center justify-between px-3 ${menu.lineBreak ? 'border-b' : ''} border-borderGrey`}
    >
      <div className="flex items-center">
        <Image className="" src={menu.image} alt="" width={18} height={18} />
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
  );
};
export default MainMenu;
