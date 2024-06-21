// components/Sidebar.js
import React from 'react';
import InputComponent from '../../Input';

interface Props {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="mb-2 mt-4 mx-2.5">
      <InputComponent
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Jump to..."
        className="w-full rounded-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
};
export default SearchBar;
