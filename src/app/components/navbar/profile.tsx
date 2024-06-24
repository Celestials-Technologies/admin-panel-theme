import React from 'react';
import Image from 'next/image';

const NavbarProfile = () => {
  return (
    <div>
     
      <Image
        src={'/images/CampaignsIcon.svg'}
        alt="profile"
        height={20}
        width={20}
      />
       <div>ABC Store</div>
       <div>XYZ@gmail.com</div>
    </div>
  );
};
export default NavbarProfile;
