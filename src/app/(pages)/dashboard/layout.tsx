'use client';

import DashboardHeader from '@/app/components/Dashboard/header';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DashboardHeader />

      {children}
    </section>
  );
}
