import Input from '@/components/Input';
import RadioButtonGroup from '@/components/RadioButton/radioButtonGroup';
import Select from '@/components/Select';
import { AccountSetting } from '@/context/accountSettingContext';
import React from 'react';

interface Props {
  selectedValue: AccountSetting;
  setSelectedValue: (val: AccountSetting) => void;
}

const options = [
  {
    value: 'Auto-detect content encoding',
    label: 'Auto-detect content encoding',
  },
  { value: 'Always use UTF-8 encoding', label: 'Always use UTF-8 encoding' },
];

const timeZoneOptions = [
  'America - Los Angeles (GMT-07:00)',
  'America - Chicago (GMT-08:00)',
];

const EditSettings: React.FC<Props> = ({ selectedValue, setSelectedValue }) => {
  const handleChange = (value: string) => {
    setSelectedValue({ ...selectedValue, messageEncoding: value });
  };
  const timezoneHandleChange = (value?: string) => {
    setSelectedValue({ ...selectedValue, timeZone: value || '' });
  };

  return (
    <div>
      <div>
        <RadioButtonGroup
          name="example"
          options={options}
          selectedValue={selectedValue.messageEncoding}
          onChange={handleChange}
        />
      </div>

      <Select
        value={selectedValue.timeZone}
        options={timeZoneOptions}
        id="timezone"
        setValue={timezoneHandleChange}
      />
      <div></div>
      <div>
        Google Analytics Integrate Google Analytics URLs
        <Input
          type="checkbox"
          checked={selectedValue.googleAnalytics}
          onChange={() =>
            setSelectedValue({
              ...selectedValue,
              googleAnalytics: !selectedValue.googleAnalytics,
            })
          }
        />
      </div>
    </div>
  );
};

export default EditSettings;
