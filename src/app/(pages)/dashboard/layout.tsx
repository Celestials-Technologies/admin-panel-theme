'use client';

import DashboardHeader from '@/app/utils/ui/Header/header';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[137px] mt-[65px]">
      <DashboardHeader title={'Dashboard'} />
      {children}
    </section>
  );
}
