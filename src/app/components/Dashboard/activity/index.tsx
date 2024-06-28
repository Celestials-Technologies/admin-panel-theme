'use client';

import ActivitySvg from '../../../../../public/svgs/activitySvg';
import CustomCheckbox from '../../Checkbox';
import Dropdown from '../../DropDown';
import TableComponent from '../../Table';
import { SelectColumnFilter } from '../../Table/filter';

const ActivityDashboard = () => {
  const columns = [
    {
      Header: 'Checkbox',
      accessor: 'show.genres',
      Cell: () => (
        <CustomCheckbox id="exampleCheckbox" label="" onChange={() => {}} />
      ),
    },
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
      Header: 'DropDown',
      accessor: 'drop',
      Cell: () => (
        <Dropdown
          iconColor="#616161"
          classname="text-titleGrey flex items-center justify-center gap-3 w-[130px] h-11 text-xs font-medium"
          title="Last 30 days"
        >
          <div className="font-medium text-titleGrey">Last 10 days </div>
          <div className="font-medium text-titleGrey">Last 20 days</div>
        </Dropdown>
      ),
    },
    {
      Header: 'Delete',
      accessor: 'delete',
      Cell: () => (
        <div className="cursor-pointer">
          <ActivitySvg />
        </div>
      ),
    },
  ];

  const data = [
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    {
      activity: 'James Perry unsubscribed',
      sent: '06.01.2022',
      role: 'owner',
    },
    {
      activity: 'Thomas unsubscribed',
      sent: '06.01.2022',
      role: 'admin',
    },
    // Add more data here...
  ];

  return (
    <div>
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
