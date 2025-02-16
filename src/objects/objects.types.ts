import { FieldType } from 'src/common.types';

export type Labels = {
  singular: string;
  plural: string;
};

export type Option = {
  key: string;
  label: string;
  url?: string;
};

export type DisplayPropertyDetails = {
  key: string; // key that would be used to refer the custom field internally (lowercase + underscore_separated). 'custom_objects.{{objectKey}}' would be added as prefix by default is not passed
  name: string; // Name of the Primary property name which will be displayed on the record page
  dataType: 'TEXT' | 'NUMERICAL';
};

export type CustomObject = {
  id: string;
  standard: boolean;
  key: string;
  labels: Labels;
  description?: string;
  locationId: string;
  primaryDisplayProperty: string;
  dateAdded: string;
  dateUpdated: string;
  type: 'USER_DEFINED' | 'SYSTEM_DEFINED';
};

export type CustomObjectField = {
  locationId: string;
  name?: string;
  description?: string;
  placeholder?: string;
  showInForms: boolean;
  options?: Option[];
  acceptedFormats?: string;
  id: string;
  objectKey: string;
  dataType: FieldType;
  parentId: string;
  fieldKey: string;
  allowCustomOption?: boolean;
  maxFileLimit?: number;
  dateAdded: string;
  dateUpdated: string;
};

export type CustomObjectSchemaResponse = {
  object: CustomObject;
  cache: boolean;
  fields: CustomObjectField[];
};

export type UpdateCustomObjectDto = {
  labels: Labels; // Required object defining singular and plural names
  description?: string | null; // Optional description of the custom object (e.g., "These are non vaccinated pets")
  locationId: string; // Required location identifier associated with the custom object (e.g., "632c34b4c9b7da3358ac9891")
  searchableProperties: string[]; // Required array of object field keys used for searching (e.g., ["custom_objects.mad.mad", "custom_objects.mad.record_1", "custom_objects.mad.nn"])
};

export type CreateCustomObjectDto = {
  labels: Labels; // This is what your custom object will be called. These labels will be used to display your custom object on the UI
  key: string; // key that would be used to refer the Custom Object internally (lowercase + underscore_separated). 'custom_objects.' would be added as prefix by default
  description?: string; // Pet Object`s description
  locationId: string; // Required location identifier associated with the custom object
  primaryDisplayPropertyDetails: DisplayPropertyDetails; // Primary property which will be displayed on the record page
};

export type CustomObjectResponse = {
  object: CustomObject;
};

export type ListCustomObjectsResponse = {
  objects: CustomObject[];
};

export type CustomObjectRecord = {
  id: string; // id of the record
  owner: string[]; // Owner (User's id). Limited to 1 for now. Only Supported with custom objects
  followers: string[]; // Follower (User's ids). Limited to 10 for now
  properties: Record<string, any>; // Properties of the record
  dateAdded: string; // Date and time when the object was added
  dateUpdated: string; // Date and time when the object was last updated
};

export type CustomObjectRecordResponse = {
  record: CustomObjectRecord;
};

export type CustomObjectTypeUpdateDirective = {
  remove: string[];
  add: string[];
};

export type CreateCustomObjectRecordDto = {
  owner: string[]; // Owner (User's id). Limited to 1 for now. Only Supported with custom objects
  followers: string[]; // Follower (User's ids). Limited to 10 for now
  properties: Record<string, any>; // Properties of the record
};

export type UpdateCustomObjectRecordDto = {
  owner: CustomObjectTypeUpdateDirective;
  followers: CustomObjectTypeUpdateDirective;
  properties: Record<string, any>;
};

export type DeleteCustomObjectRecordResponse = {
  id: string; // id of the deleted object
  success: boolean; // boolean that defines if the operation was a success or not
};

export type SearchCustomObjectRecordsDto = {
  locationId: string;
  page: number;
  pageLimit: number;
  query: string;
  searchAfter: string[];
};

export type CustomObjectRecordMetaData = {
  channel: string; // Creation channel. Example: 'WEB_USER'
  createdAt: string; // Created at. Example: '2025-01-02T09:35:39.032Z'
  source: string; // From where the record was created. Example: 'PUBLIC_API'
  sourceId: string; // User/Resource Id. Example: '26653146-ec82-435d-8a99-84ecdb7fde13'
};

export type CustomObjectRecordSearchResult = {
  id: string; // id of the record
  owner: string[]; // Owner (User's id). Limited to 1 for now. Only Supported with custom objects
  followers: string[]; // Follower (User's ids). Limited to 10 for now
  properties: Record<string, any>; // Properties of the record
  createdAt: string; // Date and time when the object was added
  updatedAt: string; // Date and time when the object was last updated
  locationId: string; // Location Id
  objectId: string; // ObjectId key
  createdBy: CustomObjectRecordMetaData; // Created By Meta
  lastUpdatedBy: CustomObjectRecordMetaData; // Last Updated By Meta
  searchAfter: Array<string | number>;
};

export type CustomObjectRecordSearchResponse = {
  records: CustomObjectRecordSearchResult[];
  total: number;
};
