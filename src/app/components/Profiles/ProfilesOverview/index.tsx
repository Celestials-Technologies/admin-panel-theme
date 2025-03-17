'use client';

import Button from '@/app/utils/ui/Button';
import ProfileForm from './profileForm';

const ProfilesOverview = () => {
  const engagementMetrics = [
    {
      title: 'Last Email Opened',
      date: '26 Jan 2024',
      time: '03:00 PM',
    },
    {
      title: 'Last Email Clicked',
      date: '25 Jan 2024',
      time: '11:30 AM',
    },
    {
      title: 'Last Active on Site',
      date: '24 Jan 2024',
      time: '02:15 PM',
    },
    {
      title: 'Last Purchase',
      date: '20 Jan 2024',
      time: '09:45 AM',
    },
  ];

  const orderMetrics = [
    {
      title: 'Total Orders',
      value: '12',
    },
    {
      title: 'Average Order Value',
      value: '$200',
    },
    {
      title: 'Life Time Value',
      value: '$2000',
    },
  ];

  return (
    <>
      <div className="bg-f6f7f9 font-inter px-3 pb-7 pt-10 md:px-6">
        <div className="px-1.5">
          <div className="justify-between md:flex">
            <div className="w-full md:w-6/12 md:pr-6 ">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-gilroyBold text-424242 text-base leading-5 sm:text-xl">
                  Personal Information
                </p>
                <div className="flex items-center">
                  <Button className="text-616161 mr-7 flex items-center py-2 text-[13px] font-medium leading-5">
                    Cancel
                  </Button>
                  <Button className="ryeo-blue-bg flex items-center rounded px-4 py-2.5 text-[13px] font-medium leading-5 text-white">
                    Save
                  </Button>
                </div>
              </div>
              <ProfileForm />
            </div>
            <div className="mt-6 w-full md:mt-0 md:w-6/12 md:pl-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-gilroyBold text-424242 text-base leading-5 sm:text-xl">
                  Lists & Segments
                </p>
                <div className="flex items-center">
                  <Button className="text-616161 mr-7 flex items-center py-2 text-[13px] font-medium leading-5">
                    Cancel
                  </Button>
                  <Button className="ryeo-blue-bg flex items-center rounded px-4 py-2.5 text-[13px] font-medium leading-5 text-white">
                    Save
                  </Button>
                </div>
              </div>
              <div className="boxShadow rounded-lg border bg-white px-3 py-6 lg:px-7 lg:pb-8 lg:pt-6">
                <h3 className="font-gilroySemibold text-base">Lists</h3>
                <div className="mb-1.5 flex flex-wrap items-center">
                  <a
                    href="#/"
                    className="mr-3 mt-2.5 flex items-center rounded-2xl bg-[#eaeef4] px-3 py-2 text-sm font-normal leading-3 text-ryzeoBlue"
                  >
                    ABC List
                    <img className="ml-2 h-2 w-2" src="images/close-blue.png" />
                  </a>
                  <a
                    href="#/"
                    className="mr-3 mt-2.5 flex rounded-2xl bg-[#f8eade] px-3 py-2 text-sm font-normal leading-3 text-[#ea7104]"
                  >
                    ABC List
                    <img className="ml-2 h-2 w-2" src="images/close-red.png" />
                  </a>
                  <a
                    className="leading-3.5 text-616161 mt-2.5 flex items-center px-3 py-2 text-sm font-normal"
                    href="#/"
                  >
                    <img className="mr-2" src="images/add.png" />
                    Add to List
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="font-gilroyBold text-424242 text-xl leading-5">Personal Information</p>
            <div className="flex-wrap items-center sm:flex lg:flex-nowrap">
              {orderMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="mx-auto mt-4 w-48 sm:mx-0 sm:w-60 sm:pr-4 md:w-72 lg:w-4/12"
                >
                  <div className="boxShadow rounded-lg border bg-white px-3 py-2.5 text-center lg:px-5 lg:py-6">
                    <p className="text-757575 mb-2.5 text-xs font-semibold leading-4 sm:mb-5">
                      {metric.title}
                    </p>
                    <p className="font-gilroyBold text-424242 text-xl leading-4 sm:text-3xl sm:leading-7">
                      {metric.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <p className="font-gilroyBold text-424242 text-xl leading-5">Engagement</p>
            <div className="flex-wrap items-center sm:flex lg:flex-nowrap">
              {engagementMetrics.map((metric, index) => (
                <div key={index} className="mx-auto mt-4 w-60 sm:mx-0 sm:w-6/12 sm:pr-4 lg:w-3/12">
                  <div className="boxShadow rounded-lg border bg-white px-3 py-2.5 text-center lg:px-5 lg:py-6">
                    <p className="text-757575 mb-2.5 text-xs font-semibold leading-4 sm:mb-5">
                      {metric.title}
                    </p>
                    <p className="font-gilroyBold text-424242 text-xl leading-4 sm:text-2xl sm:leading-6">
                      {metric.date}
                    </p>
                    <p className="text-616161 mt-2 text-[13px] font-medium leading-3">
                      {metric.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilesOverview;
