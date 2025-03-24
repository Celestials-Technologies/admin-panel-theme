import Link from 'next/link';

import type { IProfile } from '@/app/interface/navbar';

import Button from '../../utils/ui/Button';
import Dropdown from '../../utils/ui/DropDown';
import NavbarProfile from './profile';

interface Props {
  setShowLogoutModal: (show: boolean) => void; // Specify a more precise type
  setShowProfileModal: (show: boolean) => void; // Specify a more precise type
}

const NavbarDropdown: React.FC<Props> = ({ setShowLogoutModal, setShowProfileModal }) => {
  const dropDownArray = [
    {
      href: '/more',
      label: 'More',
    },
  ];

  const getProfileFromStorage = () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const data = JSON.parse(savedData);
      return {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        image: data.profileImage || '/svgs/user.svg',
      };
    }
    return {
      name: 'ABC Store',
      email: 'daniel.rist@gmail.com',
      image: '/svgs/user.svg',
    };
  };

  const profile: IProfile = getProfileFromStorage();

  return (
    <>
      <Dropdown dropdownFullWidth profile={<NavbarProfile profile={profile} />}>
        {dropDownArray.map((option, index) => (
          <Link
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            key={index}
            href={option.href}
          >
            {option.label}
          </Link>
        ))}
        <Button
          onClick={() => setShowProfileModal(true)}
          className="block w-full px-4 py-2 text-start text-gray-700 hover:bg-gray-100"
        >
          Profile
        </Button>
        <Button
          onClick={() => setShowLogoutModal(true)}
          className="block w-full px-4 py-2 text-start text-gray-700 hover:bg-gray-100"
        >
          Logout
        </Button>
      </Dropdown>
    </>
  );
};

export default NavbarDropdown;
