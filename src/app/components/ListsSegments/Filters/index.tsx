'use client';

const Filters = () => {
  return (
    <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
      <div className="md:px-1.5">
        <div className="">
          <div className="">
            <div className="flex items-center justify-between">
              <h2 className="text-212121 font-gilroyBold text-xl leading-3 sm:leading-5">
                Filters
              </h2>
              <button className="text-616161 border-bdbdbd hover:bg-ryeo-blue rounded border bg-white p-2 text-[13px] font-medium leading-4 sm:px-4 sm:py-3">
                Create Filter
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="boxShadow rounded-lg bg-white px-4 py-2.5 sm:px-6 sm:py-4">
              <div className="">
                <h4 className="text-212121 mb-3 text-sm font-semibold leading-4">
                  Find exactly who you want
                </h4>
                <p className="text-757575 mb-1 text-sm font-normal leading-5">
                  A filter is a set of rules that describe a set of subscribers.
                </p>
                <p className="text-757575 text-sm font-normal leading-5">
                  You can use filters for anything; from{' '}
                  <a className="font-medium text-ryzeoBlue" href="https://app.ryzeo.com/send">
                    sending
                  </a>{' '}
                  a blast, to creating a{' '}
                  <a
                    className="font-medium text-ryzeoBlue"
                    href="https://app.ryzeo.com/audience/1/list"
                  >
                    list
                  </a>
                  , to even
                  <a
                    className="font-medium text-ryzeoBlue"
                    href="https://app.ryzeo.com/audience/1/unsubscribe"
                  >
                    removing people
                  </a>{' '}
                  from a database.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-between">
          <form className="w-full sm:h-11">
            <div className="border-e0e0e0 relative flex items-center rounded border bg-white px-4 py-1 sm:py-2">
              <input
                className="fs-13 text-9e9e9e h-6 w-full pl-8 font-medium leading-3"
                type="text"
                name="search"
                placeholder="Search"
              />
              <img className="absolute" src="images/search.png" />
            </div>
          </form>
        </div>

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
                          className="fs-13 text-757575 w-8/12 py-3 pl-3 pr-3 text-left font-medium"
                        >
                          Filter
                        </th>
                        <th
                          scope="col"
                          className="fs-13 text-757575 hidden w-2/12 py-3 pl-3 pr-3 text-left font-medium md:table-cell"
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
                          className="fs-13 text-757575 w-2/12 py-3 pl-3 pr-3 text-left font-medium"
                        >
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
                        <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:w-[300px] md:min-w-[300px]">
                          <div className="flex items-center">
                            <a
                              href="unsubscribed-show.html"
                              className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                            >
                              Buub
                            </a>
                          </div>
                          <div className="mt-3 md:hidden">
                            <div>Loyals at risk subscribers</div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell xl:w-[290px] xl:min-w-[290px]">
                          Loyals at risk subscribers
                        </td>
                        <td className="fs-13 text-616161 whitespace-nowrap py-3 pl-3 pr-3 text-left">
                          <button className="inline-block p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                            Edit
                          </button>
                          <button className="text-9e9e9e inline-block p-1 text-sm font-medium leading-5 hover:text-[#3575d5]">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                        <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:w-[300px] md:min-w-[300px]">
                          <div className="flex items-center">
                            <a
                              href="unsubscribed-show.html"
                              className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                            >
                              Buub
                            </a>
                          </div>
                          <div className="mt-3 md:hidden">
                            <div>Loyals at risk subscribers</div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell xl:w-[290px] xl:min-w-[290px]">
                          Loyals at risk subscribers
                        </td>
                        <td className="fs-13 text-616161 whitespace-nowrap py-3 pl-3 pr-3 text-left">
                          <button className="inline-block p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                            Edit
                          </button>
                          <button className="text-9e9e9e inline-block p-1 text-sm font-medium leading-5 hover:text-[#3575d5]">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                        <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:w-[300px] md:min-w-[300px]">
                          <div className="flex items-center">
                            <a
                              href="unsubscribed-show.html"
                              className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                            >
                              Buub
                            </a>
                          </div>
                          <div className="mt-3 md:hidden">
                            <div>Loyals at risk subscribers</div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell xl:w-[290px] xl:min-w-[290px]">
                          Loyals at risk subscribers
                        </td>
                        <td className="fs-13 text-616161 whitespace-nowrap py-3 pl-3 pr-3 text-left">
                          <button className="inline-block p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                            Edit
                          </button>
                          <button className="text-9e9e9e inline-block p-1 text-sm font-medium leading-5 hover:text-[#3575d5]">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                        <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:w-[300px] md:min-w-[300px]">
                          <div className="flex items-center">
                            <a
                              href="unsubscribed-show.html"
                              className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                            >
                              Buub
                            </a>
                          </div>
                          <div className="mt-3 md:hidden">
                            <div>Loyals at risk subscribers</div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell xl:w-[290px] xl:min-w-[290px]">
                          Loyals at risk subscribers
                        </td>
                        <td className="fs-13 text-616161 whitespace-nowrap py-3 pl-3 pr-3 text-left">
                          <button className="inline-block p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                            Edit
                          </button>
                          <button className="text-9e9e9e inline-block p-1 text-sm font-medium leading-5 hover:text-[#3575d5]">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                        <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:w-[300px] md:min-w-[300px]">
                          <div className="flex items-center">
                            <a
                              href="unsubscribed-show.html"
                              className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                            >
                              Buub
                            </a>
                          </div>
                          <div className="mt-3 md:hidden">
                            <div>Loyals at risk subscribers</div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell xl:w-[290px] xl:min-w-[290px]">
                          Loyals at risk subscribers
                        </td>
                        <td className="fs-13 text-616161 whitespace-nowrap py-3 pl-3 pr-3 text-left">
                          <button className="inline-block p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                            Edit
                          </button>
                          <button className="text-9e9e9e inline-block p-1 text-sm font-medium leading-5 hover:text-[#3575d5]">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="align-center divide-x divide-gray-200 xl:h-[70px]">
                        <td className="fs-13 text-616161 w-[200px] min-w-[200px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:w-[300px] md:min-w-[300px]">
                          <div className="flex items-center">
                            <a
                              href="unsubscribed-show.html"
                              className="text-616161 text-[13px] font-normal leading-5 hover:text-[#3575d5]"
                            >
                              Buub
                            </a>
                          </div>
                          <div className="mt-3 md:hidden">
                            <div>Loyals at risk subscribers</div>
                          </div>
                        </td>
                        <td className="fs-13 text-616161 hidden w-[150px] min-w-[150px] whitespace-nowrap py-3 pl-3 pr-3 font-medium md:table-cell xl:w-[290px] xl:min-w-[290px]">
                          Loyals at risk subscribers
                        </td>
                        <td className="fs-13 text-616161 whitespace-nowrap py-3 pl-3 pr-3 text-left">
                          <button className="inline-block p-2 text-sm font-medium leading-5 text-ryzeoBlue">
                            Edit
                          </button>
                          <button className="text-9e9e9e inline-block p-1 text-sm font-medium leading-5 hover:text-[#3575d5]">
                            Delete
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
    </div>
  );
};

export default Filters;
