'use client';

import Button from '@/app/utils/ui/Button';

const SettingsOverview = () => {
  return (
    <div className="bg-f6f7f9 font-inter px-3 pb-44 pt-7 md:px-6">
      <div className="md:px-1.5">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="font-gilroyBold text-424242 text-xl leading-5">Personal Information</h2>
          <div className="flex items-center">
            <Button className="text-616161 mr-7 flex items-center py-2 text-[13px] font-medium leading-5">
              Cancel
            </Button>
            <Button className="ryeo-blue-bg flex items-center rounded px-4 py-2.5 text-[13px] font-medium leading-5 text-white">
              Save
            </Button>
          </div>
        </div>
        <div className="boxShadow rounded-lg bg-white px-3 py-4 sm:px-7 sm:pb-8 sm:pt-6">
          <form className="flex">
            <div className="w-6/12 pr-4">
              <div>
                <p className="text-9e9e9e mb-3 text-xs font-semibold uppercase leading-3 tracking-wide">
                  first name
                </p>
                <input
                  className="border-9e9e9e text-616161 h-11 w-full rounded border p-4 text-[13px] font-medium leading-3"
                  type="text"
                  name="fname"
                  placeholder="Daniel"
                />
              </div>
              <div className="mt-8">
                <p className="text-9e9e9e mb-3 text-xs font-semibold uppercase leading-3 tracking-wide">
                  email address
                </p>
                <input
                  className="border-9e9e9e text-616161 h-11 w-full rounded border p-4 text-[13px] font-medium leading-3"
                  type="email"
                  name="email"
                  placeholder="daniel.rist@gmail.com"
                />
              </div>
            </div>
            <div className="w-6/12 pl-2">
              <div>
                <p className="text-9e9e9e mb-3 text-xs font-semibold uppercase leading-3 tracking-wide">
                  last name
                </p>
                <input
                  className="border-9e9e9e text-616161 h-11 w-full rounded border p-4 text-[13px] font-medium leading-3"
                  type="text"
                  name="lname"
                  placeholder="Rist"
                />
              </div>
              <div className="mt-8">
                <p className="text-9e9e9e mb-3 text-xs font-semibold uppercase leading-3 tracking-wide">
                  profile picture
                </p>
                <div className="flex items-center">
                  <span className="mr-2.5 h-9 w-9 rounded-full">
                    <img className="h-full w-full" src="images/profile.png" />
                  </span>
                  <a className="text-[13px] font-medium leading-4 text-ryzeoBlue" href="#/">
                    Change
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mb-7 mt-14 flex items-center justify-between pt-1">
          <h2 className="font-gilroyBold text-424242 text-xl leading-5">Account Security</h2>
          <div className="flex items-center">
            <Button className="text-616161 mr-7 flex items-center py-2 text-[13px] font-medium leading-5">
              Cancel
            </Button>
            <Button className="ryeo-blue-bg flex items-center rounded px-4 py-2.5 text-[13px] font-medium leading-5 text-white">
              Save
            </Button>
          </div>
        </div>
        <div className="boxShadow rounded-lg bg-white px-3 py-4 sm:px-7 sm:pb-8 sm:pt-6">
          <div className="sm:flex">
            <div className="w-full pr-2 sm:w-6/12 md:pr-5">
              <div className="flex justify-between">
                <div>
                  <p className="text-616161 mb-2 text-sm font-semibold leading-4">
                    Two -factor Authentication
                  </p>
                  <p className="text-9e9e9e text-xs font-medium leading-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div>
                  <Button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    role="switch"
                    aria-checked="false"
                  >
                    <span className="sr-only">Use setting</span>

                    <span
                      aria-hidden="true"
                      className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    ></span>
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <div>
                  <p className="text-616161 mb-2 text-sm font-semibold leading-4">
                    Two -factor Authentication
                  </p>
                  <p className="text-9e9e9e text-xs font-medium leading-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div>
                  <Button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    role="switch"
                    aria-checked="false"
                  >
                    <span className="sr-only">Use setting</span>

                    <span
                      aria-hidden="true"
                      className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    ></span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-7 w-full pr-2 sm:mt-0 sm:w-6/12 md:pl-5">
              <div>
                <p className="text-9e9e9e mb-3 text-xs font-semibold uppercase leading-3 tracking-wide">
                  Enter Current password
                </p>
                <input
                  className="border-9e9e9e text-616161 h-11 w-full rounded border p-4 text-[13px] font-medium leading-3"
                  type="password"
                  name="password"
                />
              </div>
              <div className="mt-8">
                <p className="text-9e9e9e mb-3 text-xs font-semibold uppercase leading-3 tracking-wide">
                  enter new password
                </p>
                <input
                  className="border-9e9e9e text-616161 h-11 w-full rounded border p-4 text-[13px] font-medium leading-3"
                  type="password"
                  name="password"
                />
              </div>
              <div className="mt-8">
                <p className="text-9e9e9e mb-3 text-xs font-semibold uppercase leading-3 tracking-wide">
                  enter new password
                </p>
                <input
                  className="border-9e9e9e text-616161 h-11 w-full rounded border p-4 text-[13px] font-medium leading-3"
                  type="password"
                  name="password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsOverview;
