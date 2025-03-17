import React from 'react';

import { DashboardEmailTemplatesTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';
import Emails from './Emails';
import InsightsTemplates from './InsightsTemplates';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardEmailTemplatesTabs.Emails:
      return <Emails />;
    case DashboardEmailTemplatesTabs.InsightsTemplates:
      return <InsightsTemplates />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
