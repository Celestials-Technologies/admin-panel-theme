'use client';

const ListsSegments = () => {
  return (
    <>
      <div className="md:px-6 px-3 pt-7 bg-f6f7f9 font-inter pb-44">
        <div className="md:px-1.5">
          <div className="flex justify-between items-center">
            <h1 className="sm:text-xl text-base font-gilroyBold leading-5 lg:w-52 md:w-56 w-48 text-424242 mr-2.5">All Lists & Segments</h1>
            <form className="w-10/12 md:block hidden">
              <div className="relative flex items-center py-2 px-4 border rounded border-e0e0e0 bg-white">
                <input className="fs-13 font-medium leading-3 text-9e9e9e w-full pl-8 h-6" type="text" name="search" placeholder="Search Lists & Segments" />
                <img className="absolute" src="images/search.png" />
              </div>
            </form>
            <div className="sm:mt-0 mt-5 relative max-w-xs w-full" id="create-list-segment">
              <button  className="fs-13 font-medium leading-5 text-white flex items-center ml-auto rounded sm:py-3 py-2 sm:pl-4 sm:pr-3.5 px-2.5 font-inter ryeo-blue-bg">
                Create List or Segment
                <img className="ml-3" src="images/down-arrow-white.png" alt="Arrow" />
              </button>
              <div className="absolute right-0 w-[195px] rounded-b-lg dropdown-show-hide bg-white">
                <a href="create-new-list.html" className="block text-[#616161] text-sm leading-[14px] my-1 py-3 px-4 hover:bg-[#3575d5] hover:text-white">Create List</a>
                <a href="create-new-segments.html" className="block text-[#616161] text-sm leading-[14px] my-1 py-3 px-4 hover:bg-[#3575d5] hover:text-white">Create Segment</a>
              </div>
            </div>
             <div className="pl-2.5">
              <button className="fs-13 font-medium leading-4 sm:h-11 h-8 font-inter flex items-center sm:py-3 py-1.5 xl:pl-4 lg:pl-2 md:pl-1 sm:pl-4 sm:pr-3 px-2 border rounded border-bdbdbd btn-boxShadow bg-white">
                <img className="mr-2.5" src="images/filter.png" />
                Filters
              </button>
            </div> 
          </div>
          <form className="md:hidden mt-6">
            <div className="relative flex items-center py-2 px-4 border rounded border-e0e0e0 bg-white">
              <input className="fs-13 font-medium leading-3 text-9e9e9e w-full pl-8 h-6" type="text" name="search" placeholder="Search Lists & Segments" />
              <img className="absolute" src="images/search.png" />
            </div>
          </form>
          <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="mt-6 flex flex-col">
                <div className="-my-2 overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-t-lg">
                          <table className="min-w-full divide-y divide-gray-300 fs-13 font-medium text-616161">
                            <thead className="bg-gray-50">
                                <tr className="divide-x divide-gray-200">
                                  <th scope="col" className="py-3 pl-3 pr-3 text-left fs-13 font-medium text-757575 w-1/2 xl:border-r">
                                    List Name <img src="images/down-arrow.png" className="inline-block float-right" alt="arrow" />
                                  </th>

                                  <th scope="col" className="py-3 pl-3 pr-3 text-left fs-13 font-medium text-757575 w-[100px] min-w-[100px] sm:table-cell hidden flex justify-end">
                                    Members<img src="images/down-arrow.png" className="inline-block ml-2 float-right" alt="arrow" />
                                  </th>
                                  
                                  <th scope="col" className="py-3 pl-3 pr-3 text-left fs-13 font-medium text-757575 md:w-[340px] md:min-w-[340px] md:max-w-[340px] w-[200px] min-w-[200px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                <tr className="divide-x divide-gray-200 align-center">
                                  <td className="whitespace-nowrap align-top py-3 pl-3 pr-3 fs-13 font-medium text-616161 w-[200px] min-w-[200px]">
                                    <a href="subscribers.html" className="inline-block hover:text-[#3575d5]">123</a>
                                    <p className="text-xs font-medium text-757575 mt-1">This is test list created by Andy.</p>
                                    <div className="md:hidden mt-2">
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded ryeo-blue-bg">
                                        <span className="text-xs text-white mr-1.5">Locked</span>
                                        <span className="">
                                          <img src="images/help.gif"/>
                                        </span>
                                      </span>
                                      <div className="sm:hidden mt-1">
                                        <div className="flex justify-between items-center">
                                          <span className="mr-2">757</span>
                                          <span className="text-[10px] font-normal leading-4">members</span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 text-616161 w-[100px] min-w-[100px] sm:table-cell align-middle hidden">
                                    <span className="mr-2">757 members</span>
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 align-middle text-616161 md:w-[340px] md:min-w-[340px] md:max-w-[340px] w-[200px] min-w-[200px] ">
                                    <div className="flex items-center">
                                      <button  type="button" className="mr-4 hover:text-[#3575d5]">
                                        <span>Add</span>
                                      </button>								
                                <button type="button" className="mr-4 hover:text-[#3575d5]">
                                        <img src="images/edit.png" alt="Edit" className="inline mr-1.5"/><span>Edit</span>
                                      </button>
                                <button type="button" className="flex items-center my-1.5 hover:text-[#3575d5]">
                                  <img className="inline mr-1.5" src="images/delete.png" alt="Delete"/>
                                  <span>Delete</span>
                                    </button>	
                                    </div>
                                  </td>
                                </tr>
                                <tr className="divide-x divide-gray-200 align-center">
                                  <td className="whitespace-nowrap align-center py-3 pl-3 pr-3 fs-13 font-medium text-616161 w-[200px] min-w-[200px]">
                                    <a href="subscribers.html" className="inline-block hover:text-[#3575d5]">abc</a>
                                    <p className="text-xs font-medium text-757575 mt-1">This is test list created by Andy.</p>
                                    <div className="md:hidden mt-2">
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded ryeo-blue-bg">
                                        <span className="text-xs text-white mr-1.5">Locked</span>
                                        <span className="">
                                          <img src="images/help.gif"/>
                                        </span>
                                      </span>
                                      <div className="sm:hidden mt-1">
                                        <div className="flex justify-between items-center">
                                          <span className="mr-2">757</span>
                                          <span className="text-[10px] font-normal leading-4">members</span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 text-616161 w-[100px] min-w-[100px] sm:table-cell align-middle hidden">
                                    <span className="mr-2">757 members</span>
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 align-middle text-616161 md:w-[340px] md:min-w-[340px] md:max-w-[340px] w-[200px] min-w-[200px]">
                                    <div className="flex items-center">
                                      <button type="button" className="mr-4 hover:text-[#3575d5]">
                                        <span>Add</span>
                                      </button>								
                                <button type="button" className="mr-4 hover:text-[#3575d5]">
                                        <img src="images/edit.png" alt="Edit" className="inline mr-1.5"/><span>Edit</span>
                                      </button>
                                <button  type="button" className="flex items-center my-1.5 hover:text-[#3575d5]">
                                  <img className="inline mr-1.5" src="images/delete.png" alt="Delete"/>
                                  <span>Delete</span>
                                    </button>
                                    </div>
                                  </td>
                                </tr>

                                <tr className="divide-x divide-gray-200 align-center">
                                  <td className="whitespace-nowrap align-center py-3 pl-3 pr-3 fs-13 font-medium text-616161 w-[200px] min-w-[200px]">
                                    <a href="subscribers.html" className="inline-block hover:text-[#3575d5]">Andy-Test</a>
                                    <p className="text-xs font-medium text-757575 mt-1">This is test list created by Andy.</p>
                                    <div className="md:hidden mt-2">
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded ryeo-blue-bg">
                                        <span className="text-xs text-white mr-1.5">Locked</span>
                                        <span className="">
                                          <img src="images/help.gif"/>
                                        </span>
                                      </span>
                                      <div className="sm:hidden mt-1">
                                        <div className="flex justify-between items-center">
                                          <span className="mr-2">757</span>
                                          <span className="text-[10px] font-normal leading-4">members</span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 text-616161 w-[100px] min-w-[100px] sm:table-cell align-middle hidden">
                                    <span className="mr-2">757 members</span>1
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 align-middle text-616161 md:w-[340px] md:min-w-[340px] md:max-w-[340px] w-[200px] min-w-[200px]">
                                    <div className="flex items-center">
                                      <button type="button" className="mr-4 hover:text-[#3575d5]">
                                        <span>Add</span>
                                      </button>								
                                <button type="button" className="mr-4 hover:text-[#3575d5]">
                                        <img src="images/edit.png" alt="Edit" className="inline mr-1.5"/><span>Edit</span>
                                      </button>
                                <button type="button" className="flex items-center my-1.5 hover:text-[#3575d5]">
                                  <img className="inline mr-1.5" src="images/delete.png" alt="Delete"/>
                                  <span>Delete</span>
                                    </button>
                                    </div>
                                  </td>
                                </tr>

                                <tr className="divide-x divide-gray-200 align-center">
                                  <td className="whitespace-nowrap align-center py-3 pl-3 pr-3 fs-13 font-medium text-616161 w-[200px] min-w-[200px]">
                                    <div className="flex">
                                      <a href="create-new-segments.html" className="mr-2">info+demo@datalatics.com	</a>
                                      <span className="px-1 py-1 rounded ryeo-blue-bg text-[10px] font-normal leading-3 text-white">Segment</span>
                                    </div>
                                    <div className="sm:hidden mt-3">
                                      <div className="flex justify-between items-center">
                                        <span className="mr-2">757</span>
                                        <span className="text-[10px] font-normal leading-4">members</span>
                                      </div>
                                    </div>
                                  </td>

                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 text-616161 w-[100px] min-w-[100px] sm:table-cell hidden">
                                    <span className="mr-2">757 members</span>
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 align-middle text-616161 md:w-[340px] md:min-w-[340px] md:max-w-[340px] w-[200px] min-w-[200px]">
                                    <div className="flex flex-wrap items-center">
                                      <button type="button" className="mr-4 my-1.5 hover:text-[#3575d5]">
                                        <span>Enable</span>
                                      </button>
                                <button type="button" className="mr-4 my-1.5 hover:text-[#3575d5]">
                                        <span>Duplicate</span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="divide-x divide-gray-200 align-center">
                                  <td className="whitespace-nowrap align-center py-3 pl-3 pr-3 fs-13 font-medium text-616161 w-[200px] min-w-[200px]">
                                    <div className="flex">
                                      <a href="create-new-segments.html"className="mr-2">Tcules test segment</a>
                                      <span className="px-1 py-1 rounded ryeo-blue-bg text-[10px] font-normal leading-3 text-white">Segment</span>
                                    </div>
                                    <div className="sm:hidden mt-3">
                                      <div className="flex justify-between items-center">
                                        <span className="mr-2">757</span>
                                        <span className="text-[10px] font-normal leading-4">members</span>
                                      </div>
                                    </div>
                                  </td>
                                  
                          <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 text-616161 w-[130px] min-w-[130px] sm:table-cell hidden">
                                    <span className="mr-2">757 members</span>
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 align-middle text-616161 md:w-[340px] md:min-w-[340px] md:max-w-[340px] w-[200px] min-w-[200px]">
                                    <div className="flex flex-wrap items-center">
                                      <button type="button" className="mr-4 my-1.5 hover:text-[#3575d5]">
                                        <span>Enable</span>
                                      </button>
                                <button type="button" className="mr-4 my-1.5 hover:text-[#3575d5]">
                                        <span>Duplicate</span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="divide-x divide-gray-200 align-center">
                                  <td className="whitespace-nowrap align-center py-3 pl-3 pr-3 fs-13 font-medium text-616161 w-[200px] min-w-[200px]">
                                    <div className="flex">
                                      <a href="create-new-segments.html" className="mr-2">tcules 1</a>
                                      <span className="px-1 py-1 rounded ryeo-blue-bg text-[10px] font-normal leading-3 text-white">Segment</span>
                                    </div>
                                    <div className="sm:hidden mt-3">
                                      <div className="flex justify-between items-center">
                                        <span className="mr-2">757</span>
                                        <span className="text-[10px] font-normal leading-4">members</span>
                                      </div>
                                    </div>
                                  </td>

                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 text-616161 w-[130px] min-w-[130px] sm:table-cell hidden">
                                    <span className="mr-2">757 members</span>
                                  </td>
                                  
                                  <td className="whitespace-nowrap py-3 pl-3 pr-3 fs-13 align-middle text-616161 md:w-[340px] md:min-w-[340px] md:max-w-[340px] w-[200px] min-w-[200px]">	
                                    <div className="flex flex-wrap items-center">	
                                      <span className="flex items-center mr-3 my-1.5">
                                        <button type="button" className="bg-gray-200 relative inline-flex flex-shrink-0 h-4 w-8 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
                                  <span className="sr-only">Use setting</span>
                                  <span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 -mt-px"></span>
                                </button>
                                <span className="ml-2">Disable</span>
                              </span>
                              <button  type="button" className="mr-4 my-1.5 hover:text-[#3575d5]">
                                        <span>Duplicate</span>
                                      </button>
                                      <button type="button" className="mr-4 my-1.5 hover:text-[#3575d5]">
                                        <img src="images/edit.png" alt="Edit" className="inline mr-1.5" /><span>Edit</span>
                                      </button>
                                      <button  type="button" className="flex items-center my-1.5 hover:text-[#3575d5]">
                                <img className="inline mr-1.5" src="images/delete.png" alt="Delete"/>
                                <span>Delete</span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>

                            </tbody>
                          </table>
                      </div>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end items-center px-5 bg-white border-t rounded-b-lg py-5">
                <a className="w-6 h-6 mr-2.5 rounded flex justify-center items-center border border-bdbdbd page-active" href="#/">
                  <img src="images/prev.png"/>
                </a>
                <a className="w-6 h-6 mr-2.5 rounded flex justify-center items-center border text-sm font-medium leading-3 focus:text-white text-bdbdbd border-bdbdbd page-active" href="#/">
                  1
                </a>
                <a className="w-6 h-6 mr-2.5 rounded flex justify-center items-center border text-sm font-medium leading-3 focus:text-white text-bdbdbd border-bdbdbd page-active" href="#/">
                  2
                </a>
                <a className="w-6 h-6 mr-2.5 rounded flex justify-center items-center border text-sm font-medium leading-3 focus:text-white text-bdbdbd border-bdbdbd page-active" href="#/">
                  3
                </a>
                <a className="w-6 h-6 mr-2.5 rounded flex justify-center items-center border text-sm font-medium leading-3 focus:text-white text-bdbdbd border-bdbdbd page-active" href="#/">
                  ...
                </a>
                <a className="w-6 h-6 rounded flex justify-center items-center border border-bdbdbd page-active" href="#/">
                  <img src="images/next.png"/>
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
