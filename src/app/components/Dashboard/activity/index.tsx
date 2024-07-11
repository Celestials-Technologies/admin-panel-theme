'use client';

import TableComponent from '../../Table';
import { SelectColumnFilter } from '../../Table/filter';

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
    <div className='px-5 md:px-7 py-[30px]'>
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
