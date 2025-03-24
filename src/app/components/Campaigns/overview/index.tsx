'use client';

import SubscribersCard from '@/app/utils/charts/AreaChart';
import BarChartCard from '@/app/utils/charts/BarChartCard';
import LineChartCard from '@/app/utils/charts/lineChartCard';

const OverviewDashboard = () => {
  return (
    <div className="mx-[15px] md:mx-30">
      <h2 className="heading mt-7 font-gilroy-bold leading-5">Top Performing Strategies</h2>
      <div className="font-inter bg-f6f7f9 px-3 py-5 md:px-6">
        <div className="md:px-1.5">
          <div>
            <h1 className="text-424242 mb-4 mt-7 font-gilroy-bold text-xl leading-5">Revenue</h1>
            <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
              <div className="w-full md:w-6/12 md:pr-3.5 lg:w-4/12">
                <div className="">
                  <div className="rounded-t-lg bg-white">
             
                    <div className="mt-4 h-48 md:mt-7">
                 
                      <BarChartCard
                        title={'Open to Work'}
                        actualValue={90}
                        percentage={23}
                        label={'add'}
                        data={{
                          data: [22, 244, 45],
                        }}
                      />
                    </div>
                    <div className="mt-4 flex h-10 items-start justify-center">
                      <div className="flex items-start">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Current Period
                        </span>
                      </div>
                      <div className="flex items-start pl-7">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          New Comer Series
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[105px] rounded-b-lg border-t border-gray400 bg-white px-3.5 py-6 lg:px-7">
                    <h4 className="mb-2.5 text-base font-semibold leading-5 text-titleBlack">
                      Stats
                    </h4>
                    <div className="font-inter flex items-center justify-between">
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 7 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          $100,000
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST MONTH
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          $100,000
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 90 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          $100,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:mt-0 md:w-6/12 md:px-[7px] lg:w-4/12">
                <div>
                  <div className="rounded-t-lg bg-white">
                    <div className="mt-4 h-48 md:mt-7">
                      <LineChartCard
                        title={'Total Subscribers'}
                        actualValue={24}
                        percentage={20}
                        data={[
                          {
                            data: [10, 20, 70],
                            lineColor: '#FBB846',
                            label: 'Current Period',
                          },
                          {
                            data: [80, 40, 20],
                            lineColor: '#A292D8',
                            label: 'Previous Period',
                          },
                        ]}
                      />
                    </div>
                    <div className="mt-4 flex h-10 items-start justify-center">
                      <div className="flex items-start">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Current Period
                        </span>
                      </div>
                      <div className="flex items-start pl-7">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Previous Period
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[105px] rounded-b-lg border-t border-gray400 bg-white px-3.5 py-6 lg:px-7">
                    <h4 className="mb-2.5 text-base font-semibold leading-5 text-titleBlack">
                      Stats
                    </h4>
                    <div className="font-inter flex items-center justify-between">
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 7 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          300
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST MONTH
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          200
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 90 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          600
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 md:pr-3.5 lg:mt-0 lg:w-4/12 lg:pl-3.5 lg:pr-0">
                <div>
                  <div className="rounded-t-lg bg-white">
                    <div className="mt-4 h-48 md:mt-7">
                      <BarChartCard
                        title={'Open to Work'}
                        actualValue={90}
                        percentage={23}
                        label={'add'}
                        data={{
                          data: [22, 244, 45],
                        }}
                      />
                    </div>
                    <div className="mt-4 flex h-10 items-start justify-center">
                      <div className="flex items-start">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Current Period
                        </span>
                      </div>
                      <div className="flex items-start pl-7">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          New Comer Series
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[105px] rounded-b-lg border-t border-gray400 bg-white px-3.5 py-6 lg:px-7">
                    <h4 className="mb-2.5 text-base font-semibold leading-5 text-titleBlack">
                      Stats
                    </h4>
                    <div className="font-inter flex items-center justify-between">
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 7 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          $90
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST MONTH
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          $100
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 90 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          $150
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-424242 mb-4 mt-12 font-gilroy-bold text-xl leading-5">
              Engagement
            </h1>
            <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
              <div className="w-full md:w-6/12 md:pr-3.5 lg:w-4/12">
                <div className="boxShadow border-md rounded-lg border border-gray400">
                  <div className="rounded-t-lg bg-white">
                    <div className="mt-4 h-48 md:mt-7">
                      <LineChartCard
                        title={'Total Subscribers'}
                        actualValue={24}
                        percentage={20}
                        data={[
                          {
                            data: [10, 20, 70],
                            lineColor: '#FBB846',
                            label: 'Current Period',
                          },
                          {
                            data: [80, 40, 20],
                            lineColor: '#A292D8',
                            label: 'Previous Period',
                          },
                        ]}
                      />
                    </div>
                    <div className="mt-4 flex h-10 items-start justify-center">
                      <div className="flex items-start">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Current Period
                        </span>
                      </div>
                      <div className="flex items-start pl-7">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          New Comer Series
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[105px] rounded-b-lg border-t border-gray400 bg-white px-3.5 py-6 lg:px-7">
                    <h4 className="mb-2.5 text-base font-semibold leading-5 text-titleBlack">
                      Stats
                    </h4>
                    <div className="font-inter flex items-center justify-between">
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 7 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          1.8%
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST MONTH
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          2.2%
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 90 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          2%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:mt-0 md:w-6/12 md:px-[7px] lg:w-4/12">
                <div className="boxShadow border-md rounded-lg border border-gray400">
                  <div className="rounded-t-lg bg-white">
                    <div className="mt-4 h-48 md:mt-7">
                      <LineChartCard
                        title={'Total Subscribers'}
                        actualValue={24}
                        percentage={20}
                        data={[
                          {
                            data: [10, 20, 70],
                            lineColor: '#FBB846',
                            label: 'Current Period',
                          },
                          {
                            data: [80, 40, 20],
                            lineColor: '#A292D8',
                            label: 'Previous Period',
                          },
                        ]}
                      />
                    </div>
                    <div className="mt-4 flex h-10 items-start justify-center">
                      <div className="flex items-start">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Current Period
                        </span>
                      </div>
                      <div className="flex items-start pl-7">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Previous Period
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[105px] rounded-b-lg border-t border-gray400 bg-white px-3.5 py-6 lg:px-7">
                    <h4 className="mb-2.5 text-base font-semibold leading-5 text-titleBlack">
                      Stats
                    </h4>
                    <div className="font-inter flex items-center justify-between">
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 7 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          1.8%
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST MONTH
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          2.2%
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 90 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          2%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 md:pl-3.5 md:pr-3.5 lg:mt-0 lg:w-4/12 lg:pr-0">
                <div className="boxShadow border-md rounded-lg border border-gray400">
                  <div className="rounded-t-lg bg-white ">
                    <div className="mt-4 h-48 md:mt-7">
                      <BarChartCard
                        title={'Open to Work'}
                        actualValue={90}
                        percentage={23}
                        label={'add'}
                        data={{
                          data: [22, 244, 45],
                        }}
                      />
                    </div>
                    <div className="mt-4 flex h-10 items-start justify-center">
                      <div className="flex items-start">
                        <span className="bg-a292d8 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          Current Period
                        </span>
                      </div>
                      <div className="flex items-start pl-7">
                        <span className="bg-fbb846 h-2.5 w-2.5 rounded-full"></span>
                        <span className="ml-2 text-xs font-normal leading-3 text-textGrey lg:w-16 xl:w-auto">
                          New Comer Series
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[105px] rounded-b-lg border-t border-gray400 bg-white px-3.5 py-6 lg:px-7">
                    <h4 className="mb-2.5 text-base font-semibold leading-5 text-titleBlack">
                      Stats
                    </h4>
                    <div className="font-inter flex items-center justify-between">
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 7 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          2%
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST MONTH
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          2.2%
                        </p>
                      </div>
                      <div>
                        <p className="fs-11 mb-1.5 mt-0 font-medium leading-4 text-textGrey">
                          LAST 90 DAYS
                        </p>
                        <p className="mb-1.5 mt-0 text-sm font-semibold leading-5 text-textGrey lg:text-xs xl:text-sm">
                          1.8%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-424242 mb-4 mt-12 font-gilroy-bold text-xl leading-5">Reach</h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="mx-auto w-full md:mx-0 md:w-6/12 lg:w-3/12">
              <div className="">
                <SubscribersCard
                  title="Subscribers"
                  actualValue={120}
                  percentage={'20%'}
                  data={[
                    { value: 0 },
                    { value: 60 },
                    { value: 75 },
                    { value: 100 },
                    { value: 90 },
                    { value: 95 },
                    { value: 100 },
                  ]}
                  barColor="#60A5FA"
                />
              </div>
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:mt-0 md:w-6/12 md:pl-2.5 lg:ml-6 lg:mr-3 lg:w-3/12 lg:pl-0">
              <div className="">
                <SubscribersCard
                  title="Subscribers"
                  actualValue={120}
                  percentage={'20%'}
                  data={[
                    { value: 0 },
                    { value: 60 },
                    { value: 33 },
                    { value: 10 },
                    { value: 90 },
                    { value: 93 },
                    { value: 100 },
                  ]}
                  barColor="#60A3FA"
                />
              </div>
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:w-6/12 lg:ml-3 lg:mr-6 lg:mt-0 lg:w-3/12">
              <div className="">
                <SubscribersCard
                  title="Subscribers"
                  actualValue={120}
                  percentage={'20%'}
                  data={[
                    { value: 0 },
                    { value: 90 },
                    { value: 23 },
                    { value: 18 },
                    { value: 6 },
                    { value: 91 },
                    { value: 100 },
                  ]}
                  barColor="#60A3FA"
                />
              </div>
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:w-6/12 md:pl-2.5 lg:mt-0 lg:w-3/12  lg:pl-0">
              <div className="">
                <SubscribersCard
                  title="Subscribers"
                  actualValue={120}
                  percentage={'20%'}
                  data={[
                    { value: 0 },
                    { value: 30 },
                    { value: 23 },
                    { value: 348 },
                    { value: 6 },
                    { value: 91 },
                    { value: 43 },
                  ]}
                  barColor="#60A3FA"
                />
              </div>
            </div>
          </div>
          <h1 className="text-424242 mb-4 mt-12 font-gilroy-bold text-xl leading-5">
            Audience Growth
          </h1>
          <div className="font-inter flex flex-col flex-wrap items-center md:flex-row lg:flex-nowrap">
            <div className="mx-auto w-full md:mx-0 md:w-6/12 md:pr-2.5 lg:w-4/12  lg:pr-0">
              <SubscribersCard
                title="Subscribers"
                actualValue={120}
                percentage={'20%'}
                data={[
                  { value: 0 },
                  { value: 30 },
                  { value: 23 },
                  { value: 348 },
                  { value: 6 },
                  { value: 51 },
                  { value: 43 },
                ]}
                barColor="#60A3FA"
              />
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:mt-0 md:w-6/12 md:pl-2.5 lg:mx-6 lg:w-4/12 lg:pl-0">
              <SubscribersCard
                title="Subscribers"
                actualValue={120}
                percentage={'20%'}
                data={[
                  { value: 0 },
                  { value: 30 },
                  { value: 53 },
                  { value: 33 },
                  { value: 63 },
                  { value: 51 },
                  { value: 73 },
                ]}
                barColor="#60A3FA"
              />
            </div>
            <div className="mx-auto mt-5 w-full md:mx-0 md:w-6/12 md:pr-2.5 lg:mt-0 lg:w-4/12 lg:pr-0">
              <SubscribersCard
                title="Subscribers"
                actualValue={120}
                percentage={'20%'}
                data={[
                  { value: 0 },
                  { value: 80 },
                  { value: 53 },
                  { value: 33 },
                  { value: 93 },
                  { value: 51 },
                  { value: 73 },
                ]}
                barColor="#60A3FA"
              />
            </div>
          </div>
          <div className="mt-11 flex items-center justify-between">
            <h1 className="m-0 font-gilroy-bold text-base leading-5 text-titleBlack sm:text-xl lg:w-40">
              All Workflows
            </h1>
            <form className="hidden w-8/12 lg:block">
              <div className="border-e0e0e0 relative flex items-center rounded border bg-white px-4 py-2">
                <input
                  className="fs-13 text-9e9e9e h-6 w-full pl-8 font-medium leading-3"
                  type="text"
                  name="search"
                  placeholder="Placeholder (Optional)"
                />
                <img className="absolute" src="/images/search.png" />
              </div>
            </form>
            <div className="ml-4 flex justify-end lg:w-60">
              <div className="mr-2 sm:mr-4">
                <button className="fs-13 font-inter border-bdbdbd btn-boxShadow flex h-8 items-center rounded border bg-white px-2 py-1.5 font-medium leading-4 sm:h-11 sm:py-3 sm:pl-4 sm:pr-3 lg:pl-2 xl:pl-4">
                  <img className="mr-2.5" src="/images/filter.png" />
                  Filters
                </button>
              </div>
              <div>
                <button className="fs-13 font-inter border-bdbdbd btn-boxShadow flex h-8 items-center rounded border bg-white px-2 py-1.5 font-medium leading-4 sm:h-11 sm:py-3 sm:pl-4 sm:pr-3 lg:pl-2 xl:pl-4">
                  <img className="mr-2.5" src="/images/export.png" />
                  Export
                </button>
              </div>
            </div>
          </div>
          <form className="mt-5 w-full lg:hidden">
            <div className="border-e0e0e0 relative flex items-center rounded border">
              <input
                className="fs-13 text-9e9e9e w-full rounded py-2 pl-6 font-medium leading-3 sm:pl-12"
                type="text"
                name="search"
                placeholder="Placeholder (Optional)"
              />
              <img className="absolute left-4" src="/images/search.png" />
            </div>
          </form>
          <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="mt-6 flex flex-col">
              <div className="-my-2 overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="overflow-hidden rounded-t-lg shadow ring-1 ring-black ring-opacity-5">
                    <table className="fs-13 min-w-full divide-y divide-gray-300 font-medium">
                      <thead className="bg-gray-50">
                        <tr className="divide-gray-200 xl:divide-x">
                          <th
                            scope="col"
                            className="fs-13 workflow-name-td py-3 pl-3 pr-3 text-left font-medium text-grey600 xl:border-r"
                          >
                            Campaign Name{' '}
                            <img
                              src="/images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>
                          <th
                            scope="col"
                            className="fs-13 minW-104 hidden border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium text-grey600 xl:table-cell"
                          >
                            Status{' '}
                            <img
                              src="/images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>
                          <th
                            scope="col"
                            className="fs-13 minW-121 hidden border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium text-grey600 lg:table-cell"
                          >
                            Modified On{' '}
                            <img
                              src="/images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>
                          <th
                            scope="col"
                            className="fs-13 minW-104 hidden border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium text-grey600 md:table-cell"
                          >
                            Audience{' '}
                            <img
                              src="/images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>
                          <th
                            scope="col"
                            className="fs-13 minW-121 hidden border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium text-grey600 sm:pr-6 md:table-cell"
                          >
                            Revenue{' '}
                            <img
                              src="/images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>
                          <th
                            scope="col"
                            className="fs-13 minW-104 hidden border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium text-grey600 sm:table-cell"
                          >
                            Orders{' '}
                            <img
                              src="/images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>
                          <th
                            scope="col"
                            className="fs-13 minW-104 hidden border-r-0 border-none py-3 pl-3 pr-3 text-left font-medium text-grey600 sm:table-cell sm:pr-6"
                          >
                            Opens{' '}
                            <img
                              src="/images/down-arrow.png"
                              className="float-right inline-block"
                              alt="arrow"
                            />
                          </th>
                          <th
                            scope="col"
                            className="fs-13 actions-td py-3 pl-3 pr-3 text-left font-medium text-grey600 sm:pr-6"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="divide-gray-200 xl:divide-x">
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-top font-medium text-textGrey xl:border-r">
                            NEW Cotton-Blends to Brighten Up Winter
                            <div className="xl:hidden">
                              <div className="mt-2">
                                <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                                  Sent
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between lg:hidden">
                                <div className="mb-1.5">06.01.2022 </div>
                                <div className="text-xs text-grey600">4:00PM</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between md:hidden">
                                <div className="mb-1.5">9023</div>
                                <div className="text-xs font-medium text-grey600">Bob's list</div>
                              </div>
                              <div className="mt-2 md:hidden">$2054</div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">90</div>
                                <div className="text-xs text-grey600">1%</div>
                              </div>
                              <div className="mt-2 flex items-center justify-between sm:hidden">
                                <div className="mb-1.5">40</div>
                                <div className="text-xs text-grey600">5%</div>
                              </div>
                            </div>
                          </td>
                          <td className="fs-13 minW-104 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey xl:table-cell">
                            <span className="text-209d7d bg-d5f7eb rounded-full px-2.5 py-0.5 text-xs font-medium leading-3">
                              Sent
                            </span>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey lg:table-cell">
                            <div className="mb-1.5">06.01.2022 </div>
                            <div className="text-xs text-grey600">4:00PM</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey md:table-cell">
                            <div className="mb-1.5">9023</div>
                            <div className="text-xs font-medium text-grey600">Bob's list</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right align-top text-textGrey sm:pr-6 md:table-cell">
                            $2054
                          </td>
                          <td className="hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right sm:table-cell">
                            <div className="mb-1.5">90</div>
                            <div className="text-xs text-grey600">1%</div>
                          </td>
                          <td className="fs-13 hidden whitespace-nowrap border-r-0 border-none py-3 pl-3 pr-3 text-right text-textGrey sm:table-cell sm:pr-6">
                            <div className="mb-1.5">40</div>
                            <div className="text-xs text-grey600">5%</div>
                          </td>
                          <td className="fs-13 whitespace-nowrap py-3 pl-3 pr-3 align-middle text-textGrey sm:align-top">
                            <span className="mr-4">
                              <img src="/images/view.png" alt="view" className="mr-1.5 inline" />
                              <span>View details</span>
                            </span>
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
            <div className="flex items-center justify-end rounded-b-lg border-t bg-white px-5 py-4">
              <a
                className="border-bdbdbd page-active mr-2.5 flex h-6 w-6 items-center justify-center rounded border"
                href="#/"
              >
                <img src="/images/prev.png" />
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
                <img src="/images/next.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDashboard;
