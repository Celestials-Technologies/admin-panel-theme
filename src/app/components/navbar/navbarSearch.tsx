import React from 'react';
import Input from '../Input';
import Image from 'next/image';

const NavbarSearch = () => {
  return (
    <div className="flex h-[34px] items-center px-3 ">
      <Image
        src={'svgs/SearchIcon.svg'}
        className=""
        alt="SearchIcon"
        width={13}
        height={13}
      />
      <Input
        type="text"
        name="search"
        placeholder="Search..."
        className="ml-3 w-full text-sm placeholder:text-sm placeholder:text-textGrey"
      />
    </div>
  );
};
export default NavbarSearch;
