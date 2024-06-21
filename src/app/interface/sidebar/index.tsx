export interface ISubMenu {
    link: string;
    text: string;
    image: string;
  }
  
 export  interface IMenu {
    link?: string;
    text: string;
    image: string;
    optionalSvg?: string;
    subMenus?: ISubMenu[];
  }

  export  interface IHeader {
    heading?: string;
    link?: string;
    image: string;
  }