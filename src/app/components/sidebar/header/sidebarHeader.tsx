import React from 'react';
import Image from 'next/image';
import { IHeader } from '@/app/interface/sidebar'; // Adjust the path based on your actual interface location

interface Props {
  header: IHeader;
}

const SidebarSubHeader: React.FC<Props> = ({ header }) => {
  return (
    <>
      {!!header.image && (
        <div className="h-[72px] flex pl-[22px] border-b border-borderGrey">
          <Image
            className="select-none object-contain"
            src={header.image}
            alt=""
            width={150}
            height={39}
          />
        </div>
      )}

      {
        !!header.heading && (
          <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
            {header.heading}
          </p>
        )
      }
    </>
  );
};

export default SidebarSubHeader;
