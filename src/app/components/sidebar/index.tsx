// components/Sidebar.js

'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { filterMenus } from '@/app/helpers/filterMenu';

import Button from '../Button';
import SidebarBody from './body';
import SidebarHeader from './header';
import SearchBar from './searchBar';
import type { sidebarProps } from './sidebarProps';

const Sidebar: React.FC<sidebarProps> = ({
  header,
  menuBody,
  menuFooter,
  showSearchBar,
  isCollapsed,
  setIsCollapsed,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMenuBody = filterMenus(menuBody, searchTerm);
  const filteredMenuFooter = filterMenus(menuFooter, searchTerm);

  return (
    <div
      className={`sidebar fixed z-30 left-0 flex h-screen max-w-[220px] flex-col justify-between border-r border-dividerColor  bg-grey100 ${isCollapsed ? 'w-[70px]' : 'w-[220px] min-w-[220px]'}`}
    >
      <div>
        <SidebarHeader header={header} isCollapsed={isCollapsed} />
        {showSearchBar && !isCollapsed && (
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        )}
        <Button
          className={`toggle-button z-40 transition duration-500  ${isCollapsed ? 'rotate-270 ' : 'rotate-90'}`}
          variant="toggle"
          onClick={toggleSidebar}
        >
          <Image
            src={'svgs/ArrowIcon.svg'}
            alt="ArrowIcon"
            width={12}
            height={12}
          />
        </Button>
        <SidebarBody menuBody={filteredMenuBody} isCollapsed={isCollapsed} />
      </div>
      <SidebarBody menuBody={filteredMenuFooter} isCollapsed={isCollapsed} />{' '}
      {/* for footer items */}
    </div>
  );
};
export default Sidebar;
