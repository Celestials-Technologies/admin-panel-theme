// components/Sidebar.js
'use client';
import React, { useState } from 'react';
import { sidebarProps } from './sidebarProps';
import SidebarHeader from './header';
import SidebarBody from './body';
import SearchBar from './searchBar';
import { filterMenus } from '@/app/helpers/filterMenu';
import Button from '../Button';
import Image from 'next/image';

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
    <div className={`fixed left-0 flex flex-col justify-between bg-grey100 sidebar border-r border-dividerColor h-[100vh]  max-w-[220px] ${isCollapsed ? 'w-[70px]' : 'w-[220px] min-w-[220px]'}`}>
      <div>
        <SidebarHeader header={header} isCollapsed={isCollapsed} />
        {showSearchBar && !isCollapsed && (
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        )}
        <Button
          className={`toggle-button transition duration-500 z-40  ${isCollapsed? 'rotate-270 ': 'rotate-90'}`}
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
