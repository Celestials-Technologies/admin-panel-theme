import React from 'react';
import Link from 'next/link';
import { IHeader } from '@/app/interface/sidebar'; // Adjust the path based on your actual interface location
import SidebarSubHeader from './sidebarHeader';

interface Props {
  header: IHeader;
}

const SidebarHeader: React.FC<Props> = ({ header }) => {
  return (
    <>
      {!!header.link ? (
        <Link href={header.link}>
          <SidebarSubHeader header={header} />
        </Link>
      ) : (
        <SidebarSubHeader header={header} />
      )}
    </>
  );
};

export default SidebarHeader;
