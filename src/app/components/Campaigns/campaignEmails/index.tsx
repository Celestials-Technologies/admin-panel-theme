'use client';

import Image from 'next/image';
import { useMemo } from 'react';

// Reusable components
const TableHeader = ({ title, showArrow = true }: { title: string; showArrow?: boolean })  => (
  <th
    scope="col"
    className="fs-13 text-757575 min-w-[100px] py-3 pl-3 pr-3 text-left font-medium"
  >
    {title}{' '}
    {showArrow && (
      <Image
        src="/svg-images/down-arrow.svg"
        className="float-right inline-block"
        alt="arrow"
        width={12}
        height={12}
      />
    )}
  </th>
);

const ActionButton =  ({ icon, label, href = "#/" }: { icon: string; label: string; href?: string }) => (
  <a href={href} className="group relative ml-6 first:ml-0 inline-block">
    <Image
      className="w-3.5"
      src={`/svg-images/${icon}.svg`}
      alt={label}
      width={14}
      height={14}
    />
    <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
      {label}
    </span>
  </a>
);

const StatusBadge = ({ label, rounded = false } : { label: string; rounded?: boolean }) => (
  <a
    href="#"
    className={`ryzeo-blue block ${
      rounded ? 'rounded-full' : 'rounded'
    } px-2.5 py-1 text-xs font-light leading-3 text-white`}
  >
    {label}
  </a>
);

const CampaignRow = ({ campaign, index }: { campaign: { name: string; date: string; time: string }; index: number }) => {
  return (
    <tr key={index} className="divide-gray-200 xl:divide-x">
      <td className="fs-13 min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-grey300">
        {campaign.name}
        <div className="mt-4 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="mb-1.5">{campaign.date}</div>
            <div className="text-757575 text-xs">{campaign.time}</div>
          </div>
          <div className="mt-4 flex items-center justify-between md:hidden">
            <StatusBadge label="HTML" rounded={true} />
            <StatusBadge label="New Editor" />
          </div>
          <div className="mt-4 flex items-center justify-center sm:hidden">
            <ActionButton icon="edit-table" label="Edit" />
            <ActionButton icon="delete" label="Delete" />
            <ActionButton icon="export-table" label="Share" />
            <ActionButton 
              icon="union" 
              label="Send" 
              href="campaign-blasts/create-campaign.html" 
            />
          </div>
        </div>
      </td>

      <td className="fs-13 hidden min-w-[125px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-grey300 lg:table-cell">
        <div className="mb-1.5">{campaign.date}</div>
        <div className="text-757575 text-xs">{campaign.time}</div>
      </td>

      <td className="fs-13 hidden min-w-[140px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-grey300 md:table-cell">
        <div className="flex items-center justify-end">
          <StatusBadge label="HTML" rounded={true} />
          <div className="ml-3">
            <StatusBadge label="New Editor" />
          </div>
        </div>
      </td>

      <td className="fs-13 hidden min-w-[255px] whitespace-nowrap py-3 pl-3 pr-3 text-grey300 sm:table-cell">
        <div className="flex items-center">
          <ActionButton 
            icon="edit-table" 
            label="Edit" 
            href="create-blasts/setup-blast.html" 
          />
          <ActionButton icon="delete" label="Delete" />
          <ActionButton icon="export-table" label="Share" />
          <ActionButton 
            icon="union" 
            label="Send" 
            href="campaign-blasts/create-campaign.html" 
          />
        </div>
      </td>
    </tr>
  );
};

const ActivityDashboard = () => {
  // Mock data - in a real app, this would come from props or API
  const campaignData = useMemo(() => [
    { name: "NEW Cotton-Blends to Brighten Up Winter", date: "06.01.2022", time: "4:00PM" },
    { name: "NEW Cotton-Blends to Brighten Up Winter", date: "06.01.2022", time: "4:00PM" },
    { name: "NEW Cotton-Blends to Brighten Up Winter", date: "06.01.2022", time: "4:00PM" },
  ], []);

  return (
    <div className="px-5 py-30 md:px-7">
      <div className="mt-10 flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="fs-13 min-w-full divide-y divide-gray-300 font-medium text-grey300">
                <thead className="bg-gray-50">
                  <tr className="divide-gray-200 xl:divide-x">
                    <TableHeader title="Name" />
                    <th
                      scope="col"
                      className="fs-13 text-757575 hidden min-w-[100px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium lg:table-cell"
                    >
                      Created Add{' '}
                      <Image
                        src="/svg-images/down-arrow.svg"
                        className="float-right inline-block"
                        alt="arrow"
                        width={12}
                        height={12}
                      />
                    </th>
                    <TableHeader title="Status" />
                    <TableHeader title="Actions" showArrow={false} />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {campaignData.map((campaign, index) => (
                    <CampaignRow key={index} campaign={campaign} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <TableComponent
        columns={columns}
        data={data}
        showFilter={true}
        showPagination={true}
        showSearchBar={true}
      /> */}
    </div>
  );
};

export default ActivityDashboard;
