export type Snapshot = {
  id?: string /** The snapshot id */;
  name?: string /** The snapshot name */;
  type?: string /** The snapshot type */;
};

export type ListSnapshotsResponse = {
  snapshots?: Snapshot[] /** The list of snapshots */;
};

type ShareType = 'link' | 'permanent_link' | 'agency_link' | 'location_link';

export type SnapshotShareLinkDto = {
  snapshot_id: string /** id for snapshot to be shared */;
  share_type: ShareType /** Type of share link to generate */;
  relationship_number?: string /** Comma separated Relationship number of Agencies to create agency restricted share link */;
  share_location_id?: string /** Comma separated Sub-Account ids to create sub-account restricted share link */;
};

export type SnapshotShareLinkResponse = {
  id?: string /** The share link id */;
  shareLink?: string /** The share link */;
};

export type SnapshotStatusSearchParams = {
  companyId: string;
  from: string;
  lastDoc: string;
  limit: string;
  to: string;
};

export type SnapshotStatus = {
  id?: string /** Document id */;
  locationId?: string /** Sub-account id */;
  status?: string /** Status of snapshot push */;
  dateAdded?: string /** Timestamp of when snapshot processing starts for sub-account (10/28/2022, 6:24:54 PM) */;
};

export type SnapshotStatusResponse = {
  data: SnapshotStatus[] /** The list of snapshot status */;
};

export type SnapshotAssetsStatus = {
  id?: string /** Document id */;
  locationId?: string /** Sub-account id */;
  status?: string /** Status of snapshot push */;
  completed?: string[] /** List of completed assets */;
  pending?: string[] /** List of pending assets */;
};

export type SnapshotAssetsStatusResponse = {
  data: SnapshotAssetsStatus[] /** The list of snapshot status */;
};
