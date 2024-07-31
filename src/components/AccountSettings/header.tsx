import React from 'react';
import DashboardIcon from '~/svgs/DashboardIcon';

interface Props {}

const AccountSettingHeader: React.FC<Props> = () => {
  return (
    <div className="flex bg-white px-[15px] pt-5 md:px-30">
      <div className="mb-6 flex w-full flex-wrap items-center justify-between gap-5 md:flex-nowrap md:gap-0">
        <div className="flex w-full flex-wrap justify-between gap-5 sm:flex-nowrap sm:gap-0 md:w-auto">
          <div className="flex items-center">
            <div>
              <DashboardIcon />
            </div>
            <p className="ml-1.5	text-xl font-bold text-titleBlack ">
              Account Settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingHeader;
