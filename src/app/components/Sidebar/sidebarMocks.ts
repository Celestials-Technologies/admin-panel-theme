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

    subMenus: [
      {
        link: '/campaigns/blast',
        text: 'Blasts',
        image: '',
      },
    ],
  },
  {
    link: '/workflows',
    text: 'Work Flow',
    image: '/svgs/workflowIcon.svg',
    optionalSvg: 'svgs/sidebarOption.svg',
  },

  {
    link: '/emailTemplates',
    text: 'Email Templates',
    image: '/svgs/EmailIcon.svg',
  },
  {
    link: '/Integrations',
    text: 'Integrations',
    image: '/svgs/integrations.svg',
  },

  {
    link: '/pop-Ups',
    text: 'Pop-Ups',
    image: '/svgs/popUpIcon.svg',
    lineBreak: true,
  },
  {
    link: '/ListsSegments',
    text: 'Lists & Segments',
    image: '/svgs/storeIcon.svg',
  },
  {
    link: '/profiles',
    text: 'Profiles',
    image: '/svgs/subscriberProfile.svg',
    lineBreak: true,
  },

  {
    link: '/data-feeds',
    text: 'Data Feeds',
    image: '/svgs/DataFeeds.svg',
    lineBreak: true,
  },
];

const sideMenusFooter: IMenu[] = [
  {
    link: '/settings',
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
