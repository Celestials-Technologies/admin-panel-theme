'use client';

const SegmentsDefinition = () => {
  return (
    <div className="bg-f6f7f9 font-inter h-screen px-3 pb-16 pt-7 md:px-6">
      <div className="md:px-1.5">
        <div className="flex justify-between">
          <h1 className="font-gilroyBold text-424242 mr-2.5 text-base leading-5 sm:text-xl md:w-36">
            Segment List
          </h1>
          <div className="relative mt-5 w-full sm:mt-0" id="create-list-segment">
            <button className="fs-13 font-inter ryeo-blue-bg ml-auto flex items-center rounded px-2.5 py-2 font-medium leading-5 text-white sm:py-3 sm:pl-4 sm:pr-3.5">
              Create List or Segment
              <img className="ml-3" src="images/down-arrow-white.png" alt="Arrow" />
            </button>
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
                Create New Segment
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto px-1">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="fs-13 text-616161 min-w-full divide-y divide-gray-300 font-medium">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="fs-13 text-757575 w-8 min-w-[32px] py-3 pl-3 pr-3 text-left text-center font-medium xl:border-r"
                      >
                        Sr.No
                      </th>

                      <th
                        scope="col"
                        className="fs-13 text-757575 w-[100px] min-w-[100px] py-3 pl-3 pr-3 text-left font-medium"
                      >
                        Segments{' '}
                        <img
                          src="images/down-arrow.png"
                          className="float-right inline-block"
                          alt="arrow"
                        />
                      </th>

                      <th
                        scope="col"
                        className="fs-13 text-757575 flex hidden w-[130px] min-w-[130px] justify-end py-3 pl-3 pr-3 text-left font-medium sm:table-cell"
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
                        className="fs-13 text-757575 w-[200px] min-w-[200px] py-3 pl-3 pr-3 text-left font-medium md:w-[400px] md:min-w-[400px]"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="divide-x divide-gray-200 align-top">
                      <td
                        scope="col"
                        className="fs-13 text-616161 w-8 min-w-[32px] whitespace-nowrap py-3 pl-3 pr-3 text-center"
                      >
                        1
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-center align-top font-medium">
                        <a href="subscribers.html" className="">
                          andy
                        </a>
                        <div className="mt-3 sm:hidden">
                          <span>104</span>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[130px] min-w-[130px] whitespace-nowrap py-3 pl-3 pr-3 text-center sm:table-cell">
                        104
                      </td>

                      <td className="fs-13 text-616161 flex w-[200px] min-w-[200px] flex-wrap items-center whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:align-top md:w-[400px] md:min-w-[400px]">
                        <button type="button" className="mb-1.5 mr-4">
                          <img src="images/edit.png" alt="Edit" className="mr-1.5 inline" />
                          <span>Edit</span>
                        </button>
                        <button type="button" className="mb-1.5 mr-3 flex items-center">
                          <img className="mr-2" src="images/delete.png" alt="Delete" />
                          <span>Delete</span>
                        </button>
                        <span className="my-1.5 mr-3 flex items-center">
                          <button
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
                          </button>
                          <span className="ml-2">Disable</span>
                        </span>
                        <button type="button" className="my-1.5 mr-4">
                          <span>Duplicate</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 align-top">
                      <td
                        scope="col"
                        className="fs-13 text-616161 w-8 min-w-[32px] whitespace-nowrap py-3 pl-3 pr-3 text-center"
                      >
                        1
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-center align-top font-medium">
                        <a href="subscribers.html" className="">
                          andy
                        </a>
                        <div className="mt-3 sm:hidden">
                          <span>104</span>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[130px] min-w-[130px] whitespace-nowrap py-3 pl-3 pr-3 text-center sm:table-cell">
                        104
                      </td>
                      <td className="fs-13 text-616161 flex w-[200px] min-w-[200px] flex-wrap items-center whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:align-top md:w-[400px] md:min-w-[400px]">
                        <button type="button" className="mb-1.5 mr-4">
                          <img src="images/edit.png" alt="Edit" className="mr-1.5 inline" />
                          <span>Edit</span>
                        </button>
                        <button type="button" className="mb-1.5 mr-3 flex items-center">
                          <img className="mr-2" src="images/delete.png" alt="Delete" />
                          <span>Delete</span>
                        </button>
                        <span className="my-1.5 mr-3 flex items-center">
                          <button
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
                          </button>
                          <span className="ml-2">Disable</span>
                        </span>
                        <button type="button" className="my-1.5 mr-4">
                          <span>Duplicate</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 align-top">
                      <td
                        scope="col"
                        className="fs-13 text-616161 w-8 min-w-[32px] whitespace-nowrap py-3 pl-3 pr-3 text-center"
                      >
                        1
                      </td>
                      <td className="fs-13 text-616161 w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 text-center align-top font-medium">
                        <a href="subscribers.html" className="">
                          andy
                        </a>
                        <div className="mt-3 sm:hidden">
                          <span>104</span>
                        </div>
                      </td>
                      <td className="fs-13 text-616161 hidden w-[130px] min-w-[130px] whitespace-nowrap py-3 pl-3 pr-3 text-center sm:table-cell">
                        104
                      </td>
                      <td className="fs-13 text-616161 flex w-[200px] min-w-[200px] flex-wrap items-center whitespace-nowrap py-3 pl-3 pr-3 align-middle sm:align-top md:w-[400px] md:min-w-[400px]">
                        <button type="button" className="mb-1.5 mr-4">
                          <img src="images/edit.png" alt="Edit" className="mr-1.5 inline" />
                          <span>Edit</span>
                        </button>
                        <button type="button" className="mb-1.5 mr-3 flex items-center">
                          <img className="mr-2" src="images/delete.png" alt="Delete" />
                          <span>Delete</span>
                        </button>
                        <span className="my-1.5 mr-3 flex items-center">
                          <button
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
                          </button>
                          <span className="ml-2">Disable</span>
                        </span>
                        <button type="button" className="my-1.5 mr-4">
                          <span>Duplicate</span>
                        </button>
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
  );
};

export default SegmentsDefinition;
