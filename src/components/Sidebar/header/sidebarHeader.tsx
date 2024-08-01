import Image from 'next/image';
import React from 'react';

import type { IHeader } from '@/interface/sidebar'; // Adjust the path based on your actual interface location
import MobileLogo from '../../../../public/svgs/MobileLogo';
interface Props {
  header: IHeader;
  isCollapsed: boolean;
}

const SidebarSubHeader: React.FC<Props> = ({ header, isCollapsed }) => {
  return (
    <>
      {!!header.image && (
        <div
          className={` flex h-[72px] ${isCollapsed ? 'items-center justify-center' : 'pl-[22px]'}  border-b border-borderGrey`}
        >
          {isCollapsed ? (
            <div className="flex h-10 w-10">
              <MobileLogo />
            </div>
          ) : (
            <Image
              className="select-none object-contain"
              src={header.image}
              alt=""
              width={150}
              height={39}
            />
          )}
        </div>
      )}

      {!!header.heading && (
        <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
          {header.heading}
        </p>
      )}
    </>
  );
};

export default SidebarSubHeader;
