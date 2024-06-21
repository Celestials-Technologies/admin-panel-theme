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
    lineBreak?: boolean;
  }

  export  interface IHeader {
    heading?: string;
    link?: string;
    image: string;
  }