export type CustomMenuIcon = {
  name: string /** Name of the icon */;
  fontFamily: 'fab' | 'fas' | 'far' /** Font family of the icon */;
};

export type CustomMenuOpenMode = 'iframe' | 'new_tab' | 'current_tab';

export type CustomMenuUserRole = 'all' | 'admin' | 'user';

export type CustomMenu = {
  id: string /** Unique identifier for the custom menu */;
  icon: CustomMenuIcon /** Icon information for the menu item */;
  title: string /** Title of the custom menu */;
  url: string /** URL of the custom menu */;
  order: number /** Order of the custom menu */;
  showOnCompany: boolean /** Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided */;
  showOnLocation: boolean /** Whether the menu must be displayed for sub-accounts level */;
  showToAllLocations: boolean /** Whether the menu must be displayed to all sub-accounts */;
  locations: string[] /** List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false */;
  openMode: CustomMenuOpenMode /** Mode for opening the menu link */;
  userRole: CustomMenuUserRole /** Which user-roles should the menu be accessible to? */;
  allowCamera: boolean /** Indicates if camera access is allowed for this menu */;
  allowMicrophone: boolean /** Indicates if microphone access is allowed for this menu */;
};

export type CustomMenuResponse = {
  customMenu: CustomMenu /** Single Custom menu link object */;
};

export type DeleteCustomMenuResponse = {
  success: boolean /** Indicates whether the custom menu was successfully deleted */;
  message: string /** A message providing additional information about the deletion operation */;
  deletedMenuId: string /** The ID of the deleted custom menu */;
  deletedAt: string /** Timestamp of when the deletion was performed */;
};

export type UpdateCustomMenuDto = {
  title?: string /** Title of the custom menu */;
  url?: string /** URL of the custom menu */;
  icon?: CustomMenuIcon /** Icon information for the menu item */;
  showOnCompany?: boolean /** Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided */;
  showOnLocation?: boolean /** Whether the menu must be displayed for sub-accounts level */;
  showToAllLocations?: boolean /** Whether the menu must be displayed to all sub-accounts */;
  openMode?: CustomMenuOpenMode /** Mode for opening the menu link */;
  locations?: string[] /** List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false */;
  userRole?: CustomMenuUserRole /** Which user-roles should the menu be accessible to? */;
  allowCamera?: boolean /** Indicates if camera access is allowed for this menu */;
  allowMicrophone?: boolean /** Indicates if microphone access is allowed for this menu */;
};

export type UpdateCustomMenuResponse = {
  customMenu: CustomMenu /** Updated custom menu link */;
  success: boolean /** Status of update */;
};

export type CreateCustomMenuDto = {
  title: string /** Title of the custom menu */;
  url: string /** URL of the custom menu */;
  icon: CustomMenuIcon /** Icon information for the menu item */;
  showOnCompany: boolean /** Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided */;
  showOnLocation: boolean /** Whether the menu must be displayed for sub-accounts level */;
  showToAllLocations: boolean /** Whether the menu must be displayed to all sub-accounts */;
  openMode: CustomMenuOpenMode /** Mode for opening the menu link */;
  locations: string[] /** List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false */;
  userRole: CustomMenuUserRole /** Which user-roles should the menu be accessible to? */;
  allowCamera?: boolean /** Indicates if camera access is allowed for this menu */;
  allowMicrophone?: boolean /** Indicates if microphone access is allowed for this menu */;
};

export type CustomMenuSearchParams = {
  locationId: string /** Unique identifier of the location */;
  limit?: number /** Maximum number of items to return */;
  query?: string /** Search query to filter custom menus by name, supports partial || full names */;
  showOnCompany?: boolean /** Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided */;
  skip?: number /** Number of items to skip for pagination */;
};

export type ListCustomMenusResponse = {
  customMenus: CustomMenu[] /** Array of custom menu links */;
  totalLinks: number /** Total number of custom menu records */;
};
