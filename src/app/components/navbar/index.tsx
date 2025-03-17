'use client';

import type { FC } from 'react';
import React, { useState } from 'react';

import Modal from '../Modal';
import NavbarDropdown from './dropdown';
import NavbarSearch from './navbarSearch';
import NavbarNotification from './notification';
import ProfileInfoModal from '../ProfileInfoForm';

interface Prop {
  isCollapsed?: boolean;
}

const Navbar: FC<Prop> = ({ isCollapsed }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>
      <nav
        className={`shadowPrimary fixed top-0 z-10 flex items-center justify-between border-b border-dividerColor bg-white px-4 ${isCollapsed ? 'w-[calc(100%-70px)]' : 'w-[calc(100%-220px)]'}`}
      >
        <div className="flex items-center">
          <NavbarSearch />
        </div>
        <div className="flex items-center gap-3 border-l border-dividerColor ">
          <NavbarNotification />

          <div className="flex space-x-4 py-3">
            <NavbarDropdown
              setShowLogoutModal={setShowLogoutModal}
              setShowProfileModal={setShowProfileModal}
            />
          </div>
        </div>
      </nav>

      {showProfileModal && (
        <ProfileInfoModal
          onCancel={() => setShowProfileModal(false)}
          // icon={/* Your icon component */}
        />
      )}

      {showLogoutModal && (
        <Modal
          title="Confirm Logout"
          description="Are you sure you want to logout?"
          confirmText="Yes, logout"
          cancelText="No, cancel"
          onConfirm={() => {
            // Handle logout logic here
            setShowLogoutModal(false);
          }}
          onCancel={() => setShowLogoutModal(false)}
          // icon={/* Your icon component */}
        />
      )}
    </>
  );
};

export default Navbar;
