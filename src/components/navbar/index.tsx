'use client';

import type { FC } from 'react';
import React from 'react';

import NavbarDropdown from './dropdown';
import NavbarSearch from './navbarSearch';
import NavbarNotification from './notification';

interface Prop {
  isCollapsed?: boolean;
}

const Navbar: FC<Prop> = ({ isCollapsed }) => {
  return (
    <nav
      className={`shadowPrimary fixed top-0 z-10 flex items-center justify-between border-b border-dividerColor bg-white px-4 ${isCollapsed ? 'w-[calc(100%-70px)]' : 'w-[calc(100%-220px)]'}`}
    >
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
