'use client';

import DashboardHeader from '@/app/components/Dashboard/header';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-[65px] mb-[137px]">
      <DashboardHeader />
      {children}
    </section>
  );
}
