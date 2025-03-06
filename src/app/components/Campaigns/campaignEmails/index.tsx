'use client';

import Image from 'next/image';

const ActivityDashboard = () => {
  return (
    <div className="px-5 py-30 md:px-7">
      <div className="mt-10 flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="fs-13 min-w-full divide-y divide-gray-300 font-medium text-grey300">
                <thead className="bg-gray-50">
                  <tr className="divide-gray-200 xl:divide-x">
                    <th
                      scope="col"
                      className="fs-13 text-757575 min-w-[293px] py-3 pl-3 pr-3 text-left font-medium"
                    >
                      Name{' '}
                      <Image
                        src="/svg-images/down-arrow.svg"
                        className="float-right inline-block"
                        alt="arrow"
                        width={12}
                        height={12}
                      />
                    </th>

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

                    <th
                      scope="col"
                      className="fs-13 text-757575 hidden min-w-[125px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium md:table-cell"
                    >
                      Status{' '}
                      <Image
                        src="/svg-images/down-arrow.svg"
                        className="float-right inline-block"
                        alt="arrow"
                        width={12}
                        height={12}
                      />
                    </th>

                    <th
                      scope="col"
                      className="fs-13 text-757575 hidden min-w-[255px] py-3 pl-3 pr-3 text-left font-medium sm:table-cell sm:pr-6"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-gray-200 xl:divide-x">
                    <td className="fs-13 min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-grey300">
                      NEW Cotton-Blends to Brighten Up Winter
                      <div className="mt-4 lg:hidden">
                        <div className="flex items-center justify-between">
                          <div className="mb-1.5">06.01.2022 </div>
                          <div className="text-757575 text-xs">4:00PM</div>
                        </div>
                        <div className="mt-4 flex items-center justify-between md:hidden">
                          <a
                            href="#/"
                            className="ryzeo-blue block rounded-full px-2.5 py-1 text-xs font-light leading-3 text-white"
                          >
                            HTML
                          </a>
                          <a
                            href="#"
                            className="ryzeo-blue ml-3 block rounded px-2.5 py-1.5 text-xs font-light leading-3 text-white"
                          >
                            New Editor
                          </a>
                        </div>
                        <div className="mt-4 flex items-center justify-center sm:hidden">
                          <a href="#/" className="group relative inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/edit-table.svg"
                              alt="Edit"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Edit
                            </span>
                          </a>
                          <a href="#/" className="group relative ml-6 inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/delete.svg"
                              alt="Delete"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Delete
                            </span>
                          </a>
                          <a href="#/" className="group relative ml-6 inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/export-table.svg"
                              alt="Export"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Share
                            </span>
                          </a>
                          <a
                            href="campaign-blasts/create-campaign.html"
                            className="group relative ml-6 inline-block"
                          >
                            <Image
                              className="w-3.5"
                              src="/svg-images/union.svg"
                              alt="Union"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Send
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>

                    <td className="fs-13 hidden min-w-[125px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-grey300 lg:table-cell">
                      <div className="mb-1.5">06.01.2022 </div>
                      <div className="text-757575 text-xs">4:00PM</div>
                    </td>

                    <td className="fs-13 hidden min-w-[140px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-grey300 md:table-cell">
                      <div className="flex items-center justify-end">
                        <a
                          href="#"
                          className="ryzeo-blue block rounded-full px-2.5 py-1 text-xs font-light leading-3 text-white"
                        >
                          HTML
                        </a>
                        <a
                          href="#"
                          className="ryzeo-blue ml-3 block rounded px-2.5 py-1.5 text-xs font-light leading-3 text-white"
                        >
                          New Editor
                        </a>
                      </div>
                    </td>

                    <td className="fs-13 hidden min-w-[255px] whitespace-nowrap py-3 pl-3 pr-3 text-grey300 sm:table-cell">
                      <div className="flex items-center">
                        <a
                          href="create-blasts/setup-blast.html"
                          className="group relative inline-block"
                        >
                          <Image
                            className="w-3.5"
                            src="/svg-images/edit-table.svg"
                            alt="Edit"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Edit
                          </span>
                        </a>
                        <a href="#/" className="group relative ml-6 inline-block">
                          <Image
                            className="w-3.5"
                            src="/svg-images/delete.svg"
                            alt="Delete"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Delete
                          </span>
                        </a>
                        <a href="#/" className="group relative ml-6 inline-block">
                          <Image
                            className="w-3.5"
                            src="/svg-images/export-table.svg"
                            alt="Export"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Share
                          </span>
                        </a>
                        <a
                          href="campaign-blasts/create-campaign.html"
                          className="group relative ml-6 inline-block"
                        >
                          <Image
                            className="w-3.5"
                            src="/svg-images/union.svg"
                            alt="Union"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Send
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-gray-200 xl:divide-x">
                    <td className="fs-13 min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-grey300">
                      NEW Cotton-Blends to Brighten Up Winter
                      <div className="mt-4 lg:hidden">
                        <div className="flex items-center justify-between">
                          <div className="mb-1.5">06.01.2022 </div>
                          <div className="text-757575 text-xs">4:00PM</div>
                        </div>
                        <div className="mt-4 flex items-center justify-between md:hidden">
                          <a
                            href="#/"
                            className="ryzeo-blue block rounded-full px-2.5 py-1 text-xs font-light leading-3 text-white"
                          >
                            HTML
                          </a>
                          <a
                            href="#"
                            className="ryzeo-blue ml-3 block rounded px-2.5 py-1.5 text-xs font-light leading-3 text-white"
                          >
                            New Editor
                          </a>
                        </div>
                        <div className="mt-4 flex items-center justify-center sm:hidden">
                          <a href="#/" className="group relative inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/edit-table.svg"
                              alt="Edit"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Edit
                            </span>
                          </a>
                          <a href="#/" className="group relative ml-6 inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/delete.svg"
                              alt="Delete"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Delete
                            </span>
                          </a>
                          <a href="#/" className="group relative ml-6 inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/export-table.svg"
                              alt="Export"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Share
                            </span>
                          </a>
                          <a
                            href="campaign-blasts/create-campaign.html"
                            className="group relative ml-6 inline-block"
                          >
                            <Image
                              className="w-3.5"
                              src="/svg-images/union.svg"
                              alt="Union"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Send
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>

                    <td className="fs-13 hidden min-w-[125px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-grey300 lg:table-cell">
                      <div className="mb-1.5">06.01.2022 </div>
                      <div className="text-757575 text-xs">4:00PM</div>
                    </td>

                    <td className="fs-13 hidden min-w-[140px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-grey300 md:table-cell">
                      <div className="flex items-center justify-end">
                        <a
                          href="#"
                          className="ryzeo-blue block rounded-full px-2.5 py-1 text-xs font-light leading-3 text-white"
                        >
                          HTML
                        </a>
                        <a
                          href="#"
                          className="ryzeo-blue ml-3 block rounded px-2.5 py-1.5 text-xs font-light leading-3 text-white"
                        >
                          New Editor
                        </a>
                      </div>
                    </td>

                    <td className="fs-13 hidden min-w-[255px] whitespace-nowrap py-3 pl-3 pr-3 text-grey300 sm:table-cell">
                      <div className="flex items-center">
                        <a
                          href="create-blasts/setup-blast.html"
                          className="group relative inline-block"
                        >
                          <Image
                            className="w-3.5"
                            src="/svg-images/edit-table.svg"
                            alt="Edit"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Edit
                          </span>
                        </a>
                        <a href="#/" className="group relative ml-6 inline-block">
                          <Image
                            className="w-3.5"
                            src="/svg-images/delete.svg"
                            alt="Delete"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Delete
                          </span>
                        </a>
                        <a href="#/" className="group relative ml-6 inline-block">
                          <Image
                            className="w-3.5"
                            src="/svg-images/export-table.svg"
                            alt="Export"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Share
                          </span>
                        </a>
                        <a
                          href="campaign-blasts/create-campaign.html"
                          className="group relative ml-6 inline-block"
                        >
                          <Image
                            className="w-3.5"
                            src="/svg-images/union.svg"
                            alt="Union"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Send
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-gray-200 xl:divide-x">
                    <td className="fs-13 min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-grey300">
                      NEW Cotton-Blends to Brighten Up Winter
                      <div className="mt-4 lg:hidden">
                        <div className="flex items-center justify-between">
                          <div className="mb-1.5">06.01.2022 </div>
                          <div className="text-757575 text-xs">4:00PM</div>
                        </div>
                        <div className="mt-4 flex items-center justify-between md:hidden">
                          <a
                            href="#/"
                            className="ryzeo-blue block rounded-full px-2.5 py-1 text-xs font-light leading-3 text-white"
                          >
                            HTML
                          </a>
                          <a
                            href="#"
                            className="ryzeo-blue ml-3 block rounded px-2.5 py-1.5 text-xs font-light leading-3 text-white"
                          >
                            New Editor
                          </a>
                        </div>
                        <div className="mt-4 flex items-center justify-center sm:hidden">
                          <a href="#/" className="group relative inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/edit-table.svg"
                              alt="Edit"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Edit
                            </span>
                          </a>
                          <a href="#/" className="group relative ml-6 inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/delete.svg"
                              alt="Delete"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Delete
                            </span>
                          </a>
                          <a href="#/" className="group relative ml-6 inline-block">
                            <Image
                              className="w-3.5"
                              src="/svg-images/export-table.svg"
                              alt="Export"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Share
                            </span>
                          </a>
                          <a
                            href="campaign-blasts/create-campaign.html"
                            className="group relative ml-6 inline-block"
                          >
                            <Image
                              className="w-3.5"
                              src="/svg-images/union.svg"
                              alt="Union"
                              width={14}
                              height={14}
                            />
                            <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                              Send
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>

                    <td className="fs-13 hidden min-w-[125px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-grey300 lg:table-cell">
                      <div className="mb-1.5">06.01.2022 </div>
                      <div className="text-757575 text-xs">4:00PM</div>
                    </td>

                    <td className="fs-13 hidden min-w-[140px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-grey300 md:table-cell">
                      <div className="flex items-center justify-end">
                        <a
                          href="#"
                          className="ryzeo-blue block rounded-full px-2.5 py-1 text-xs font-light leading-3 text-white"
                        >
                          HTML
                        </a>
                        <a
                          href="#"
                          className="ryzeo-blue ml-3 block rounded px-2.5 py-1.5 text-xs font-light leading-3 text-white"
                        >
                          New Editor
                        </a>
                      </div>
                    </td>

                    <td className="fs-13 hidden min-w-[255px] whitespace-nowrap py-3 pl-3 pr-3 text-grey300 sm:table-cell">
                      <div className="flex items-center">
                        <a
                          href="create-blasts/setup-blast.html"
                          className="group relative inline-block"
                        >
                          <Image
                            className="w-3.5"
                            src="/svg-images/edit-table.svg"
                            alt="Edit"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Edit
                          </span>
                        </a>
                        <a href="#/" className="group relative ml-6 inline-block">
                          <Image
                            className="w-3.5"
                            src="/svg-images/delete.svg"
                            alt="Delete"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Delete
                          </span>
                        </a>
                        <a href="#/" className="group relative ml-6 inline-block">
                          <Image
                            className="w-3.5"
                            src="/svg-images/export-table.svg"
                            alt="Export"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Share
                          </span>
                        </a>
                        <a
                          href="campaign-blasts/create-campaign.html"
                          className="group relative ml-6 inline-block"
                        >
                          <Image
                            className="w-3.5"
                            src="/svg-images/union.svg"
                            alt="Union"
                            width={14}
                            height={14}
                          />
                          <span className="ryzeo-blue invisible absolute -left-3 -top-8 z-10 rounded-md px-2.5 py-1.5 text-center text-xs text-white group-hover:visible">
                            Send
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
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
