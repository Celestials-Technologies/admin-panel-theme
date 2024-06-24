import React from 'react';
import Image from 'next/image';

const NavbarNotification = () => {
  return (
    <div className='w-[56px] flex justify-center'>
      <Image
        src={'/images/notification.svg'}
        alt="profile"
        height={20}
        width={20}
      />
    </div>
  );
};
export default NavbarNotification;
