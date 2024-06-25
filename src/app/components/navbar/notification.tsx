import React from 'react';
import Image from 'next/image';

const NavbarNotification = () => {
  return (
    <div className="flex w-[56px] justify-center">
      <Image
        src={'/svgs/notification.svg'}
        alt="profile"
        height={24}
        width={24}
      />
    </div>
  );
};
export default NavbarNotification;
