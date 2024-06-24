import React from 'react';
import Image from 'next/image';
import { IProfile } from '@/app/interface/navbar';

interface Props {
    profile: IProfile
  }
const NavbarProfile: React.FC<Props> = ({profile}) => {
  return (
    <div className='flex cursor-pointer items-start'>
      <div className='flex mr-3'>
        <Image
          src={'/images/user.svg'}
          alt="profile"
          height={40}
          width={40}
        />
        <div className='ml-3'>
          <div className='flex '>
            <p className=' text-titleBlack text-sm font-bold mr-2'>{profile.name}</p>
            <Image src={'images/shopify.svg'} alt='shopify' width={16} height={16} />
          </div>
          <p className='text-titleGrey text-13'>{profile.email}</p>
        </div>
      </div>
      <Image className='relative top-1' src={profile.image} alt='arrow' height={16} width={20} />
    </div>
  );
};
export default NavbarProfile;
