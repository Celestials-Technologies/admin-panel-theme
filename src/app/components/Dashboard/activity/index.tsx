'use client';

import TableComponent from '../../../utils/ui/Table';
import { SelectColumnFilter } from '../../../utils/ui/Table/filter';

const ActivityDashboard = () => {
  const columns = [
    {
      Header: 'Activity Type',
      accessor: 'activity',
    },
    {
      Header: 'Sent on',
      accessor: 'sent',
    },
    {
      Header: 'Role',
      accessor: 'role',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      // filter: 'includes',
    },
  ];

  const data = [
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'Owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'Admin',
    },
    
    // Add more data here...
  ];

  return (
    <div className="px-5 py-30 md:px-7">
      <TableComponent
        columns={columns}
        data={data}
        showFilter={true}
        title='All Activity'
        showPagination={true}
        showSearchBar={true}
      />
    </div>
  );
};

export default ActivityDashboard;
