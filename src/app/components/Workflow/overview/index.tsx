'use client';

import Image from 'next/image';

const OverviewDashboard = () => {
  return (
    <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
      <div className="md:px-1.5">
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-7 text-xl leading-5">
            Conversion Report
          </h1>
          <div className="font-inter flex flex-col items-center md:flex-row">
            <div className="w-full md:w-6/12 md:pr-2.5">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-5 xl:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  Ryzeo Orders
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">1979</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between pt-3 sm:flex-row sm:pt-6">
                  <div className="h-auto pr-2 md:w-28 lg:w-36 xl:w-52">
                    <img className="w-full" src="images/pie-chart.png" alt="Chart" />
                  </div>
                  <div className="mt-6 h-36 w-full overflow-y-auto sm:mt-0 sm:w-6/12 md:w-7/12 lg:w-6/12">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-2ea1f9 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs font-medium leading-3 lg:mr-2 xl:mr-7">
                        100
                      </p>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-8fdbc0 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs font-medium leading-3 lg:mr-2 xl:mr-7">
                        100
                      </p>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs font-medium leading-3 lg:mr-2 xl:mr-7">
                        100
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs font-medium leading-3 lg:mr-2 xl:mr-7">
                        100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full md:mt-0 md:w-6/12 md:pl-2.5">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-5 xl:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  Ryzeo Total Sales
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">$1979</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between pt-3 sm:flex-row sm:pt-6">
                  <div className="h-auto pr-2 md:w-28 lg:w-36 xl:w-52">
                    <img className="w-full" src="images/pie-chart.png" alt="Chart" />
                  </div>
                  <div className="mt-6 h-36 w-full overflow-y-auto sm:mt-0 sm:w-6/12 md:w-7/12 lg:w-6/12">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-2ea1f9 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs  font-medium leading-3 lg:mr-2 xl:mr-7">
                        $100K
                      </p>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-8fdbc0 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs font-medium leading-3 lg:mr-2 xl:mr-7">
                        $100K
                      </p>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs font-medium leading-3 lg:mr-2 xl:mr-7">
                        $100K
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="text-616161 ml-2 text-xs font-normal leading-3">
                          Welcome Series
                        </span>
                      </div>
                      <p className="text-616161 ml-1 text-xs font-medium leading-3 lg:mr-2 xl:mr-7">
                        $100K
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-12 text-xl leading-5">Email Report</h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="w-full md:w-6/12 md:pr-4 lg:w-4/12">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  open rate
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">18%</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-48 md:mt-7">
                  <img className="mx-auto h-full w-full" src="images/graph.png" alt="Graph" />
                </div>
                <div className="mt-4 flex items-start justify-center sm:mt-7">
                  <div className="flex items-start">
                    <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Current Period
                    </span>
                  </div>
                  <div className="flex items-start pl-7">
                    <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Previous Period
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full md:mt-0 md:w-6/12 md:px-2 lg:w-4/12">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  Click Rate
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">18%</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-48 md:mt-7">
                  <img className="mx-auto h-full w-full" src="images/graph.png" alt="Graph" />
                </div>
                <div className="mt-4 flex items-start justify-center sm:mt-7">
                  <div className="flex items-start">
                    <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Current Period
                    </span>
                  </div>
                  <div className="flex items-start pl-7">
                    <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Previous Period
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full md:w-6/12 md:pr-4 lg:mt-0 lg:w-4/12 lg:pl-4 lg:pr-0">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  Conversion rate
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">18%</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-48 md:mt-7">
                  <img className="mx-auto h-full w-full" src="images/graph.png" alt="Graph" />
                </div>
                <div className="mt-4 flex items-start justify-center sm:mt-7">
                  <div className="flex items-start">
                    <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Current Period
                    </span>
                  </div>
                  <div className="flex items-start pl-7">
                    <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      New Comer Series
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-12 text-xl leading-5">Orders</h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="w-full md:w-6/12 md:pr-4 lg:w-4/12">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  Orders
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">18%</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-48 md:mt-7">
                  <img className="mx-auto h-full w-full" src="images/chart.png" alt="Graph" />
                </div>
                <div className="mt-4 flex items-start justify-center sm:mt-7">
                  <div className="flex items-start">
                    <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Current Period
                    </span>
                  </div>
                  <div className="flex items-start pl-7">
                    <span className="bg-8fdbc0 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Previous Period
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full md:mt-0 md:w-6/12 md:px-2 lg:w-4/12">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  Click Rate
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">18%</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-48 md:mt-7">
                  <img className="mx-auto h-full w-full" src="images/chart.png" alt="Graph" />
                </div>
                <div className="mt-4 flex items-start justify-center sm:mt-7">
                  <div className="flex items-start">
                    <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Current Period
                    </span>
                  </div>
                  <div className="flex items-start pl-7">
                    <span className="bg-8fdbc0 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Previous Period
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full md:w-6/12 md:pr-4 lg:mt-0 lg:w-4/12 lg:pl-4 lg:pr-0">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white px-3.5 py-6 lg:px-7">
                <p className="text-757575 mb-2.5 text-xs font-semibold uppercase leading-4 tracking-wider">
                  Conversion rate
                </p>
                <div className="flex items-end">
                  <h2 className="font-gilroyBold text-212121 text-3xl leading-10">18%</h2>
                  <div className="mb-2 ml-4 flex items-center">
                    <span>
                      <img src="images/up-arrow.png" />
                    </span>
                    <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                      20%
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-48 md:mt-7">
                  <img className="mx-auto h-full w-full" src="images/graph.png" alt="Graph" />
                </div>
                <div className="mt-4 flex items-start justify-center sm:mt-7">
                  <div className="flex items-start">
                    <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      Current Period
                    </span>
                  </div>
                  <div className="flex items-start pl-7">
                    <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                    <span className="text-616161 ml-2 text-xs font-normal leading-3 lg:w-16 xl:w-auto">
                      New Comer Series
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-gilroyBold text-424242 mb-4 mt-12 text-xl leading-5">
            Audience Growth
          </h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="mx-auto w-full md:mx-0 md:w-6/12 lg:w-4/12  lg:pr-0">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white pl-3.5 pt-6 lg:pl-7">
                <div className="relative flex items-end justify-between">
                  <div className="mb-6">
                    <p className="text-757575 mb-4 text-xs font-semibold uppercase leading-4 tracking-wider">
                      Subscribers
                    </p>
                    <h2 className="fs-28 font-gilroyBold text-424242 leading-7">120%</h2>
                    <div className="mt-2.5 flex items-center">
                      <span>
                        <img src="images/up-arrow.png" />
                      </span>
                      <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                        20%
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-0 lg:w-40 xl:w-60">
                    <img className="w-full" src="images/subscriber-graph.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:mt-0 md:w-6/12 md:pl-5 lg:mx-6 lg:w-4/12 lg:pl-0">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white pl-3.5 pt-6 lg:pl-7">
                <div className="relative flex items-end justify-between">
                  <div className="mb-6">
                    <p className="text-757575 mb-4 text-xs font-semibold uppercase leading-4 tracking-wider">
                      Unsubscribers
                    </p>
                    <h2 className="fs-28 font-gilroyBold text-424242 leading-7">120%</h2>
                    <div className="mt-2.5 flex items-center">
                      <span>
                        <img src="images/unsubscribe-down-arrow.png" />
                      </span>
                      <span className="fs-15 font-gilroySemibold text-fd445f ml-1 leading-4">
                        5.1%
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-0 lg:w-40 xl:w-60">
                    <img className="w-full" src="images/unsubscriber-graph.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:w-6/12 lg:mt-0 lg:w-4/12">
              <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white pl-3.5 pt-6 lg:pl-7">
                <div className="relative flex items-end justify-between">
                  <div className="mb-6">
                    <p className="text-757575 mb-4 text-xs font-semibold uppercase leading-4 tracking-wider">
                      spam complaints
                    </p>
                    <h2 className="fs-28 font-gilroyBold text-424242 leading-7">18%</h2>
                    <div className="mt-2.5 flex items-center">
                      <span>
                        <img src="images/up-arrow.png" />
                      </span>
                      <span className="fs-15 font-gilroySemibold text-18a558 ml-1 leading-4">
                        20%
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-0 lg:w-40 xl:w-60">
                    <img className="w-full" src="images/subscriber-graph.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  );
};

export default OverviewDashboard;
