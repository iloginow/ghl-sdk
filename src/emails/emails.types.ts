export type EmailType = 'html' | 'builder' | 'folder';

export type EmailBuilderVersion = 1 | 2;

export type EmailImportProvider = 'mailchimp' | 'active_campaign' | 'kajabi';

export type CreateEmailTemplateDto = {
  locationId: string /** The location ID of the email (ABCHkzuJQ8ZMd4Te84GK) */;
  type: EmailType /** The type of email (html, builder, folder) */;
  title?: string /** The title of the email */;
  updatedBy?: string /** The user ID of the user who updated the email */;
  builderVersion?: EmailBuilderVersion /** The version of the builder */;
  name?: string /** The name of the email */;
  parentId?: string /** The parent ID of the email */;
  templateDataUrl?: string /** The URL of the template data */;
  importProvider?: EmailImportProvider /** The import provider */;
  importURL?: string /** The URL of the import */;
  templateSource?: string /** The source of the template */;
  isPlainText?: boolean /** Whether the email is plain text */;
};

export type CreateEmailTemplateResponse = {
  id: string;
  traceId: string;
  status: string;
  redirect: string;
};

export type FetchEmailTemplateResponse = {
  name?: string /** The name of the email (New Template) */;
  updatedBy?: string /** The user ID of the user who updated the email (ABCHkzuJQ8ZMd4Te84GK) */;
  isPlainText?: boolean /** Whether the email is plain text (false) */;
  lastUpdated?: string /** The last updated date (2024-11-12T12:34:36.070Z) */;
  dateAdded?: string /** The date added (2024-11-12T12:34:36.070Z) */;
  previewUrl?: string /** The preview URL (https://example.com) */;
  id?: string /** The email ID (67334b231f2fad724062f52b5) */;
  version?: string /** The version (1) */;
  templateType?: string /** The type of template (builder) */;
};

export type DeleteEmailTemplateResponse = {
  ok: string /** The status of the request (true) */;
  traceId: string /** The trace ID of the request (ABCHkzuJQ8ZMd4Te84GK) */;
};

export type EmailsTemplateSettings = object;

export type EmailBuilderJSONMapper = {
  elements: string[] /** The elements of the email */;
  attrs: object /** The attributes of the email */;
  templateSettings: EmailsTemplateSettings /** The template settings */;
};

export type UpdateEmailTemplateDto = {
  locationId: string /** The location ID of the email (ABCHkzuJQ8ZMd4Te84GK) */;
  templateId: string /** The template ID (ABCHkzuJQ8ZMd4Te84GK) */;
  updatedBy: string /** The user ID of the user who updated the email (ABCHkzuJQ8ZMd4Te84GK) */;
  dnd: EmailBuilderJSONMapper /** The drag and drop data */;
  html: string /** The HTML of the email */;
  editorType: EmailType /** The type of editor (html) */;
  previewText?: string /** The preview text */;
};

export type UpdateEmailTemplateResponse = {
  ok?: string /** The status of the request (true) */;
  traceId?: string /** The trace ID of the request (ABCHkzuJQ8ZMd4Te84GK) */;
  previewUrl?: string /** The preview URL (https://example.com) */;
  templateDownloadUrl?: string /** The template download URL (https://example.com) */;
};

export type EmailTemplateSearchParams = {
  locationId: string /** The location ID of the email */;
  archived?: string /** Whether the email is archived */;
  builderVersion?: EmailBuilderVersion /** The version of the builder */;
  limit?: string /** The limit of the search */;
  name?: string /** The name of the email */;
  offset?: string /** The offset of the search */;
  originId?: string /** The origin ID of the email */;
  parentId?: string /** The parent ID of the email */;
  search?: string /** The search query */;
  sortByDate?: string /** The sort order */;
  templatesOnly?: string /** Whether to search for templates only */;
};

export type EmailParams = {
  locationId: string /** The location ID of the email */;
  archived?: string /** Whether the email is archived */;
  builderVersion?: string /** The version of the builder */;
  limit?: string /** The limit of the search */;
  name?: string /** The name of the email */;
  offset?: string /** The offset of the search */;
  originId?: string /** The origin ID of the email */;
  parentId?: string /** The parent ID of the email */;
  search?: string /** The search query */;
  sortByDate?: string /** The sort order */;
  templatesOnly?: string /** Whether to search for templates only */;
};
