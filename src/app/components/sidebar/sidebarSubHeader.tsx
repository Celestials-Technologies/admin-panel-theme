import React from 'react';
import Image from 'next/image';
import { IHeader } from '@/app/interface/sidebar'; // Adjust the path based on your actual interface location

interface Props {
  header: IHeader;
}

const SidebarSubHeader: React.FC<Props> = ({ header }) => {
  return (
    <>
      {header.image && (
        <div className="ml-[22px] mr-[18px] flex h-6 w-6 self-center">
          <Image
            className="select-none object-contain"
            src={header.image}
            alt=""
            width={24}
            height={24}
          />
        </div>
      )}
      <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
        {header.heading}
      </p>
    </>
  );
};

export default SidebarSubHeader;
