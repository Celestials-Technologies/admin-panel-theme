'use client';

import DashboardHeader from '@/app/components/Campaigns/header';

export default function CampaignsLayout({
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
