'use client';

import AccountSettingHeader from '@/components/AccountSettings/header';
import { AccountSettingProvider } from '@/context/accountSettingContext';

export default function AccountSettingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[137px] mt-[65px]">
      <AccountSettingProvider>
        <AccountSettingHeader />
        {children}
      </AccountSettingProvider>
    </section>
  );
}
