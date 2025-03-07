'use client';

const Emails = () => {
  return (
    <>
      <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
        <div className="md:px-1.5">
          <div id="Emails_content" className="tabcontent mt-10">
            <div className="mb-5 flex items-center justify-between">
              <h1 className="font-gilroyBold text-424242 m-0 text-xl leading-5">Emails</h1>
            </div>
            <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                      <table className="fs-13 text-616161 min-w-full divide-y divide-gray-300 font-medium">
                        <thead className="bg-gray-50">
                          <tr className="divide-gray-200 xl:divide-x">
                            <th
                              scope="col"
                              className="fs-13 text-757575 min-w-[293px] py-3 pl-3 pr-3 text-left font-medium"
                            >
                              Name{' '}
                              <img
                                src="images/down-arrow.png"
                                className="float-right inline-block"
                                alt="arrow"
                              />
                            </th>

                            <th
                              scope="col"
                              className="fs-13 text-757575 hidden min-w-[100px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium lg:table-cell"
                            >
                              Created Add{' '}
                              <img
                                src="images/down-arrow.png"
                                className="float-right inline-block"
                                alt="arrow"
                              />
                            </th>

                            <th
                              scope="col"
                              className="fs-13 text-757575 hidden min-w-[125px] border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium md:table-cell"
                            >
                              Status{' '}
                              <img
                                src="images/down-arrow.png"
                                className="float-right inline-block"
                                alt="arrow"
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
                            <td className="fs-13 text-616161 min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium">
                              <div className="flex items-center">
                                <a href="email-view.html" className="hover:text-[#3575d5]">
                                  NEW Cotton-Blends to Brighten Up Winter
                                </a>
                                <a
                                  href="#emailView-modal"
                                  className="ml-2 rounded-[2px] bg-[#3575d5] p-0.5 text-[8px] text-white"
                                >
                                  HTML
                                </a>
                              </div>
                              <div className="mt-4 lg:hidden">
                                <div className="flex items-center justify-between">
                                  <div className="mb-1.5">06.01.2022 </div>
                                  <div className="text-757575 text-xs">4:00PM</div>
                                </div>
                                <div className="mt-4 flex items-center justify-between md:hidden">
                                  <a
                                    href="#/"
                                    className="ryzeo-blue block rounded px-2 py-1 text-xs font-light leading-3 text-white"
                                  >
                                    New Editor
                                  </a>
                                </div>
                                <div className="mt-4 flex items-center justify-center sm:hidden">
                                  <a
                                    href="setup-blast.html"
                                    className="group relative inline-block"
                                  >
                                    <img className="w-3.5" src="images/edit.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Edit
                                    </span>
                                  </a>
                                  <a href="#" className="group relative ml-6 inline-block">
                                    <img className="w-3.5" src="images/delete.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Delete
                                    </span>
                                  </a>
                                  <a
                                    href="../campaign-blasts/create-campaign.html"
                                    className="group relative ml-6 inline-block"
                                  >
                                    <img className="w-3.5" src="images/send.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Send
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[125px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right lg:table-cell">
                              <div className="mb-1.5">06.01.2022 </div>
                              <div className="text-757575 text-xs">4:00PM</div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[140px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-center align-top md:table-cell">
                              <div className="flex items-center justify-end">
                                <a
                                  href="#/"
                                  className="ryzeo-blue ml-3 block rounded px-2 py-1 text-xs font-light leading-3 text-white"
                                >
                                  New Editor
                                </a>
                              </div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[255px] whitespace-nowrap py-3 pl-3 pr-3 sm:table-cell">
                              <div className="flex items-center">
                                <a href="setup-blast.html" className="group relative inline-block">
                                  <img className="w-3.5" src="images/edit.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Edit
                                  </span>
                                </a>
                                <a href="#" className="group relative ml-6 inline-block">
                                  <img className="w-3.5" src="images/delete.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Delete
                                  </span>
                                </a>
                                <a
                                  href="../campaign-blasts/create-campaign.html"
                                  className="group relative ml-6 inline-block"
                                >
                                  <img className="w-3.5" src="images/send.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Send
                                  </span>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="divide-gray-200 xl:divide-x">
                            <td className="fs-13 text-616161 min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium">
                              <div className="flex items-center">
                                <a href="email-view.html" className="hover:text-[#3575d5]">
                                  NEW Cotton-Blends to Brighten Up Winter
                                </a>
                                <a
                                  href="#emailView-modal"
                                  className="ml-2 rounded-[2px] bg-[#3575d5] p-0.5 text-[8px] text-white"
                                >
                                  HTML
                                </a>
                              </div>
                              <div className="mt-4 lg:hidden">
                                <div className="flex items-center justify-between">
                                  <div className="mb-1.5">06.01.2022 </div>
                                  <div className="text-757575 text-xs">4:00PM</div>
                                </div>
                                <div className="mt-4 flex items-center justify-between md:hidden">
                                  <a
                                    href="#/"
                                    className="ryzeo-blue block rounded px-2 py-1 text-xs font-light leading-3 text-white"
                                  >
                                    New Editor
                                  </a>
                                </div>
                                <div className="mt-4 flex items-center justify-center sm:hidden">
                                  <a
                                    href="setup-blast.html"
                                    className="group relative inline-block"
                                  >
                                    <img className="w-3.5" src="images/edit.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Edit
                                    </span>
                                  </a>
                                  <a href="#" className="group relative ml-6 inline-block">
                                    <img className="w-3.5" src="images/delete.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Delete
                                    </span>
                                  </a>
                                  <a
                                    href="../campaign-blasts/create-campaign.html"
                                    className="group relative ml-6 inline-block"
                                  >
                                    <img className="w-3.5" src="images/send.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Send
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[125px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right lg:table-cell">
                              <div className="mb-1.5">06.01.2022 </div>
                              <div className="text-757575 text-xs">4:00PM</div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[140px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-center align-top md:table-cell">
                              <div className="flex items-center justify-end">
                                <a
                                  href="#/"
                                  className="ryzeo-blue ml-3 block rounded px-2 py-1 text-xs font-light leading-3 text-white"
                                >
                                  New Editor
                                </a>
                              </div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[255px] whitespace-nowrap py-3 pl-3 pr-3 sm:table-cell">
                              <div className="flex items-center">
                                <a href="setup-blast.html" className="group relative inline-block">
                                  <img className="w-3.5" src="images/edit.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Edit
                                  </span>
                                </a>
                                <a href="#" className="group relative ml-6 inline-block">
                                  <img className="w-3.5" src="images/delete.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Delete
                                  </span>
                                </a>
                                <a
                                  href="../campaign-blasts/create-campaign.html"
                                  className="group relative ml-6 inline-block"
                                >
                                  <img className="w-3.5" src="images/send.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Send
                                  </span>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="divide-gray-200 xl:divide-x">
                            <td className="fs-13 text-616161 min-w-[293px] whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium">
                              <div className="flex items-center">
                                <a href="email-view.html" className="hover:text-[#3575d5]">
                                  NEW Cotton-Blends to Brighten Up Winter
                                </a>
                                <a
                                  href="#emailView-modal"
                                  className="ml-2 rounded-[2px] bg-[#3575d5] p-0.5 text-[8px] text-white"
                                >
                                  HTML
                                </a>
                              </div>
                              <div className="mt-4 lg:hidden">
                                <div className="flex items-center justify-between">
                                  <div className="mb-1.5">06.01.2022 </div>
                                  <div className="text-757575 text-xs">4:00PM</div>
                                </div>
                                <div className="mt-4 flex items-center justify-between md:hidden">
                                  <a
                                    href="#/"
                                    className="ryzeo-blue block rounded px-2 py-1 text-xs font-light leading-3 text-white"
                                  >
                                    New Editor
                                  </a>
                                </div>
                                <div className="mt-4 flex items-center justify-center sm:hidden">
                                  <a
                                    href="setup-blast.html"
                                    className="group relative inline-block"
                                  >
                                    <img className="w-3.5" src="images/edit.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Edit
                                    </span>
                                  </a>
                                  <a href="#" className="group relative ml-6 inline-block">
                                    <img className="w-3.5" src="images/delete.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Delete
                                    </span>
                                  </a>
                                  <a
                                    href="../campaign-blasts/create-campaign.html"
                                    className="group relative ml-6 inline-block"
                                  >
                                    <img className="w-3.5" src="images/send.png" />
                                    <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                      Send
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[125px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right lg:table-cell">
                              <div className="mb-1.5">06.01.2022 </div>
                              <div className="text-757575 text-xs">4:00PM</div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[140px] whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-center align-top md:table-cell">
                              <div className="flex items-center justify-end">
                                <a
                                  href="#/"
                                  className="ryzeo-blue ml-3 block rounded px-2 py-1 text-xs font-light leading-3 text-white"
                                >
                                  New Editor
                                </a>
                              </div>
                            </td>

                            <td className="fs-13 text-616161 hidden min-w-[255px] whitespace-nowrap py-3 pl-3 pr-3 sm:table-cell">
                              <div className="flex items-center">
                                <a href="setup-blast.html" className="group relative inline-block">
                                  <img className="w-3.5" src="images/edit.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Edit
                                  </span>
                                </a>
                                <a href="#" className="group relative ml-6 inline-block">
                                  <img className="w-3.5" src="images/delete.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
                                    Delete
                                  </span>
                                </a>
                                <a
                                  href="../campaign-blasts/create-campaign.html"
                                  className="group relative ml-6 inline-block"
                                >
                                  <img className="w-3.5" src="images/send.png" />
                                  <span className="ryzeo-blue invisible absolute -left-3 -top-7 z-10 rounded px-2 py-1 text-center text-xs text-white group-hover:visible">
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
                <div className="flex items-center justify-end rounded-b-lg border-t bg-white px-5 py-5">
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
      </div>
    </>
  );
};

export default Emails;
