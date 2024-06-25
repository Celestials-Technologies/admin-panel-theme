import React from 'react';
import Dropdown from '../DropDown';
import Image from 'next/image';
interface Props { }

const DashboardHeader: React.FC<Props> = ({ }) => {
  return (
    <div className="flex bg-white px-30 pt-5">
      <div className='flex justify-between w-full mb-6 items-center'>
        <div className='flex'>
          <div className='flex items-center'>
            <Image src={'images/DashboardIcon.svg'} alt="Dashboard" height={24} width={24} />
            <p className='text-xl	font-bold text-titleBlack ml-1.5 '>Dashboard</p>
          </div>
          <div className='border rounded border-grey200 ml-3'>
            <Dropdown iconColor='#616161' classname='text-titleGrey flex items-center justify-center gap-3 w-[130px] h-11 text-xs font-medium' title="Last 30 days">
              <div className='text-titleGrey font-medium'>Last 10 days </div>
              <div className='text-titleGrey font-medium'>last 20 days</div>
            </Dropdown>

          </div>
        </div>
        <div>
          <Dropdown iconColor='#fff' classname='bg-ryzeoBlue flex items-center justify-center gap-3 w-[164px] h-[42px] text-white text-13 font-medium rounded' title="Create Campaign">
            <div className='text-titleGrey'>Create </div>
            <div className='text-titleGrey'>Update</div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
