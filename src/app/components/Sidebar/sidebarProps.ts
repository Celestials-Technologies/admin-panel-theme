import type { IHeader, IMenu } from '@/app/interface/sidebar';

export interface sidebarProps {
  header: IHeader;
  menuBody: IMenu[];
  menuFooter: IMenu[];
  showSearchBar?: boolean;
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
}
