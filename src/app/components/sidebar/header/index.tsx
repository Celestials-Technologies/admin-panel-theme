import React from 'react';
import Link from 'next/link';
import { IHeader } from '@/app/interface/sidebar'; // Adjust the path based on your actual interface location
import SidebarSubHeader from './sidebarHeader';

interface Props {
  header: IHeader;
  isCollapsed: boolean;
}

const SidebarHeader: React.FC<Props> = ({ header, isCollapsed }) => {
  return (
    <>
      {!!header.link ? (
        <Link href={header.link}>
          <SidebarSubHeader header={header} isCollapsed={isCollapsed}/>
        </Link>
      ) : (
        <SidebarSubHeader header={header} isCollapsed={isCollapsed}/>
      )}
    </>
  );
};

export default SidebarHeader;
