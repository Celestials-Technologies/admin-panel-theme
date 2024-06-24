import React from 'react';
import Input from '../Input';
import Button from '../Button';
const NavbarSearch = () => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('search') as string;
  };
  return (
    <form onSubmit={handleSearch} className="flex">
      <Input
        type="text"
        name="search"
        placeholder="Search..."
        className="w-full"
      />
      <Button type="submit" variant="primary" className="rounded-r-md">
        Search
      </Button>
    </form>
  );
};
export default NavbarSearch;
