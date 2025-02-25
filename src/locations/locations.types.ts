import { CountryCodes } from '../common.types';

export type LocationSettings = {
  allowDuplicateContact?: boolean /** Allow duplicate contacts. */;
  allowDuplicateOpportunity?: boolean /** Allow duplicate opportunities. */;
  allowFacebookNameMerge?: boolean /** Allow Facebook name merge. */;
  disableContactTimezone?: boolean /** Disable contact timezone. */;
};

export type LocationSocial = {
  facebookUrl?: string /** Facebook URL. */;
  googlePlus?: string /** Googleplus URL. */;
  linkedIn?: string /** LinkedIn URL. */;
  foursquare?: string /** Foursquare URL. */;
  twitter?: string /** Twitter URL. */;
  yelp?: string /** Yelp URL. */;
  instagram?: string /** Instagram URL. */;
  youtube?: string /** Instagram URL. */;
  pinterest?: string /** Instagram URL. */;
  blogRss?: string /** Instagram URL. */;
  googlePlacesId?: string /** Google Business Places ID. */;
};

export type Location = {
  id?: string /** Location Id */;
  name?: string /** The name for the sub-account/location */;
  phone?: string /** The phone number of the business for which sub-account is created */;
  email?: string /** The email for the sub-account/location */;
  address?: string /** The address of the business for which sub-account is created */;
  city?: string /** The city where the business is located for which sub-account is created */;
  state?: string /** The state in which the business operates for which sub-account is created */;
  country?: string /** The country in which the business is present for which sub-account is created */;
  postalCode?: string /** The postal code of the business for which sub-account is created */;
  website?: string /** The website of the business for which sub-account is created */;
  timezone?: string /** The timezone of the business for which sub-account is created */;
  settings?: LocationSettings /** The default settings for location */;
  social?: LocationSocial /** The social media links for location */;
};

export type ListLocationsResponse = {
  locations: Location[] /** The list of locations. */;
};

export type LocationBusiness = {
  name?: string /** The name for the sub-account/location */;
  address?: string /** The address of the business for which sub-account is created */;
  city?: string /** The city where the business is located for which sub-account is created */;
  state?: string /** The state in which the business operates for which sub-account is created */;
  country?: string /** The country in which the business is present for which sub-account is created */;
  postalCode?: string /** The postal code of the business for which sub-account is created */;
  website?: string /** The website of the business for which sub-account is created */;
  timezone?: string /** The timezone of the business for which sub-account is created */;
  logoUrl?: string /** The logo of the business for which sub-account is created */;
};

export type LocationDetails = {
  id?: string /** Location Id */;
  companyId?: string /** Company Id */;
  name?: string /** The name for the sub-account/location */;
  domain?: string /** The domain of the business for which sub-account is created */;
  address?: string /** The address of the business for which sub-account is created */;
  city?: string /** The city where the business is located for which sub-account is created */;
  state?: string /** The state in which the business operates for which sub-account is created */;
  country?: string /** The country in which the business is present for which sub-account is created */;
  postalCode?: string /** The postal code of the business for which sub-account is created */;
  logoUrl?: string /** The logo of the business for which sub-account is created */;
  website?: string /** The website of the business for which sub-account is created */;
  timezone?: string /** The timezone of the business for which sub-account is created */;
  firstName?: string /** The first name of the business owner */;
  lastName?: string /** The last name of the business owner */;
  email?: string /** The email of the business owner */;
  phone?: string /** The phone number of the business owner */;
  business?: LocationBusiness /** The business details */;
  social?: LocationSocial /** The social media links for location */;
  settings?: LocationSettings /** The default settings for location */;
  reseller?: object /** The reseller details */;
};

export type LocationResponse = {
  location: LocationDetails /** The location */;
};

export type LocationProspectInfo = {
  firstName: string /** The first name of the prospect */;
  lastName: string /** The last name of the prospect */;
  email: string /** The email of the prospect */;
};

