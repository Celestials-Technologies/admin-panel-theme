import React from 'react';
import Link from 'next/link';
import Dropdown from '../DropDown';
import NavbarProfile from './profile';
import { IProfile } from '@/app/interface/navbar';

const NavbarDropdown = () => {
  const dropDownArray = [
    {
      href: '/more',
      label: 'More',
    },
    {
      href: '/profile',
      label: 'Profile',
    },
  ];
  const profile: IProfile ={
    name: 'ABC Store',
    email: 'daniel.rist@gmail.com',
    image: 'svgs/DropdownArrow.svg'
  }
  return (
    <Dropdown profile={<NavbarProfile profile={profile}/>}>
      {dropDownArray.map((option, index) => {
        return (
          <Link
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            key={index}
            href={option.href}
          >
            {option.label}
          </Link>
        );
      })}
    </Dropdown>
  );
};
export default NavbarDropdown;
