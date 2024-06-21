// components/Sidebar.js
import React from 'react';
import Input from '../../Input';

interface Props {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="mb-2 mt-4">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Jump to..."
        className="w-full"
      />
    </div>
  );
};
export default SearchBar;