export type LocationsTwilioSchema = {
  sid: string /** The Twilio SID (AC_XXXXXXXXXXX) */;
  authToken: string /** The Twilio Auth Token (77_XXXXXXXXXXX) */;
};

export type LocationsMailgunSchema = {
  apiKey: string /** The Mailgun API Key (key-XXXXXXXXXXX) */;
  domain: string /** The Mailgun Domain (mg.example.com) */;
};

export type CreateLocationDto = {
  name: string /** The name for the sub-account/location */;
  phone?: string /** The phone number of the business for which sub-account is created */;
  companyId: string /** Company/Agency Id */;
  address?: string /** The address of the business for which sub-account is created */;
  city?: string /** The city where the business is located for which sub-account is created */;
  state?: string /** The state in which the business operates for which sub-account is created */;
  country?: CountryCodes /** The country in which the business is present for which sub-account is created */;
  postalCode?: string /** The postal code of the business for which sub-account is created */;
  website?: string /** The website of the business for which sub-account is created */;
  timezone?: string /** The timezone of the business for which sub-account is created */;
  prospectInfo?: LocationProspectInfo /** The prospect info */;
  settings?: LocationSettings /** The default settings for location */;
  social?: LocationSocial /** The social media links for location */;
  twilio?: LocationsTwilioSchema /** The twilio credentials for location */;
  mailgun?: LocationsMailgunSchema /** The mailgun credentials for location */;
  snapshotId?: string /** The snapshot ID to be loaded into the location. */;
};

export type CreateUpdateLocationResponse = {
  id: string /** Location Id */;
  companyId: string /** Company/Agency Id */;
  name: string /** The name for the sub-account/location */;
  phone: string /** The phone number of the business for which sub-account is created */;
  email: string /** The email for the sub-account/location */;
  address: string /** The address of the business for which sub-account is created */;
  city: string /** The city where the business is located for which sub-account is created */;
  state: string /** The state in which the business operates for which sub-account is created */;
  domain: string /** The domain of the business for which sub-account is created */;
  country: string /** The country in which the business is present for which sub-account is created */;
  postalCode: string /** The postal code of the business for which sub-account is created */;
  website: string /** The website of the business for which sub-account is created */;
  timezone: string /** The timezone of the business for which sub-account is created */;
  settings: LocationSettings /** The default settings for location */;
  social: LocationSocial /** The social media links for location */;
};

export type LocationsSnapshotPutSchema = {
  id: string /** Snapshot ID */;
  override: boolean /** Override the existing location data */;
};

export type UpdateLocationDto = {
  companyId: string /** Company/Agency Id */;
  name?: string /** The name for the sub-account/location */;
  phone?: string /** The phone number of the business for which sub-account is created */;
  address?: string /** The address of the business for which sub-account is created */;
  city?: string /** The city where the business is located for which sub-account is created */;
  state?: string /** The state in which the business operates for which sub-account is created */;
  country?: CountryCodes /** The country in which the business is present for which sub-account is created */;
  postalCode?: string /** The postal code of the business for which sub-account is created */;
  website?: string /** The website of the business for which sub-account is created */;
  timezone?: string /** The timezone of the business for which sub-account is created */;
  prospectInfo?: LocationProspectInfo /** The prospect info */;
  settings?: LocationSettings /** The default settings for location */;
  social?: LocationSocial /** The social media links for location */;
  twilio?: LocationsTwilioSchema /** The twilio credentials for location */;
  mailgun?: LocationsMailgunSchema /** The mailgun credentials for location */;
  snapshot?: LocationsSnapshotPutSchema /** The snapshot to be updated in the location. */;
};

export type DeleteLocationResponse = {
  success: boolean /** The success status of the delete operation */;
  message: string /** The message for the delete operation */;
};

export type LocationTag = {
  id?: string /** The tag ID */;
  name?: string /** The tag name */;
  locationId?: string /** The location ID */;
};

export type ListLocationTagsResponse = {
  tags: LocationTag[] /** The list of tags */;
};

export type LocationTagResponse = {
  tag: LocationTag /** The tag */;
};

