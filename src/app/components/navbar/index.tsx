'use client';
import React from 'react';
import NavbarSearch from './navbarSearch';
import NavbarNotification from './notification';
import NavbarDropdown from './dropdown';

const Navbar = () => {

  return (
    <nav className="shadowPrimary border-b border-dividerColor bg-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <NavbarSearch />
      </div>
      <div className="flex items-center">
        <NavbarNotification />

        <div className="flex space-x-4">
          <NavbarDropdown />
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
