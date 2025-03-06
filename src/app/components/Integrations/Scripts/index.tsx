'use client';


const Scripts = () => {
  return (
    <div className="rounded bg-white px-3 pb-6 pt-4 md:px-6">
      <div className="lg:flex">
        <div className="lg:w-6/12 lg:pr-5">
          <h3 className="text-212121 mb-3 text-base font-semibold leading-4">Onload script</h3>
          <div className="flex flex-col items-center items-baseline">
            <div className="border-bdbdbd relative h-11 w-full rounded border">
              <select className="text-bdbdbd absolute h-full w-full rounded pl-4 text-[13px] font-medium leading-3 focus:outline-0">
                <option value="Select an item">Select an item</option>
                <option value="Popper Control">Popper Control</option>
                <option value="Training Session Popper">Training Session Popper</option>
              </select>
              <img className="absolute right-1.5 top-2" src="images/down-arrow.png" />
            </div>
            <div className="w-full text-right">
              <a
                className="mt-1 inline-block text-xs font-medium text-ryzeoBlue underline"
                href="#/"
              >
                Add onload script
              </a>
            </div>
          </div>
          <div className="mt-6 rounded border border-[#cfcfcf] bg-[#f5f5f5] p-4">
            <form className="">
              <div className="-mt-1">
                <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                  Name
                </label>
                <input
                  className="fs-13 border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 font-medium leading-3"
                  type="text"
                  placeholder="Popper Control"
                />
              </div>
              <div className="mt-4">
                <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                  Domain (separated by new lines)
                </label>
                <textarea
                  rows={6}
                  name=""
                  className="border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 text-[13px] font-medium leading-4"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                  Javascript
                </label>
                <textarea
                  rows={10}
                  name=""
                  className="border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 text-[13px] font-medium leading-4"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                ></textarea>
              </div>
              <div className="mt-4 w-full">
                <button
                  type="button"
                  className="ryeo-blue-bg rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-6/12 lg:pl-5">
          <h3 className="text-212121 mb-3 text-base font-semibold leading-4">Workflow Scripts</h3>
          <div className="flex flex-col items-center items-baseline">
            <div className="border-bdbdbd relative h-11 w-full rounded border">
              <select className="text-bdbdbd absolute h-full w-full rounded pl-4 text-[13px] font-medium leading-3 focus:outline-0">
                <option value="Select an item">Select an item</option>
                <option value="No items">No items</option>
              </select>
              <img className="absolute right-1.5 top-2" src="images/down-arrow.png" />
            </div>
            <div className="w-full text-right">
              <a
                className="mt-1 inline-block text-xs font-medium text-ryzeoBlue underline"
                href="#/"
              >
                Add workflow script
              </a>
            </div>
          </div>
          <div className="mt-6 rounded border border-[#cfcfcf] bg-[#f5f5f5] p-4">
            <form className="">
              <div className="-mt-1">
                <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                  Name
                </label>
                <input
                  className="fs-13 border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 font-medium leading-3"
                  type="text"
                  placeholder="Popper Control"
                />
              </div>
              <div className="mt-4">
                <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                  Domain (separated by new lines)
                </label>
                <textarea
                  rows={6}
                  name=""
                  className="border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 text-[13px] font-medium leading-4"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                  Javascript
                </label>
                <textarea
                  rows={10}
                  name=""
                  className="border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 text-[13px] font-medium leading-4"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                ></textarea>
              </div>
              <div className="mt-4 w-full">
                <button
                  type="button"
                  className="ryeo-blue-bg rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scripts;
