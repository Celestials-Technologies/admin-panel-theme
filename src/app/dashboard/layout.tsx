'use client';

import DashboardHeader from '@/components/Dashboard/header';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[137px] mt-[65px]">
      <DashboardHeader />
      {children}
    </section>
  );
}
