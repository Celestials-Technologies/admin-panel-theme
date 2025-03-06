import React from 'react';

import { DashboardListsSegmentsTabs } from '@/app/enums/dashboard';
import type { ITabs } from '@/app/interface/dashboard';
import ListsSegments from './ListsSegments';
import Subscribers from './Subscribers';
import Filters from './Filters';
import SegmentsDefinition from './SegmentsDefinition';

interface Props {
  activeTab: ITabs;
}

const DashboardActiveTab: React.FC<Props> = ({ activeTab }) => {
  switch (activeTab.name) {
    case DashboardListsSegmentsTabs.ListsSegments:
      return <ListsSegments />;
    case DashboardListsSegmentsTabs.Subscribers:
      return <Subscribers />;
    case DashboardListsSegmentsTabs.Filters:
      return <Filters />;
    case DashboardListsSegmentsTabs.SegmentsDefinition:
      return <SegmentsDefinition />;
    default:
      return <></>;
  }
};

export default DashboardActiveTab;
