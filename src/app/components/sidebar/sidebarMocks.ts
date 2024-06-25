import type { IHeader, IMenu } from '@/app/interface/sidebar';

const header: IHeader = {
  image: '/svgs/logo.svg',
};

const sideMenusBody: IMenu[] = [
  {
    link: '/dashboard',
    text: 'Dashboard',
    image: '/svgs/dashboard.svg',
    optionalSvg: 'svgs/sidebarOption.svg',
    lineBreak: true,
    // subMenus: [
    //   {
    //     link: '/sub1',
    //     text: 'Submenu 1',
    //     image: '/images/dashboard.svg',
    //   },
    //   {
    //     link: '/sub2',
    //     text: 'Submenu 2',
    //     image: '/images/dashboard.svg',
    //   },
    // ],
  },
  {
    link: '/campaigns',
    text: 'Campaigns',
    image: '/svgs/CampaignsIcon.svg',
  },
  {
    link: '/main',
    text: 'Work Flow',
    image: '/svgs/workflowIcon.svg',
    optionalSvg: 'svgs/sidebarOption.svg',
  },

  {
    link: '/main',
    text: 'Store',
    image: '/svgs/storeIcon.svg',
    optionalSvg: 'svgs/sidebarOption.svg',
    lineBreak: true,
  },

  {
    link: '/main',
    text: 'Email Templates',
    image: '/svgs/EmailIcon.svg',
  },

  {
    link: '/main',
    text: 'Pop-Ups',
    image: '/svgs/popUpIcon.svg',
    lineBreak: true,
  },
  {
    link: '/main',
    text: ' Lists & Segments',
    image: '/svgs/storeIcon.svg',
  },
  {
    link: '/main',
    text: 'Subscriber Profiles',
    image: '/svgs/subscriberProfile.svg',
    lineBreak: true,
  },
  {
    link: '/main',
    text: 'Integrations',
    image: '/svgs/integrations.svg',
  },
  {
    link: '/main',
    text: 'Data Feeds',
    image: '/svgs/DataFeeds.svg',
    lineBreak: true,
  },
];

const sideMenusFooter: IMenu[] = [
  {
    link: '/faq',
    text: 'Settings',
    image: '/svgs/settingIcon.svg',
  },
  {
    link: '/help',
    text: 'Get Help',
    image: '/svgs/helpIcon.svg',
  },
];

export { header, sideMenusBody, sideMenusFooter };
