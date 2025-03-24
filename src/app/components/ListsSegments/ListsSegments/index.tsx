'use client';

import TableComponent from '@/app/utils/ui/Table';

const ListsSegments = () => {
  const columns = [
    {
      Header: 'List Name',
      accessor: 'listName',
    },
    {
      Header: 'Members',
      accessor: 'members',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ }: { row: { original: any } }) => (
        <div className="flex items-center">
          <button type="button" className="mr-4 hover:text-[#3575d5]">
            <span>Add</span>
          </button>
          <button type="button" className="mr-4 hover:text-[#3575d5]">
            <img src="images/edit.png" alt="Edit" className="inline mr-1.5" />
            <span>Edit</span>
          </button>
          <button type="button" className="flex items-center hover:text-[#3575d5]">
            <img src="images/delete.png" alt="Delete" className="inline mr-1.5" />
            <span>Delete</span>
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      listName: '123',
      members: 757,
    },
    {
      listName: 'abc',
      members: 757,
    },
    {
      listName: 'Andy-Test',
      members: 757,
    },
    // Add more data here...
  ];

  return (
    <>
      <div className="md:px-6 px-3 pt-7 bg-f6f7f9 font-inter pb-44">
        <TableComponent
          columns={columns}
          data={data}
          title="All Lists & Segments"
          showFilter={true}
          showPagination={true}
          showSearchBar={true}
        />
      </div>
    </>
  );
};

export default ListsSegments;