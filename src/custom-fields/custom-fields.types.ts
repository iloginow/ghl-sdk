import { FieldType, FileFormat } from '../common.types';

export type CustomFieldOption = {
  key: string; // Key of the option (Included in Create and Response, excluded in Update)
  label: string; // Value of the option
  url?: string; // URL associated with the option (Optional, valid only for RADIO type)
};

export type CustomField = {
  locationId: string; // Location Id
  name?: string; // Field name
  description?: string; // Description of the field
  placeholder?: string; // Placeholder text for the field
  showInForms: boolean; // Whether the field should be shown in forms
  options?: CustomFieldOption[]; // Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type)
  acceptedFormats?: FileFormat; // Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all
  id: string; // Unique identifier of the object
  objectKey: string; // The key for your custom / standard object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
  dataType: FieldType; // Type of field that you are trying to create
  parentId: string; // ID of the parent folder
  fieldKey: string; // Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldName}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object.
  allowCustomOption?: boolean; // Determines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records.
  maxFileLimit?: number; // Maximum file limit for uploads
  dateAdded: string; // Date and time when the object was added
  dateUpdated: string; // Date and time when the object was last updated
};

export type CustomFieldResponse = {
  field: CustomField;
};

export type UpdateCustomFieldDto = {
  locationId: string; // Location Id
  name?: string; // Field name
  description?: string; // Description of the field
  placeholder?: string; // Placeholder text for the field
  showInForms: boolean; // Whether the field should be shown in forms
  options?: CustomFieldOption[]; // Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type)
  acceptedFormats?: FileFormat; // Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all
  maxFileLimit?: number; // Maximum file limit for uploads
};

export type RemoveCustomFieldResponse = {
  id: string;
  key: string;
  succeded: boolean;
};

export type CustomFieldFolder = {
  id: string; // Unique identifier of the object
  objectKey: string; // The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
  locationId: string; // Location Id
  name: string; // Folder name
};

export type ListCustomFieldsResponse = {
  fields: CustomField[];
  folders: CustomFieldFolder[];
};

export type CreateCustomFieldFolderDto = {
  objectKey: string; // The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
  locationId: string; // Location Id
  name: string; // Folder name
};

export type UpdateCustomFieldFolderDto = {
  locationId: string; // Location Id
  name: string; // Folder name
};

export type CreateCustomFieldDto = {
  locationId: string; // Location Id
  name?: string; // Field name
  description?: string; // Description of the field
  placeholder?: string; // Placeholder text for the field
  showInForms: boolean; // Whether the field should be shown in forms
  options?: CustomFieldOption[]; // Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type)
  acceptedFormats?: FileFormat; // Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all
  dataType: FieldType; // Type of field that you are trying to create
  fieldKey: string; // Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldName}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object.
  objectKey: string; // The key for your custom / standard object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
  maxFileLimit?: number; // Maximum file limit for uploads
  allowCustomOption?: boolean; // Determines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records.
  parentId: string; // ID of the parent folder
};
