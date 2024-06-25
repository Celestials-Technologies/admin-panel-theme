import React from 'react';
import Image from 'next/image';
import { IProfile } from '@/app/interface/navbar';

interface Props {
  profile: IProfile;
}
const NavbarProfile: React.FC<Props> = ({ profile }) => {
  return (
    <div className="flex cursor-pointer items-center sm:items-start">
      <div className="mr-1 flex sm:mr-3">
        <Image src={'/svgs/user.svg'} alt="profile" height={40} width={40} />
        <div className="ml-3 hidden sm:block">
          <div className="flex ">
            <p className=" mr-2 text-sm font-bold text-titleBlack">
              {profile.name}
            </p>
            <Image
              src={'svgs/shopify.svg'}
              alt="shopify"
              width={16}
              height={16}
            />
          </div>
          <p className="text-13 text-titleGrey">{profile.email}</p>
        </div>
      </div>
      <div className="hidden h-3 w-3 sm:block sm:h-4 sm:w-5 ">
        <Image
          className="relative top-1"
          src={profile.image}
          alt="arrow"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};
export default NavbarProfile;
