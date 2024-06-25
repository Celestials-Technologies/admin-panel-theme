import type { IMenu } from '../interface/sidebar';

export const filterMenus = (menus: IMenu[], searchTerm: string): IMenu[] => {
  return menus.reduce((filtered: IMenu[], menu) => {
    const menuMatchesSearchTerm = menu.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const subMenus = menu.subMenus?.filter((submenu) =>
      submenu.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (menuMatchesSearchTerm || (subMenus && !!subMenus.length)) {
      const filteredMenu: IMenu = {
        ...menu,
        subMenus: subMenus || menu.subMenus,
      };

      if (!filtered.some((item) => item.text === filteredMenu.text)) {
        filtered.push(filteredMenu);
      }
    }

    return filtered;
  }, []);
};
