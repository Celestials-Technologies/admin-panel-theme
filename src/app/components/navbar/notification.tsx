import React from 'react';

import Notification from '../../../../public/svgs/Notification';

const NavbarNotification = () => {
  return (
    <div className="relative flex w-[56px] justify-center cursor-pointer">
      <Notification />
      <span className="absolute right-5 top-[2px] h-2 w-2 rounded-full bg-red-500"></span>
    </div>
  );
};
export default NavbarNotification;
