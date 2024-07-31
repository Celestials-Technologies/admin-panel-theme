'use client';

import '@/globals.css';

import { useEffect, useState } from 'react';

import Navbar from '@/components/navbar';
import Sidebar from '@/components/Sidebar';
import {
  header,
  sideMenusBody,
  sideMenusFooter,
} from '@/components/Sidebar/sidebarMocks';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  useEffect(() => {
    setIsCollapsed(false);
  }, []);
  console.log({ isCollapsed });
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
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
          <div
            className={`ml-auto bg-grey50 ${isCollapsed ? 'w-[calc(100%-70px)]' : 'w-[calc(100%-220px)]'}`}
          >
            <Navbar isCollapsed={isCollapsed} />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
