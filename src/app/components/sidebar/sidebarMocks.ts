import { IHeader, IMenu } from '@/app/interface/sidebar';

const header: IHeader = {

  image: '/images/logo.svg',
};

const sideMenusBody: IMenu[] = [
  {
    link: '/main',
    text: 'Dashboard',
    image: '/images/dashboard.svg',
    optionalSvg: 'images/sidebarOption.svg',
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
    image: '/images/CampaignsIcon.svg',
  },
  {
    link: '/main',
    text: 'Work Flow',
    image: '/images/workflowIcon.svg',
    optionalSvg: 'images/sidebarOption.svg',
  },

  {
    link: '/main',
    text: 'Store',
    image: '/images/storeIcon.svg',
    optionalSvg: 'images/sidebarOption.svg',
    lineBreak: true,
  },


  {
    link: '/main',
    text: 'Email Templates',
    image: '/images/EmailIcon.svg',
  },

  {
    link: '/main',
    text: 'Pop-Ups',
    image: '/images/popUpIcon.svg',
    lineBreak: true,
  },
  {
    link: '/main',
    text: ' Lists & Segments',
    image: '/images/storeIcon.svg',
  },
  {
    link: '/main',
    text: 'Subscriber Profiles',
    image: '/images/storeIcon.svg',
    lineBreak: true,
  },
  {
    link: '/main',
    text: 'Integrations',
    image: '/images/integrations.svg',
  }, {
    link: '/main',
    text: 'Data Feeds',
    image: '/images/DataFeeds.svg',
    lineBreak: true,
  },
];

const sideMenusFooter: IMenu[] = [
  {
    link: '/faq',
    text: 'Settings',
    image: '/images/settingIcon.svg',
  },
  {
    link: '/help',
    text: 'Get Help',
    image: '/images/helpIcon.svg',
  },
];

export { sideMenusBody, sideMenusFooter, header };
