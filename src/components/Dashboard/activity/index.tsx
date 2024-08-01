'use client';

import TableComponent from '@/components/Table';
import { SelectColumnFilter } from '@/components/Table/filter';

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
    <div className="px-5 py-[30px] md:px-7">
      <TableComponent
        columns={columns}
        data={data}
        showFilter={true}
        showPagination={true}
        showSearchBar={true}
      />
    </div>
  );
};

export default ActivityDashboard;
