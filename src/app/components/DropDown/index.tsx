import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  title?: string;
  children: React.ReactNode;
  profile?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {profile ? (
        <div onClick={toggleDropdown}>{profile}</div>
      ) : (
        <button
          onClick={toggleDropdown}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {title}
        </button>
      )}
      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
          <div onClick={toggleDropdown} className="py-2">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
