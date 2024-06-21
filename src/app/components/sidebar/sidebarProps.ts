import { IHeader, IMenu } from "@/app/interface/sidebar";

export interface sidebarProps {
  header: IHeader;
  menuBody: IMenu[];
  menuFooter: IMenu[];
}
