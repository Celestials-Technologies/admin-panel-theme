'use client';

import Button from '@/app/utils/ui/Button';

const Miscellaneous = () => {
  return (
    <div className="rounded bg-white px-3 pb-6 pt-4 md:px-6">
      <div className="">
        <div className="flex-wrap lg:flex">
          <div className="lg:w-6/12 lg:pr-5">
            <h3 className="text-212121 mb-2 text-[13px] font-semibold leading-4">
              Connected Services
            </h3>
            <div className="border-bdbdbd relative h-11 cursor-pointer rounded border px-3 py-1.5">
              <p className="text-757575 text-[13px] font-medium leading-5">Default Mailer</p>
              <img className="absolute right-1.5 top-2" src="images/down-arrow.png" />
            </div>
            <div className="boxShadow w-full rounded bg-white">
              <div className="item flex justify-between rounded-t bg-[#fafafa] p-3">
                <p className="text-757575 text-sm font-medium leading-5">Default Mailer</p>
                <div className="flex items-center">
                  <Button type="button" className="mr-2 h-4 w-3.5">
                    <img className="w-full" src="images/edit-blue.png" alt="Edit" />
                  </Button>
                  <Button type="button" className="h-4 w-3.5">
                    <img className="w-full" src="images/segment-delete.png" alt="Delete" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-212121 text-sm font-medium leading-5">
                  Connect New Mailing Service
                </p>
                <div className="border-bdbdbd relative mt-2.5 flex h-9 items-center justify-between rounded border md:w-7/12">
                  <select className="text-757575 h-full w-full rounded px-3.5 text-[13px] font-medium leading-3 focus:outline-none">
                    <option value="">Mandrill</option>
                    <option value="">Sendgrid</option>
                  </select>
                  <img className="absolute right-4" src="images/down-arrow.png" />
                </div>
                <div className="mt-4 md:w-7/12">
                  <input
                    className="text-757575 w-full rounded border border-[#cfcfcf] bg-white px-4 py-2 text-[13px] font-medium leading-3"
                    type="text"
                    placeholder="Name for this account"
                  />
                </div>
                <div className="mt-4 md:w-7/12">
                  <input
                    className="text-757575 w-full rounded border border-[#cfcfcf] bg-white px-4 py-2 text-[13px] font-medium leading-3"
                    type="text"
                    placeholder="API key"
                  />
                </div>
                <div className="mt-4">
                  <Button
                    type="button"
                    className="ryeo-blue-bg rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-6/12 lg:pl-5">
            <h3 className="text-212121 mb-2 text-[13px] font-semibold leading-4">
              Email System Events
            </h3>
            <p className="text-616161 text-xs leading-4">
              Publish ss_added_to_list and ss_email_sent system events for subscribers on specific
              lists
            </p>
            <div className="mt-4 max-h-[295px] w-full overflow-auto">
              <div className="flex items-center">
                <input
                  className="text-bdbdbd border-bdbdbd w-full rounded border px-3 py-2 text-[13px] font-medium leading-3"
                  type="search"
                  name="Search"
                  placeholder="Filter Items"
                />
              </div>
              <div className="h-56 overflow-y-auto rounded-b border border-t-0 border-[#cfcfcf] bg-[#f5f5f5] bg-white">
                <div className="border-b border-[#ececec] px-3 py-2 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">123</span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(0)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">abc</span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(0)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">Andy-test</span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(7)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      Behavioral Segment: info+demo@datalatics.com
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(0)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      Behavioral Segment: tcules 1
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(0)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      {' '}
                      Behavioral Segment: Tcules test segment
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(754)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      {' '}
                      datalatics
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(3)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      {' '}
                      new name 1393262552 (1)
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(2498)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      Screenpopper
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(14)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      tcules list
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3">(0)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      TestList_Jan2022{' '}
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3"> (1)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      {' '}
                      Unsubscribe from Automated Marketing Emails (0)
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3"> (1)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
                <div className="border-b border-[#ececec] px-3 py-2.5 pt-1">
                  <label className="checkBox relative cursor-pointer pl-7">
                    <span className="text-212121 text-[13px] font-normal leading-3">
                      {' '}
                      Unsubscribe from General Newsletter
                    </span>
                    <span className="text-616161 text-[13px] font-normal leading-3"> (2)</span>
                    <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                    <span className="checkmark border-bdbdbd absolute left-0 top-0 h-[18px] w-[18px] rounded-sm border"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                type="button"
                className="ryeo-blue-bg rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
              >
                Update
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:w-6/12 lg:pr-5">
            <h3 className="text-212121 mb-2 text-[13px] font-semibold leading-4">
              Conversion Period
            </h3>
            <p className="text-616161 text-xs leading-4">
              Number of days <span className="font-semibold">(1-90)</span> to look back to attribute
              conversions to emails. Conversions are attributed to the latest email view or click
              occurring within:
            </p>
            <div className="mt-3 flex items-center">
              <input
                className="text-757575 rounded border border-[#cfcfcf] bg-white px-4 py-2 text-[13px] font-medium leading-3 md:w-7/12"
                type="Number"
                placeholder="30"
              />
              <span className="text-757575 ml-2.5 text-[13px] font-normal leading-4">day(s)</span>
            </div>
            <p className="text-616161 mt-2.5 text-xs leading-4">
              {' '}
              note: changes to the conversion period will impact new reporting data only
            </p>
            <div className="mt-4">
              <Button
                type="button"
                className="ryeo-blue-bg mr-3 rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
              >
                Update
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:w-6/12 lg:pl-5">
            <h3 className="text-212121 mb-2 text-[13px] font-semibold leading-4">
              Workflow Action Frequency Limits
            </h3>
            <p className="text-616161 text-xs leading-4">
              Number of hours between executing the same workflow action for the same person. Delays
              are never skipped. Set to 0 (Zero) if you'd like to disable this.
            </p>
            <p className="text-616161 text-xs leading-4">
              Skip a workflow action if that person has done that action within:
            </p>
            <div className="mt-3 flex items-center">
              <input
                className="text-757575 rounded border border-[#cfcfcf] bg-white px-4 py-2 text-[13px] font-medium leading-3 md:w-7/12"
                type="Number"
                placeholder="10"
              />
              <span className="text-757575 ml-2.5 text-[13px] font-normal leading-4">hour(s)</span>
            </div>
            <div className="mt-4 flex items-center">
              <Button
                type="button"
                className="ryeo-blue-bg mr-3 rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
              >
                Update
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:w-6/12 lg:pr-5">
            <h3 className="text-212121 mb-2 text-[13px] font-semibold leading-4">
              Conversion Event for Blasts
            </h3>
            <div className="mt-4 max-h-[295px] w-full overflow-auto">
              <div className="flex items-center">
                <input
                  className="text-bdbdbd border-bdbdbd w-full rounded border px-3 py-2 text-[13px] font-medium leading-3"
                  type="search"
                  name="Search"
                  placeholder="Filter Items"
                />
              </div>
              <div className="h-56 overflow-y-auto rounded-b border border-t-0 border-[#cfcfcf] bg-[#f5f5f5] bg-white">
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  homepage_browse
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  AlcoPro Cart
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  AlcoPro Category
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  AlcoPro Product
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  AlcoPro Signup
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  All Industrial Cart
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  All Industrial Category
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  All Industrial Product
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  All Industrial Search
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  All Industrial Signup
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  Antibody View
                </p>
                <p className="text-616161 border-b border-[#ececec] px-3 py-2.5 text-[13px] font-normal leading-3 hover:bg-[#3575d5] hover:text-white">
                  Barbellmedicine Cart
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Button
                type="button"
                className="ryeo-blue-bg rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
              >
                Update
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:w-6/12 lg:pl-5">
            <h3 className="text-212121 mb-2 text-[13px] font-semibold leading-4">E-Mail Senders</h3>
            <div className="mt-4 max-h-[295px] w-full overflow-auto">
              <div className="border-bdbdbd relative cursor-pointer rounded border px-3 py-1">
                <span className="text-757575 text-sm font-medium leading-5">
                  support@testclear.com
                </span>
                <img className="absolute right-2 top-2" src="images/down-arrow.png" />
              </div>
              <div className="h-56 overflow-y-auto rounded-b border border-t-0 border-[#cfcfcf] bg-[#f5f5f5] bg-white">
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
                <div className="group flex items-center justify-between border-b border-[#ececec] px-3 py-2 hover:bg-[#3575d5]">
                  <div>
                    <div className="flex items-center">
                      <p className="text-757575 text-sm font-medium leading-5 group-hover:text-white">
                        support@testclear.com
                      </p>
                      <p className="text-757575 pl-1 text-xs leading-5 group-hover:text-white">
                        (Testclear)
                      </p>
                    </div>
                    <p className="text-757575 pt-0.5 text-xs leading-3 group-hover:text-white">
                      reply-to support@testclear.com
                    </p>
                  </div>
                  <div className="hidden items-center group-hover:flex">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit-white.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete-white.png" alt="Delete" />
                    </Button>
                  </div>
                  <div className="flex items-center group-hover:hidden">
                    <Button type="button" className="mr-2 h-4 w-4">
                      <img className="w-full" src="images/edit.png" alt="Edit" />
                    </Button>
                    <Button type="button" className="h-4 w-4">
                      <img className="w-full" src="images/delete.png" alt="Delete" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
