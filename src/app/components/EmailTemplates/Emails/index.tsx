'use client';

import TableComponent from '@/app/utils/ui/Table';
import { SelectColumnFilter } from '@/app/utils/ui/Table/filter';

const Emails = () => {
  const columns = [
    {
      Header: 'Activity Type',
      accessor: 'activity',
    },
    {
      Header: 'Created Add',
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
      Cell: ({row}: { row: { original: any } }) => (
        <div className="flex items-center">
          <button
            className="group relative mr-4 inline-block"
            onClick={() => handleEdit(row.original)} // Pass the original row data
          >
            <img className="w-3.5" src="/images/edit.png" alt="Edit" />
            <span className="invisible absolute -left-3 -top-7 z-10 rounded bg-[#3575d5] px-2 py-1 text-center text-xs text-white group-hover:visible">
              Edit
            </span>
          </button>
            
          
          <button className="group relative inline-block" onClick={() => handleDelete(row.original)}>
            <img className="w-3.5" src="/images/delete.png" alt="Delete" />
            <span className="invisible absolute -left-3 -top-7 z-10 rounded bg-[#3575d5] px-2 py-1 text-center text-xs text-white group-hover:visible">
              Delete
            </span>
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (row: { activity: string; sent: string; role: string }) => {
    console.log('Edit row', row);
  };

  const handleDelete = (row: { activity: string; sent: string; role: string }) => {
    console.log('Deleting row', row);
  };

  const data = [
    {
      activity: 'NEW Cotton-Blends to Brighten Up Usman',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'NEW Cotton-Blends to Brighten Up Winter',
      sent: '06.01.2022',
      role: 'Owner',
    },
    {
      activity: 'NEW Cotton-Blends to Brighten Up Winter',
      sent: '06.01.2022',
      role: 'Admin',
    },
    {
      activity: 'NEW Cotton-Blends to Brighten Up Winter',
      sent: '06.01.2022',
      role: 'Admin',
    },
    // Remove the incomplete object with just actions property
    // Add more data here...
  ];
  return (
    <>
      <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
        <TableComponent
          columns={columns}
          data={data}
          title="Email"
          showFilter={true}
          showPagination={true}
          showSearchBar={true}
        />
      </div>
     
    </>
  );
};

export default Emails;
