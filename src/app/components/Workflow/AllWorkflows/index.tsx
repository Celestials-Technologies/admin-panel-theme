'use client';

import TableComponent from '@/app/utils/ui/Table';

const AllWorkflows = () => {
  const columns = [
    {
      Header: 'Workflow',
      accessor: 'workflow',
    },
    {
      Header: 'Recipients',
      accessor: 'recipients',
    },
    {
      Header: 'Converted',
      accessor: 'converted',
    },
    {
      Header: 'Delivered',
      accessor: 'delivered',
    },
    {
      Header: 'Clicked',
      accessor: 'clicked',
    },
    {
      Header: 'Unsubscribed',
      accessor: 'unsubscribed',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ }: { row: { original: any } }) => (
        <div className="flex items-center">
          <a href="workflow-action-report.html" className="mr-4">
            <img src="images/view.png" alt="view" className="mr-1.5 inline" />
            <span>View details</span>
          </a>
          <span>
            <svg
              className="ml-3 inline h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            <span>More items</span>
          </span>
        </div>
      ),
    },
  ];

  const data = [
    {
      workflow: 'NEW Cotton-Blends to Brighten Up Winter',
      recipients: '06.01.2022',
      converted: '400',
      delivered: '$2054',
      clicked: '90',
      unsubscribed: 'ABC',
    },
    {
      workflow: 'Spring Collection Launch',
      recipients: '07.01.2022',
      converted: '350',
      delivered: '$1800',
      clicked: '75',
      unsubscribed: 'XYZ',
    },
    {
      workflow: 'Summer Sale Announcement',
      recipients: '08.01.2022',
      converted: '500',
      delivered: '$2300',
      clicked: '120',
      unsubscribed: 'DEF',
    },
    {
      workflow: 'Autumn Specials',
      recipients: '09.01.2022',
      converted: '450',
      delivered: '$2100',
      clicked: '100',
      unsubscribed: 'GHI',
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="px-5 py-30 md:px-7">
      <div className="mt-10 flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="mt-11 items-center justify-between sm:flex">
            <h1 className="font-gilroyBold text-424242 m-0 text-xl leading-5">All Workflows</h1>
            <div className="mt-5 items-start justify-end sm:mt-0 sm:flex">
              <button className="border-eeeeee border-md fs-13 font-inter border-lg text-616161 border-bdbdbd ml-auto flex items-center rounded-md border bg-white p-2 font-medium leading-4 shadow sm:py-3 sm:pl-4 sm:pr-3">
                <img className="mr-1.5 sm:mr-2.5" src="images/export.png" />
                Export as CVS
              </button>
              <button className="border-eeeeee border-md fs-13 font-inter border-lg text-616161 border-bdbdbd ml-auto mt-3 flex items-center rounded-md border bg-white p-2 font-medium leading-4 shadow sm:ml-2.5 sm:mt-0 sm:py-3 sm:pl-4 sm:pr-3">
                <img className="mr-1.5 sm:mr-2.5" src="images/export.png" />
                Export as CVS (Group by months)
              </button>
            </div>
          </div>
          <div id="allWorkflows" className="mt-6 flex flex-col">
            <div className="-my-2 overflow-x-auto px-1">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <TableComponent
                    columns={columns}
                    data={data}
                    title="All Workflows"
                    showFilter={true}
                    showPagination={true}
                    showSearchBar={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWorkflows;
