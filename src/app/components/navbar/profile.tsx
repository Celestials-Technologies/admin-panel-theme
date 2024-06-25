import React from 'react';
import Image from 'next/image';
import { IProfile } from '@/app/interface/navbar';

interface Props {
  profile: IProfile
}
const NavbarProfile: React.FC<Props> = ({ profile }) => {
  return (
    <div className='flex cursor-pointer sm:items-start items-center'>
      <div className='flex sm:mr-3 mr-1'>
        <Image
          src={'/svgs/user.svg'}
          alt="profile"
          height={40}
          width={40}
        />
        <div className='ml-3 sm:block hidden'>
          <div className='flex '>
            <p className=' text-titleBlack text-sm font-bold mr-2'>{profile.name}</p>
            <Image src={'svgs/shopify.svg'} alt='shopify' width={16} height={16} />
          </div>
          <p className='text-titleGrey text-13'>{profile.email}</p>
        </div>
      </div>
      <div className='sm:h-4 sm:w-5 w-3 h-3 sm:block hidden '>
      <Image className='relative top-1' src={profile.image} alt='arrow' height={100} width={100} />
      </div>
    </div>
  );
};
export default NavbarProfile;
