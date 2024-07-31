import React, { createContext, useState, ReactNode } from 'react';

interface AccountSettingContextType {
  settingAccount: AccountSetting;
  updateSettingAccount: (update: Partial<AccountSetting>) => void;
}
export interface AccountSetting {
  messageEncoding: string;
  googleAnalytics: boolean;
  timeZone: string;
}

const defaultAccountSettingContext: AccountSetting = {
  messageEncoding: '',
  googleAnalytics: true,
  timeZone: '',
};

const AccountSettingContext = createContext<AccountSettingContextType>({
  settingAccount: defaultAccountSettingContext,
  updateSettingAccount: () => {},
});

const AccountSettingProvider = ({ children }: { children: ReactNode }) => {
  const [settingAccount, setSettingAccount] = useState<AccountSetting>(
    defaultAccountSettingContext
  );

  const updateSettingAccount = (update: Partial<AccountSetting>) => {
    setSettingAccount((prevContract) => ({
      ...prevContract,
      ...update,
    }));
  };

  return (
    <AccountSettingContext.Provider
      value={{
        settingAccount,
        updateSettingAccount,
      }}
    >
      {children}
    </AccountSettingContext.Provider>
  );
};

export { AccountSettingProvider, AccountSettingContext };
