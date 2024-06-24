import React from 'react';
import Input from '../Input';
import Image from 'next/image';

const NavbarSearch = () => {
  return (
    <div className='px-3 flex items-center h-[34px] '>
      <Image src={'images/SearchIcon.svg'} className='' alt='SearchIcon' width={13} height={13} />
      <Input
        type="text"
        name="search"
        placeholder="Search..."
        className="w-full ml-3 text-sm placeholder:text-sm placeholder:text-textGrey"
      />
    </div>
  );
};
export default NavbarSearch;
