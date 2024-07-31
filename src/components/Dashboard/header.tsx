import React from 'react';
import Dropdown from '../DropDown';
import DashboardIcon from '~/svgs/DashboardIcon';

interface Props {}

const DashboardHeader: React.FC<Props> = () => {
  return (
    <div className="flex bg-white px-[15px] md:px-30 pt-5">
      <div className="mb-6 flex flex-wrap md:flex-nowrap w-full items-center justify-between gap-5 md:gap-0">
        <div className="flex gap-5 sm:gap-0 flex-wrap sm:flex-nowrap justify-between w-full md:w-auto">
          <div className="flex items-center">

            <div>
              <DashboardIcon/>
            </div>
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
