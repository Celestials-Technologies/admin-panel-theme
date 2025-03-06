'use client';

const Subscribers = () => {
  return (
    <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
      <div className="md:px-1.5">
        <div className="items-center justify-between sm:flex">
          <div className="sm:w-6/12 md:pr-3">
            <h2 className="text-212121 font-gilroyBold text-xl leading-3 sm:leading-5">
              Subscribers
            </h2>
          </div>
          <div className="relative sm:pl-3">
            <button className="text-616161 boxShadow relative ml-auto flex w-28 items-center justify-between rounded bg-white px-2.5 py-3 text-[13px] font-medium leading-4">
              <span>Actions</span>
              <img className="absolute right-3 top-3" src="images/down-arrow.png" />
            </button>
            <div className="absolute right-0 z-10 mt-0.5 flex w-56 flex-col">
              <button className="text-616161 boxShadow rounded-t-lg border-b bg-white px-2.5 py-2 text-left text-sm font-medium leading-5 hover:bg-[#3575d5] hover:text-white">
                Add/Import
              </button>
              <button className="text-616161 boxShadow border-b bg-white px-2.5 py-2 text-left text-sm font-medium leading-5 hover:bg-[#3575d5] hover:text-white">
                Bulk Unsbscribe
              </button>
              <button className="text-616161 boxShadow border-b bg-white px-2.5 py-2 text-left text-sm font-medium leading-5 hover:bg-[#3575d5] hover:text-white">
                Download/Export
              </button>
              <button className="text-616161 boxShadow rounded-b-lg border-b bg-white px-2.5 py-2 text-left text-sm font-medium leading-5 hover:bg-[#3575d5] hover:text-white">
                Fields
              </button>
            </div>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-between">
          <form className="hidden w-1/2 md:block">
            <div className="border-e0e0e0 relative flex items-center rounded border bg-white px-4 py-2">
              <input
                className="fs-13 text-9e9e9e h-6 w-full pl-8 font-medium leading-3"
                type="text"
                name="search"
                placeholder="Search"
              />
              <img className="absolute" src="images/search.png" />
            </div>
          </form>

          <div className="relative mt-5 w-1/2 sm:mt-0 md:w-1/4" id="select-list-segment">
            <button className="border-e0e0e0 text-9e9e9e relative mx-auto flex w-[96%] items-center justify-between rounded border bg-white px-4 py-2">
              List
              <img className="ml-3" src="images/down-arrow.png" alt="Arrow" />
            </button>
            <div className="dropdown-show-hide absolute left-0 right-0 z-10 mx-auto max-h-[200px] w-[96%] overflow-y-auto rounded-b-lg bg-white">
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                123
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Andy - test
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Andy - test
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Andy - test
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                123
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Andy - test
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Andy - test
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Andy - test
              </span>
            </div>
          </div>

          <div className="relative mt-5 w-1/2 sm:mt-0 md:w-1/4" id="status-list-segment">
            <button className="border-e0e0e0 text-9e9e9e relative ml-auto flex w-[96%] items-center justify-between rounded border bg-white px-4 py-2">
              Status
              <img className="ml-3" src="images/down-arrow.png" alt="Arrow" />
            </button>
            <div className="dropdown-show-hide absolute right-0 z-10 max-h-[200px] w-[96%] overflow-y-auto rounded-b-lg bg-white">
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Active
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Pending
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Inactive
              </span>
              <span className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white">
                Unsubscribed
              </span>
            </div>
          </div>
        </div>
      </div>
      <form className="mt-5 w-full md:hidden">
        <div className="border-e0e0e0 relative flex items-center rounded border bg-white px-4 py-2">
          <input
            className="fs-13 text-9e9e9e h-6 w-full pl-5 font-medium leading-3 sm:pl-8"
            type="text"
            name="search"
            placeholder="Placeholder (Optional)"
          />
          <img className="absolute" src="images/search.png" />
        </div>
      </form>

      <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <div className="mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden rounded-t-lg shadow ring-1 ring-black ring-opacity-5">
                <table className="fs-13 search-table min-w-full divide-y divide-gray-300 font-medium lg:w-auto">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="fs-13 text-757575 w-3/4 py-3 pl-3 pr-3 text-left font-medium"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="fs-13 text-757575 hidden w-[200px] min-w-[200px] py-3 pl-3  pr-3 text-left font-medium lg:table-cell"
                      >
                        Status
                        <img
                          src="images/down-arrow.png"
                          className="inline-block pl-2"
                          alt="arrow"
                        />
                      </th>
                      <th
                        scope="col"
                        className="fs-13 text-757575 hidden w-[200px] min-w-[200px] py-3 pl-3 pr-3 text-left font-medium md:table-cell lg:w-[250px] lg:min-w-[250px]"
                      >
                        Subscribed
                        <img
                          src="images/down-arrow.png"
                          className="inline-block pl-2"
                          alt="arrow"
                        />
                      </th>
                      <th
                        scope="col"
                        className="fs-13 text-757575 w-[150px]  py-3 pl-3 pr-3 text-left font-medium"
                      >
                        {' '}
                        Actions
                        <img
                          src="images/down-arrow.png"
                          className="inline-block  pl-2"
                          alt="arrow"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                      <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium sm:w-[250px] sm:min-w-[250px] md:w-[300px] md:min-w-[300px]">
                        <div className="">
                          <a
                            href="view-subscribers.html"
                            className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                          >
                            usertest@gmail.com
                          </a>
                        </div>
                        <div className="mt-3 lg:hidden">
                          <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                            Active
                          </span>
                          <div className="mt-2">Jul 24, 2022</div>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium lg:table-cell">
                        <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                          Active
                        </span>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell">
                        Jul 24, 2022
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-left sm:text-right lg:w-[290px] lg:min-w-[290px]">
                        <button className="inline-block flex items-center p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                          <img className="mr-1" src="images/edit-blue.png" />
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                      <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium sm:w-[250px] sm:min-w-[250px] md:w-[300px] md:min-w-[300px]">
                        <div className="">
                          <a
                            href="view-subscribers.html"
                            className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                          >
                            usertest@gmail.com
                          </a>
                        </div>
                        <div className="mt-3 lg:hidden">
                          <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                            Active
                          </span>
                          <div className="mt-2">Jul 24, 2022</div>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium lg:table-cell">
                        <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                          Active
                        </span>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell">
                        Jul 24, 2022
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-left sm:text-right lg:w-[290px] lg:min-w-[290px]">
                        <button className="inline-block flex items-center p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                          <img className="mr-1" src="images/edit-blue.png" />
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                      <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium sm:w-[250px] sm:min-w-[250px] md:w-[300px] md:min-w-[300px]">
                        <div className="">
                          <a
                            href="view-subscribers.html"
                            className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                          >
                            usertest@gmail.com
                          </a>
                        </div>
                        <div className="mt-3 lg:hidden">
                          <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                            Active
                          </span>
                          <div className="mt-2">Jul 24, 2022</div>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium lg:table-cell">
                        <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                          Active
                        </span>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell">
                        Jul 24, 2022
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-left sm:text-right lg:w-[290px] lg:min-w-[290px]">
                        <button className="inline-block flex items-center p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                          <img className="mr-1" src="images/edit-blue.png" />
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                      <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium sm:w-[250px] sm:min-w-[250px] md:w-[300px] md:min-w-[300px]">
                        <div className="">
                          <a
                            href="view-subscribers.html"
                            className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                          >
                            usertest@gmail.com
                          </a>
                        </div>
                        <div className="mt-3 lg:hidden">
                          <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                            Active
                          </span>
                          <div className="mt-2">Jul 24, 2022</div>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium lg:table-cell">
                        <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                          Active
                        </span>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell">
                        Jul 24, 2022
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-left sm:text-right lg:w-[290px] lg:min-w-[290px]">
                        <button className="inline-block flex items-center p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                          <img className="mr-1" src="images/edit-blue.png" />
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                      <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium sm:w-[250px] sm:min-w-[250px] md:w-[300px] md:min-w-[300px]">
                        <div className="">
                          <a
                            href="view-subscribers.html"
                            className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                          >
                            usertest@gmail.com
                          </a>
                        </div>
                        <div className="mt-3 lg:hidden">
                          <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                            Active
                          </span>
                          <div className="mt-2">Jul 24, 2022</div>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium lg:table-cell">
                        <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                          Active
                        </span>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell">
                        Jul 24, 2022
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-left sm:text-right lg:w-[290px] lg:min-w-[290px]">
                        <button className="inline-block flex items-center p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                          <img className="mr-1" src="images/edit-blue.png" />
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-b-lg border-t bg-white px-5 py-5 sm:justify-end">
          <a
            className="border-bdbdbd page-active mr-2.5 flex h-6 w-6 items-center justify-center rounded border"
            href="#/"
          >
            <img src="images/prev.png" />
          </a>
          <a
            className="text-bdbdbd border-bdbdbd page-active mr-2.5 flex h-6 w-6 items-center justify-center rounded border text-sm font-medium leading-3 focus:text-white"
            href="#/"
          >
            1
          </a>
          <a
            className="text-bdbdbd border-bdbdbd page-active mr-2.5 flex h-6 w-6 items-center justify-center rounded border text-sm font-medium leading-3 focus:text-white"
            href="#/"
          >
            2
          </a>
          <a
            className="text-bdbdbd border-bdbdbd page-active mr-2.5 flex h-6 w-6 items-center justify-center rounded border text-sm font-medium leading-3 focus:text-white"
            href="#/"
          >
            3
          </a>
          <a
            className="text-bdbdbd border-bdbdbd page-active mr-2.5 flex h-6 w-6 items-center justify-center rounded border text-sm font-medium leading-3 focus:text-white"
            href="#/"
          >
            ...
          </a>
          <a
            className="border-bdbdbd page-active flex h-6 w-6 items-center justify-center rounded border"
            href="#/"
          >
            <img src="images/next.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
