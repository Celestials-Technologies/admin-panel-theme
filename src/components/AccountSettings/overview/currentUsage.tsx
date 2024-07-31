import { CurrentUsage } from '@/interface/accountSetting';
import React from 'react';
import SentProgress from './sentProgress';

interface Props {
  currentUsage?: CurrentUsage;
}
const CurrentUsageData: React.FC<Props> = ({ currentUsage }) => {
  return (
    <div>
      <div> Current Usage</div>
      {`Current Blling Period   ${currentUsage?.startDate} - ${currentUsage?.endDate}`}
      <SentProgress
        completed={currentUsage?.leftEmail || 0}
        total={currentUsage?.sentEmail || 0}
        title="emails"
      />
      <SentProgress
        completed={currentUsage?.leftSubscribers || 0}
        total={currentUsage?.sentSubscribers || 0}
        title="subscribers"
      />
    </div>
  );
};

export default CurrentUsageData;
