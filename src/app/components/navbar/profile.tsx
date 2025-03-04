import Image from 'next/image';
import React from 'react';

import type { IProfile } from '@/app/interface/navbar';

interface Props {
  profile: IProfile;
}
const NavbarProfile: React.FC<Props> = ({ profile }) => {
  return (
    <div className="flex cursor-pointer cursor-pointer items-center sm:items-start">
      <div className="sm:mr- mr-1 flex items-center">
        <div className="h-10 w-10">
          <Image
            className="h-full w-full rounded-full object-cover"
            src={profile.image || '/svgs/user.svg'}
            alt="profile"
            height={100}
            width={100}
          />
        </div>
        <div className="ml-3 hidden sm:block">
          <div className="flex ">
            <p className=" mr-2 text-sm font-bold text-titleBlack">{profile.name}</p>
            <Image src={'svgs/shopify.svg'} alt="shopify" width={16} height={16} />
          </div>
          <p className="text-13 text-titleGrey">{profile.email}</p>
        </div>
      </div>
      <div className="relative top-[2px] hidden size-3 sm:block sm:h-4 sm:w-5">
        <Image
          className="relative top-1"
          src={'svgs/DropdownArrow.svg'}
          alt="arrow"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};
export default NavbarProfile;
