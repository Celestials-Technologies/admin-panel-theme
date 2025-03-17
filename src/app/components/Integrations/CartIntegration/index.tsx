'use client';

import Button from '@/app/utils/ui/Button';

const CartIntegration = () => {
  return (
    <div className="rounded-t-lg bg-white px-3 py-4 pb-10 md:px-6">
      <div className="lg:flex">
        <div className="lg:w-6/12 lg:pr-5">
          <h3 className="text-212121 mb-3 text-base font-semibold leading-4">Cart integrations</h3>
          <div className="border-bdbdbd relative h-11 rounded border">
            <select className="text-bdbdbd absolute h-full w-full rounded pl-4 text-[13px] font-medium leading-3 focus:outline-0">
              <option value="BigCommerce">BigCommerce</option>
              <option value="first-name">BigCommerce Legacy</option>
              <option value="Magento">Magento 1</option>
              <option value="Magento">Magento 2</option>
              <option value="Shopify">Shopify</option>
              <option value="Woo Commerce">WooCommerce</option>
            </select>
            <img className="absolute right-1.5 top-2" src="images/down-arrow.png" />
          </div>
          <div className="text-right">
            <a className="mt-1 inline-block text-xs font-medium text-ryzeoBlue underline" href="#/">
              Add Cart Integrations
            </a>
          </div>
          <div className="mt-3">
            <div
              id="bigComerce"
              className="mt-6 rounded border border-[#cfcfcf] bg-[#f5f5f5] bg-white p-4"
            >
              <h4 className="text-212121 mb-3 text-[13px] font-semibold leading-4">Big Commerce</h4>
              <form className="">
                <div className="">
                  <input
                    className="text-757575 w-full rounded border border-[#bdbdbd] bg-white px-4 py-2 text-[13px] font-medium leading-3"
                    type="text"
                    placeholder="Store hash"
                  />
                </div>
                <div className="mt-4">
                  <input
                    className="text-757575 w-full rounded border border-[#bdbdbd] bg-white px-4 py-2 text-[13px] font-medium leading-3"
                    type="text"
                    placeholder="Client Id"
                  />
                </div>
                <div className="mt-4">
                  <input
                    className="text-757575 w-full rounded border border-[#bdbdbd] bg-white px-4 py-2 text-[13px] font-medium leading-3"
                    type="password"
                    placeholder="Access Token"
                  />
                </div>
                <label className="checkBox relative mt-4 flex cursor-pointer items-center pl-7">
                  <span className="text-212121 mt-1 block text-xs font-normal leading-3 sm:leading-5 md:leading-3 lg:leading-5">
                    Grab Order History (Last 2 year Orders data)
                  </span>
                  <input className="absolute h-0 w-0 cursor-pointer opacity-0" type="checkbox" />
                  <span className="checkmark border-bdbdbd absolute left-0 top-0 mt-0.5 h-[18px] w-[18px] rounded-sm border"></span>
                </label>
                <div>
                  <p className="text-212121 mt-4 text-xs font-semibold leading-4">
                    Advance Configuration Options
                  </p>
                  <p className="mb-2 mt-4 text-xs font-medium leading-3 text-ryzeoBlue">
                    Unique OrderId Constraint:
                  </p>
                  <label className="radio-btn text-616161 relative mt-2 block flex items-center pl-7 text-[13px] font-normal leading-3">
                    store + orderId combination
                    <input className="absolute opacity-0" type="radio" name="radio" />
                    <span className="checkmark border-ryzeo-blue absolute -top-0.5 left-0 h-[18px] w-[18px] rounded-full border bg-white"></span>
                  </label>
                  <label className="radio-btn text-616161 relative mt-4 block flex items-center pl-7 text-[13px] font-normal leading-3">
                    orderId only
                    <input className="absolute opacity-0" type="radio" name="radio" />
                    <span className="checkmark border-ryzeo-blue absolute -top-0.5 left-0 h-[18px] w-[18px] rounded-full border bg-white"></span>
                  </label>
                </div>
                <div className="mt-4 flex flex-wrap items-center">
                  <Button
                    type="button"
                    className="ryeo-blue-bg mr-4 mt-4 rounded px-4 py-2 text-[13px] font-medium leading-5 text-white"
                  >
                    Save
                  </Button>
                  <Button
                    type="button"
                    className="mr-4 mt-4 rounded bg-[#B31E33] px-4 py-2 text-[13px] font-medium leading-5 text-white"
                  >
                    Remove
                  </Button>
                  <a href="#/" className="mt-4 text-sm leading-4 text-[#cb5b57]">
                    All fields are required
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-6/12 lg:pl-5">
          <div className="rounded bg-[#ECF8F6] px-3 py-4 md:px-6">
            <h3 className="text-212121 mb-4 text-base font-semibold leading-5">
              Insights Marketing Automation Magento v1 Extension
            </h3>
            <p className="text-212121 text-sm font-medium leading-5">
              Note: We support Magento 1.x on PHP Versions &gt;=5.4.0 &amp; &lt;=5.6.x same as
              <a
                href="http://devdocs.magento.com/guides/m1x/system-requirements.html"
                target="_blank"
                className="text-ryzeoBlue"
              >
                magento 1.xrequirements
              </a>
            </p>
            <p className="text-616161 my-2 text-sm font-normal leading-4">
              To install follow the steps bellow:
            </p>
            <ol className="list-decimal pl-5">
              <li className="text-616161 mb-2 text-sm font-medium leading-5">
                Download the
                <a href="/magento_extensions/v1/Insights_MarketingAutomation-latest.tgz">
                  latest extension here
                </a>
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Log-In to Magento v1 Admin panel
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Navigate to{' '}
                <strong className="font-semibold">
                  System &gt; Magento Connect &gt; Magento Connect Manager
                </strong>
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Sign into Magento Connect Manager with Magento admin credentials
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Under <strong className="font-semibold">Direct package file upload</strong> Click{' '}
                <em>Choose File</em>
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Choose the <em>Insights_MarketingAutomation-[version].tgz</em> you downloaded
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Click <strong className="font-semibold">Upload</strong>
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Once installed click <strong className="font-semibold">Return to Admin</strong>
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Navigate to <strong className="font-semibold">System &gt; Configuration</strong>
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Under <strong className="font-semibold">INSIGHT MARKETING AUTOMATION</strong> Click
                on <em>General</em>
              </li>
              <li className="text-616161 mb-2 text-sm leading-5">
                Enter your Account Id{' '}
                <b ng-if="$ctrl.accountId" className="ng-binding ng-scope">
                  (500221)
                </b>{' '}
                and click <em>Save Config</em>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartIntegration;