export type LocationTaskSearchParams = {
  contactId?: string[] /** Contact Ids */;
  completed?: boolean /** Task Completed Or Pending */;
  assignedTo?: string[] /** Assigned User Ids */;
  query?: string /** Search Value */;
  limit?: number /** Limit To Api */;
  skip?: number /** Number Of Tasks To Skip */;
  businessId?: string /** Bussiness Id */;
};

export type LocationTaskContact = {
  _id?: string /** The contact ID */;
  firstName?: string /** The first name of the contact */;
  lastName?: string /** The last name of the contact */;
};

export type LocationTaskUser = {
  id?: string /** The user ID */;
  firstName?: string /** The first name of the user */;
  lastName?: string /** The last name of the user */;
  profilePhoto?: string /** The profile photo of the user */;
};

export type LocationTask = {
  _id: string /** The task ID */;
  assignedTo: string /** The user ID to whom the task is assigned */;
  body: string /** The body of the task */;
  completed: boolean /** The status of the task */;
  contactId: string /** The contact ID for which the task is created */;
  dateAdded: string /** The date when the task is added (2024-07-24T14:25:43.176Z) */;
  dateUpdated: string /** The date when the task is updated (2024-09-01T15:27:09.725Z) */;
  deleted: boolean /** The status of the task */;
  dueDate: string /** The due date of the task (2024-07-25T06:00:00.000Z) */;
  locationId: string /** The location ID for which the task is created */;
  title: string /** The title of the task */;
  updatedAt: string /** The date when the task is updated (2024-09-01T15:27:10.633Z) */;
  contactDetails: LocationTaskContact /** The contact details */;
  assignedToUserDetails: LocationTaskUser /** The user details */;
};

export type ListLocationTasksResponse = {
  tasks: LocationTask[] /** The list of tasks */;
};

export type LocationCustomFieldModel = 'contact' | 'opportunity';

export type LocationCustomField = {
  id?: string /** The custom field ID */;
  name?: string /** The name of the custom field */;
  fieldKey?: string /** The key of the field */;
  placeholder?: string /** The placeholder of the field */;
  dataType?: string /** The data type of the field */;
  position?: number /** The position of the field */;
  picklistOptions?: string[] /** The picklist options */;
  picklistImageOptions?: string[] /** The picklist image options */;
  isAllowedCustomOption?: boolean /** The status of custom option */;
  isMultiFileAllowed?: boolean /** The status of multi file allowed */;
  maxFileLimit?: number /** The max file limit */;
  locationId?: string /** The location ID */;
  model?: LocationCustomFieldModel /** The model of the custom field */;
};

export type ListLocationCustomFieldsResponse = {
  customFields: LocationCustomField[] /** The custom fields */;
};

export type LocationCustomFieldResponse = {
  customField: LocationCustomField /** The custom field */;
};

export type LocationCustomFieldTextBoxListOptions = {
  label?: string /** The label of the text box */;
  prefillValue?: string /** The prefill value of the text box */;
};

export type LocationCustomFieldType =
  | 'TEXT'
  | 'LARGE_TEXT'
  | 'NUMERICAL'
  | 'PHONE'
  | 'MONETORY'
  | 'CHECKBOX'
  | 'SINGLE_OPTIONS'
  | 'MULTIPLE_OPTIONS'
  | 'FLOAT'
  | 'TIME'
  | 'DATE'
  | 'TEXTBOX_LIST'
  | 'FILE_UPLOAD'
  | 'SIGNATURE'
  | 'RADIO';

export type LocationCustomFieldFileFormat =
  | '.pdf'
  | '.doc'
  | '.docx'
  | '.jpeg'
  | '.jpg'
  | '.png'
  | '.gif'
  | '.csv'
  | '.xls';

export type UpdateLocationCustomFieldDto = {
  name?: string /** The name of the custom field */;
  placeholder?: string /** The placeholder of the field */;
  acceptedFormat?: LocationCustomFieldFileFormat[] /** The accepted format of the field */;
  isMultipleFile?: boolean /** The status of multi file allowed */;
  maxNumberOfFiles?: number /** The max file limit */;
  textBoxListOptions?: LocationCustomFieldTextBoxListOptions[] /** The text box list options */;
  position?: number /** The position of the field */;
};

