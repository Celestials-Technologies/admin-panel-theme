import React from 'react';
import Link from 'next/link';
import Dropdown from '../DropDown';
import NavbarProfile from './profile';

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
  return (
    <Dropdown profile={<NavbarProfile />}>
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
