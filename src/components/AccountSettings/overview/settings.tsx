import Button from '@/components/Button';
import {
  AccountSetting,
  AccountSettingContext,
} from '@/context/accountSettingContext';
import React, { useContext, useEffect, useState } from 'react';
import EditSettings from './editSetting';

interface Props {
  settingData?: AccountSetting;
}

const Settings: React.FC<Props> = ({ settingData }) => {
  const { settingAccount, updateSettingAccount } = useContext(
    AccountSettingContext
  );

  const [selectedValue, setSelectedValue] =
    useState<AccountSetting>(settingAccount);
  const [isEditState, setIsEditState] = useState<boolean>(false);

  useEffect(() => {
    settingData && setSelectedValue(settingData);
  }, [settingData]);
  const editButtonHandler = () => {
    setIsEditState(true);
  };

  const cancelButtonHandler = () => {
    setIsEditState(false);
  };

  const saveButtonHandler = () => {
    updateSettingAccount(selectedValue);
    setIsEditState(false);
  };

  return (
    <div>
      <div className="flex">
        <div>Setting</div>
        {!isEditState ? (
          <Button onClick={editButtonHandler}>IsEdit</Button>
        ) : (
          <div>
            <Button
              className="bg-black"
              variant="primary"
              onClick={cancelButtonHandler}
            >
              Cancel
            </Button>
            <Button className="bg-blue-300" onClick={saveButtonHandler}>
              Save
            </Button>
          </div>
        )}
      </div>
      {!isEditState ? (
        <div>
          <div>
            Message Encoding <span>{settingAccount.messageEncoding} </span>
          </div>
          <div>
            Time-Zone <span>{settingAccount.timeZone} </span>
          </div>
          <div>
            google analytics{' '}
            <span>
              {!settingAccount.googleAnalytics
                ? 'Do not automatically add Google Analytics to new blasts'
                : 'Automatically add Google Analytics to new blasts'}{' '}
            </span>
          </div>
        </div>
      ) : (
        <EditSettings
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      )}
    </div>
  );
};

export default Settings;