export type CreateLocationCustomFieldDto = UpdateLocationCustomFieldDto & {
  name: string /** The name of the custom field */;
  dataType: LocationCustomFieldType /** The data type of the field */;
  model: LocationCustomFieldModel /** The model of the custom field */;
};

export type LocationsFileInterface = {
  name: string;
  blob: Blob;
};

export type LocationsFileUploadBody = {
  id?: string /** The custom field ID */;
  maxFiles?: number /** The max file limit */;
};

export type LocationsFileuploadMeta = {
  fieldName?: string /** The field name */;
  originalname?: string /** The original name of the file */;
  encoding?: string /** The encoding of the file */;
  mimetype?: string /** The mime type of the file */;
  size?: number /** The size of the file */;
  url?: string /** The URL of the file */;
};

export type LocationsFileUploadResponse = {
  uploadedFiles?: {
    [fileName: string]: string /** The uploaded file name and URL */;
  };
  meta?: LocationsFileuploadMeta[] /** The meta data of the uploaded files */;
};

export type LocationCustomValue = {
  id?: string /** The custom field ID */;
  name?: string /** The name of the custom field */;
  fieldKey?: string /** The key of the field */;
  value?: string /** The value of the field */;
  locationId?: string /** The location ID */;
};

export type ListLocationCustomValuesResponse = {
  customValues: LocationCustomValue[] /** The list of custom values */;
};

export type LocationCustomValueResponse = {
  customValue: LocationCustomValue /** The custom value */;
};

export type LocationCustomValueDto = {
  name: string /** The name of the custom field */;
  value: string /** The value of the field */;
};

export type LocationTemplateSearchParams = {
  deleted: boolean;
  limit: string;
  skip: string;
  type: 'sms' | 'email' | 'whatsapp';
  originId: string;
};

export type LocationSMSTemplate = {
  body?: string /** The body of the SMS template */;
  attachments: string[] /** The urls for the attachments of the SMS template */;
};

export type LocationSMSTemplateDetails = {
  id?: string /** The SMS template ID */;
  name?: string /** The name of the SMS template */;
  type?: string /** The type of the SMS template */;
  template?: LocationSMSTemplate /** The SMS template */;
  dateAdded?: string /** The date when the SMS template is added (2024-07-24T14:25:43.176Z) */;
  locationId?: string /** The location ID for which the SMS template is created */;
  urlAttachments?: string[] /** The urls for the attachments of the SMS template */;
};

export type LocationEmailTemplate = {
  subject?: string /** The subject of the email template */;
  attachments?: string[] /** The urls for the attachments of the email template */;
  html?: string /** The html of the email template */;
};

export type LocationEmailTemplateDetails = {
  id?: string /** The email template ID */;
  name?: string /** The name of the email template */;
  type?: string /** The type of the email template */;
  dateAdded?: string /** The date when the email template is added (2024-07-24T14:25:43.176Z) */;
  template?: LocationEmailTemplate /** The email template */;
  locationId?: string /** The location ID for which the email template is created */;
};

export type ListLocationTemplatesResponse = {
  templates: Array<
    LocationEmailTemplateDetails | LocationSMSTemplateDetails
  > /** The list of templates */;
  totalCount: number /** The total count of templates */;
};

export type LocationSearchParams = {
  companyId?: string /** The company/agency id on which you want to perform the search */;
  email?: string /** The email of the location */;
  limit?: string /** The value by which the results should be limited. Default will be 10 */;
  order?:
    | 'asc'
    | 'desc' /** The order in which the results should be returned - Allowed values asc, desc. Default will be asc */;
  skip?: string /** The value by which the results should be skipped. Default will be 0 */;
};

export type LocationTimeZonesResponse = {
  timeZones: string[];
  traceId: string;
};
