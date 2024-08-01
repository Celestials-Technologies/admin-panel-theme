// components/Sidebar.js

'use client';

import React, { useState } from 'react';

import { filterMenus } from '@/helpers/filterMenu';

import Button from '../Button';
import SidebarBody from './body';
import SidebarHeader from './header';
import SearchBar from './searchBar';
import type { sidebarProps } from './sidebarProps';
import ArrowIcon from '~/svgs/ArrowIcon';

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
      className={`sidebar fixed left-0 z-30 flex h-screen max-w-[220px] flex-col justify-between border-r border-dividerColor  bg-grey100 ${isCollapsed ? 'w-[70px]' : 'w-[220px] min-w-[220px]'}`}
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
          <ArrowIcon />
        </Button>
        <SidebarBody menuBody={filteredMenuBody} isCollapsed={isCollapsed} />
      </div>
      <SidebarBody menuBody={filteredMenuFooter} isCollapsed={isCollapsed} />{' '}
      {/* for footer items */}
    </div>
  );
};
export default Sidebar;
