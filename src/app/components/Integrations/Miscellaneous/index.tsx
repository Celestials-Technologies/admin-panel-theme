'use client';

const Miscellaneous = () => {
  return (
    <div className="md:px-6 px-3 pt-4 pb-6 rounded bg-white">
    <div className="">
      <div className="lg:flex flex-wrap">
        <div className="lg:w-6/12 lg:pr-5">
          <h3 className="text-[13px] font-semibold leading-4 text-212121 mb-2">Connected Services</h3>
          <div className="relative border border-bdbdbd rounded h-11 cursor-pointer px-3 py-1.5">
            <p className="text-[13px] font-medium leading-5 text-757575">Default Mailer</p>
            <img className="absolute right-1.5 top-2" src="images/down-arrow.png"/>
          </div>
          <div className="bg-white rounded boxShadow w-full">
            <div className="flex justify-between item rounded-t bg-[#fafafa] p-3">
              <p className="text-sm font-medium leading-5 text-757575">Default Mailer</p>
              <div className="flex items-center">
                <button type="button" className="w-3.5 h-4 mr-2">
                  <img className="w-full" src="images/edit-blue.png" alt="Edit" />
                </button>
                <button type="button" className="w-3.5 h-4">
                  <img className="w-full" src="images/segment-delete.png" alt="Delete" />
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium leading-5 text-212121">Connect New Mailing Service</p>
              <div className="flex justify-between items-center border h-9 border-bdbdbd rounded relative md:w-7/12 mt-2.5">
                <select className="h-full rounded w-full px-3.5 text-[13px] font-medium leading-3 text-757575 focus:outline-none">
                  <option value="">Mandrill</option>
                  <option value="">Sendgrid</option>

                </select>
                <img className="absolute right-4" src="images/down-arrow.png"/>
              </div>
              <div className="mt-4 md:w-7/12">
                <input className="text-[13px] font-medium leading-3 text-757575 py-2 rounded px-4 bg-white border border-[#cfcfcf] w-full" type="text" placeholder="Name for this account"/>
              </div>
              <div className="mt-4 md:w-7/12">
                <input className="text-[13px] font-medium leading-3 text-757575 py-2 rounded px-4 bg-white border border-[#cfcfcf] w-full" type="text" placeholder="API key"/>
              </div>
              <div className="mt-4">
                <button type="button" className="text-[13px] font-medium leading-5 rounded py-2 px-4 text-white ryeo-blue-bg">Update</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 lg:pl-5 lg:mt-0 mt-8">
          <h3 className="text-[13px] font-semibold leading-4 text-212121 mb-2">Email System Events</h3>
          <p className="text-xs leading-4 text-616161">Publish ss_added_to_list and ss_email_sent system events for subscribers on specific lists</p>
          <div className="w-full overflow-auto max-h-[295px] mt-4">
            <div className="flex items-center">
              <input className="w-full px-3 py-2 text-[13px] font-medium leading-3 text-bdbdbd border border-bdbdbd rounded" type="search" name="Search" placeholder="Filter Items"/>
            </div>
            <div className="bg-white bg-[#f5f5f5] rounded-b border border-t-0 border-[#cfcfcf] h-56 overflow-y-auto">
              <div className="py-2 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">123</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(0)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">abc</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(0)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">Andy-test</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(7)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">Behavioral Segment: info+demo@datalatics.com</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(0)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">Behavioral Segment: tcules 1</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(0)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121"> Behavioral Segment: Tcules test segment</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(754)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121"> datalatics</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(3)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121"> new name 1393262552 (1)</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(2498)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">Screenpopper</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(14)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">tcules list</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">(0)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121">TestList_Jan2022 </span>
                  <span className="text-[13px] font-normal leading-3 text-616161">	(1)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121"> Unsubscribe from Automated Marketing Emails (0)</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">	(1)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
              <div className="py-2.5 px-3 border-b border-[#ececec] pt-1">
                <label className="checkBox relative cursor-pointer pl-7">
                  <span className="text-[13px] font-normal leading-3 text-212121"> Unsubscribe from General Newsletter</span>
                  <span className="text-[13px] font-normal leading-3 text-616161">	(2)</span>
                  <input className="absolute opacity-0 cursor-pointer h-0 w-0" type="checkbox"/>
                  <span className="checkmark absolute top-0 left-0 w-[18px] h-[18px] border border-bdbdbd rounded-sm"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button type="button" className="text-[13px] font-medium leading-5 rounded py-2 px-4 text-white ryeo-blue-bg">Update</button>
          </div>
        </div>
        <div className="lg:w-6/12 lg:pr-5 mt-8">
          <h3 className="text-[13px] font-semibold leading-4 text-212121 mb-2">Conversion Period</h3>
          <p className="text-xs leading-4 text-616161">Number of days <span className="font-semibold">(1-90)</span> to look back to attribute conversions to emails. Conversions are attributed to the latest email view or click occurring within:</p>
          <div className="flex items-center mt-3">
            <input className="text-[13px] font-medium leading-3 text-757575 py-2 rounded px-4 bg-white border border-[#cfcfcf] md:w-7/12" type="Number" placeholder="30"/>
            <span className="text-[13px] font-normal leading-4 text-757575 ml-2.5">day(s)</span>
          </div>
          <p className="text-xs leading-4 text-616161 mt-2.5"> note: changes to the conversion period will impact new reporting data only</p>
          <div className="mt-4">
            <button type="button" className="text-[13px] font-medium leading-5 rounded py-2 px-4 text-white ryeo-blue-bg mr-3">Update</button>
          </div>
        </div>
        <div className="lg:w-6/12 lg:pl-5 mt-8">
          <h3 className="text-[13px] font-semibold leading-4 text-212121 mb-2">Workflow Action Frequency Limits</h3>
          <p className="text-xs leading-4 text-616161">Number of hours between executing the same workflow action for the same person. Delays are never skipped. Set to 0 (Zero) if you'd like to disable this.</p>
          <p className="text-xs leading-4 text-616161">Skip a workflow action if that person has done that action within:</p>
          <div className="flex items-center mt-3">
            <input className="text-[13px] font-medium leading-3 text-757575 py-2 rounded px-4 bg-white border border-[#cfcfcf] md:w-7/12" type="Number" placeholder="10"/>
            <span className="text-[13px] font-normal leading-4 text-757575 ml-2.5">hour(s)</span>
          </div>
          <div className="flex items-center mt-4">
            <button type="button" className="text-[13px] font-medium leading-5 rounded py-2 px-4 text-white ryeo-blue-bg mr-3">Update</button>
          </div>
        </div>
        <div className="lg:w-6/12 lg:pr-5 mt-8">
          <h3 className="text-[13px] font-semibold leading-4 text-212121 mb-2">Conversion Event for Blasts</h3>
          <div className="w-full overflow-auto max-h-[295px] mt-4">
            <div className="flex items-center">
              <input className="w-full px-3 py-2 text-[13px] font-medium leading-3 text-bdbdbd border border-bdbdbd rounded" type="search" name="Search" placeholder="Filter Items"/>
            </div>
            <div className="bg-white bg-[#f5f5f5] rounded-b border border-t-0 border-[#cfcfcf] h-56 overflow-y-auto">
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">homepage_browse</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">AlcoPro Cart</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">AlcoPro Category</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">AlcoPro Product</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">AlcoPro Signup</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">All Industrial Cart</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">All Industrial Category</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">All Industrial Product</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">All Industrial Search</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">All Industrial Signup</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">Antibody View</p>
              <p className="text-[13px] font-normal leading-3 py-2.5 px-3 text-616161 border-b border-[#ececec] hover:bg-[#3575d5] hover:text-white">Barbellmedicine Cart</p>
            </div>
          </div>
          <div className="mt-4">
            <button type="button" className="text-[13px] font-medium leading-5 rounded py-2 px-4 text-white ryeo-blue-bg">Update</button>
          </div>
        </div>
        <div className="lg:w-6/12 lg:pl-5 mt-8">
          <h3 className="text-[13px] font-semibold leading-4 text-212121 mb-2">E-Mail Senders</h3>
          <div className="w-full overflow-auto max-h-[295px] mt-4">
            <div className="relative border border-bdbdbd rounded cursor-pointer px-3 py-1">
              <span className="text-sm font-medium leading-5 text-757575">support@testclear.com</span>
              <img className="absolute right-2 top-2" src="images/down-arrow.png" />
            </div>
            <div className="bg-white bg-[#f5f5f5] rounded-b border border-t-0 border-[#cfcfcf] h-56 overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-[#ececec] hover:bg-[#3575d5] py-2 px-3 group">
                <div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium leading-5 text-757575 group-hover:text-white">support@testclear.com</p>
                    <p className="text-xs leading-5 text-757575 group-hover:text-white pl-1">(Testclear)</p>
                  </div>
                  <p className="text-xs leading-3 text-757575 group-hover:text-white pt-0.5">reply-to support@testclear.com</p>
                </div>
                <div className="items-center hidden group-hover:flex">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit-white.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete-white.png" alt="Delete"/>
                  </button>
                </div>
                <div className="items-center flex group-hover:hidden">
                  <button type="button" className="w-4 h-4 mr-2">
                    <img className="w-full" src="images/edit.png" alt="Edit"/>
                  </button>
                  <button type="button" className="w-4 h-4">
                    <img className="w-full" src="images/delete.png" alt="Delete"/>
                  </button>
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
