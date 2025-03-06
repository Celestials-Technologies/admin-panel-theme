'use client';

import Image from 'next/image';

const GoogleAnalytics = () => {
  return (
    <div className="rounded bg-white px-3 pb-6 pt-4 md:px-6">
      <div className="lg:flex">
        <div className="lg:w-6/12 lg:pr-5">
          <form className="rounded border border-[#cfcfcf] bg-[#f5f5f5] p-4">
            <div className="">
              <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                Campaign Source
              </label>
              <input
                className="fs-13 border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 font-medium leading-3"
                type="text"
                placeholder="Workflow"
              />
            </div>
            <div className="mt-4 sm:mt-0">
              <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                Campaign Medium
              </label>
              <input
                className="fs-13 border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 font-medium leading-3"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                Campaign Content
              </label>
              <input
                className="fs-13 border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 font-medium leading-3"
                type="text"
                placeholder="{{{Subject}}}"
              />
            </div>
            <div className="mt-4">
              <label className="text-616161 text-xs font-semibold uppercase leading-3 tracking-wide">
                Campaign Name
              </label>
              <input
                className="fs-13 border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 font-medium leading-3"
                type="text"
                placeholder="{{{Workflow_Name}}}"
              />
            </div>
            <div className="mt-4">
              <label className="text-616161 text-xs font-semibold uppercase leading-normal tracking-wide">
                Account ID (optional, to track opens)
              </label>
              <input
                className="fs-13 border-bdbdbd text-616161 mt-2 w-full rounded border px-4 py-2 font-medium leading-3"
                type="text"
              />
            </div>
            <div className="mt-4 w-full">
              <button
                type="button"
                className="ryeo-blue-bg rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-6/12 lg:pl-5">
          <h3 className="text-212121 mb-3 text-base font-semibold leading-4">
            Integrate Google Analytics URLs
          </h3>
          <div className="rounded bg-[#ECF8F6] px-3 py-4 md:px-6">
            <p className="text-616161 mb-2 text-sm leading-5">
              Google Analytics Integration automatically modifies all links in your HTML email with
              campaign parameters.{' '}
              <span className="font-semibold">
                Your website must have Google Analytics Integrated.
              </span>
            </p>
            <p className="text-616161 text-sm font-medium leading-4">Sample Link URL:</p>
            <p className="text-616161 mt-2 break-all text-sm leading-5">
              http://example.com/?utm_campaign=%7B%7B%7Bworkflow_name%7D%7D%7D&utm_content=%7B%7B%7Bsubject%7D%7D%7D&utm_medium=email&utm_source=
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAnalytics;
