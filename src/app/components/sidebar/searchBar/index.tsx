// components/Sidebar.js
import React from 'react';
import Input from '../../Input';
import Image from 'next/image';


interface Props {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="mb-2 mt-4 mx-2.5 relative">
      <Image src={'svgs/SearchIcon.svg'} className=' absolute left-3 top-2.5 ' alt='SearchIcon' width={13} height={13} />
      <div className='px-3 flex items-center border border-borderGrey rounded-md h-[34px] '>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Jump to..."
          className="w-full pl-4 text-sm placeholder:text-sm"
        />
      </div>
      <Image src={'svgs/searchBar.svg'} className=' absolute right-3 top-2.5 ' alt='SearchIcon' width={24} height={16} />
    </div>
  );
};
export default SearchBar;
