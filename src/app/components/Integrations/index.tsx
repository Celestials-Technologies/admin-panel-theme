import React from 'react';

import { DashboardIntegrationsTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';

import CartIntegration from './CartIntegration';
import Scripts from './Scripts';
import GoogleAnalytics from './GoogleAnalytics';
import Miscellaneous from './Miscellaneous';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardIntegrationsTabs.cartIntegration:
      return <CartIntegration />;
    case DashboardIntegrationsTabs.scripts:
      return <Scripts />;
    case DashboardIntegrationsTabs.googleAnalytics:
      return <GoogleAnalytics />;
    case DashboardIntegrationsTabs.miscellaneous:
      return <Miscellaneous />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
