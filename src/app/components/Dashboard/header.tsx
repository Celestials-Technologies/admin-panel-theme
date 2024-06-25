import Image from 'next/image';
import React from 'react';

import Dropdown from '../DropDown';

interface Props {}

const DashboardHeader: React.FC<Props> = () => {
  return (
    <div className="mt-[65px] flex bg-white px-30 pt-5">
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="flex">
          <div className="flex items-center">
            <Image
              src={'svgs/DashboardIcon.svg'}
              alt="Dashboard"
              height={24}
              width={24}
            />
            <p className="ml-1.5	text-xl font-bold text-titleBlack ">
              Dashboard
            </p>
          </div>
          <div className="ml-3 rounded border border-grey200">
            <Dropdown
              iconColor="#616161"
              classname="text-titleGrey flex items-center justify-center gap-3 w-[130px] h-11 text-xs font-medium"
              title="Last 30 days"
            >
              <div className="font-medium text-titleGrey">Last 10 days </div>
              <div className="font-medium text-titleGrey">Last 20 days</div>
            </Dropdown>
          </div>
        </div>
        <div>
          <Dropdown
            iconColor="#fff"
            classname="bg-ryzeoBlue flex items-center justify-center gap-3 w-[164px] h-[42px] text-white text-13 font-medium rounded"
            title="Create Campaign"
          >
            <div className="text-titleGrey">Create </div>
            <div className="text-titleGrey">Update</div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
