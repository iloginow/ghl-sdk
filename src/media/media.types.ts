export type MediaFileSearchParams = {
  limit?: string; // Number of files to show in the listing
  offset?: string; // Number of files to skip in listing
  query?: string; // Query text
  type?: string; // Type
  altId: string; // Location or agency Id
  altType: 'agency' | 'location'; // AltType
  sortBy: string; // Field to sorting the file listing by
  sortOrder: 'asc' | 'desc'; // Direction in which file needs to be sorted
  parentId?: string; // Parent id or folder id
};

export type MediaFileDetails = {
  altId: string; // Location or agency Id
  altType: 'agency' | 'location'; // AltType
  name: string; // File name
  parentId: string; // Parent id or folder id
  url: string; // File URL
  path: string; // File Path
};

export type ListMediaFilesResponse = {
  files: MediaFileDetails[];
};

export type UploadFileDto = {
  file: Blob;
  hosted?: boolean;
  fileUrl?: string;
  name: string;
  parentId?: string;
};

export type UploadFileResponse = {
  fileId: string;
};
