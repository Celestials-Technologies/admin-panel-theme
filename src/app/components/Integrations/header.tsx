import React from 'react';

import DashboardIcon from '../../../../public/svgs/DashboardIcon';
import Dropdown from '../DropDown';

interface Props {}

const DashboardHeader: React.FC<Props> = () => {
  return (
    <div className="bg-white px-[15px] pt-5 md:px-30">
      <div className="mb-4 flex items-center">
        <div className="flex items-center">
          <span className="text-616161 pl-1.5 text-sm font-medium leading-3">Campaigns /</span>
          <span className="fs-13 text-bdbdbd pl-2 font-medium leading-3">Blasts</span>
        </div>
      </div>
      <div className="flex ">
        <div className="mb-6 flex w-full flex-wrap items-center justify-between gap-5 md:flex-nowrap md:gap-0">
          <div className="flex w-full flex-wrap justify-between gap-5 sm:flex-nowrap sm:gap-0 md:w-auto">
            <div className="flex items-center">
              {/* <Image
              src={'svgs/DashboardIcon.svg'}
              alt="Dashboard"
              height={24}
              width={24}
            /> */}
              <div>
                <DashboardIcon />
              </div>
              <p className="ml-1.5	text-xl font-bold text-titleBlack ">Blasts Campaigns</p>
            </div>
            <div className="relative ml-3 rounded border border-grey200">
              <Dropdown
                iconColor="#616161"
                classname="text-titleGrey flex items-center justify-center gap-3 w-[130px] h-11 text-xs font-medium"
                title="Last 30 days"
                dropdownFullWidth
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
              dropdownFullWidth
            >
              <div className="text-titleGrey">Create </div>
              <div className="text-titleGrey">Update</div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
