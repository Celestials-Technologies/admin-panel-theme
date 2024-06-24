'use client'
import React from 'react';
import NavbarSearch from './navbarSearch';
import Link from 'next/link';
import Dropdown from '../DropDown';
import NavbarProfile from './profile';

const Navbar = () => {

  return (
    <nav className="shadowPrimary border-b border-dividerColor bg-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <NavbarSearch />
      </div>
      <div className="flex items-center">
        <div className=" flex space-x-4">
          <Dropdown profile={<NavbarProfile />}>
            <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">More</Link>
            <Link href="/projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link href="/careers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</Link>
          </Dropdown>
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
