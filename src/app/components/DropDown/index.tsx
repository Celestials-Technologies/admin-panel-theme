import React, { useEffect, useRef, useState } from 'react';

import DropdownIcon from './DropdownIcon';
import Button from '@/app/utils/ui/Button';

interface DropdownProps {
  title?: string;
  children: React.ReactNode;
  profile?: React.ReactNode;
  classname?: string;
  iconColor?: string;
  dropdownFullWidth?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  children,
  profile,
  classname,
  iconColor,
  dropdownFullWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
        <Button onClick={toggleDropdown} className={` ${classname}`}>
          {title}
          <span>
            <DropdownIcon iconColor={iconColor} />
          </span>
        </Button>
      )}

      {isOpen && (
        <div
          className={`${dropdownFullWidth ? 'w-full' : 'w-40 sm:w-48'} absolute right-0 z-20 mt-2  rounded-md border border-gray-200 bg-white shadow-lg   `}
        >
          <div onClick={toggleDropdown} className="px-3 py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
