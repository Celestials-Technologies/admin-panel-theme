'use client';

import Button from '@/app/utils/ui/Button';

const ListsSegments = () => {
  return (
    <>
      <div className="bg-f6f7f9 font-inter px-3 pb-44 pt-7 md:px-6">
        <div className="md:px-1.5">
          <div className="flex items-center justify-between">
            <h1 className="font-gilroyBold text-424242 mr-2.5 w-48 text-base leading-5 sm:text-xl md:w-56 lg:w-52">
              All Lists & Segments
            </h1>
            <form className="hidden w-10/12 md:block">
              <div className="border-e0e0e0 relative flex items-center rounded border bg-white px-4 py-2">
                <input
                  className="fs-13 text-9e9e9e h-6 w-full pl-8 font-medium leading-3"
                  type="text"
                  name="search"
                  placeholder="Search Lists & Segments"
                />
                <img className="absolute" src="images/search.png" />
              </div>
            </form>
            <div className="relative mt-5 w-full max-w-xs sm:mt-0" id="create-list-segment">
              <Button className="fs-13 font-inter ryeo-blue-bg ml-auto flex items-center rounded px-2.5 py-2 font-medium leading-5 text-white sm:py-3 sm:pl-4 sm:pr-3.5">
                Create List or Segment
                <img className="ml-3" src="images/down-arrow-white.png" alt="Arrow" />
              </Button>
              <div className="dropdown-show-hide absolute right-0 w-[195px] rounded-b-lg bg-white">
                <a
                  href="create-new-list.html"
                  className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white"
                >
                  Create List
                </a>
                <a
                  href="create-new-segments.html"
                  className="my-1 block px-4 py-3 text-sm leading-[14px] text-[#616161] hover:bg-[#3575d5] hover:text-white"
                >
                  Create Segment
                </a>
              </div>
            </div>
            <div className="pl-2.5">
              <Button className="fs-13 font-inter border-bdbdbd btn-boxShadow flex h-8 items-center rounded border bg-white px-2 py-1.5 font-medium leading-4 sm:h-11 sm:py-3 sm:pl-4 sm:pr-3 md:pl-1 lg:pl-2 xl:pl-4">
                <img className="mr-2.5" src="images/filter.png" />
                Filters
              </Button>
            </div>
          </div>
          <form className="mt-6 md:hidden">
            <div className="border-e0e0e0 relative flex items-center rounded border bg-white px-4 py-2">
              <input
                className="fs-13 text-9e9e9e h-6 w-full pl-8 font-medium leading-3"
                type="text"
                name="search"
                placeholder="Search Lists & Segments"
              />
              <img className="absolute" src="images/search.png" />
            </div>
          </form>
          <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="mt-6 flex flex-col">
              <div className="-my-2 overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-t-lg">
                    <table className="fs-13 text-616161 min-w-full divide-y divide-gray-300 font-medium">
                      <thead className="bg-gray-50">
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="fs-13 text-757575 w-1/2 py-3 pl-3 pr-3 text-left font-medium xl:border-r"
                          >
                            List Name{' '}
                            <img
                              src="images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>

                          <th
                            scope="col"
                            className="fs-13 text-757575 flex hidden w-[100px] min-w-[100px] justify-end py-3 pl-3 pr-3 text-left font-medium sm:table-cell"
                          >
                            Members
                            <img
                              src="images/down-arrow.png"
                              className="float-right ml-2 inline-block"
                              alt="arrow"
                            />
                          </th>

                          <th
                            scope="col"
                            className="fs-13 text-757575 w-[200px] min-w-[200px] py-3 pl-3 pr-3 text-left font-medium md:w-[340px] md:min-w-[340px] md:max-w-[340px]"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="align-center divide-x divide-gray-200">
                          <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium">
                            <a
                              href="subscribers.html"
                              className="inline-block hover:text-[#3575d5]"
                            >
                              123
                            </a>
                            <p className="text-757575 mt-1 text-xs font-medium">
                              This is test list created by Andy.
                            </p>
                            <div className="mt-2 md:hidden">
                              <span className="ryeo-blue-bg inline-flex items-center rounded px-1.5 py-0.5">
                                <span className="mr-1.5 text-xs text-white">Locked</span>
                                <span className="">
                                  <img src="images/help.gif" />
                                </span>
                              </span>
                              <div className="mt-1 sm:hidden">
                                <div className="flex items-center justify-between">
                                  <span className="mr-2">757</span>
                                  <span className="text-[10px] font-normal leading-4">members</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="fs-13 text-616161 hidden w-[100px] min-w-[100px] whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:table-cell">
                            <span className="mr-2">757 members</span>
                          </td>

                          <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 align-middle md:w-[340px] md:min-w-[340px] md:max-w-[340px] ">
                            <div className="flex items-center">
                              <Button type="button" className="mr-4 hover:text-[#3575d5]">
                                <span>Add</span>
                              </Button>
                              <Button type="button" className="mr-4 hover:text-[#3575d5]">
                                <img src="images/edit.png" alt="Edit" className="mr-1.5 inline" />
                                <span>Edit</span>
                              </Button>
                              <Button
                                type="button"
                                className="my-1.5 flex items-center hover:text-[#3575d5]"
                              >
                                <img
                                  className="mr-1.5 inline"
                                  src="images/delete.png"
                                  alt="Delete"
                                />
                                <span>Delete</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="align-center divide-x divide-gray-200">
                          <td className="align-center fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium">
                            <a
                              href="subscribers.html"
                              className="inline-block hover:text-[#3575d5]"
                            >
                              abc
                            </a>
                            <p className="text-757575 mt-1 text-xs font-medium">
                              This is test list created by Andy.
                            </p>
                            <div className="mt-2 md:hidden">
                              <span className="ryeo-blue-bg inline-flex items-center rounded px-1.5 py-0.5">
                                <span className="mr-1.5 text-xs text-white">Locked</span>
                                <span className="">
                                  <img src="images/help.gif" />
                                </span>
                              </span>
                              <div className="mt-1 sm:hidden">
                                <div className="flex items-center justify-between">
                                  <span className="mr-2">757</span>
                                  <span className="text-[10px] font-normal leading-4">members</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="fs-13 text-616161 hidden w-[100px] min-w-[100px] whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:table-cell">
                            <span className="mr-2">757 members</span>
                          </td>

                          <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 align-middle md:w-[340px] md:min-w-[340px] md:max-w-[340px]">
                            <div className="flex items-center">
                              <Button type="button" className="mr-4 hover:text-[#3575d5]">
                                <span>Add</span>
                              </Button>
                              <Button type="button" className="mr-4 hover:text-[#3575d5]">
                                <img src="images/edit.png" alt="Edit" className="mr-1.5 inline" />
                                <span>Edit</span>
                              </Button>
                              <Button
                                type="button"
                                className="my-1.5 flex items-center hover:text-[#3575d5]"
                              >
                                <img
                                  className="mr-1.5 inline"
                                  src="images/delete.png"
                                  alt="Delete"
                                />
                                <span>Delete</span>
                              </Button>
                            </div>
                          </td>
                        </tr>

                        <tr className="align-center divide-x divide-gray-200">
                          <td className="align-center fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium">
                            <a
                              href="subscribers.html"
                              className="inline-block hover:text-[#3575d5]"
                            >
                              Andy-Test
                            </a>
                            <p className="text-757575 mt-1 text-xs font-medium">
                              This is test list created by Andy.
                            </p>
                            <div className="mt-2 md:hidden">
                              <span className="ryeo-blue-bg inline-flex items-center rounded px-1.5 py-0.5">
                                <span className="mr-1.5 text-xs text-white">Locked</span>
                                <span className="">
                                  <img src="images/help.gif" />
                                </span>
                              </span>
                              <div className="mt-1 sm:hidden">
                                <div className="flex items-center justify-between">
                                  <span className="mr-2">757</span>
                                  <span className="text-[10px] font-normal leading-4">members</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 text-616161 hidden w-[100px] min-w-[100px] whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:table-cell">
                            <span className="mr-2">757 members</span>1
                          </td>

                          <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 align-middle md:w-[340px] md:min-w-[340px] md:max-w-[340px]">
                            <div className="flex items-center">
                              <Button type="button" className="mr-4 hover:text-[#3575d5]">
                                <span>Add</span>
                              </Button>
                              <Button type="button" className="mr-4 hover:text-[#3575d5]">
                                <img src="images/edit.png" alt="Edit" className="mr-1.5 inline" />
                                <span>Edit</span>
                              </Button>
                              <Button
                                type="button"
                                className="my-1.5 flex items-center hover:text-[#3575d5]"
                              >
                                <img
                                  className="mr-1.5 inline"
                                  src="images/delete.png"
                                  alt="Delete"
                                />
                                <span>Delete</span>
                              </Button>
                            </div>
                          </td>
                        </tr>

                        <tr className="align-center divide-x divide-gray-200">
                          <td className="align-center fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium">
                            <div className="flex">
                              <a href="create-new-segments.html" className="mr-2">
                                info+demo@datalatics.com{' '}
                              </a>
                              <span className="ryeo-blue-bg rounded px-1 py-1 text-[10px] font-normal leading-3 text-white">
                                Segment
                              </span>
                            </div>
                            <div className="mt-3 sm:hidden">
                              <div className="flex items-center justify-between">
                                <span className="mr-2">757</span>
                                <span className="text-[10px] font-normal leading-4">members</span>
                              </div>
                            </div>
                          </td>

                          <td className="fs-13 text-616161 hidden w-[100px] min-w-[100px] whitespace-nowrap py-3 pl-3 pr-3 sm:table-cell">
                            <span className="mr-2">757 members</span>
                          </td>

                          <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 align-middle md:w-[340px] md:min-w-[340px] md:max-w-[340px]">
                            <div className="flex flex-wrap items-center">
                              <Button type="button" className="my-1.5 mr-4 hover:text-[#3575d5]">
                                <span>Enable</span>
                              </Button>
                              <Button type="button" className="my-1.5 mr-4 hover:text-[#3575d5]">
                                <span>Duplicate</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="align-center divide-x divide-gray-200">
                          <td className="align-center fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium">
                            <div className="flex">
                              <a href="create-new-segments.html" className="mr-2">
                                Tcules test segment
                              </a>
                              <span className="ryeo-blue-bg rounded px-1 py-1 text-[10px] font-normal leading-3 text-white">
                                Segment
                              </span>
                            </div>
                            <div className="mt-3 sm:hidden">
                              <div className="flex items-center justify-between">
                                <span className="mr-2">757</span>
                                <span className="text-[10px] font-normal leading-4">members</span>
                              </div>
                            </div>
                          </td>

                          <td className="fs-13 text-616161 hidden w-[130px] min-w-[130px] whitespace-nowrap py-3 pl-3 pr-3 sm:table-cell">
                            <span className="mr-2">757 members</span>
                          </td>

                          <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 align-middle md:w-[340px] md:min-w-[340px] md:max-w-[340px]">
                            <div className="flex flex-wrap items-center">
                              <Button type="button" className="my-1.5 mr-4 hover:text-[#3575d5]">
                                <span>Enable</span>
                              </Button>
                              <Button type="button" className="my-1.5 mr-4 hover:text-[#3575d5]">
                                <span>Duplicate</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="align-center divide-x divide-gray-200">
                          <td className="align-center fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium">
                            <div className="flex">
                              <a href="create-new-segments.html" className="mr-2">
                                tcules 1
                              </a>
                              <span className="ryeo-blue-bg rounded px-1 py-1 text-[10px] font-normal leading-3 text-white">
                                Segment
                              </span>
                            </div>
                            <div className="mt-3 sm:hidden">
                              <div className="flex items-center justify-between">
                                <span className="mr-2">757</span>
                                <span className="text-[10px] font-normal leading-4">members</span>
                              </div>
                            </div>
                          </td>

                          <td className="fs-13 text-616161 hidden w-[130px] min-w-[130px] whitespace-nowrap py-3 pl-3 pr-3 sm:table-cell">
                            <span className="mr-2">757 members</span>
                          </td>

                          <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 align-middle md:w-[340px] md:min-w-[340px] md:max-w-[340px]">
                            <div className="flex flex-wrap items-center">
                              <span className="my-1.5 mr-3 flex items-center">
                                <Button
                                  type="button"
                                  className="relative inline-flex h-4 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  role="switch"
                                  aria-checked="false"
                                >
                                  <span className="sr-only">Use setting</span>
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none -mt-px inline-block h-3.5 w-3.5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                  ></span>
                                </Button>
                                <span className="ml-2">Disable</span>
                              </span>
                              <Button type="button" className="my-1.5 mr-4 hover:text-[#3575d5]">
                                <span>Duplicate</span>
                              </Button>
                              <Button type="button" className="my-1.5 mr-4 hover:text-[#3575d5]">
                                <img src="images/edit.png" alt="Edit" className="mr-1.5 inline" />
                                <span>Edit</span>
                              </Button>
                              <Button
                                type="button"
                                className="my-1.5 flex items-center hover:text-[#3575d5]"
                              >
                                <img
                                  className="mr-1.5 inline"
                                  src="images/delete.png"
                                  alt="Delete"
                                />
                                <span>Delete</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
        </div>
      </div>
    </>
  );
};

export default ListsSegments;
