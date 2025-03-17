'use client';

import DashboardHeader from '@/app/utils/ui/Header/header';

export default function CampaignsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[137px] mt-[65px]">
      <DashboardHeader title={'Email Templates'} />
      {children}
    </section>
  );
}
