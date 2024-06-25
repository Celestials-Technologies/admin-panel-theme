'use client'
import '@/app/globals.css';
import Sidebar from '../components/sidebar';
import {
  header,
  sideMenusBody,
  sideMenusFooter,
} from '../components/sidebar/sidebarMocks';
import Navbar from '../components/navbar';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <html lang="en">
      <body>
        {' '}
        <div className="layout flex">
          <Sidebar
            header={header}
            menuBody={sideMenusBody}
            menuFooter={sideMenusFooter}
            showSearchBar={true}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          <div className={`ml-auto bg-grey50 ${isCollapsed ? 'w-[calc(100%-70px)]' : 'w-[calc(100%-220px)]'}`}>
            <Navbar isCollapsed={isCollapsed} />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
