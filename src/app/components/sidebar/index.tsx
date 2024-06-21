// components/Sidebar.js
'use client';
import React, { useState } from 'react';
import { sidebarProps } from './sidebarProps';
import SidebarHeader from './header';
import SidebarBody from './body';
import SearchBar from './searchBar';
import { filterMenus } from '@/app/helpers/filterMenu';

const Sidebar: React.FC<sidebarProps> = ({
  header,
  menuBody,
  menuFooter,
  showSearchBar,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMenuBody = filterMenus(menuBody, searchTerm);
  const filteredMenuFooter = filterMenus(menuFooter, searchTerm);

  return (
    <div className="sidebar">
      <SidebarHeader header={header} />
      
      {showSearchBar && (
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      )}
      <SidebarBody menuBody={filteredMenuBody} />
      <SidebarBody menuBody={filteredMenuFooter} /> {/* for footer items */}
    </div>
  );
};
export default Sidebar;
