'use client';

import TableComponent from '../../Table';

const ActivityDashboard = () => {
  const columns = [
    {
      Header: 'Activity Type',
      accessor: 'activity', // accessor is the "key" in the data
    },
    {
      Header: 'Sent to',
      accessor: 'sent',
    },
  ];

  const data = [
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
    },
    // Add more data here...
  ];

  return (
    <div>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default ActivityDashboard;
