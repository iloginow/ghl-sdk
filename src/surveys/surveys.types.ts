export type SurveySearchParams = {
  limit?: number;
  skip?: number;
  type?: string;
  locationId: string;
};

export type SurveySubmissionSearchParams = {
  endAt?: string;
  limit?: number;
  page?: number;
  q?: string;
  startAt?: string;
  surveyId?: string;
  locationId: string;
};

export type Survey = {
  id?: string /** Survey ID */;
  name?: string /** Survey name */;
  locationId?: string /** Location ID */;
};

export type ListSurveysResponse = {
  surveys: Survey[] /** The list of surveys */;
  total: number /** The total number of surveys */;
};

export type SurveyPageDetails = {
  url?: string /** The URL of the page */;
  title?: string /** The title of the page */;
};

export type SurveyContactSessionIds = {
  ids: string[] /** The list of contact session ids */;
};

export type SurveyEventData = {
  fbc?: string /** The Facebook click ID */;
  fbp?: string /** The Facebook pixel ID */;
  page?: SurveyPageDetails /** The page details */;
  domain?: string /** The domain */;
  medium?: string /** The medium */;
  source?: string /** The source */;
  version?: string /** The version */;
  adSource?: string /** The ad source */;
  mediumId?: string /** The medium ID */;
  parentId?: string /** The parent ID */;
  referrer?: string /** The referrer */;
  fbEventId?: string /** The Facebook event ID */;
  timestamp?: number /** The timestamp */;
  parentName?: string /** The parent name */;
  fingerprint?: string /** The fingerprint */;
  pageVisitType?: string /** The page visit type */;
  contactSessionIds?: SurveyContactSessionIds | null /** The contact session ids */;
};

export type OtherSurveyData = {
  [key: string]: any;
  eventData?: SurveyEventData /** The event data */;
  fieldsOriSequance?: string[] /** The original sequence of fields */;
};

export type SurveySubmission = {
  id?: string /** The submission ID */;
  contactId?: string /** The contact ID */;
  createdAt?: string /** The creation date (2020-11-01T18:02:21.000Z) */;
  surveyId?: string /** The survey ID */;
  name?: string /** The name */;
  email?: string /** The email */;
  others?: OtherSurveyData /** The others */;
};

export type SurveySubmissionsMeta = {
  total?: number /** The total number of surveys */;
  currentPage?: number /** The current page */;
  nextPage?: number | null /** The next page */;
  prevPage?: number | null /** The previous page */;
};

export type ListSurveySubmissionsResponse = {
  submissions: SurveySubmission[] /** The list of submissions */;
  meta: SurveySubmissionsMeta /** The meta data */;
};
