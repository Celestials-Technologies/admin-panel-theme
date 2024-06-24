'use client';
import React from 'react';
import NavbarSearch from './navbarSearch';
import NavbarNotification from './notification';
import NavbarDropdown from './dropdown';

const Navbar = () => {

  return (
    <nav className="shadowPrimary border-b border-dividerColor bg-white px-4 flex items-center justify-between">
      <div className="flex items-center">
        <NavbarSearch />
      </div>
      <div className="flex items-center gap-3 border-l border-dividerColor ">
        <NavbarNotification />

        <div className="flex space-x-4 py-3">
          <NavbarDropdown />
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
