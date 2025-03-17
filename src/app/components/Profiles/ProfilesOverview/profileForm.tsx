import React from 'react';

function ProfileForm() {
  return (
    <div className="boxShadow rounded-lg border bg-white px-3 py-6 lg:px-7 lg:pb-8 lg:pt-6">
      <form action="*/">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 sm:pr-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              First Name
            </label>
            <input
              className="text-616161 w-full rounded border border-[#9e9e9e] px-4 py-3 text-[13px] font-medium leading-3"
              type="text"
              name="fname"
              placeholder="Karon"
            />
          </div>
          <div className="mt-4 w-full sm:mt-0 sm:w-6/12 sm:pl-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              Second Name
            </label>
            <input
              className="text-616161 w-full rounded border border-[#9e9e9e] px-4 py-3 text-[13px] font-medium leading-3"
              type="text"
              name="lname"
              placeholder="Perry"
            />
          </div>
          <div className="mt-4 w-full sm:mt-8 sm:w-6/12 sm:pr-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              Email address
            </label>
            <input
              className="text-616161 w-full rounded border border-[#9e9e9e] px-4 py-3 text-[13px] font-medium leading-3"
              type="email"
              name="Email"
              placeholder="Kamron.perry@gmail.com"
            />
          </div>
          <div className="mt-4 w-full sm:mt-8 sm:w-6/12 sm:pl-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              phone number
            </label>
            <input
              className="text-616161 w-full rounded border border-[#9e9e9e] px-4 py-3 text-[13px] font-medium leading-3"
              type="number"
              name="phone number"
              placeholder="98476609"
            />
          </div>
          <div className="mt-4 w-full sm:mt-8 sm:w-6/12 sm:pr-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              Address line 1
            </label>
            <input
              className="text-616161 w-full rounded border border-[#9e9e9e] px-4 py-3 text-[13px] font-medium leading-3"
              type="text"
              name="address"
              placeholder="116, Main Lane"
            />
          </div>
          <div className="mt-4 w-full sm:mt-8 sm:w-6/12 sm:pl-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              Address line 2
            </label>
            <input
              className="text-616161 w-full rounded border border-[#9e9e9e] px-4 py-3 text-[13px] font-medium leading-3"
              type="text"
              name="address"
              placeholder="116, Main Lane"
            />
          </div>
          <div className="mt-4 w-full sm:mt-8 sm:w-6/12 sm:pr-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              zip-code
            </label>
            <input
              className="text-616161 w-full rounded border border-[#9e9e9e] px-4 py-3 text-[13px] font-medium leading-3"
              type="number"
              name="zip code"
              placeholder="40110"
            />
          </div>
          <div className="mt-4 w-full sm:mt-8 sm:w-6/12 sm:pl-3.5">
            <label className="text-9e9e9e mb-3 block text-xs font-semibold uppercase leading-3 tracking-wide">
              Country
            </label>
            <div className="relative rounded border border-[#9e9e9e]">
              <select className="text-616161 w-full px-4 py-3 text-[13px] font-medium leading-3">
                <option>USA</option>
              </select>
              <img className="absolute right-4 top-2.5 " src="images/down-arrow.png" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
