'use client';

import Image from 'next/image';
import TableComponent from '../../Table';
import { SelectColumnFilter } from '../../Table/filter';

const AllWorkflows = () => {
  
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
                  <table className="fs-13 text-616161 min-w-full divide-y divide-gray-300 font-medium">
                    <thead className="bg-gray-50">
                      <tr className="divide-gray-200 xl:divide-x">
                        <th
                          scope="col"
                          className="fs-13 text-757575 w-[293px] min-w-[293px] py-3 pl-3 pr-3 text-left font-medium xl:border-r"
                        >
                          Workflow{' '}
                          <img
                            src="images/down-arrow.png"
                            className="float-right inline-block"
                            alt="arrow"
                          />
                        </th>
                        <th
                          scope="col"
                          className="fs-13 text-757575 hidden w-[134px] min-w-[134px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium xl:table-cell"
                        >
                          Recipients{' '}
                          <img
                            src="images/down-arrow.png"
                            className="float-right inline-block"
                            alt="arrow"
                          />
                        </th>
                        <th
                          scope="col"
                          className="fs-13 text-757575 hidden w-[115px] min-w-[115px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium lg:table-cell"
                        >
                          Converted{' '}
                          <img
                            src="images/down-arrow.png"
                            className="float-right inline-block"
                            alt="arrow"
                          />
                        </th>
                        <th
                          scope="col"
                          className="fs-13 text-757575 hidden w-[115px] min-w-[115px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium sm:pr-6 md:table-cell"
                        >
                          Delivered{' '}
                          <img
                            src="images/down-arrow.png"
                            className="float-right inline-block md:table-cell"
                            alt="arrow"
                          />
                        </th>
                        <th
                          scope="col"
                          className="fs-13 text-757575 hidden w-[139px] min-w-[139px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium sm:table-cell sm:pr-6"
                        >
                          Clicked{' '}
                          <img
                            src="images/down-arrow.png"
                            className="float-right inline-block"
                            alt="arrow"
                          />
                        </th>
                        <th
                          scope="col"
                          className="fs-13 text-757575 w-[104px] min-w-[104px] py-3 pl-3 pr-3 text-left font-medium sm:pr-6"
                        >
                          Unsubscribed
                        </th>

                        <th
                          scope="col"
                          className="fs-13 text-757575 w-[150px] min-w-[150px] py-3 pl-3 pr-3 text-left font-medium sm:pr-6"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="divide-gray-200 xl:divide-x">
                        <td className="fs-13 text-616161 w-[293px] min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium xl:border-r">
                          <a href="workflow-action-report.html">
                            NEW Cotton-Blends to Brighten Up Winter
                          </a>
                          <div className="xl:hidden">
                            <div className="mt-2 flex items-center justify-between">
                              <span>06.01.2022</span>
                              <span>4:00PM</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between lg:hidden">
                              <span>400</span>
                              <span>5%</span>
                            </div>
                            <p className="mt-2 md:hidden">$2054</p>
                            <div className="mt-2 flex items-center justify-between sm:hidden">
                              <p>90</p>
                              <p className="text-757575 text-xs">1%</p>
                            </div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[134px] min-w-[134px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right xl:inline-block">
                          <div className="mb-1.5 text-center">06.01.2022 </div>
                          <div className="text-757575 text-center text-xs">4:00PM</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right lg:table-cell">
                          <div className="mb-1.5 text-center">400</div>
                          <div className="text-757575 text-center text-xs">5%</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top sm:pr-6 md:table-cell">
                          $2054
                        </td>
                        <td className="fs-13 text-616161 hidden w-[139px] min-w-[139px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell sm:pr-6">
                          <div className="mb-1.5 text-center">90</div>
                          <div className="text-757575 text-center text-xs">1%</div>
                        </td>
                        <td className="fs-13 text-616161 w-[104px] min-w-[104px] whitespace-nowrap py-3 pl-3 pr-3 text-center align-middle sm:align-top">
                          ABC
                        </td>
                        <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:align-top">
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
                        </td>
                      </tr>
                      <tr className="divide-gray-200 xl:divide-x">
                        <td className="fs-13 text-616161 w-[293px] min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium xl:border-r">
                          <a href="workflow-action-report.html">
                            NEW Cotton-Blends to Brighten Up Winter
                          </a>
                          <div className="xl:hidden">
                            <div className="mt-2 flex items-center justify-between">
                              <span>06.01.2022</span>
                              <span>4:00PM</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between lg:hidden">
                              <span>400</span>
                              <span>5%</span>
                            </div>
                            <p className="mt-2 md:hidden">$2054</p>
                            <div className="mt-2 flex items-center justify-between sm:hidden">
                              <p>90</p>
                              <p className="text-757575 text-xs">1%</p>
                            </div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[134px] min-w-[134px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3  text-right xl:inline-block">
                          <div className="mb-1.5 text-center">06.01.2022 </div>
                          <div className="text-757575 text-center text-xs">4:00PM</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3  pl-3 pr-3 text-right lg:table-cell">
                          <div className="mb-1.5 text-center">400</div>
                          <div className="text-757575 text-center text-xs">5%</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top sm:pr-6 md:table-cell">
                          $2054
                        </td>
                        <td className="fs-13 text-616161 hidden w-[139px] min-w-[139px] whitespace-nowrap border-r-0 border-none py-3 pl-3  pr-3 text-right sm:table-cell sm:pr-6">
                          <div className="mb-1.5 text-center">90</div>
                          <div className="text-757575 text-center text-xs">1%</div>
                        </td>
                        <td className="fs-13 text-616161 w-[104px] min-w-[104px] whitespace-nowrap py-3 pl-3 pr-3 text-center align-middle sm:align-top">
                          ABC
                        </td>
                        <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:align-top">
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
                        </td>
                      </tr>
                      <tr className="divide-gray-200 xl:divide-x">
                        <td className="fs-13 text-616161 w-[293px] min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium xl:border-r">
                          <a href="workflow-action-report.html">
                            NEW Cotton-Blends to Brighten Up Winter
                          </a>
                          <div className="xl:hidden">
                            <div className="mt-2 flex items-center justify-between">
                              <span>06.01.2022</span>
                              <span>4:00PM</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between lg:hidden">
                              <span>400</span>
                              <span>5%</span>
                            </div>
                            <p className="mt-2 md:hidden">$2054</p>
                            <div className="mt-2 flex items-center justify-between sm:hidden">
                              <p>90</p>
                              <p className="text-757575 text-xs">1%</p>
                            </div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[134px] min-w-[134px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right xl:inline-block">
                          <div className="mb-1.5 text-center">06.01.2022 </div>
                          <div className="text-757575 text-center text-xs">4:00PM</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right lg:table-cell">
                          <div className="mb-1.5 text-center">400</div>
                          <div className="text-757575 text-center text-xs">5%</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top sm:pr-6 md:table-cell">
                          $2054
                        </td>
                        <td className="fs-13 text-616161 hidden w-[139px] min-w-[139px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell sm:pr-6">
                          <div className="mb-1.5 text-center">90</div>
                          <div className="text-757575 text-center text-xs">1%</div>
                        </td>
                        <td className="fs-13 text-616161 w-[104px] min-w-[104px] whitespace-nowrap py-3 pl-3 pr-3 text-center align-middle sm:align-top">
                          ABC
                        </td>
                        <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:align-top">
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
                        </td>
                      </tr>
                      <tr className="divide-gray-200 xl:divide-x">
                        <td className="fs-13 text-616161 w-[293px] min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium xl:border-r">
                          <a href="workflow-action-report.html">
                            NEW Cotton-Blends to Brighten Up Winter
                          </a>
                          <div className="xl:hidden">
                            <div className="mt-2 flex items-center justify-between">
                              <span>06.01.2022</span>
                              <span>4:00PM</span>
                            </div>
                            <div className="mt-2 flex items-center justify-between lg:hidden">
                              <span>400</span>
                              <span>5%</span>
                            </div>
                            <p className="mt-2 md:hidden">$2054</p>
                            <div className="mt-2 flex items-center justify-between sm:hidden">
                              <p>90</p>
                              <p className="text-757575 text-xs">1%</p>
                            </div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[134px] min-w-[134px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right xl:inline-block">
                          <div className="mb-1.5 text-center">06.01.2022 </div>
                          <div className="text-757575 text-center text-xs">4:00PM</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right lg:table-cell">
                          <div className="mb-1.5 text-center">400</div>
                          <div className="text-757575 text-center text-xs">5%</div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[115px] min-w-[115px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top sm:pr-6 md:table-cell">
                          $2054
                        </td>
                        <td className="fs-13 text-616161 hidden w-[139px] min-w-[139px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell sm:pr-6">
                          <div className="mb-1.5 text-center">90</div>
                          <div className="text-757575 text-center text-xs">1%</div>
                        </td>
                        <td className="fs-13 text-616161 w-[104px] min-w-[104px] whitespace-nowrap py-3 pl-3 pr-3 text-center align-middle sm:align-top">
                          ABC
                        </td>
                        <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:align-top">
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

export default AllWorkflows;
