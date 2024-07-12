import Image from 'next/image';
import React from 'react';
import Notification from '../../../../public/svgs/Notification';

const NavbarNotification = () => {
  return (
    <div className="flex w-[56px] justify-center">
      <Notification/>
    </div>
  );
};
export default NavbarNotification;
