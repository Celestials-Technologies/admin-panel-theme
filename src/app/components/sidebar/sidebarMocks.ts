import { IMenu } from "@/app/interface/sidebar";


const sideMenusBody: IMenu[] = [
  {
    link: '/main',
    text: 'Dashboard',
    image: '/images/dashboard.svg',
    optionalSvg: 'images/sidebarOption.svg',
    subMenus: [
      {
        link: '/sub1',
        text: 'Submenu 1',
        image: '/images/dashboard.svg',
      },
      {
        link: '/sub2',
        text: 'Submenu 2',
        image: '/images/dashboard.svg',
      },
    ],
  },
  {
    link: '/campaigns',
    text: 'Campaigns',
    image: '/images/dashboard.svg',
  },
  {
    link: '/main',
    text: 'Work Flow',
    image: '/images/dashboard.svg',
    optionalSvg: 'images/sidebarOption.svg',
  },
];

const sideMenusFooter: IMenu[] = [
  {
    link: '/faq',
    text: 'Settings',
    image: '/images/dashboard.svg',
  },
  {
    link: '/help',
    text: 'Get Help',
    image: '/images/dashboard.svg',
  },
];

export { sideMenusBody, sideMenusFooter };
