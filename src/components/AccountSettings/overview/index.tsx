import { CurrentUsage } from '@/interface/accountSetting';
import accountSettingsAPI from '@/services/accountSetting';
import { useEffect, useState } from 'react';
import CurrentUsageData from './currentUsage';
import Settings from './settings';
import { AccountSetting } from '@/context/accountSettingContext';

const AccountOverview = () => {
  const [currentUsage, setCurrentUsage] = useState<CurrentUsage>();
  const [settingData, setSettingData] = useState<AccountSetting>();

  const dashboardDataHandler = () => {
    accountSettingsAPI
      .getCurrentUsage()
      .then(({ data }) => {
        setCurrentUsage(data.currentUsage);
        setSettingData(data.setting);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message || 'Something went wrong');
      });
  };

  useEffect(() => {
    dashboardDataHandler();
  }, []);

  return (
    <div>
      <CurrentUsageData currentUsage={currentUsage} />
      <Settings settingData={settingData} />
    </div>
  );
};

export default AccountOverview;
