export type Link = {
  id?: string /** The unique identifier of the link. */;
  name?: string /** The name of the link. */;
  redirectTo?: string /** The URL to redirect to when the link is clicked. */;
  fieldKey?: string /** The key of the field that the link is associated with. */;
  locationId?: string /** The unique identifier of the location that the link is associated with. */;
};

export type ListLinksResponse = {
  links: Link[] /** The list of links. */;
};

export type LinkResponse = {
  link: Link /** The link. */;
};

export type CreateLinkDto = {
  locationId: string /** The unique identifier of the location that the link is associated with. */;
  name: string /** The name of the link. */;
  redirectTo: string /** The URL to redirect to when the link is clicked. */;
};

export type UpdateLinkDto = {
  name: string /** The name of the link. */;
  redirectTo: string /** The URL to redirect to when the link is clicked. */;
};
