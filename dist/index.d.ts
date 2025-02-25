import { AxiosRequestConfig } from 'axios';

declare class GhlClient {
    private readonly baseUrl;
    private axiosInstance;
    constructor(accessToken?: string);
    private handleError;
    protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    protected post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    protected put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    protected patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    protected delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

type BlogsSearchParams = {
    locationId: string;
    limit: string;
    offset: string;
};
type CheckSlugDto = {
    locationId: string;
    urlSlug: string;
    postId?: string;
};
type CheckSlugResponse = {
    exists: boolean;
};
type UpdatePostDto = {
    title: string;
    locationId: string;
    status: string;
    blogId?: string;
    imageUrl?: string;
    description?: string;
    rawHTML?: string;
    wordCount?: number;
    readTimeInMinutes?: number;
    imageAltText?: string;
    categories?: string[];
    tags?: string[];
    author?: string;
    urlSlug?: string;
    canonicalLink?: string;
    publishedAt?: string;
};
type UpdatePostResponse = {
    updatedBlogPost: UpdatePostDto;
};
type CreatePostDto = {
    title: string;
    locationId: string;
    blogId: string;
    imageUrl: string;
    description: string;
    rawHTML: string;
    status: string;
    wordCount: number;
    readTimeInMinutes: number;
    imageAltText: string;
    categories: string[];
    tags: string[];
    author: string;
    urlSlug: string;
    canonicalLink: string;
    publishedAt: string;
    archived?: boolean;
    currentVersion?: string;
    metaData?: object;
};
type BlogsAuthorSocialsSchema = {
    type: string;
    url: string;
};
type CreatePostResponse = {
    data: CreatePostDto;
};
type BlogsAuthorsSchema = {
    socials?: BlogsAuthorSocialsSchema[];
    _id?: string;
    name?: string;
    imageUrl?: string;
    imageAltText?: string;
    description?: string;
    locationId?: string;
    updatedAt?: string;
};
type ListAuthorsResponse = {
    authors: BlogsAuthorsSchema[];
    count: number;
    traceId: string;
};
type BlogsCategorySchema = {
    _id: string;
    label?: string;
    urlSlug?: string;
    description?: string;
    imageUrl?: string;
    imageAltText?: string;
    locationId?: string;
    updatedAt?: string;
};
type ListCategoriesResponse = {
    categories: BlogsCategorySchema[];
    count: number;
    traceId: string;
};

declare class BlogsClient extends GhlClient {
    constructor(accessToken: string);
    findAuthors(params: BlogsSearchParams): Promise<ListAuthorsResponse>;
    findCategories(params: BlogsSearchParams): Promise<ListCategoriesResponse>;
    checkSlug(dto: CheckSlugDto): Promise<CheckSlugResponse>;
    create(dto: CreatePostDto): Promise<CreatePostResponse>;
    update(id: string, dto: UpdatePostDto): Promise<UpdatePostResponse>;
}

type Business = {
    id: string;
    name: string;
    locationId: string;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    description?: string;
    updatedBy?: any;
    createdAt?: string;
    updatedAt?: string;
};
type CreateBusinessDto = {
    name: string;
    locationId: string;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    description?: string;
};
type UpdateBusinessDto = {
    name?: string;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country?: string;
    description?: string;
};
type CreateUpdateBusinessResponse = {
    success: boolean;
    business: Business;
};
type GetBusinessResponse = {
    business: Business;
};
type ListBusinessesResponse = {
    businesses: Business[];
};

declare class BusinessesClient extends GhlClient {
    constructor(accessToken: string);
    findByLocation(locationId: string): Promise<ListBusinessesResponse>;
    findById(id: string): Promise<GetBusinessResponse>;
    create(dto: CreateBusinessDto): Promise<CreateUpdateBusinessResponse>;
    update(id: string, dto: UpdateBusinessDto): Promise<CreateUpdateBusinessResponse>;
    remove(id: string): Promise<void>;
}

type SuccessDeleteResponse = {
    success?: boolean;
};
type SuccededDeleteResponse = {
    succeded?: boolean;
};
type IntervalType = 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'minutely' | 'secondly';
type DayOfMonth = -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28;
type DayOfWeek = 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su';
type NumOfWeek = -1 | 1 | 2 | 3 | 4;
type MonthOfYear = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec';
type CustomRRuleOptions = {
    intervalType: IntervalType;
    interval: number;
    startDate: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    dayOfMonth?: DayOfMonth;
    dayOfWeek?: DayOfWeek;
    numOfWeek?: NumOfWeek;
    monthOfYear?: MonthOfYear;
    count?: number;
    daysBefore?: number;
};
type ScheduleOptions = {
    executeAt: string;
    rrule: CustomRRuleOptions;
};
declare enum CountryCodes {
    Afghanistan = "AF",
    AlandIslands = "AX",
    Albania = "AL",
    Algeria = "DZ",
    AmericanSamoa = "AS",
    AndorrA = "AD",
    Angola = "AO",
    Anguilla = "AI",
    Antarctica = "AQ",
    AntiguaAndBarbuda = "AG",
    Argentina = "AR",
    Armenia = "AM",
    Aruba = "AW",
    Australia = "AU",
    Austria = "AT",
    Azerbaijan = "AZ",
    Bahamas = "BS",
    Bahrain = "BH",
    Bangladesh = "BD",
    Barbados = "BB",
    Belarus = "BY",
    Belgium = "BE",
    Belize = "BZ",
    Benin = "BJ",
    Bermuda = "BM",
    Bhutan = "BT",
    Bolivia = "BO",
    BosniaAndHerzegovina = "BA",
    Botswana = "BW",
    BouvetIsland = "BV",
    Brazil = "BR",
    BritishIndianOceanTerritory = "IO",
    BruneiDarussalam = "BN",
    Bulgaria = "BG",
    BurkinaFaso = "BF",
    Burundi = "BI",
    Cambodia = "KH",
    Cameroon = "CM",
    Canada = "CA",
    CapeVerde = "CV",
    CaymanIslands = "KY",
    CentralAfricanRepublic = "CF",
    Chad = "TD",
    Chile = "CL",
    China = "CN",
    ChristmasIsland = "CX",
    CocosKeelingIslands = "CC",
    Colombia = "CO",
    Comoros = "KM",
    Congo = "CG",
    CongoTheDemocraticRepublicOfThe = "CD",
    CookIslands = "CK",
    CostaRica = "CR",
    CoteDIvoire = "CI",
    Croatia = "HR",
    Cuba = "CU",
    Cyprus = "CY",
    CzechRepublic = "CZ",
    Denmark = "DK",
    Djibouti = "DJ",
    Dominica = "DM",
    DominicanRepublic = "DO",
    Ecuador = "EC",
    Egypt = "EG",
    ElSalvador = "SV",
    EquatorialGuinea = "GQ",
    Eritrea = "ER",
    Estonia = "EE",
    Ethiopia = "ET",
    FalklandIslandsMalvinas = "FK",
    FaroeIslands = "FO",
    Fiji = "FJ",
    Finland = "FI",
    France = "FR",
    FrenchGuiana = "GF",
    FrenchPolynesia = "PF",
    FrenchSouthernTerritories = "TF",
    Gabon = "GA",
    Gambia = "GM",
    Georgia = "GE",
    Germany = "DE",
    Ghana = "GH",
    Gibraltar = "GI",
    Greece = "GR",
    Greenland = "GL",
    Grenada = "GD",
    Guadeloupe = "GP",
    Guam = "GU",
    Guatemala = "GT",
    Guernsey = "GG",
    Guinea = "GN",
    GuineaBissau = "GW",
    Guyana = "GY",
    Haiti = "HT",
    HeardIslandAndMcdonaldIslands = "HM",
    HolySeeVaticanCityState = "VA",
    Honduras = "HN",
    HongKong = "HK",
    Hungary = "HU",
    Iceland = "IS",
    India = "IN",
    Indonesia = "ID",
    IranIslamicRepublicOf = "IR",
    Iraq = "IQ",
    Ireland = "IE",
    IsleOfMan = "IM",
    Isreal = "IL",
    Italy = "IT",
    Jamaica = "JM",
    Japan = "JP",
    Jersey = "JE",
    Jordan = "JO",
    Kazakhstan = "KZ",
    Kenya = "KE",
    Kiribati = "KI",
    KoreaDemocraticPeoplesRepublic = "KP",
    KoreaRepublicOf = "KR",
    Kosovo = "XK",
    Kuwait = "KW",
    Kyrgyzstan = "KG",
    LaoPeoplesDemocraticRepublic = "LA",
    Latvia = "LV",
    Lebanon = "LB",
    Lesotho = "LS",
    Liberia = "LR",
    LibyanArabJamahiriya = "LY",
    Liechtenstein = "LI",
    Lithuania = "LT",
    Luxembourg = "LU",
    Macao = "MO",
    MacedoniaTheFormerYugoslavRepublicOf = "MK",
    Madagascar = "MG",
    Malawi = "MW",
    Malaysia = "MY",
    Maldives = "MV",
    Mali = "ML",
    Malta = "MT",
    MarshallIslands = "MH",
    Martinique = "MQ",
    Mauritania = "MR",
    Mauritius = "MU",
    Mayotte = "YT",
    Mexico = "MX",
    MicronesiaFederatedStatesOf = "FM",
    MoldovaRepublicOf = "MD",
    Monaco = "MC",
    Mongolia = "MN",
    Montenegro = "ME",
    Montserrat = "MS",
    Morocco = "MA",
    Mozambique = "MZ",
    Myanmar = "MM",
    Namibia = "NA",
    Nauru = "NR",
    Nepal = "NP",
    Netherlands = "NL",
    NetherlandsAntilles = "AN",
    NewCaledonia = "NC",
    NewZealand = "NZ",
    Nicaragua = "NI",
    Niger = "NE",
    Nigeria = "NG",
    Niue = "NU",
    NorfolkIsland = "NF",
    NorthernMarianaIslands = "MP",
    Norway = "NO",
    Oman = "OM",
    Pakistan = "PK",
    Palau = "PW",
    PalestinianTerritoryOccupied = "PS",
    Panama = "PA",
    PapuaNewGuinea = "PG",
    Paraguay = "PY",
    Peru = "PE",
    Philippines = "PH",
    Pitcairn = "PN",
    Poland = "PL",
    Portugal = "PT",
    PuertoRico = "PR",
    Qatar = "QA",
    Reunion = "RE",
    Romania = "RO",
    RussianFederation = "RU",
    Rwanda = "RW",
    SaintHelena = "SH",
    SaintKittsAndNevis = "KN",
    SaintLucia = "LC",
    SaintMartin = "MF",
    SaintPierreAndMiquelon = "PM",
    SaintVincentAndTheGrenadines = "VC",
    Samoa = "WS",
    SanMarino = "SM",
    SaoTomeAndPrincipe = "ST",
    SaudiArabia = "SA",
    Senegal = "SN",
    Serbia = "RS",
    Seychelles = "SC",
    SierraLeone = "SL",
    Singapore = "SG",
    SintMaarten = "SX",
    Slovakia = "SK",
    Slovenia = "SI",
    SolomonIslands = "SB",
    Somalia = "SO",
    SouthAfrica = "ZA",
    SouthGeorgiaAndTheSouthSandwichIslands = "GS",
    Spain = "ES",
    SriLanka = "LK",
    Sudan = "SD",
    Suriname = "SR",
    SvalbardAndJanMayen = "SJ",
    Swaziland = "SZ",
    Sweden = "SE",
    Switzerland = "CH",
    SyrianArabRepublic = "SY",
    Taiwan = "TW",
    Tajikistan = "TJ",
    Tanzania = "TZ",
    Thailand = "TH",
    TimorLeste = "TL",
    Togo = "TG",
    Tokelau = "TK",
    Tonga = "TO",
    TrinidadAndTobago = "TT",
    Tunisia = "TN",
    Turkey = "TR",
    Turkmenistan = "TM",
    TurksAndCaicosIslands = "TC",
    Tuvalu = "TV",
    Uganda = "UG",
    UK = "GB",
    Ukraine = "UA",
    UnitedArabEmirates = "AE",
    UnitedStates = "US",
    UnitedStatesMinorOutlyingIslands = "UM",
    Uruguay = "UY",
    Uzbekistan = "UZ",
    Vanuatu = "VU",
    Venezuela = "VE",
    VietNam = "VN",
    VirginIslandsBritish = "VG",
    VirginIslandsUS = "VI",
    WallisAndFutuna = "WF",
    WesternSahara = "EH",
    Yemen = "YE",
    Zambia = "ZM",
    Zimbabwe = "ZW"
}
type FieldType = 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL' | 'PHONE' | 'MONETORY' | 'CHECKBOX' | 'SINGLE_OPTIONS' | 'MULTIPLE_OPTIONS' | 'DATE' | 'TEXTBOX_LIST' | 'FILE_UPLOAD' | 'RADIO';
type FileFormat = '.pdf' | '.docx' | '.doc' | '.jpg' | '.jpeg' | '.png' | '.gif' | '.csv' | '.xlsx' | '.xls' | 'all';

type CalendarSearchParams = {
    groupId?: string;
    showDrafted?: boolean;
    locationId: string;
};
type CalendarEventSearchParams = {
    locationId: string;
    startTime: string;
    endTime: string;
    calendarId?: string;
    groupId?: string;
    userId?: string;
};
type CalendarGroup = {
    locationId: string;
    name: string;
    description: string;
    slug: string;
    isActive?: boolean;
    id?: string;
};
type ListCalendarGroupsResponse = {
    groups: CalendarGroup[];
};
type ValidateCalendarGroupSlugDto = {
    locationId: string;
    slug: string;
};
type ValidateCalendarGroupSlugResponse = {
    available: boolean;
};
type CreateCalendarGroupDto = {
    locationId: string;
    name: string;
    description: string;
    slug: string;
    isActive?: boolean;
};
type CalendarGetFreeSlots = {
    startDate: string;
    endDate: string;
    userId?: string;
    userIds?: string[];
    timezone?: string;
    enableLookBusy?: string;
};
type CreateUpdateCalendarGroupResponse = {
    group: CalendarGroup;
};
type UpdateCalendarGroupStatusResponse = {
    success: boolean;
};
type CalendarGroupStatusUpdateParams = {
    isActive: boolean;
};
type UpdateCalendarGroupDto = {
    name: string;
    description: string;
    slug: string;
};
type CalendarEvent = {
    id: string;
    title: string;
    calendarId: string;
    locationId: string;
    contactId: string;
    groupId: string;
    appointmentStatus: string;
    assignedUserId: string;
    users: string[];
    startTime: string;
    endTime: string;
    dateAdded: string;
    dateUpdated: string;
    address?: string;
    notes?: string;
    assignedResources?: string[];
    isRecurring?: boolean;
    rrule?: string;
    masterEventId?: string;
};
type ListCalendarEventsResponse = {
    events: CalendarEvent[];
};
type CalendarSlotsSchema = {
    slots: string[];
};
type GetCalendarSlotsResponse = {
    __dates__: CalendarSlotsSchema;
};
type CalendarNotification = {
    shouldSendToContact: boolean;
    shouldSendToGuest: boolean;
    shouldSendToUser: boolean;
    shouldSendToSelectedUsers: boolean;
    type?: 'email';
};
type CalendarTeamMemberPriorityTypes = 0 | 0.5 | 1;
type CalendarMeetingLocationTypes = 'custom' | 'zoom' | 'gmeet' | 'phone' | 'address';
type CalendarTeamMember = {
    userId: string;
    priority?: CalendarTeamMemberPriorityTypes;
    meetingLocationType?: CalendarMeetingLocationTypes;
    meeitngLocation?: string;
    isPrimary?: boolean;
};
type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
type Minute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
type CalendarDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type CalendarHour = {
    openHour: Hour;
    openMinute: Minute;
    closeHour: Hour;
    closeMinute: Minute;
};
type CalendarOpenHour = {
    daysOfTheWeek: CalendarDay[];
    hours: CalendarHour[];
};
type CalendarRecurringCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
type CalendarRecurring = {
    freq?: 'DAILY' | 'WEEKLY' | 'MONTHLY';
    count?: CalendarRecurringCount;
    bookingOption?: 'skip' | 'continue' | 'book_next';
    bookingOverlapDefaultStatus?: 'confirmed' | 'new';
};
type CalendarAvailability = {
    date: string;
    hours: CalendarHour;
    deleted?: boolean;
};
type CalendarLookBusyConfiguration = {
    enabled: boolean;
    LookBusyPercentage: number;
};
type CalendarEventType = 'RoundRobin_OptimizeForAvailability' | 'RoundRobin_OptimizeForEqualDistribution';
type CalendarUserAssignedType = 'round_robin' | 'collective' | 'class' | 'service' | 'personal';
type CalendarNonUserAssignedType = 'event';
type CalendarWidgetType = 'default' | 'classic';
type CalendarBaseDto = {
    id: string;
    name: string;
    locationId: string;
    notifications?: CalendarNotification[];
    isActive?: boolean;
    groupId?: string;
    eventType?: CalendarEventType;
    description?: string;
    slug?: string;
    widgetSlug?: string;
    widgetType?: CalendarWidgetType;
    eventTitle?: string;
    eventColor?: string;
    slotDuration?: number;
    slotDurationUnit?: 'mins' | 'hours';
    slotInterval?: number;
    slotIntervalUnit?: 'mins' | 'hours';
    slotBuffer?: number;
    slotBufferUnit?: 'mins' | 'hours';
    preBuffer?: number;
    preBufferUnit?: 'mins' | 'hours';
    appoinmentPerSlot?: number;
    appoinmentPerDay?: number;
    allowBookingAfter?: number;
    allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months';
    allowBookingFor?: number;
    allowBookingForUnit?: 'days' | 'weeks' | 'months';
    openHours?: CalendarOpenHour[];
    enableRecurring?: boolean;
    recurring?: CalendarRecurring;
    formId?: string;
    stickyContact?: boolean;
    isLivePaymentMode?: boolean;
    autoConfirm?: boolean;
    shouldSendAlertEmailsToAssignedMember?: boolean;
    alertEmail?: string;
    googleInvitationEmails?: boolean;
    allowReschedule?: boolean;
    allowCancellation?: boolean;
    shouldAssignContactToTeamMember?: boolean;
    shouldSkipAssigningContactForExisting?: boolean;
    notes?: string;
    pixelId?: string;
    formSubmitType?: 'RedirectURL' | 'ThankYouMessage';
    formSubmitRedirectURL?: string;
    formSubmitThanksMessage?: string;
    availabilityType?: 0 | 1;
    availabilities?: CalendarAvailability[];
    guestType?: 'count_only' | 'collect_detail';
    consentLabel?: string;
    calendarCoverImage?: string;
    lookBusyConfig?: CalendarLookBusyConfiguration;
};
type CalendarUserAssignedDTO = CalendarBaseDto & {
    teamMembers: CalendarTeamMember[];
    calendarType: CalendarUserAssignedType;
};
type CalendarNonUserAssignedDTO = CalendarBaseDto & {
    calendarType: CalendarNonUserAssignedType;
    meetingLocation: string;
};
type Calendar = CalendarUserAssignedDTO | CalendarNonUserAssignedDTO;
type ListCalendarsResponse = {
    calendars: Calendar[];
};
type CalendarBaseCreateUpdateDto = {
    name: string;
    locationId: string;
    notifications?: CalendarNotification[];
    isActive?: boolean;
    groupId?: string;
    eventType?: CalendarEventType;
    description?: string;
    slug?: string;
    widgetSlug?: string;
    widgetType?: CalendarWidgetType;
    eventTitle?: string;
    eventColor?: string;
    slotDuration?: number;
    slotDurationUnit?: 'mins' | 'hours';
    slotInterval?: number;
    slotIntervalUnit?: 'mins' | 'hours';
    slotBuffer?: number;
    slotBufferUnit?: 'mins' | 'hours';
    preBuffer?: number;
    preBufferUnit?: 'mins' | 'hours';
    appoinmentPerSlot?: number;
    appoinmentPerDay?: number;
    allowBookingAfter?: number;
    allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months';
    allowBookingFor?: number;
    allowBookingForUnit?: 'days' | 'weeks' | 'months';
    openHours?: CalendarOpenHour[];
    enableRecurring?: boolean;
    recurring?: CalendarRecurring;
    formId?: string;
    stickyContact?: boolean;
    isLivePaymentMode?: boolean;
    autoConfirm?: boolean;
    shouldSendAlertEmailsToAssignedMember?: boolean;
    alertEmail?: string;
    googleInvitationEmails?: boolean;
    allowReschedule?: boolean;
    allowCancellation?: boolean;
    shouldAssignContactToTeamMember?: boolean;
    shouldSkipAssigningContactForExisting?: boolean;
    notes?: string;
    pixelId?: string;
    formSubmitType?: 'RedirectURL' | 'ThankYouMessage';
    formSubmitRedirectURL?: string;
    formSubmitThanksMessage?: string;
    availabilityType?: 0 | 1;
    availabilities?: CalendarAvailability[];
    guestType?: 'count_only' | 'collect_detail';
    consentLabel?: string;
    calendarCoverImage?: string;
    lookBusyConfig?: CalendarLookBusyConfiguration;
};
type CalendarCreateUserAssignedDto = CalendarBaseDto & {
    teamMembers: CalendarTeamMember[];
    calendarType: CalendarUserAssignedType;
};
type CalendarCreateNonUserAssignedDto = CalendarBaseDto & {
    calendarType: CalendarNonUserAssignedType;
    meetingLocation: string;
};
type CreateCalendarDto = CalendarCreateUserAssignedDto | CalendarCreateNonUserAssignedDto;
type UpdateCalendarDto = Partial<CalendarCreateUserAssignedDto> | Partial<CalendarCreateNonUserAssignedDto>;
type GetCalendarResponse = {
    calendar: Calendar;
};
type CalendarUpdateAvailabilityDTO = {
    date: string;
    hours: CalendarHour;
    deleted?: boolean;
    id?: string;
};
type GetCalendarEventResponse = {
    event: CalendarEvent;
};
type AppointmentCreateUpdateDto = {
    calendarId: string;
    locationId: string;
    contactId: string;
    startTime: string;
    endTime?: string;
    title?: string;
    meetingLocationType?: CalendarMeetingLocationTypes;
    appointmentStatus?: string;
    assignedUserId?: string;
    address?: string;
    ignoreDateRange?: boolean;
    toNotify?: boolean;
    rrule?: string;
};
type AppointmentCreateUpdateResponse = {
    id: string;
    calendarId: string;
    locationId: string;
    contactId: string;
    startTime?: string;
    endTime?: string;
    title?: string;
    appointmentStatus?: string;
    assignedUserId?: string;
    address?: string;
    isRecurring?: boolean;
    rrule?: string;
};
type CalendarAppointmentEditSchemaDTO = {
    calendarId: string;
    startTime: string;
    endTime: string;
    title: string;
    meetingLocationType: string;
    appointmentStatus: string;
    address: string;
    ignoreDateRange: boolean;
    toNotify: boolean;
};
type CreateBlockSlotDto = {
    locationId: string;
    startTime: string;
    endTime: string;
    calendarId?: string;
    title?: string;
    assignedUserId?: string;
};
type BlockSlotCreateUpdateResponse = {
    id: string;
    locationId: string;
    title: string;
    startTime: string;
    endTime: string;
    calendarId?: string;
    assignedUserId?: string;
};
type UpdateBlockSlotDto = {
    calendarId?: string;
    startTime?: string;
    endTime?: string;
    title?: string;
    assignedUserId?: string;
};
type AppointmentNote = {
    id?: string;
    body?: string;
    userId?: string;
    dateAdded?: string;
    contactId?: string;
    createdBy?: {
        name?: string;
        profilePhoto?: string;
    };
};
type ListAppointmentNotesResponse = {
    notes?: AppointmentNote[];
    hasMore?: boolean;
};
type AppointmentNoteDto = {
    body: string;
    userId?: string;
};
type AppointmentNoteResponse = {
    note: AppointmentNote;
};
type CalendarResourceType = 'equipments' | 'rooms';
type CalendarResourceSearchParams = {
    locationId: string;
    limit: number;
    skip: number;
};
type CalendarResourceResponse = {
    locationId: string;
    name: string;
    isActive: boolean;
    resourceType: CalendarResourceType;
    calendarIds: string[];
    description?: string;
    quantity?: number;
    outOfService?: number;
    capacity?: number;
};
type CreateCalendarResourceDto = {
    locationId: string;
    name: string;
    description: string;
    quantity: number;
    outOfService: number;
    capacity: number;
    calendarIds: string[];
};
type UpdateCalendarResourceDto = {
    locationId: string;
    name: string;
    description: string;
    quantity: number;
    outOfService: number;
    capacity: number;
    calendarIds: string[];
    isActive: boolean;
};

declare class CalendarsClient extends GhlClient {
    constructor(accessToken: string);
    find(params: CalendarSearchParams): Promise<ListCalendarsResponse>;
    findById(id: string): Promise<GetCalendarResponse>;
    create(dto: CreateCalendarDto): Promise<GetCalendarResponse>;
    update(id: string, dto: UpdateCalendarDto): Promise<GetCalendarResponse>;
    remove(id: string): Promise<void>;
    findFreeSlots(calendarId: string): Promise<GetCalendarSlotsResponse>;
    findGroups(calendarId: string): Promise<ListCalendarGroupsResponse>;
    createGroup(dto: CreateCalendarGroupDto): Promise<CreateUpdateCalendarGroupResponse>;
    validateGroupSlug(dto: ValidateCalendarGroupSlugDto): Promise<ValidateCalendarGroupSlugResponse>;
    removeGroup(groupId: string): Promise<SuccessDeleteResponse>;
    updateGroup(groupId: string, dto: UpdateCalendarGroupDto): Promise<CreateUpdateCalendarGroupResponse>;
    updateGroupStatus(groupId: string, isActive: boolean): Promise<UpdateCalendarGroupStatusResponse>;
    findEvents(params: CalendarEventSearchParams): Promise<ListCalendarEventsResponse>;
    findBlockedSlots(params: CalendarEventSearchParams): Promise<ListCalendarEventsResponse>;
    findAppointmentById(eventId: string): Promise<GetCalendarEventResponse>;
    updateAppointment(eventId: string, dto: AppointmentCreateUpdateDto): Promise<AppointmentCreateUpdateResponse>;
    createAppointment(dto: AppointmentCreateUpdateDto): Promise<AppointmentCreateUpdateResponse>;
    createBlockSlot(dto: CreateBlockSlotDto): Promise<BlockSlotCreateUpdateResponse>;
    updateBlockSlot(eventId: string, dto: UpdateBlockSlotDto): Promise<BlockSlotCreateUpdateResponse>;
    removeEvent(eventId: string): Promise<SuccededDeleteResponse>;
    findAppointmentNotes(appointmentId: string): Promise<ListAppointmentNotesResponse>;
    createAppointmentNote(appointmentId: string, dto: AppointmentNoteDto): Promise<AppointmentNoteResponse>;
    updateAppointmentNote(appointmentId: string, noteId: string, dto: AppointmentNoteDto): Promise<AppointmentNoteResponse>;
    removeAppointmentNote(appointmentId: string, noteId: string): Promise<SuccessDeleteResponse>;
    findResourceById(resourceId: string, resourceType: CalendarResourceType): Promise<CalendarResourceResponse>;
    updateResource(resourceId: string, resourceType: CalendarResourceType, dto: UpdateCalendarResourceDto): Promise<CalendarResourceResponse>;
    deleteResource(resourceId: string, resourceType: CalendarResourceType): Promise<SuccessDeleteResponse>;
    findResourcesByType(resourceType: CalendarResourceType, params: CalendarResourceSearchParams): Promise<CalendarResourceResponse[]>;
    createCalendarResource(resourceType: CalendarResourceType, dto: CreateCalendarResourceDto): Promise<CalendarResourceResponse>;
}

type CampaignSearchParams = {
    status: string;
    locationId: string;
};
type Campaign = {
    id: string;
    name: string;
    status: string;
    locationId: string;
};
type CampaignsResponse = {
    campaigns: Campaign[];
};

declare class CampaignsClient extends GhlClient {
    constructor(accessToken: string);
    find(params: CampaignSearchParams): Promise<CampaignsResponse>;
}

type CompaniesIOnboarding = {
    pending: boolean;
    haveWebsite?: boolean;
    websiteUrl?: string;
    industryServed?: string;
    customerCount?: string;
    tools?: string[];
    conversationDemo?: boolean;
    location?: boolean;
    locationId?: string;
};
type CompaniesEndTrial = {
    trial_end_req_by: string;
    trial_ended_on: string;
};
declare enum CompaniesAgencyProAddonActivePlansEnum {
    ReviewsMonthly150 = "reviews_monthly_150",
    ListingMonthly50 = "listing_monthly_50",
    ConversationsMonthly100 = "conversations_monthly_100",
    PrioritySupportMonthly300 = "priority-support_monthly_300",
    PrioritySupportAnnual300 = "priority-support_annual_300",
    PrioritySupportMonthly300Legacy = "priority-support_monthly_300_legacy",
    PrioritySupportAnnual300Legacy = "priority-support_annual_300_legacy",
    PrioritySupportMonthly240July = "priority-support_monthly_240_july",
    HipaaMonthly297 = "hipaa_monthly_297",
    HipaaAnnual297 = "hipaa_annual_297",
    HipaaMonthly297Legacy = "hipaa_monthly_297_legacy",
    AgencyProPlusMonthly399 = "agency-pro-plus_monthly_399",
    AgencyProPlusAnnual399 = "agency-pro-plus_annual_399"
}
type CompaniesAgencyProAddOn = {
    is_active: boolean;
    agency_pro_addon_subscription_id: string;
    agency_pro_addon_active_plan: CompaniesAgencyProAddonActivePlansEnum;
};
type CompaniesReactivationAttempt = {
    attempted_on: string;
    attempted_by: string;
    invoice_id: string;
};
type CompaniesDowngrade = {
    attempted_on: string;
    attempted_by: string;
    previous_plan: string;
    current_plan: string;
    reason: string;
};
declare enum CompanySubscriptionStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected"
}
type CompaniesPauseSubscriptionInfo = {
    requested_on: string;
    req_by: string;
    reason: string;
    status: CompanySubscriptionStatusEnum;
    processed_on: string;
};
type CompaniesBillingInfo = {
    first_trial_extension_processed_on?: string;
    first_trial_extension_reason?: string;
    second_trial_extension_processed_on?: string;
    second_trial_extension_reason?: string;
    pause_subscription_requested_on?: string;
    pause_subscription_reason?: string;
    pause_subscription_status?: CompanySubscriptionStatusEnum;
    pause_subscription_req_processed_on: string;
    pause_subscription_req_by: string;
    end_trial_early?: CompaniesEndTrial;
    agency_pro_addon?: CompaniesAgencyProAddOn;
    coupons_added?: string[];
    reactivation_attempt?: CompaniesReactivationAttempt;
    downgrade?: CompaniesDowngrade;
    first_payment_date?: string;
    pause_subscription_info?: CompaniesPauseSubscriptionInfo;
};
type Company = {
    id?: string;
    name?: string;
    email?: string;
    logoUrl?: string;
    phone?: string;
    website?: string;
    domain?: string;
    spareDomain?: string;
    privacyPolicy?: string;
    termsConditions?: string;
    theme?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    country?: string;
    state?: string;
    timezone?: string;
    relationshipNumber?: string;
    faviconUrl?: string;
    subdomain?: string;
    plan?: number;
    currency?: string;
    customerType?: string;
    termsOfServiceVersion?: string;
    termsOfServiceAcceptedBy?: string;
    termsOfServiceAcceptedDate?: string;
    privacyPolicyVersion?: string;
    privacyPolicyAcceptedBy?: string;
    privacyPolicyAcceptedDate?: string;
    affiliatePolicyVersion?: string;
    affiliatePolicyAcceptedBy?: string;
    affiliatePolicyAcceptedDate?: string;
    twilioTrialMode?: boolean;
    twilioFreeCredits?: number;
    isReselling?: boolean;
    onboardingInfo?: CompaniesIOnboarding;
    stripeId?: string;
    upgradeEnabledForClients?: boolean;
    cancelEnabledForClients?: boolean;
    autoSuspendEnabled?: boolean;
    saasSettings?: object;
    stripeActivePlan?: string;
    stripeConnectId?: string;
    enableDepreciatedFeatures?: boolean;
    premiumUpgraded?: boolean;
    status?: string;
    locationCount?: number;
    disableEmailService?: boolean;
    billingInfo?: CompaniesBillingInfo;
};
type CompanyResponse = {
    company: Company;
};

declare class CompaniesClient extends GhlClient {
    constructor(accessToken: string);
    findById(id: string): Promise<CompanyResponse>;
}

declare enum OpportunityStatus {
    Open = "open",
    Won = "won",
    Lost = "lost",
    Abandoned = "abandoned"
}
type DuplicateContactSearchParams = {
    email?: string;
    number?: string;
    locationId: string;
};
type BusinessContactSearchParams = {
    limit?: string;
    query?: string;
    skip?: string;
    locationId: string;
};
type ContactLegacySearchParams = {
    limit?: number;
    query?: string;
    startAfter?: number;
    startAfterId?: string;
    locationId: string;
};
type ContactOpportunity = {
    id: string;
    pipeline_id: string;
    pipeline_stage_id: string;
    monetary_value: number;
    status: OpportunityStatus;
};
type ContactCustomField = {
    id: string;
    value: string;
};
type ChannelDNDSettings = {
    status: string;
    message: string;
    code: string;
};
type DNDSettings = {
    Call: ChannelDNDSettings;
    Email: ChannelDNDSettings;
    SMS: ChannelDNDSettings;
    WhatsApp: ChannelDNDSettings;
    GMB: ChannelDNDSettings;
    FB: ChannelDNDSettings;
};
type ContactTagsDto = {
    tags: string[];
};
type Contact = {
    id?: string;
    phoneLabel?: string;
    country?: string;
    address?: string;
    source?: string;
    type?: string;
    locationId?: string;
    dnd?: boolean;
    state?: string;
    businessName?: string;
    customFields?: ContactCustomField;
    tags?: string[];
    dateAdded?: string;
    additionalEmails?: string[];
    phone?: string;
    companyName?: string;
    additionalPhones?: string[];
    dateUpdated?: string;
    city?: string;
    dateOfBirth?: string;
    firstNameLowerCase?: string;
    lastNameLowerCase?: string;
    email?: string;
    assignedTo?: string;
    followers?: string[];
    validEmail?: boolean;
    dndSettings?: DNDSettings;
    opportunities?: ContactOpportunity;
    postalCode?: string;
    businessId?: string;
    searchAfter?: string[];
};
type ContactSearchResponse = {
    contacts: Contact[];
    total: number;
};
type ContactTask = {
    id?: string;
    title?: string;
    body?: string;
    assignedTo?: string;
    dueDate?: string;
    completed?: boolean;
    contactId?: string;
};
type ListContactTaskResponse = {
    tasks: ContactTask[];
};
type ContactTaskResponse = {
    task: ContactTask;
};
type CreateContactTaskDto = {
    title: string;
    body?: string;
    dueDate: string;
    completed: boolean;
    assignedTo?: string;
};
type UpdateContactTaskDto = Partial<CreateContactTaskDto>;
type ContactEvent = {
    id?: string;
    calendarId?: string;
    status?: string;
    title?: string;
    appoinmentStatus?: string;
    assignedUserId?: string;
    notes?: string;
    startTime?: string;
    endTime?: string;
    address?: string;
    locationId?: string;
    contactId?: string;
    groupId?: string;
    users?: string[];
    dateAdded?: string;
    dateUpdated?: string;
    assignedResources?: string[];
};
type ListContactEventsResponse = {
    events: ContactEvent[];
};
type ContactNote = {
    id?: string;
    body?: string;
    userId?: string;
    dateAdded?: string;
    contactId?: string;
};
type ListContactNotesResponse = {
    notes: ContactNote[];
};
type ContactNoteDto = {
    body: string;
    userId?: string;
};
type ContactNoteResponse = {
    note: ContactNote;
};
type ContactBusinessUpdateDto = {
    locationId: string;
    ids: string[];
    businessId: string;
};
type ContactBulkUpateResponse = {
    success: boolean;
    ids: string[];
};
declare enum ContactDndStatus {
    Active = "active",
    Inactive = "inactive",
    Permanent = "permanent"
}
type ContactDndSetting = {
    status: ContactDndStatus;
    message?: string;
    code?: string;
};
type ContactDndSettings = {
    Call: ContactDndSetting;
    Email: ContactDndSetting;
    SMS: ContactDndSetting;
    WhatsApp: ContactDndSetting;
    GMB: ContactDndSetting;
    FB: ContactDndSetting;
};
type ContactAttributionSource = {
    url: string;
    campaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    referrer?: string;
    campaignId?: string;
    fbclid?: string;
    gclid?: string;
    msclikid?: string;
    dclid?: string;
    fbc?: string;
    fbp?: string;
    fbEventId?: string;
    userAgent?: string;
    ip?: string;
    medium?: string;
    mediumId?: string;
};
type ContactResponse = {
    contact: Contact;
};
type ContactCustomFieldsInputArray = {
    id: string;
    key?: string;
    field_value?: string[];
};
type ContactCustomFieldsInputObject = {
    id: string;
    key?: string;
    field_value?: object;
};
type ContactCustomFieldsInputString = {
    id: string;
    key?: string;
    field_value?: string;
};
type ContactInboundDndSetting = {
    status: string;
    message: string;
};
type ContactInboundDndSettings = {
    all: ContactInboundDndSetting;
};
type CreateContactDto = ContactCreateSuccessfulResponseSchema & {
    locationId: string;
};
type ContactCreateSuccessfulResponseSchema = {
    id?: string;
    dateAdded?: string;
    dateUpdated?: string;
    deleted?: boolean;
    tags?: string[][];
    type?: string;
    customFields?: ContactCustomField[];
    locationId?: string;
    firstName?: string;
    firstNameLowerCase?: string;
    lastName?: string;
    lastNameLowerCase?: string;
    fullNameLowerCase?: string;
    email?: string;
    emailLowerCase?: string;
    bounceEmail?: boolean;
    unsubscribeEmail?: boolean;
    dnd?: boolean;
    dndSettings?: DNDSettings;
    phone?: string;
    address1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    source?: string;
    companyName?: string;
    dateOfBirth?: string;
    birthMonth?: number;
    birthDay?: number;
    lastSessionActivityAt?: string;
    offers?: string[];
    products?: string[];
    businessId?: string;
    assignedTo?: string;
};
type UpdateContactDto = {
    firstName?: string;
    lastName?: string;
    name?: string;
    email?: string;
    phone?: string;
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    website?: string;
    timezone?: string;
    dnd?: boolean;
    dndSettings?: DNDSettings;
    inboundDndSettings?: ContactInboundDndSettings;
    tags?: string[];
    customFields?: Array<ContactCustomFieldsInputString | ContactCustomFieldsInputArray | ContactCustomFieldsInputObject>;
    source?: string;
    country?: string;
    assignedTo?: string;
};
type ContactUpdateSuccessfulResponseSchema = {
    id?: string;
    locationId?: string;
    name?: string;
    fullNameLowerCase?: string;
    firstName?: string;
    firstNameLowerCase?: string;
    lastName?: string;
    lastNameLowerCase?: string;
    email?: string;
    emailLowerCase?: string;
    timezone?: string;
    companyName?: string;
    phone?: string;
    dnd?: boolean;
    dndSettings?: DNDSettings;
    type?: string;
    source?: string;
    assignedTo?: string;
    address1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    tags?: string[][];
    dateOfBirth?: string;
    dateAdded?: string;
    dateUpdated?: string;
    attachments?: string;
    ssn?: string;
    keyword?: string;
    lastActivity?: string;
    customFields?: ContactCustomField[];
    businessId?: string;
    createdBy?: ContactAttributionSource;
    lastUpdatedBy?: ContactAttributionSource;
};
type UpdateContactResponse = {
    succeded?: boolean;
    contact: ContactUpdateSuccessfulResponseSchema;
};
type UpsertContactResponse = {
    new: boolean;
    contact: ContactUpdateSuccessfulResponseSchema;
    traceId: string;
};
type ContactSearchResult = {
    id?: string;
    locationId?: string;
    email?: string;
    timezone?: string;
    country?: string;
    source?: string;
    dateAdded?: string;
    customFields?: ContactCustomField[];
    tags?: string[][];
    businessId?: string;
    attributions?: ContactAttributionSource[];
    followers?: string[];
};
type ContactsMetaSchema = {
    total?: number;
    nextPageUrl?: string;
    startAfterId?: string;
    startAfter?: number;
    currentPage?: number;
    nextPage?: number;
    prevPage?: number | null;
};
type FindContactsResponse = {
    contacts: ContactSearchResult[];
    count: number;
};
type ContactAddFollowersResponse = {
    followers: string[];
    followersAdded: string[];
};
type ContactRemoveFollowersResponse = {
    followers: string[];
    followersRemoved: string[];
};
type ContactActionResponse = {
    succeded?: boolean;
};
declare enum SearchFilterOpporators {
    eq = "eq",
    not_eq = "not_eq",
    contains = "contains",
    not_contains = "not_contains",
    exists = "exists",
    not_exists = "not_exists",
    range = "range"
}
type SearchConfigDates = {
    gt?: string;
    lt?: string;
    gte?: string;
    lte?: string;
};
type SearchContactId = {
    field: 'id';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchAddressValue = {
    field: 'address';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchAddressExists = {
    field: 'address';
    operator: 'exists' | 'not_exists';
};
type SearchAddress = SearchAddressValue | SearchAddressExists;
type SearchAssignedToValue = {
    field: 'assignedTo';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchAssignedToExists = {
    field: 'assignedTo';
    operator: 'exists' | 'not_exists';
};
type SearchAssignedTo = SearchAssignedToValue | SearchAssignedToExists;
type SearchBusinessNameValue = {
    field: 'businessName';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchBusinessNameExists = {
    field: 'businessName';
    operator: 'exists' | 'not_exists';
};
type SearchBusinessName = SearchBusinessNameValue | SearchBusinessNameExists;
type SearchCityValue = {
    field: 'city';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchCityExists = {
    field: 'city';
    operator: 'exists' | 'not_exists';
};
type SearchCity = SearchCityValue | SearchCityExists;
type SearchCountryValue = {
    field: 'country';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchCountryExists = {
    field: 'country';
    operator: 'exists' | 'not_exists';
};
type SearchCountry = SearchCountryValue | SearchCountryExists;
type SearchCompanyNameValue = {
    field: 'companyName';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchCompanyNameExists = {
    field: 'companyName';
    operator: 'exists' | 'not_exists';
};
type SearchCompanyName = SearchCompanyNameValue | SearchCompanyNameExists;
type SearchDateAddedRange = {
    field: 'dateAdded';
    operator: 'range';
    value: SearchConfigDates;
};
type SearchDateAddedExists = {
    field: 'dateAdded';
    operator: 'exists' | 'not_exists';
};
type SearchDateAdded = SearchDateAddedRange | SearchDateAddedExists;
type SearchDateUpdatedRange = {
    field: 'dateUpdated';
    operator: 'range';
    value: SearchConfigDates;
};
type SearchDateUpdatedExists = {
    field: 'dateUpdated';
    operator: 'exists' | 'not_exists';
};
type SearchDateUpdated = SearchDateUpdatedRange | SearchDateUpdatedExists;
type SearchDNDValue = {
    field: 'dnd';
    operator: 'eq' | 'not_eq';
    value: boolean;
};
type SearchDNDExists = {
    field: 'dnd';
    operator: 'exists' | 'not_exists';
};
type SearchDND = SearchDNDValue | SearchDNDExists;
type SearchEmailValue = {
    field: 'email';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchEmailExists = {
    field: 'email';
    operator: 'exists' | 'not_exists';
};
type SearchEmail = SearchEmailValue | SearchEmailExists;
type SearchFollowersValue = {
    field: 'followers';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchFollowersExists = {
    field: 'followers';
    operator: 'exists' | 'not_exists';
};
type SearchFollowers = SearchFollowersValue | SearchFollowersExists;
type SearchFirstNameLowerValue = {
    field: 'firstNameLowerCase';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchFirstNameLowerExists = {
    field: 'firstNameLowerCase';
    operator: 'exists' | 'not_exists';
};
type SearchFirstNameLower = SearchFirstNameLowerValue | SearchFirstNameLowerExists;
type SearchLastNameLowerValue = {
    field: 'lastNameLowerCase';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchLastNameLowerExists = {
    field: 'lastNameLowerCase';
    operator: 'exists' | 'not_exists';
};
type SearchLastNameLower = SearchLastNameLowerValue | SearchLastNameLowerExists;
type SearchIsValidWhatsappValue = {
    field: 'isValidWhatsapp';
    operator: 'eq' | 'not_eq';
    value: boolean;
};
type SearchIsValidWhatsappExists = {
    field: 'isValidWhatsapp';
    operator: 'exists' | 'not_exists';
};
type SearchIsValidWhatsapp = SearchIsValidWhatsappValue | SearchIsValidWhatsappExists;
type SearchLastEmailClickedDateRange = {
    field: 'lastEmailClickedDate';
    operator: 'range';
    value: SearchConfigDates;
};
type SearchLastEmailClickedDateExists = {
    field: 'lastEmailClickedDate';
    operator: 'exists' | 'not_exists';
};
type SearchLastEmailClickedDate = SearchLastEmailClickedDateRange | SearchLastEmailClickedDateExists;
type SearchLastEmailOpenedDateRange = {
    field: 'lastEmailOpenedDate';
    operator: 'range';
    value: SearchConfigDates;
};
type SearchLastEmailOpenedDateExists = {
    field: 'lastEmailOpenedDate';
    operator: 'exists' | 'not_exists';
};
type SearchLastEmailOpenedDate = SearchLastEmailOpenedDateRange | SearchLastEmailOpenedDateExists;
type SearchPhoneValue = {
    field: 'phone';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchPhoneExists = {
    field: 'phone';
    operator: 'exists' | 'not_exists';
};
type SearchPhone = SearchPhoneValue | SearchPhoneExists;
type SearchPostalCodeValue = {
    field: 'postalCode';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchPostalCodeExists = {
    field: 'postalCode';
    operator: 'exists' | 'not_exists';
};
type SearchPostalCode = SearchPostalCodeValue | SearchPostalCodeExists;
type SearchSourceValue = {
    field: 'source';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchSourceExists = {
    field: 'source';
    operator: 'exists' | 'not_exists';
};
type SearchSource = SearchSourceValue | SearchSourceExists;
type SearchStateValue = {
    field: 'state';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchStateExists = {
    field: 'state';
    operator: 'exists' | 'not_exists';
};
type SearchState = SearchStateValue | SearchStateExists;
type SearchTagsValue = {
    field: 'tags';
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string[];
};
type SearchTagsExists = {
    field: 'tags';
    operator: 'exists' | 'not_exists';
};
type SearchTags = SearchTagsValue | SearchTagsExists;
type SearchTimezoneValue = {
    field: 'timezone';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchTimezoneExists = {
    field: 'timezone';
    operator: 'exists' | 'not_exists';
};
type SearchTimezone = SearchTimezoneValue | SearchTimezoneExists;
type SearchContactTypeValue = {
    field: 'type';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchContactTypeExists = {
    field: 'type';
    operator: 'exists' | 'not_exists';
};
type SearchContactType = SearchContactTypeValue | SearchContactTypeExists;
type SearchValidEmailValue = {
    field: 'validEmail';
    operator: 'eq' | 'not_eq';
    value: boolean;
};
type SearchValidEmailExists = {
    field: 'validEmail';
    operator: 'exists' | 'not_exists';
};
type SearchValidEmail = SearchValidEmailValue | SearchValidEmailExists;
type SearchWebsiteValue = {
    field: 'website';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchWebsiteExists = {
    field: 'website';
    operator: 'exists' | 'not_exists';
};
type SearchWebsite = SearchWebsiteValue | SearchWebsiteExists;
type SearchLastAppointmentRange = {
    field: 'lastAppointment';
    operator: 'range';
    value: SearchConfigDates;
};
type SearchLastAppointmentExists = {
    field: 'lastAppointment';
    operator: 'exists' | 'not_exists';
};
type SearchLastAppointment = SearchLastAppointmentRange | SearchLastAppointmentExists;
type SearchActiveWorkflowsValue = {
    field: 'activeWorkflows';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchActiveWorkflowsExists = {
    field: 'activeWorkflows';
    operator: 'exists' | 'not_exists';
};
type SearchActiveWorkflows = SearchActiveWorkflowsValue | SearchActiveWorkflowsExists;
type SearchFinishedWorkflowsValue = {
    field: 'finishedWorkflows';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchFinishedWorkflowsExists = {
    field: 'finishedWorkflows';
    operator: 'exists' | 'not_exists';
};
type SearchFinishedWorkflows = SearchFinishedWorkflowsValue | SearchFinishedWorkflowsExists;
type SearchPipelineIdValue = {
    field: 'pipelineId';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchPipelineIdExists = {
    field: 'pipelineId';
    operator: 'exists' | 'not_exists';
};
type SearchPipelineId = SearchPipelineIdValue | SearchPipelineIdExists;
type SearchPipelineStageIdValue = {
    field: 'pipelineStageId';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchPipelineStageIdExists = {
    field: 'pipelineStageId';
    operator: 'exists' | 'not_exists';
};
type SearchPipelineStageId = SearchPipelineStageIdValue | SearchPipelineStageIdExists;
type SearchOpportunityStatusValue = {
    field: 'status';
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchOpportunityStatusExists = {
    field: 'status';
    operator: 'exists' | 'not_exists';
};
type SearchOpportunityStatus = SearchOpportunityStatusValue | SearchOpportunityStatusExists;
type SearchOpportunity = {
    field: 'opportunity';
    operator: 'nested';
    value: Array<SearchOpportunityStatus | SearchPipelineId | SearchPipelineStageId>;
};
type SearchCustomFieldType1Value = {
    field: string;
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchCustomFieldType1Exists = {
    field: string;
    operator: 'exists' | 'not_exists';
};
type SearchCustomFieldType1 = SearchCustomFieldType1Value | SearchCustomFieldType1Exists;
type SearchCustomFieldType2Value = {
    field: string;
    operator: 'eq' | 'not_eq';
    value: string;
};
type SearchCustomFieldType2Exists = {
    field: string;
    operator: 'exists' | 'not_exists';
};
type SearchCustomFieldType2 = SearchCustomFieldType2Value | SearchCustomFieldType2Exists;
type SearchCustomFieldType3Value = {
    field: string;
    operator: 'eq' | 'not_eq';
    value: number;
};
type SearchCustomFieldType3Exists = {
    field: string;
    operator: 'exists' | 'not_exists';
};
type SearchCustomFieldType3Range = {
    field: string;
    operator: 'range';
    value: SearchConfigDates;
};
type SearchCustomFieldType3 = SearchCustomFieldType3Value | SearchCustomFieldType3Exists | SearchCustomFieldType3Range;
type SearchCustomFieldType4Range = {
    field: string;
    operator: 'range';
    value: SearchConfigDates;
};
type SearchCustomFieldType4Exists = {
    field: string;
    operator: 'exists' | 'not_exists';
};
type SearchCustomFieldType4 = SearchCustomFieldType4Range | SearchCustomFieldType4Exists;
type SearchCustomFieldType5Value = {
    field: string;
    operator: 'eq' | 'not_eq' | 'contains' | 'not_contains';
    value: string;
};
type SearchCustomFieldType5Exists = {
    field: string;
    operator: 'exists' | 'not_exists';
};
type SearchCustomFieldType5 = SearchCustomFieldType5Value | SearchCustomFieldType5Exists;
type SearchCustomField = SearchCustomFieldType1 | SearchCustomFieldType2 | SearchCustomFieldType3 | SearchCustomFieldType4 | SearchCustomFieldType5;
type SearchFilterConfig = SearchContactId | SearchAddress | SearchAssignedTo | SearchBusinessName | SearchCity | SearchCountry | SearchCompanyName | SearchDateAdded | SearchDateUpdated | SearchDND | SearchEmail | SearchFollowers | SearchFirstNameLower | SearchLastNameLower | SearchIsValidWhatsapp | SearchLastEmailClickedDate | SearchLastEmailOpenedDate | SearchPhone | SearchPostalCode | SearchSource | SearchState | SearchTags | SearchTimezone | SearchContactType | SearchValidEmail | SearchWebsite | SearchLastAppointment | SearchActiveWorkflows | SearchFinishedWorkflows | SearchOpportunity | SearchCustomField;
type SearchFilter = {
    group?: 'AND' | 'OR';
    filters: SearchFilterConfig[];
};
type SearchSort = {
    field: string;
    direction: 'asc' | 'desc';
};
type ContactSearchOptions = {
    locationId: string;
    page: number;
    pageLimit: number;
    searchAfter?: Array<string | number>;
    filters?: Array<SearchFilter | SearchFilterConfig>;
    sort?: SearchSort[];
};
type ContactsDuplicateSearchResponse = {
    contact: ContactUpdateSuccessfulResponseSchema;
    matchingField: 'number' | 'email';
    traceId: string;
};

declare class ContactsClient extends GhlClient {
    constructor(accessToken: string);
    findById(id: string): Promise<ContactResponse>;
    update(id: string, dto: UpdateContactDto): Promise<UpdateContactResponse>;
    remove(id: string): Promise<SuccededDeleteResponse>;
    upsert(dto: CreateContactDto): Promise<UpsertContactResponse>;
    findByBusiness(businessId: string, params: BusinessContactSearchParams): Promise<FindContactsResponse>;
    create(dto: CreateContactDto): Promise<ContactResponse>;
    find(params: ContactLegacySearchParams): Promise<FindContactsResponse>;
    findTasks(contactId: string): Promise<ListContactTaskResponse>;
    createTask(contactId: string, dto: CreateContactTaskDto): Promise<ContactTaskResponse>;
    findTaskById(contactId: string, taskId: string): Promise<ContactTaskResponse>;
    updateTask(contactId: string, taskId: string, dto: UpdateContactTaskDto): Promise<ContactTaskResponse>;
    removeTask(contactId: string, taskId: string): Promise<SuccededDeleteResponse>;
    updateTaskStatus(contactId: string, taskId: string, completed: boolean): Promise<ContactTaskResponse>;
    findAppointments(contactId: string): Promise<ListContactEventsResponse>;
    addTags(contactId: string, dto: ContactTagsDto): Promise<ContactTagsDto>;
    removeTags(contactId: string, data: ContactTagsDto): Promise<ContactTagsDto>;
    findNotes(contactId: string): Promise<ListContactNotesResponse>;
    createNote(contactId: string, dto: ContactNoteDto): Promise<ContactNoteResponse>;
    findNoteById(contactId: string, noteId: string): Promise<ContactNoteResponse>;
    updateNote(contactId: string, noteId: string, dto: ContactNoteDto): Promise<ContactNoteResponse>;
    removeNote(contactId: string, noteId: string): Promise<SuccededDeleteResponse>;
    addToCampaign(contactId: string, campaignId: string): Promise<ContactActionResponse>;
    removeFromCampaign(contactId: string, campaignId: string): Promise<ContactActionResponse>;
    removeFromEveryCampaign(contactId: string): Promise<ContactActionResponse>;
    addToWorkflow(contactId: string, workflowId: string, startTime: string): Promise<ContactActionResponse>;
    removeFromWorkflow(contactId: string, workflowId: string): Promise<SuccededDeleteResponse>;
    addRemoveFromBusiness(dto: ContactBusinessUpdateDto): Promise<ContactBulkUpateResponse>;
    search(dto: ContactSearchOptions): Promise<ContactSearchResponse>;
    findDuplicates(params: DuplicateContactSearchParams): Promise<ContactsDuplicateSearchResponse>;
    addFollowers(contactId: string, followers: string[]): Promise<ContactAddFollowersResponse>;
    removeFollowers(contactId: string, followers: string[]): Promise<ContactRemoveFollowersResponse>;
}

type ConvStartAfterDate = {
    startAfterDate: number;
};
type ConvStartAfterArrayNumber = {
    startAfterDate: number[];
};
declare enum ConversationMessageTypeNumbered {
    TYPE_CALL = 0,
    TYPE_SMS = 1,
    TYPE_EMAIL = 2,
    TYPE_SMS_REVIEW_REQUEST = 3,
    TYPE_WEBCHAT = 4,
    TYPE_SMS_NO_SHOW_REQUEST = 5,
    TYPE_CAMPAIGN_SMS = 6,
    TYPE_CAMPAIGN_CALL = 7,
    TYPE_CAMPAIGN_EMAIL = 8,
    TYPE_CAMPAIGN_VOICEMAIL = 9,
    TYPE_FACEBOOK = 10,
    TYPE_CAMPAIGN_FACEBOOK = 11,
    TYPE_CAMPAIGN_MANUAL_CALL = 12,
    TYPE_CAMPAIGN_MANUAL_SMS = 13,
    TYPE_GMB = 14,
    TYPE_CAMPAIGN_GMB = 15,
    TYPE_REVIEW = 16,
    TYPE_INSTAGRAM = 17,
    TYPE_WHATSAPP = 18,
    TYPE_CUSTOM_SMS = 19,
    TYPE_CUSTOM_EMAIL = 20,
    TYPE_CUSTOM_PROVIDER_SMS = 21,
    TYPE_CUSTOM_PROVIDER_EMAIL = 22,
    TYPE_IVR_CALL = 23,
    TYPE_ACTIVITY_CONTACT = 24,
    TYPE_ACTIVITY_INVOICE = 25,
    TYPE_ACTIVITY_PAYMENT = 26,
    TYPE_ACTIVITY_OPPORTUNITY = 27,
    TYPE_LIVE_CHAT = 28,
    TYPE_LIVE_CHAT_INFO_MESSAGE = 29,
    TYPE_ACTIVITY_APPOINTMENT = 30,
    TYPE_FACEBOOK_COMMENT = 31,
    TYPE_INSTAGRAM_COMMENT = 32,
    TYPE_ACTIVITY = 33
}
type ConversationMessageTypeString = 'TYPE_CALL' | 'TYPE_SMS' | 'TYPE_EMAIL' | 'TYPE_SMS_REVIEW_REQUEST' | 'TYPE_WEBCHAT' | 'TYPE_SMS_NO_SHOW_REQUEST' | 'TYPE_CAMPAIGN_SMS' | 'TYPE_CAMPAIGN_CALL' | 'TYPE_CAMPAIGN_EMAIL' | 'TYPE_CAMPAIGN_VOICEMAIL' | 'TYPE_FACEBOOK' | 'TYPE_CAMPAIGN_FACEBOOK' | 'TYPE_CAMPAIGN_MANUAL_CALL' | 'TYPE_CAMPAIGN_MANUAL_SMS' | 'TYPE_GMB' | 'TYPE_CAMPAIGN_GMB' | 'TYPE_REVIEW' | 'TYPE_INSTAGRAM' | 'TYPE_WHATSAPP' | 'TYPE_CUSTOM_SMS' | 'TYPE_CUSTOM_EMAIL' | 'TYPE_CUSTOM_PROVIDER_SMS' | 'TYPE_CUSTOM_PROVIDER_EMAIL' | 'TYPE_IVR_CALL' | 'TYPE_ACTIVITY_CONTACT' | 'TYPE_ACTIVITY_INVOICE' | 'TYPE_ACTIVITY_PAYMENT' | 'TYPE_ACTIVITY_OPPORTUNITY' | 'TYPE_LIVE_CHAT' | 'TYPE_LIVE_CHAT_INFO_MESSAGE' | 'TYPE_ACTIVITY_APPOINTMENT' | 'TYPE_FACEBOOK_COMMENT' | 'TYPE_INSTAGRAM_COMMENT' | 'TYPE_ACTIVITY';
type ConversationMessageType = 'SMS' | 'Email' | 'WhatsApp' | 'GMB' | 'IG' | 'FB' | 'Custom' | 'Live_Chat';
type ConversationType = 'TYPE_PHONE' | 'TYPE_EMAIL' | 'TYPE_FB_MESSENGER' | 'TYPE_REVIEW';
type ConversationSchema = {
    id: string;
    contactId: string;
    locationId: string;
    lastMessageBody: string;
    lastMessageType: ConversationMessageTypeString;
    type: ConversationType;
    unreadCount: number;
    fullName: string;
    contactName: string;
    email: string;
    phone: string;
};
type ConversationSearchResponse = {
    conversations: ConversationSchema[];
    total: number;
};
type CreateConversationDto = {
    locationId: string;
    contactId: string;
};
type Conversation = {
    deleted: boolean;
    locationId: string;
    contactId: string;
    id?: string;
    assignedTo?: string;
    userId?: string;
    lastMessageBody?: string;
    lastMessageDate?: string;
    lastMessageType?: ConversationMessageTypeString;
    type?: ConversationType;
    unreadCount?: number;
    inbox?: boolean;
    starred?: boolean;
};
type ConversationActionResponse = {
    success: boolean;
    conversation: Conversation;
};
type ConversationResponse = {
    id: string;
    contactId: string;
    locationId: string;
    deleted: boolean;
    inbox: boolean;
    type: ConversationType;
    unreadCount: number;
    assignedTo: string;
    starred: boolean;
};
type UpdateConversationDto = {
    locationId: string;
    unreadCount?: number;
    starred?: boolean;
    feedback?: object;
};
type ConversationDirection = 'inbound' | 'outbound';
type ConversationStatus = 'pending' | 'scheduled' | 'sent' | 'delivered' | 'read' | 'undelivered' | 'connected' | 'failed' | 'opened';
type ConversationSource = 'workflow' | 'bulk_actions' | 'campaign' | 'api' | 'app';
type ConversationEmailResponse = {
    id: string;
    threadId: string;
    locationId: string;
    contactId: string;
    conversationId: string;
    dateAdded: string;
    body: string;
    direction: ConversationDirection;
    contentType: string;
    attachments: string[];
    from: string;
    to: string[];
    replyToMessageId?: string;
    source: ConversationSource;
    altId: string;
    subject?: string;
    status: ConversationStatus;
    provider: string;
    cc: string[];
    bcc?: string[];
};
type ConversationCancelScheduledResponse = {
    status: string;
    message: string;
};
type ConversationMessageResponse = {
    id: string;
    type: ConversationMessageTypeNumbered;
    messageType: ConversationMessageTypeString;
    locationId: string;
    contactId: string;
    conversationId: string;
    dateAdded: string;
    direction: ConversationDirection;
    contentType: string;
    body?: string;
    attachments?: string[];
    status?: ConversationStatus;
    meta?: object;
    source?: ConversationSource;
    userId?: string;
};
type ListConversationMessagesResponse = {
    lastMessageId: string;
    nextPage: boolean;
    messages: ConversationMessageResponse[];
};
type ConversationReplyMode = 'reply' | 'reply_all';
type ConversationMessageDto = {
    type: ConversationMessageType;
    contactId: string;
    appointmentId?: string;
    attachments?: string[];
    emailFrom?: string;
    emailCc?: string[];
    emailBcc?: string[];
    html?: string;
    message?: string;
    replyMessageId?: string;
    templateId?: string;
    scheduledTimestamp?: number;
    conversationProviderId?: string;
    emailTo?: string;
    emailReplyMode?: ConversationReplyMode;
    fromNumber?: string;
    toNumber?: string;
};
type SendConversationMessageResponse = {
    conversationId: string;
    messageId: string;
    emailMessageId?: string;
    messageIds?: string[];
    msg?: string;
};
type ConversationCallStatus = 'pending' | 'completed' | 'answered' | 'busy' | 'no-answer' | 'failed' | 'canceled' | 'voicemail';
type ConversationCallData = {
    to: string;
    from: string;
    status: ConversationCallStatus;
};
type ConversationInboundMessageDto = {
    conversationProviderId: string;
    conversationId: string;
    type: ConversationMessageType;
    attachments?: string[];
    message?: string;
    html?: string;
    subject?: string;
    emailFrom?: string;
    emailTo?: string;
    emailCc?: string[];
    emailBcc?: string[];
    emailMessageId?: string;
    altId?: string;
    direction?: ConversationDirection;
    date: string;
    call?: ConversationCallData;
};
type ConversationProcessMessageResponse = {
    success: boolean;
    conversationId: string;
    messageId: string;
    message: string;
    contactId?: string;
    dateAdded?: string;
    emailMessageId?: string;
};
type ConversationOutboundMessageDto = {
    type: 'Call';
    conversationId: string;
    conversationProviderId: string;
    attachments?: string[];
    altId?: string;
    date: string;
    call?: ConversationCallData;
};
type ConversationUploadFilesDto = {
    conversationId: string;
    locationId: 'string';
    attachmentUrls: string;
};
type ConversationUploadFilesResponse = {
    uploadedFiles: object;
};
type ConversationUploadFilesErrorResponseDto = {
    status: number;
    message: string;
};
type ConversationError = {
    code: number;
    type: string;
    message: string;
};
type ConversationUpdateMessageStatusOptions = 'read' | 'pending' | 'delivered' | 'failed';
type ConversationUpdateMessageStatusDto = {
    status: ConversationUpdateMessageStatusOptions;
    error?: ConversationError;
    emailMessageId?: string;
    recipients: string[];
};
type ConverstationMessageTranscriptionResponse = {
    mediaChannel: ConversationMessageTypeNumbered;
    sentenceIndex: number;
    startTime: number;
    endTime: number;
    transcript: string;
    confidence: number;
};
type ConversationSearchParams = {
    locationId: string;
    assignedTo?: string;
    contactId?: string;
    followers?: string;
    id?: string;
    lastMessageAction?: string;
    lastMessageDirection?: CanvasDirection;
    lastMessageType?: ConversationMessageTypeString;
    limit?: number;
    query?: string;
    scoreProfile?: string;
    scoreProfileMax?: number;
    scoreProfileMin?: number;
    sort?: 'asc' | 'desc';
    sortBy?: 'last_manual_message_date' | 'last_message_date' | 'score_profile';
    sortScoreProfile?: string;
    startAfterDate?: number;
    status?: 'all' | 'read' | 'unread' | 'starred' | 'recents';
};

declare class ConversationsClient extends GhlClient {
    constructor(accessToken: string);
    findById(id: string): Promise<ConversationResponse>;
    update(id: string, dto: UpdateConversationDto): Promise<ConversationActionResponse>;
    remove(id: string): Promise<SuccessDeleteResponse>;
    create(dto: CreateConversationDto): Promise<ConversationActionResponse>;
    search(params: ConversationSearchParams): Promise<ConversationSearchResponse>;
    findEmailById(emailId: string): Promise<ConversationEmailResponse>;
    cancelScheduledEmail(emailId: string): Promise<ConversationCancelScheduledResponse>;
    findMessageById(messageId: string): Promise<ConversationMessageResponse>;
    findMessagesByConversationId(conversationId: string, params: ConversationSearchParams): Promise<ListConversationMessagesResponse>;
    sendMessage(dto: ConversationMessageDto): Promise<SendConversationMessageResponse>;
    addInboundMessage(dto: ConversationInboundMessageDto): Promise<ConversationProcessMessageResponse>;
    addOutboundMessage(dto: ConversationOutboundMessageDto): Promise<ConversationProcessMessageResponse>;
    cancelScheduledMessage(messageId: string): Promise<ConversationCancelScheduledResponse>;
    uploadFileAttachments(dto: ConversationUploadFilesDto): Promise<ConversationUploadFilesResponse>;
    updateMessageStatus(messageId: string, dto: ConversationUpdateMessageStatusDto): Promise<SendConversationMessageResponse>;
    findMessageRecording(locationId: string, messageId: string): Promise<any>;
    findMessageTranscription(locationId: string, messageId: string): Promise<ConverstationMessageTranscriptionResponse>;
    downloadMessageTranscription(locationId: string, messageId: string): Promise<any>;
}

type CourseVisibility = 'published' | 'draft';
type CourseContentType = 'video' | 'quiz' | 'assignment';
type CourseFileType = 'pdf' | 'image' | 'docx' | 'pptx' | 'xlsx' | 'html' | 'dotx' | 'epub' | 'webp' | 'gdoc' | 'mp3' | 'doc' | 'txt' | 'zip' | 'ppt' | 'zip' | 'ppt' | 'key' | 'htm' | 'xls' | 'odp' | 'odt' | 'rtf' | 'm4a' | 'ods' | 'mp4' | 'ai' | 'avi' | 'mov' | 'wmv' | 'mkv' | 'wav' | 'flac' | 'ogg' | 'png' | 'jpeg' | 'jpg' | 'gif' | 'bmp' | 'tiff' | 'svg' | 'odg' | 'sxw' | 'sxc' | 'sxi' | 'rar' | '7z' | 'json' | 'xml' | 'csv' | 'md' | 'obj' | 'stl' | 'woff' | 'ttf';
type CoursePostMaterialInterface = {
    title: string;
    type: CourseFileType;
    url: string;
};
type CoursePostInterface = {
    title: string;
    visibility: CourseVisibility;
    thumbnailUrl?: string;
    contentType: CourseContentType;
    description: string;
    bucketVideoUrl: string;
    postMaterials: CoursePostMaterialInterface[];
};
type CourseSubCategoryInterface = {
    title: string;
    visibility: CourseVisibility;
    thumbnailUrl?: string;
    posts?: CoursePostInterface[];
};
type CourseCategoryInterface = {
    title: string;
    visibility: CourseVisibility;
    thumbnailUrl?: string;
    subCategories?: CourseSubCategoryInterface[];
    posts?: CoursePostInterface[];
};
type CourseInstructorDetails = {
    name: string;
    description: string;
};
type CourseProductInterface = {
    title: string;
    description: string;
    categories: CourseCategoryInterface[];
    imageUrl?: string;
    instructorDetails?: CourseInstructorDetails;
};
type CoursePublicExporterPayload = {
    locationId: string;
    userId?: string;
    products: CourseProductInterface[];
};

declare class CoursesClient extends GhlClient {
    constructor(accessToken: string);
    import(dto: CoursePublicExporterPayload): Promise<null>;
}

type CustomFieldOption = {
    key: string;
    label: string;
    url?: string;
};
type CustomField = {
    locationId: string;
    name?: string;
    description?: string;
    placeholder?: string;
    showInForms: boolean;
    options?: CustomFieldOption[];
    acceptedFormats?: FileFormat;
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
type CustomFieldResponse = {
    field: CustomField;
};
type UpdateCustomFieldDto = {
    locationId: string;
    name?: string;
    description?: string;
    placeholder?: string;
    showInForms: boolean;
    options?: CustomFieldOption[];
    acceptedFormats?: FileFormat;
    maxFileLimit?: number;
};
type RemoveCustomFieldResponse = {
    id: string;
    key: string;
    succeded: boolean;
};
type CustomFieldFolder = {
    id: string;
    objectKey: string;
    locationId: string;
    name: string;
};
type ListCustomFieldsResponse = {
    fields: CustomField[];
    folders: CustomFieldFolder[];
};
type CreateCustomFieldFolderDto = {
    objectKey: string;
    locationId: string;
    name: string;
};
type UpdateCustomFieldFolderDto = {
    locationId: string;
    name: string;
};
type CreateCustomFieldDto = {
    locationId: string;
    name?: string;
    description?: string;
    placeholder?: string;
    showInForms: boolean;
    options?: CustomFieldOption[];
    acceptedFormats?: FileFormat;
    dataType: FieldType;
    fieldKey: string;
    objectKey: string;
    maxFileLimit?: number;
    allowCustomOption?: boolean;
    parentId: string;
};

declare class CustomFieldsClient extends GhlClient {
    constructor(accessToken: string);
    findById(id: string): Promise<CustomFieldResponse>;
    update(id: string, dto: UpdateCustomFieldDto): Promise<CustomFieldResponse>;
    remove(id: string): Promise<RemoveCustomFieldResponse>;
    findByObjectKey(locationId: string, objectKey: string): Promise<ListCustomFieldsResponse>;
    createFolder(dto: CreateCustomFieldFolderDto): Promise<CustomFieldFolder>;
    updateFolder(folderId: string, dto: UpdateCustomFieldFolderDto): Promise<CustomFieldFolder>;
    removeFolder(locationId: string, folderId: string): Promise<RemoveCustomFieldResponse>;
    create(dto: CreateCustomFieldDto): Promise<CustomFieldResponse>;
}

type CustomMenuIcon = {
    name: string;
    fontFamily: 'fab' | 'fas' | 'far';
};
type CustomMenuOpenMode = 'iframe' | 'new_tab' | 'current_tab';
type CustomMenuUserRole = 'all' | 'admin' | 'user';
type CustomMenu = {
    id: string;
    icon: CustomMenuIcon;
    title: string;
    url: string;
    order: number;
    showOnCompany: boolean;
    showOnLocation: boolean;
    showToAllLocations: boolean;
    locations: string[];
    openMode: CustomMenuOpenMode;
    userRole: CustomMenuUserRole;
    allowCamera: boolean;
    allowMicrophone: boolean;
};
type CustomMenuResponse = {
    customMenu: CustomMenu;
};
type DeleteCustomMenuResponse = {
    success: boolean;
    message: string;
    deletedMenuId: string;
    deletedAt: string;
};
type UpdateCustomMenuDto = {
    title?: string;
    url?: string;
    icon?: CustomMenuIcon;
    showOnCompany?: boolean;
    showOnLocation?: boolean;
    showToAllLocations?: boolean;
    openMode?: CustomMenuOpenMode;
    locations?: string[];
    userRole?: CustomMenuUserRole;
    allowCamera?: boolean;
    allowMicrophone?: boolean;
};
type UpdateCustomMenuResponse = {
    customMenu: CustomMenu;
    success: boolean;
};
type CreateCustomMenuDto = {
    title: string;
    url: string;
    icon: CustomMenuIcon;
    showOnCompany: boolean;
    showOnLocation: boolean;
    showToAllLocations: boolean;
    openMode: CustomMenuOpenMode;
    locations: string[];
    userRole: CustomMenuUserRole;
    allowCamera?: boolean;
    allowMicrophone?: boolean;
};
type CustomMenuSearchParams = {
    locationId: string;
    limit?: number;
    query?: string;
    showOnCompany?: boolean;
    skip?: number;
};
type ListCustomMenusResponse = {
    customMenus: CustomMenu[];
    totalLinks: number;
};

declare class CustomMenusClient extends GhlClient {
    constructor(accessToken: string);
    findById(customMenuId: string): Promise<CustomMenuResponse>;
    remove(customMenuId: string): Promise<DeleteCustomMenuResponse>;
    update(customMenuId: string, dto: UpdateCustomMenuDto): Promise<UpdateCustomMenuResponse>;
    find(params: CustomMenuSearchParams): Promise<ListCustomMenusResponse>;
    create(dto: CreateCustomMenuDto): Promise<CustomMenuResponse>;
}

type EmailType = 'html' | 'builder' | 'folder';
type EmailBuilderVersion = 1 | 2;
type EmailImportProvider = 'mailchimp' | 'active_campaign' | 'kajabi';
type CreateEmailTemplateDto = {
    locationId: string;
    type: EmailType;
    title?: string;
    updatedBy?: string;
    builderVersion?: EmailBuilderVersion;
    name?: string;
    parentId?: string;
    templateDataUrl?: string;
    importProvider?: EmailImportProvider;
    importURL?: string;
    templateSource?: string;
    isPlainText?: boolean;
};
type CreateEmailTemplateResponse = {
    id: string;
    traceId: string;
    status: string;
    redirect: string;
};
type FetchEmailTemplateResponse = {
    name?: string;
    updatedBy?: string;
    isPlainText?: boolean;
    lastUpdated?: string;
    dateAdded?: string;
    previewUrl?: string;
    id?: string;
    version?: string;
    templateType?: string;
};
type DeleteEmailTemplateResponse = {
    ok: string;
    traceId: string;
};
type EmailsTemplateSettings = object;
type EmailBuilderJSONMapper = {
    elements: string[];
    attrs: object;
    templateSettings: EmailsTemplateSettings;
};
type UpdateEmailTemplateDto = {
    locationId: string;
    templateId: string;
    updatedBy: string;
    dnd: EmailBuilderJSONMapper;
    html: string;
    editorType: EmailType;
    previewText?: string;
};
type UpdateEmailTemplateResponse = {
    ok?: string;
    traceId?: string;
    previewUrl?: string;
    templateDownloadUrl?: string;
};
type EmailTemplateSearchParams = {
    locationId: string;
    archived?: string;
    builderVersion?: EmailBuilderVersion;
    limit?: string;
    name?: string;
    offset?: string;
    originId?: string;
    parentId?: string;
    search?: string;
    sortByDate?: string;
    templatesOnly?: string;
};
type EmailParams = {
    locationId: string;
    archived?: string;
    builderVersion?: string;
    limit?: string;
    name?: string;
    offset?: string;
    originId?: string;
    parentId?: string;
    search?: string;
    sortByDate?: string;
    templatesOnly?: string;
};

declare class EmailsClient extends GhlClient {
    constructor(accessToken: string);
    create(dto: CreateEmailTemplateDto): Promise<CreateEmailTemplateResponse>;
    find(params: EmailTemplateSearchParams): Promise<FetchEmailTemplateResponse>;
    remove(locationId: string, templateId: string): Promise<DeleteEmailTemplateResponse>;
    update(dto: UpdateEmailTemplateDto): Promise<UpdateEmailTemplateResponse>;
}

type FormsPageDetailsSchema = {
    url?: string;
    title?: string;
};
type FormsContactSessionIds = {
    ids?: string[] | null;
};
type FormsEventData = {
    fbc?: string;
    fbp?: string;
    page?: FormsPageDetailsSchema;
    type?: string;
    domain?: string;
    medium?: string;
    source?: string;
    version?: string;
    adSource?: string;
    mediumId?: string;
    parentId?: string;
    referrer?: string;
    fbEventId?: string;
    timestamp?: number;
    parentName?: string;
    fingerprint?: string;
    pageVisitType?: string;
    contactSessionIds?: FormsContactSessionIds;
};
type OtherFormFields = {
    [key: string]: string | number;
} & {
    eventData?: FormsEventData;
    fieldsOriSequance?: string[];
};
type FormSubmission = {
    id?: string;
    contactId?: string;
    createdAt?: string;
    formId?: string;
    name?: string;
    email?: string;
    others?: OtherFormFields;
};
type ListFormSubmissionsResponseMeta = {
    total?: number;
    currentPage?: number;
    nextPage?: number | null;
    previousPage?: number | null;
};
type ListFormSubmissionsResponse = {
    submissions: FormSubmission[];
    meta: ListFormSubmissionsResponseMeta;
};
type Form = {
    id?: string;
    name?: string;
    locationId?: string;
};
type ListFormsResponse = {
    forms: Form[];
    total: number;
};
type FormSubmissionSearchParams = {
    locationId: string;
    endAt?: string;
    formId?: string;
    limit?: number;
    page?: number;
    q?: string;
    startAt?: string;
};
type FormSearchParams = {
    locationId: string;
    limit?: number;
    skip?: number;
    type?: string;
};
type CustomFileInterface = {
    blob: Blob;
    customFieldId: string;
};

declare class FormsClient extends GhlClient {
    constructor(accessToken: string);
    private generateRandomId;
    find(params: FormSearchParams): Promise<ListFormsResponse>;
    uploadCustomFiles(locationId: string, contactId: string, files: CustomFileInterface[]): Promise<ContactResponse>;
    findSubmissions(params: FormSubmissionSearchParams): Promise<ListFormSubmissionsResponse>;
}

type FunnelRedirectAction = 'funnel' | 'website' | 'url' | 'all';
type FunnelSearchParams = {
    category?: string;
    limit?: string;
    name?: string;
    offset?: string;
    parentId?: string;
    type?: string;
    locationId: string;
};
type FunnelPageSearchParams = {
    name?: string;
    funnelId: string;
    limit?: number;
    locationId: string;
    offset?: number;
};
type FunnelRedirectSearchParams = {
    search?: string;
    limit?: number;
    locationId: string;
    offset?: number;
};
type FunnelPageCountParams = {
    name?: string;
    funnelId: string;
    locationId: string;
};
type CreateFunnelRedirectDto = {
    locationId: string;
    domain: string;
    path: string;
    target: string;
    action: FunnelRedirectAction;
};
type FunnelRedirect = {
    id: string;
    locationId: string;
    domain: string;
    path: string;
    pathLowercase: string;
    type: string;
    target: string;
    action: FunnelRedirectAction;
};
type FunnelRedirectResponse = {
    data: FunnelRedirect;
};
type UpdateFunnelRedirectDto = {
    locationId: string;
    target: string;
    action: FunnelRedirectAction;
};
type ListFunnelRedirectsResponse = {
    data: {
        count: number;
        data: any[];
    };
};
type DeleteFunnelRedirectResponse = {
    data: {
        status: string;
    };
};
type FunnelPageResponse = {
    _id: string;
    locationId: string;
    funnelId: string;
    name: string;
    stepId: string;
    deleted: string;
    updatedAt: string;
};
type FunnelPageCountResponse = {
    count: number;
};
type FunnelStep = {
    id: string;
    name: string;
    originId: string;
    pages?: string[];
    products?: string[];
    sequence?: number;
    type?: string;
    url?: string;
};
type Funnel = {
    _id: string;
    dateAdded: string;
    dateUpdated: string;
    deleted: boolean;
    domainId?: string;
    locationId: string;
    name: string;
    orderFormVersion?: number;
    originId?: string;
    steps: FunnelStep[];
    type?: string;
    updatedAt: string;
    faviconUrl?: string;
    globalSectionVersion?: number;
    globalSectionsPath?: string;
    globalSectionsUrl?: string;
    isStoreActive?: boolean;
    trackingCodeBody?: string;
    trackingCodeHead?: string;
    url?: string;
};
type ListFunnelsResponse = {
    funnels: Funnel[];
    count: number;
    traceId: string;
};

declare class FunnelsClient extends GhlClient {
    constructor(accessToken: string);
    findFunnels(params: FunnelSearchParams): Promise<ListFunnelsResponse>;
    findPages(params: FunnelPageSearchParams): Promise<FunnelPageResponse>;
    countPages(params: FunnelPageCountParams): Promise<FunnelPageCountResponse>;
    createRedirect(dto: CreateFunnelRedirectDto): Promise<FunnelRedirectResponse>;
    updateRedirect(redirectId: string, dto: UpdateFunnelRedirectDto): Promise<FunnelRedirectResponse>;
    removeRedirect(redirectId: string, locationId: string): Promise<DeleteFunnelRedirectResponse>;
    findRedirects(params: FunnelRedirectSearchParams): Promise<ListFunnelRedirectsResponse>;
}

type InvoiceAddress = {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    countryCode?: CountryCodes;
    postalCode?: string;
};
type InvoiceBusinessDetails = {
    logoUrl?: string;
    name?: string;
    phoneNo?: string;
    address?: InvoiceAddress;
    website?: string;
    customValues?: string[];
};
type InvoiceTax = {
    _id: string;
    name: string;
    rate: number;
    calculation: 'exclusive';
    description: string;
    taxId: string;
};
type InvoiceItemDto = {
    name: string;
    currency: string;
    amount: number;
    qty: number;
    description?: string;
    productId?: string;
    priceId?: string;
    taxes?: InvoiceTax[];
};
type InvoiceItem = InvoiceItemDto & {
    _id: string;
};
type InvoiceDiscount = {
    type: 'percentage' | 'fixed';
    value?: number;
};
type InvoiceDiscountUpdate = InvoiceDiscount & {
    value: number;
};
type CreateInvoiceTemplateDto = {
    altId: string;
    altType: 'location';
    name: string;
    businessDetails: InvoiceBusinessDetails;
    currency: string;
    items: InvoiceItemDto[];
    internal?: boolean;
    discount?: InvoiceDiscount;
    termsNotes?: string;
    title?: string;
};
type InvoiceTemplateResponse = {
    _id: string;
    altId: string;
    altType: 'location';
    name: string;
    businessDetails: InvoiceBusinessDetails;
    currency: string;
    items: InvoiceItem[];
    total: number;
    createdAt: string;
    updatedAt: string;
    discount?: InvoiceDiscount;
};
type ListInvoiceTemplatesResponse = {
    data: InvoiceTemplateResponse[];
    totalCount: number;
};
type UpdateInvoiceTemplateDto = CreateInvoiceTemplateDto;
type InvoiceAddtitionalEmails = {
    email: string;
};
type InvoiceContactDetails = {
    id: string;
    name: string;
    phoneNo: string;
    email: string;
    additionalEmails?: InvoiceAddtitionalEmails[];
    companyName?: string;
    address?: InvoiceAddress;
    customFields?: string[];
};
type CreateInvoiceScheduleDto = CreateInvoiceTemplateDto & {
    schedule: ScheduleOptions;
    liveMode: boolean;
};
type InvoiceStatusOptions = 'draft' | 'sent' | 'payment_processing' | 'paid' | 'void' | 'partially_paid';
type InvoiceScheduleResponse = {
    _id: string;
    status: InvoiceStatusOptions;
    liveMode: boolean;
    altId: string;
    altType: 'location';
    name: string;
    schedule: ScheduleOptions;
    invoices: CreateInvoiceResponse[];
    currency: string;
    discount?: InvoiceDiscount;
    contactDetails: InvoiceContactDetails;
    businessDetails: InvoiceBusinessDetails;
    termsNotes: string;
    compiledTermNotes: string;
    createdAt: string;
    updatedAt: string;
};
type ListInvoiceSchedulesResponse = {
    schedules: InvoiceScheduleResponse[];
    total: number;
};
type UpdateInvoiceScheduleDto = {
    altId: string;
    altType: 'location';
    name: string;
    contactDetails: InvoiceContactDetails;
    schedule: ScheduleOptions;
    liveMode: boolean;
    businessDetails: InvoiceBusinessDetails;
    currency: string;
    items: InvoiceItem[];
    discount?: InvoiceDiscount;
    termsNotes?: string;
    title?: string;
};
type InvoiceCard = {
    brand: string;
    last4: string;
};
type USBankAccount = {
    bank_name: string;
    last4: string;
};
type InvoiceAutoPaymentDetails = {
    enable: boolean;
    type?: string;
    paymentMethodId?: string;
    card?: InvoiceCard;
    usBankAccount?: USBankAccount;
};
type InvoicesSchedule = {
    altId: string;
    altType: 'location';
    liveMode: boolean;
    autoPayment?: InvoiceAutoPaymentDetails;
};
type InvoicesAutoPaymentDto = {
    altId: string;
    altType: 'location';
    id: string;
    autoPayment: InvoiceAutoPaymentDetails;
};
type InvoicesSendTo = {
    email: string[];
    emailCc?: string[];
    emailBcc?: string[];
    phoneNo?: string;
};
type Text2PayInvoiceDto = {
    altId: string;
    altType: 'location';
    name: string;
    businessDetails: InvoiceBusinessDetails;
    currency: string;
    items: InvoiceItem[];
    contactDetails: InvoiceContactDetails;
    issueDate: string;
    sentTo: InvoicesSendTo;
    liveMode: boolean;
    action: 'draft' | 'send';
    userId: string;
    termNotes?: string;
    title?: string;
    invoiceNumber?: string;
    dueDate?: string;
    id?: string;
    includeTermsNote?: boolean;
    discount?: InvoiceDiscount;
};
type Text2PayInvoice = {
    _id: string;
    status: InvoiceStatusOptions;
    liveMode: boolean;
    amountPaid: number;
    altId: string;
    altType: 'location';
    name: string;
    businessDetails: InvoiceBusinessDetails;
    invoiceNumber: number;
    currency: string;
    contactDetails: InvoiceContactDetails;
    issueDate: string;
    dueDate: string;
    discount?: InvoiceDiscount;
    invoiceItems: InvoiceItem[];
    total: number;
    title: string;
    amountDue: number;
    createdAt: string;
    updatedAt: string;
};
type Text2PayResponse = {
    invoice: Text2PayInvoice;
    invoiceUrl: string;
};
type GenerateInvoiceNumberResponse = {
    invoiceNumber: number;
};
type CreateInvoiceDto = {
    altId: string;
    altType: 'location';
    name: string;
    businessDetails: InvoiceBusinessDetails;
    currency: string;
    items: InvoiceItem[];
    discount?: InvoiceDiscount;
    termsNotes?: string;
    title?: string;
    contactDetails: InvoiceContactDetails;
    invoiceNumber?: string;
    issueDate: string;
    dueDate: string;
    sentTo: InvoicesSendTo;
    liveMode: boolean;
};
type CreateInvoiceResponse = {
    _id: string;
    status: InvoiceStatusOptions;
    liveMode: boolean;
    amountPaid: number;
    altId: string;
    altType: 'location';
    name: string;
    businessDetails: InvoiceBusinessDetails;
    invoiceNumber: number;
    currency: string;
    contactDetails: InvoiceContactDetails;
    issueDate: string;
    dueDate: string;
    discount?: InvoiceDiscount;
    invoiceItems: InvoiceItem[];
    total: number;
    title: string;
    amountDue: number;
    createdAt: string;
    updatedAt: string;
};
type TotalInvoiceSummary = {
    subTotal: number;
    discount: number;
};
type InvoiceResponse = CreateInvoiceResponse & {
    totalSummary: TotalInvoiceSummary;
};
type ListInvoicesResponse = {
    invoices: InvoiceResponse[];
    total: number;
};
type UpdateInvoiceDto = {
    altId: string;
    altType: 'location';
    name: string;
    businessDetails: InvoiceBusinessDetails;
    currency: string;
    discount?: InvoiceDiscount;
    termsNotes?: string;
    title?: string;
    contactDetails: InvoiceContactDetails;
    invoiceNumber?: string;
    issueDate: string;
    dueDate: string;
    liveMode: boolean;
    invoiceItems: InvoiceItem[];
};
type UpdateInvoiceResponse = CreateInvoiceResponse;
type DeleteInvoiceResponse = CreateInvoiceResponse;
type VoidInvoiceResponse = CreateInvoiceResponse;
type InvoiceSenderConfig = {
    fromName?: string;
    fromEmail?: string;
};
type SendInvoiceDto = {
    altId: string;
    altType: 'location';
    userId: string;
    action: 'sms_and_email' | 'email' | 'sms';
    liveMode: boolean;
};
type SendInvoiceResponse = {
    invoice: Text2PayInvoice;
    smsData: object;
    emailData: object;
};
type InvoiceCheque = {
    number: string;
};
type RecordInvoicePaymentDto = {
    altId: string;
    altType: 'location';
    mode: 'cash' | 'card' | 'cheque' | 'bank_transfer' | 'other';
    card?: InvoiceCard;
    cheque?: InvoiceCheque;
    notes: string;
    amount?: number;
};
type RecordInvoicePaymentResponse = {
    success: boolean;
    invoice: Text2PayInvoice;
};
type InvoiceScheduleSearchParams = {
    altId: string;
    altType: 'location';
    limit: string;
    offset: string;
    endAt?: string;
    paymentMode?: 'default' | 'live';
    search?: string;
    startAt?: string;
    status?: string;
};
type InvoicesSearchParams = {
    altId: string;
    altType: string;
    limit: string;
    offset: string;
    contactId?: string;
    endAt?: string;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    status?: string;
};

declare class InvoicesClient extends GhlClient {
    constructor(accessToken: string);
    generateInvoiceNumber(locationId: string): Promise<GenerateInvoiceNumberResponse>;
    findById(invoiceId: string, locationId: string): Promise<InvoiceResponse>;
    update(invoiceId: string, dto: UpdateInvoiceDto): Promise<UpdateInvoiceResponse>;
    remove(invoiceId: string, locationId: string): Promise<DeleteInvoiceResponse>;
    voidById(invoiceId: string, locationId: string): Promise<VoidInvoiceResponse>;
    send(invoiceId: string, dto: SendInvoiceDto): Promise<SendInvoiceResponse>;
    recordPayment(invoiceId: string, dto: RecordInvoicePaymentDto): Promise<RecordInvoicePaymentResponse>;
    create(dto: CreateInvoiceDto): Promise<CreateInvoiceResponse>;
    find(params: InvoicesSearchParams): Promise<ListInvoicesResponse>;
    createTemplate(dto: CreateInvoiceTemplateDto): Promise<InvoiceTemplateResponse>;
    findTemplates(params: InvoiceScheduleSearchParams): Promise<ListInvoiceTemplatesResponse>;
    findTemplateById(templateId: string, locationId: string): Promise<InvoiceTemplateResponse>;
    updateTemplate(templateId: string, dto: UpdateInvoiceTemplateDto): Promise<InvoiceTemplateResponse>;
    removeTemplate(templateId: string, locationId: string): Promise<SuccessDeleteResponse>;
    createSchedule(dto: CreateInvoiceScheduleDto): Promise<InvoiceScheduleResponse>;
    findSchedules(params: InvoiceScheduleSearchParams): Promise<ListInvoiceSchedulesResponse>;
    findScheduleById(scheduleId: string, locationId: string): Promise<InvoiceScheduleResponse>;
    updateSchedule(scheduleId: string, dto: UpdateInvoiceScheduleDto): Promise<InvoiceScheduleResponse>;
    removeSchedule(scheduleId: string, locationId: string): Promise<SuccessDeleteResponse>;
    createScheduledInvoice(scheduleId: string, dto: InvoicesSchedule): Promise<InvoiceScheduleResponse>;
    manageAutoPayment(scheduleId: string, dto: InvoicesAutoPaymentDto): Promise<InvoiceScheduleResponse>;
    cancelScheduledInvoice(scheduleId: string, locationId: string): Promise<InvoiceScheduleResponse>;
    createText2Pay(dto: Text2PayInvoiceDto): Promise<Text2PayResponse>;
}

type EmailVerificationDto = {
    type: 'email' | 'contact';
    verify: string;
};
type EmailVerificationResult = 'deliverable' | 'undeliverable' | 'do_not_send' | 'unknown' | 'catch_all';
type EmailVerificationRisk = 'high' | 'low' | 'medium' | 'unknown';
type LeadConnectorRecommendation = {
    isEmailValid: boolean;
};
type EmailVerificationResponse = {
    reason: string[];
    result: EmailVerificationResult;
    risk: EmailVerificationRisk;
    address: string;
    leadconnectorRecomendation: LeadConnectorRecommendation;
};

declare class LCEmailClient extends GhlClient {
    constructor(accessToken: string);
    verify(locationId: string, dto: EmailVerificationDto): Promise<EmailVerificationResponse>;
}

type Link = {
    id?: string;
    name?: string;
    redirectTo?: string;
    fieldKey?: string;
    locationId?: string;
};
type ListLinksResponse = {
    links: Link[];
};
type LinkResponse = {
    link: Link;
};
type CreateLinkDto = {
    locationId: string;
    name: string;
    redirectTo: string;
};
type UpdateLinkDto = {
    name: string;
    redirectTo: string;
};

declare class LinksClient extends GhlClient {
    constructor(accessToken: string);
    update(linkId: string, dto: UpdateLinkDto): Promise<LinkResponse>;
    remove(linkId: string): Promise<SuccededDeleteResponse>;
    find(locationId: string): Promise<ListLinksResponse>;
    create(dto: CreateLinkDto): Promise<LinkResponse>;
}

type LocationSettings = {
    allowDuplicateContact?: boolean;
    allowDuplicateOpportunity?: boolean;
    allowFacebookNameMerge?: boolean;
    disableContactTimezone?: boolean;
};
type LocationSocial = {
    facebookUrl?: string;
    googlePlus?: string;
    linkedIn?: string;
    foursquare?: string;
    twitter?: string;
    yelp?: string;
    instagram?: string;
    youtube?: string;
    pinterest?: string;
    blogRss?: string;
    googlePlacesId?: string;
};
type Location = {
    id?: string;
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    timezone?: string;
    settings?: LocationSettings;
    social?: LocationSocial;
};
type ListLocationsResponse = {
    locations: Location[];
};
type LocationBusiness = {
    name?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    timezone?: string;
    logoUrl?: string;
};
type LocationDetails = {
    id?: string;
    companyId?: string;
    name?: string;
    domain?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    logoUrl?: string;
    website?: string;
    timezone?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    business?: LocationBusiness;
    social?: LocationSocial;
    settings?: LocationSettings;
    reseller?: object;
};
type LocationResponse = {
    location: LocationDetails;
};
type LocationProspectInfo = {
    firstName: string;
    lastName: string;
    email: string;
};
type LocationsTwilioSchema = {
    sid: string;
    authToken: string;
};
type LocationsMailgunSchema = {
    apiKey: string;
    domain: string;
};
type CreateLocationDto = {
    name: string;
    phone?: string;
    companyId: string;
    address?: string;
    city?: string;
    state?: string;
    country?: CountryCodes;
    postalCode?: string;
    website?: string;
    timezone?: string;
    prospectInfo?: LocationProspectInfo;
    settings?: LocationSettings;
    social?: LocationSocial;
    twilio?: LocationsTwilioSchema;
    mailgun?: LocationsMailgunSchema;
    snapshotId?: string;
};
type CreateUpdateLocationResponse = {
    id: string;
    companyId: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    domain: string;
    country: string;
    postalCode: string;
    website: string;
    timezone: string;
    settings: LocationSettings;
    social: LocationSocial;
};
type LocationsSnapshotPutSchema = {
    id: string;
    override: boolean;
};
type UpdateLocationDto = {
    companyId: string;
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: CountryCodes;
    postalCode?: string;
    website?: string;
    timezone?: string;
    prospectInfo?: LocationProspectInfo;
    settings?: LocationSettings;
    social?: LocationSocial;
    twilio?: LocationsTwilioSchema;
    mailgun?: LocationsMailgunSchema;
    snapshot?: LocationsSnapshotPutSchema;
};
type DeleteLocationResponse = {
    success: boolean;
    message: string;
};
type LocationTag = {
    id?: string;
    name?: string;
    locationId?: string;
};
type ListLocationTagsResponse = {
    tags: LocationTag[];
};
type LocationTagResponse = {
    tag: LocationTag;
};
type LocationTaskSearchParams = {
    contactId?: string[];
    completed?: boolean;
    assignedTo?: string[];
    query?: string;
    limit?: number;
    skip?: number;
    businessId?: string;
};
type LocationTaskContact = {
    _id?: string;
    firstName?: string;
    lastName?: string;
};
type LocationTaskUser = {
    id?: string;
    firstName?: string;
    lastName?: string;
    profilePhoto?: string;
};
type LocationTask = {
    _id: string;
    assignedTo: string;
    body: string;
    completed: boolean;
    contactId: string;
    dateAdded: string;
    dateUpdated: string;
    deleted: boolean;
    dueDate: string;
    locationId: string;
    title: string;
    updatedAt: string;
    contactDetails: LocationTaskContact;
    assignedToUserDetails: LocationTaskUser;
};
type ListLocationTasksResponse = {
    tasks: LocationTask[];
};
type LocationCustomFieldModel = 'contact' | 'opportunity';
type LocationCustomField = {
    id?: string;
    name?: string;
    fieldKey?: string;
    placeholder?: string;
    dataType?: string;
    position?: number;
    picklistOptions?: string[];
    picklistImageOptions?: string[];
    isAllowedCustomOption?: boolean;
    isMultiFileAllowed?: boolean;
    maxFileLimit?: number;
    locationId?: string;
    model?: LocationCustomFieldModel;
};
type ListLocationCustomFieldsResponse = {
    customFields: LocationCustomField[];
};
type LocationCustomFieldResponse = {
    customField: LocationCustomField;
};
type LocationCustomFieldTextBoxListOptions = {
    label?: string;
    prefillValue?: string;
};
type LocationCustomFieldType = 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL' | 'PHONE' | 'MONETORY' | 'CHECKBOX' | 'SINGLE_OPTIONS' | 'MULTIPLE_OPTIONS' | 'FLOAT' | 'TIME' | 'DATE' | 'TEXTBOX_LIST' | 'FILE_UPLOAD' | 'SIGNATURE' | 'RADIO';
type LocationCustomFieldFileFormat = '.pdf' | '.doc' | '.docx' | '.jpeg' | '.jpg' | '.png' | '.gif' | '.csv' | '.xls';
type UpdateLocationCustomFieldDto = {
    name?: string;
    placeholder?: string;
    acceptedFormat?: LocationCustomFieldFileFormat[];
    isMultipleFile?: boolean;
    maxNumberOfFiles?: number;
    textBoxListOptions?: LocationCustomFieldTextBoxListOptions[];
    position?: number;
};
type CreateLocationCustomFieldDto = UpdateLocationCustomFieldDto & {
    name: string;
    dataType: LocationCustomFieldType;
    model: LocationCustomFieldModel;
};
type LocationsFileInterface = {
    name: string;
    blob: Blob;
};
type LocationsFileUploadBody = {
    id?: string;
    maxFiles?: number;
};
type LocationsFileuploadMeta = {
    fieldName?: string;
    originalname?: string;
    encoding?: string;
    mimetype?: string;
    size?: number;
    url?: string;
};
type LocationsFileUploadResponse = {
    uploadedFiles?: {
        [fileName: string]: string;
    };
    meta?: LocationsFileuploadMeta[];
};
type LocationCustomValue = {
    id?: string;
    name?: string;
    fieldKey?: string;
    value?: string;
    locationId?: string;
};
type ListLocationCustomValuesResponse = {
    customValues: LocationCustomValue[];
};
type LocationCustomValueResponse = {
    customValue: LocationCustomValue;
};
type LocationCustomValueDto = {
    name: string;
    value: string;
};
type LocationTemplateSearchParams = {
    deleted: boolean;
    limit: string;
    skip: string;
    type: 'sms' | 'email' | 'whatsapp';
    originId: string;
};
type LocationSMSTemplate = {
    body?: string;
    attachments: string[];
};
type LocationSMSTemplateDetails = {
    id?: string;
    name?: string;
    type?: string;
    template?: LocationSMSTemplate;
    dateAdded?: string;
    locationId?: string;
    urlAttachments?: string[];
};
type LocationEmailTemplate = {
    subject?: string;
    attachments?: string[];
    html?: string;
};
type LocationEmailTemplateDetails = {
    id?: string;
    name?: string;
    type?: string;
    dateAdded?: string;
    template?: LocationEmailTemplate;
    locationId?: string;
};
type ListLocationTemplatesResponse = {
    templates: Array<LocationEmailTemplateDetails | LocationSMSTemplateDetails>;
    totalCount: number;
};
type LocationSearchParams = {
    companyId?: string;
    email?: string;
    limit?: string;
    order?: 'asc' | 'desc';
    skip?: string;
};
type LocationTimeZonesResponse = {
    timeZones: string[];
    traceId: string;
};

declare class LocationsClient extends GhlClient {
    constructor(accessToken: string);
    findById(locationId: string): Promise<LocationResponse>;
    update(locationId: string, dto: UpdateLocationDto): Promise<CreateUpdateLocationResponse>;
    remove(locationId: string, deleteTwilioAccount?: boolean): Promise<DeleteLocationResponse>;
    create(dto: CreateLocationDto): Promise<CreateUpdateLocationResponse>;
    search(params: LocationSearchParams): Promise<ListLocationsResponse>;
    findCustomFields(locationId: string, model?: 'contact' | 'opportunity' | 'all'): Promise<ListLocationCustomFieldsResponse>;
    createCustomField(locationId: string, dto: CreateLocationCustomFieldDto): Promise<LocationCustomFieldResponse>;
    findCustomFieldById(locationId: string, customFieldId: string): Promise<LocationCustomFieldResponse>;
    updateCustomField(locationId: string, customFieldId: string, dto: UpdateLocationCustomFieldDto): Promise<LocationCustomFieldResponse>;
    removeCustomField(locationId: string, customFieldId: string): Promise<SuccededDeleteResponse>;
    uploadCustomFieldFile(locationId: string, customFieldId: string, files: LocationsFileInterface[]): Promise<LocationsFileUploadResponse>;
    findCustomValues(locationId: string): Promise<ListLocationCustomValuesResponse>;
    createCustomValue(locationId: string, dto: LocationCustomValueDto): Promise<LocationCustomValueResponse>;
    findCustomValueById(locationId: string, customValueId: string): Promise<LocationCustomValueResponse>;
    updateCustomValue(locationId: string, customValueId: string, dto: LocationCustomValueDto): Promise<LocationCustomValueResponse>;
    removeCustomValue(locationId: string, customValueId: string): Promise<SuccededDeleteResponse>;
    findTemplates(locationId: string, params: LocationTemplateSearchParams): Promise<ListLocationTemplatesResponse>;
    removeTemplate(locationId: string, templateId: string): Promise<SuccededDeleteResponse>;
    findTags(locationId: string): Promise<ListLocationTagsResponse>;
    createTag(locationId: string, name: string): Promise<LocationTagResponse>;
    findTagById(locationId: string, tagId: string): Promise<LocationTagResponse>;
    updateTag(locationId: string, tagId: string, name: string): Promise<LocationTagResponse>;
    removeTag(locationId: string, tagId: string): Promise<SuccededDeleteResponse>;
    searchTasks(locationId: string, dto: LocationTaskSearchParams): Promise<ListLocationTasksResponse>;
    findTimezones(locationId: string): Promise<LocationTimeZonesResponse>;
}

type MediaFileSearchParams = {
    limit?: string;
    offset?: string;
    query?: string;
    type?: string;
    altId: string;
    altType: 'agency' | 'location';
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    parentId?: string;
};
type MediaFileDetails = {
    altId: string;
    altType: 'agency' | 'location';
    name: string;
    parentId: string;
    url: string;
    path: string;
};
type ListMediaFilesResponse = {
    files: MediaFileDetails[];
};
type UploadFileDto = {
    file: Blob;
    hosted?: boolean;
    fileUrl?: string;
    name: string;
    parentId?: string;
};
type UploadFileResponse = {
    fileId: string;
};

declare class MediaClient extends GhlClient {
    constructor(accessToken: string);
    findFiles(params: MediaFileSearchParams): Promise<ListMediaFilesResponse>;
    uploadFile(dto: UploadFileDto): Promise<UploadFileResponse>;
    deleteFile(fileId: string, altType: 'agency' | 'location', altId: string): Promise<SuccessDeleteResponse>;
}

type GetAccessTokenDto = {
    client_id: string;
    client_secret: string;
    grant_type: 'authorization_code' | 'refresh_token';
    user_type: 'Company' | 'Location';
    code?: string;
    refresh_token?: string;
    redirect_uri?: string;
};
type LocationScope = 'blogs/author.readonly' | 'blogs/category.readonly' | 'blogs/check-slug.readonly' | 'blogs/post.write' | 'blogs/post-update.write' | 'businesses.readonly' | 'businesses.write' | 'calendars.readonly' | 'calendars.write' | 'calendars/events.readonly' | 'calendars/events.write' | 'calendars/groups.readonly' | 'calendars/groups.write' | 'calendars/resources.readonly' | 'calendars/resources.write' | 'campaigns.readonly' | 'companies.readonly' | 'contacts.readonly' | 'contacts.write' | 'conversations.readonly' | 'conversations.write' | 'conversations/message.readonly' | 'conversations/message.write' | 'conversations/reports.readonly' | 'courses.readonly' | 'courses.write' | 'emails/builder.readonly' | 'emails/builder.write' | 'forms.readonly' | 'forms.write' | 'funnels/funnel.readonly' | 'funnels/page.readonly' | 'funnels/pagecount.readonly' | 'funnels/redirect.readonly' | 'funnels/redirect.write' | 'invoices.readonly' | 'invoices.write' | 'invoices/schedule.readonly' | 'invoices/schedule.write' | 'invoices/template.readonly' | 'invoices/template.write' | 'lc-email.readonly' | 'links.readonly' | 'links.write' | 'locations.readonly' | 'locations/customFields.readonly' | 'locations/customFields.write' | 'locations/customValues.readonly' | 'locations/customValues.write' | 'locations/tags.readonly' | 'locations/tags.write' | 'locations/tasks.readonly' | 'locations/tasks.write' | 'locations/templates.readonly' | 'medias.readonly' | 'medias.write' | 'objects/record.readonly' | 'objects/record.write' | 'objects/schema.readonly' | 'objects/schema.write' | 'opportunities.readonly' | 'opportunities.write' | 'payments/custom-provider.readonly' | 'payments/custom-provider.write' | 'payments/integration.readonly' | 'payments/integration.write' | 'payments/orders.readonly' | 'payments/orders.write' | 'payments/subscriptions.readonly' | 'payments/transactions.readonly' | 'products.readonly' | 'products.write' | 'products/collection.readonly' | 'products/collection.write' | 'products/prices.readonly' | 'products/prices.write' | 'saas/company.read' | 'saas/company.write' | 'saas/location.read' | 'saas/location.write' | 'socialplanner/account.readonly' | 'socialplanner/account.write' | 'socialplanner/category.readonly' | 'socialplanner/category.write' | 'socialplanner/csv.readonly' | 'socialplanner/csv.write' | 'socialplanner/oauth.readonly' | 'socialplanner/oauth.write' | 'socialplanner/post.readonly' | 'socialplanner/post.write' | 'socialplanner/tag.readonly' | 'socialplanner/tag.write' | 'store/setting.readonly' | 'store/setting.write' | 'store/shipping.readonly' | 'store/shipping.write' | 'surveys.readonly' | 'users.readonly' | 'users.write' | 'wordpress.site.readonly' | 'workflows.readonly';
type CompanyScope = 'locations.readonly' | 'locations.write' | 'oauth.readonly' | 'oauth.write' | 'saas/company.read' | 'saas/company.write' | 'saas/location.read' | 'saas/location.write' | 'snapshots.readonly' | 'snapshots.write' | 'users.readonly' | 'users.write';
type Scope = LocationScope | CompanyScope;
type GetAccessCodeBaseSchema = {
    userId: string;
    access_token?: string;
    token_type?: 'Bearer';
    expires_in?: number;
    refresh_token?: string;
    scope?: Scope[];
    userType?: string;
    locationId?: string;
    companyId?: string;
    approvedLocations?: string[];
    planId?: string;
};
type LocationAccessCodeResponse = GetAccessCodeBaseSchema & {
    userType: 'Location';
    scope: LocationScope[];
};
type CompanyAccessCodeResponse = GetAccessCodeBaseSchema & {
    userType: 'Company';
    scope: CompanyScope[];
};
type GetAccessTokenResponse = LocationAccessCodeResponse | CompanyAccessCodeResponse;
type GetLocationTokenDto = {
    companyId: string;
    locationId: string;
};
type GetLocationTokenResponse = {
    userId: string;
    access_token?: string;
    token_type?: 'Bearer';
    expires_in?: number;
    scope?: LocationScope[];
    locationId?: string;
    planId?: string;
};
type InstalledLocationSchema = {
    _id: string;
    name: string;
    address: string;
    isInstalled?: boolean;
};
type GetInstalledLocationsResponse = {
    locations: InstalledLocationSchema[];
    count: number;
    installToFutureLocations: boolean;
};
type GetInstalledLocationsParams = {
    companyId: string;
    appId: string;
    isInstalled?: boolean;
    limit?: string;
    onTrial?: boolean;
    planId?: string;
    query?: string;
    skip?: string;
};
type OAuthSearchParams = {
    companyId: string;
    appId: string;
    isInstalled?: string;
    limit?: string;
    onTrial?: string;
    planId?: string;
    query?: string;
    skip?: string;
};

declare class OAuthClient extends GhlClient {
    constructor();
    getAccessToken(dto: GetAccessTokenDto): Promise<GetAccessTokenResponse>;
    findInstalledLocations(params: GetInstalledLocationsParams): Promise<GetInstalledLocationsResponse>;
    getLocationToken(dto: GetLocationTokenDto): Promise<GetLocationTokenResponse>;
}

type Labels = {
    singular: string;
    plural: string;
};
type Option = {
    key: string;
    label: string;
    url?: string;
};
type DisplayPropertyDetails = {
    key: string;
    name: string;
    dataType: 'TEXT' | 'NUMERICAL';
};
type CustomObject = {
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
type CustomObjectField = {
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
type CustomObjectSchemaResponse = {
    object: CustomObject;
    cache: boolean;
    fields: CustomObjectField[];
};
type UpdateCustomObjectDto = {
    labels: Labels;
    description?: string | null;
    locationId: string;
    searchableProperties: string[];
};
type CreateCustomObjectDto = {
    labels: Labels;
    key: string;
    description?: string;
    locationId: string;
    primaryDisplayPropertyDetails: DisplayPropertyDetails;
};
type CustomObjectResponse = {
    object: CustomObject;
};
type ListCustomObjectsResponse = {
    objects: CustomObject[];
};
type CustomObjectRecord = {
    id: string;
    owner: string[];
    followers: string[];
    properties: Record<string, any>;
    dateAdded: string;
    dateUpdated: string;
};
type CustomObjectRecordResponse = {
    record: CustomObjectRecord;
};
type CustomObjectTypeUpdateDirective = {
    remove: string[];
    add: string[];
};
type CreateCustomObjectRecordDto = {
    owner: string[];
    followers: string[];
    properties: Record<string, any>;
};
type UpdateCustomObjectRecordDto = {
    owner: CustomObjectTypeUpdateDirective;
    followers: CustomObjectTypeUpdateDirective;
    properties: Record<string, any>;
};
type DeleteCustomObjectRecordResponse = {
    id: string;
    success: boolean;
};
type SearchCustomObjectRecordsDto = {
    locationId: string;
    page: number;
    pageLimit: number;
    query: string;
    searchAfter: string[];
};
type CustomObjectRecordMetaData = {
    channel: string;
    createdAt: string;
    source: string;
    sourceId: string;
};
type CustomObjectRecordSearchResult = {
    id: string;
    owner: string[];
    followers: string[];
    properties: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    locationId: string;
    objectId: string;
    createdBy: CustomObjectRecordMetaData;
    lastUpdatedBy: CustomObjectRecordMetaData;
    searchAfter: Array<string | number>;
};
type CustomObjectRecordSearchResponse = {
    records: CustomObjectRecordSearchResult[];
    total: number;
};

declare class ObjectsClient extends GhlClient {
    constructor(accessToken: string);
    findByKey(key: string, locationId: string, fetchProperties?: string): Promise<CustomObjectSchemaResponse>;
    updateByKey(key: string, dto: UpdateCustomObjectDto): Promise<CustomObjectResponse>;
    findByLocation(locationId: string): Promise<ListCustomObjectsResponse>;
    create(dto: CreateCustomObjectDto): Promise<CustomObjectResponse>;
    findRecordById(key: string, recordId: string): Promise<CustomObjectRecordResponse>;
    updateRecord(locationId: string, key: string, recordId: string, dto: UpdateCustomObjectRecordDto): Promise<CustomObjectRecordResponse>;
    deleteRecord(key: string, recordId: string): Promise<DeleteCustomObjectRecordResponse>;
    createRecord(key: string, dto: CreateCustomObjectRecordDto): Promise<CustomObjectRecordResponse>;
    searchRecords(key: string, dto: SearchCustomObjectRecordsDto): Promise<CustomObjectRecordSearchResult>;
}

type WhiteListProviderType = 'authorize-net' | 'nmi';
type CreateWhiteLabelIntegrationProviderDto = {
    altId: string;
    altType: 'location';
    uniqueName: string;
    title: string;
    provider: WhiteListProviderType;
    description: string;
    imageUrl: string;
};
type PaymentIntegrationProvider = {
    _id: string;
    altId: string;
    altType: string;
    title: string;
    route: string;
    provider: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
};
type IntegrationProviderSearchParams = {
    limit?: number;
    offset?: number;
    altId: string;
    altType: 'location';
};
type ListIntegrationProvidersResponse = {
    providers: PaymentIntegrationProvider[];
};
type OrderSourceMetaData = {
    domain?: string;
    pageId?: string;
    pageUrl?: string;
    stepId?: string;
};
type OrderResponse = {
    _id: string;
    altId: string;
    altType: string;
    status: string;
    sourceType: string;
    createdAt: string;
    updatedAt: string;
    contactId?: string;
    contactName?: string;
    contactEmail?: string;
    currency?: string;
    amount?: number;
    subtotal?: number;
    discount?: number;
    liveMode?: boolean;
    totalProducts?: number;
    sourceName?: string;
    sourceId?: string;
    sourceMeta?: OrderSourceMetaData;
    couponCode?: string;
    sourceSubType?: string;
    fulfillmentStatus?: string;
    onetimeProducts?: number;
    recurringProducts?: number;
};
type ListOrdersResponse = {
    data: OrderResponse[];
    totalCount: number;
};
type AmountSummary = {
    subtotal: number;
    discount?: number;
};
type OrderSourceType = 'funnel' | 'website' | 'invoice' | 'calendar' | 'text2Pay' | 'document_contracts' | 'membership' | 'mobile_app' | 'communities' | 'point_of_sale' | 'manual' | 'form' | 'survey' | 'payment_link' | 'external';
type OrderSourceSubType = 'one_step_order_form' | 'two_step_order_form' | 'upsell' | 'tap_to_pay' | 'card_payment' | 'store' | 'contact_view' | 'email_campaign' | 'payments_dashboard' | 'shopify';
type OrderSource = {
    id?: string;
    type?: OrderSourceType;
    subType?: OrderSourceSubType;
    name?: string;
    meta: OrderSourceMetaData;
};
type OrderContactSnapshot = {
    first_name?: string;
    last_name?: string;
    email?: string;
    company_name?: string;
    location_id?: string;
    type?: string;
};
type OrderItemProduct = {
    name?: string;
    productType?: string;
};
type OrderItem = {
    _id?: string;
    authorizeAmount?: number;
    locationId?: string;
    name?: string;
    price?: object;
    product?: OrderItemProduct;
};
type OrderCoupon = {
    _id?: string;
    code?: string;
};
type OrderMetaData = {
    couponSessionExpired?: boolean;
    [key: string]: any;
};
type Order = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    createdAt: string;
    updatedAt: string;
    fulfillmentStatus?: string;
    contactSnapshot?: OrderContactSnapshot;
    amountSummary?: AmountSummary;
    source?: OrderSource;
    items?: OrderItem[];
    coupon?: OrderCoupon;
    trackingId?: string;
    fingerprint?: string;
    meta?: OrderMetaData;
    markAsTest?: boolean;
    traceId?: string;
};
type OrderFulfillmentTracking = {
    trackingNumber?: string;
    shippingCarrier?: string;
    trackingUrl?: string;
};
type CreateOrderFulfillmentDto = {
    altId: string;
    altType: 'location';
    trackings: OrderFulfillmentTracking[];
    items: {
        priceId: string;
        qty: number;
    }[];
    notifyCustomer: boolean;
};
type PaymentsProductVariantOptionSchema = {
    id: string;
    name: string;
};
type PaymentsProductVariantSchema = {
    id: string;
    name: string;
    options: PaymentsProductVariantOptionSchema[];
};
type PaymentProductMediaType = 'image' | 'video';
type PaymentProductMediaDto = {
    id: string;
    url: string;
    type: PaymentProductMediaType;
    title?: string;
    isFeatured?: boolean;
    priceIds?: string[];
};
type ProductLabel = {
    title: string;
    startDate?: string;
    endDate?: string;
};
type ProductSEO = {
    title?: string;
    description?: string;
};
type PaymentProduct = {
    _id: string;
    description?: string;
    variants?: PaymentsProductVariantSchema[];
    medias?: PaymentProductMediaDto[];
    locationId: string;
    name: string;
    productType: string;
    availableInStore?: boolean;
    userId?: string;
    createdAt: string;
    updatedAt: string;
    statementDescriptor?: string;
    image?: string;
    collectionIds?: string[];
    isTaxesEnabled?: boolean;
    taxes?: string[];
    isLabelEnabled?: boolean;
    label?: ProductLabel;
    slug?: string;
    seo?: ProductSEO;
};
type PaymentMembershipOffer = {
    _id: string;
    label: string;
    value: string;
};
type Inverval = 'day' | 'week' | 'month' | 'year';
type RecurringPayment = {
    inverval: Inverval;
    intervalCount: number;
};
type PaymentPriceType = 'one_time' | 'recurring';
type PriceResponse = {
    _id: string;
    membershipOffers?: PaymentMembershipOffer[];
    variantOptionIds?: string[];
    locationId?: string;
    product?: string;
    userId?: string;
    name: string;
    type: PaymentPriceType;
    currency: string;
    amount: number;
    recurring?: RecurringPayment;
    createdAt?: string;
    updatedAt?: string;
    compareAtPrice?: number;
    trackInventory?: boolean;
    availableQuantity?: number;
    allowOutOfStockPurchases?: boolean;
};
type OrderFulfillmentItem = {
    _id: string;
    name: string;
    product: PaymentProduct;
    price: PriceResponse;
    qty: number;
};
type OrderFulfillmentData = {
    _id: string;
    altId: string;
    altType: 'location';
    trackings: OrderFulfillmentTracking[];
    items: OrderFulfillmentItem[];
    createdAt: string;
    updatedAt: string;
};
type OrderFulfillmentResponse = {
    status: boolean;
    data: OrderFulfillmentData;
};
type TransactionChargeSnapshot = {
    id?: string;
    object?: string;
    account_country?: string;
    account_name?: string;
};
type TransactionMethods = {
    [key: string]: {
        [key: string]: string;
    };
};
type TransactionData = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactName?: string;
    contactEmail?: string;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    entityType?: string;
    entityId?: string;
    entitySourceType: OrderSourceType;
    entitySourceSubType?: OrderSourceSubType;
    entitySourceName?: string;
    entitySourceId?: string;
    entitySourceMeta?: OrderSourceMetaData;
    subscriptionId?: string;
    chargeId?: string;
    chargeSnapshot?: TransactionChargeSnapshot;
    paymentProviderType?: string;
    paymentProviderConnectedAccount?: string;
    ipAddress?: string;
    createdAt: string;
    updatedAt: string;
    amountRefunded?: number;
    paymentMethod?: TransactionMethods;
};
type ListTransactionsResponse = {
    data: TransactionData[];
    totalCount: number;
};
type TransactionPaymentProvider = {
    type?: string;
    connectedAccount?: {
        _id?: string;
        accountId?: string;
    };
};
type TransactionQboDetails = {
    domain?: string;
    sparse?: boolean;
    Id?: string;
    SyncToken?: string;
    TotalAmt?: number;
};
type TransactionDetailsResponse = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactSnapshot?: OrderContactSnapshot;
    currency?: string;
    amount?: number;
    status?: string;
    liveMode?: boolean;
    createdAt: string;
    updatedAt: string;
    entityType?: string;
    entityId?: string;
    entitySource?: OrderSource;
    chargeId?: string;
    chargeSnapshot?: TransactionChargeSnapshot;
    invoiceId?: string;
    subscriptionId?: string;
    paymentProvider?: TransactionPaymentProvider;
    ipAddress?: string;
    meta?: OrderSourceMetaData;
    markAsTest?: boolean;
    isParent?: boolean;
    amountRefunded?: number;
    receiptId?: string;
    qboSynced?: boolean;
    qboResponse?: TransactionQboDetails;
    traceId?: string;
};
type SubscriptionSnapshot = {
    status?: string;
    status_update_time?: string;
    id?: string;
    plan_id?: string;
    start_time?: string;
    quantity?: number;
};
type SubscriptionData = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactName?: string;
    contactEmail?: string;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    entityType?: string;
    entityId?: string;
    entitySourceType: OrderSourceType;
    entitySourceName?: string;
    entitySourceId?: string;
    entitySourceMeta?: OrderSourceMetaData;
    subscriptionId?: string;
    subscriptionSnapshot?: SubscriptionSnapshot;
    paymentProviderType?: string;
    paymentProviderConnectedAccount?: string;
    ipAddress?: string;
    createdAt: string;
    updatedAt: string;
};
type ListSubscriptionsResponse = {
    data: SubscriptionData[];
    totalCount: number;
};
type SubscriptionCoupon = {
    _id?: string;
    usageCount?: number;
    altId?: string;
    altType?: string;
    name?: string;
    code?: string;
    discountType?: string;
    discountValue?: number;
};
type SubscriptionSchedule = {
    collection?: string;
    id?: string;
};
type SubscriptionAutoPayment = {
    customerId?: string;
    paymentMethodId?: string;
};
type SubscriptionRecurringProduct = {
    locationId?: string;
    funnel?: string;
    step?: string;
    name?: string;
};
type SubscriptionDetailsReponse = {
    _id: string;
    altId: string;
    altType: string;
    contactId?: string;
    contactSnapshot?: OrderContactSnapshot;
    coupon?: SubscriptionCoupon;
    currency?: string;
    amount?: number;
    status: string;
    liveMode?: boolean;
    entityType?: string;
    entityId?: string;
    entitySource?: OrderSource;
    subscriptionId?: string;
    subscriptionSnapshot?: SubscriptionSnapshot;
    paymentProvider?: TransactionPaymentProvider;
    ipAddress?: string;
    createdAt: string;
    updatedAt: string;
    meta?: OrderMetaData;
    markAsTest?: boolean;
    schedule?: SubscriptionSchedule;
    autoPayment?: SubscriptionAutoPayment;
    recurringProduct?: SubscriptionRecurringProduct;
    canceledAt?: string;
    canceledBy?: string;
    traceId?: string;
};
type CreateCustomIntegrationProviderDto = {
    name: string;
    description: string;
    paymentsUrl: string;
    queryUrl: string;
    imageUrl: string;
};
type CustomIntegrationProviderConnectDetails = {
    live?: {
        apiKey: string;
        publishableKey: string;
    };
    test?: {
        apiKey: string;
        publishableKey: string;
    };
};
type CustomIntegrationProviderLiveModeConnectDetails = {
    live: {
        apiKey: string;
        publishableKey: string;
        liveMode?: boolean;
    };
    test: {
        apiKey: string;
        publishableKey: string;
        liveMode?: boolean;
    };
};
type CustomIntegrationProviderKeys = {
    apiKey: string;
    publishableKey: string;
};
type CustomIntegrationProviderResponse = {
    _id: string;
    locationId: string;
    marketplaceAppId: string;
    name: string;
    description: string;
    paymentsUrl: string;
    queryUrl: string;
    imageUrl: string;
    paymentProvider?: CustomIntegrationProviderLiveModeConnectDetails;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    traceId: string;
};
type DeleteCustomIntegrationProviderResponse = {
    liveMode: boolean;
};
type DisconnectCustomIntegrationProviderResponse = {
    success: boolean;
};
type OrderSearchParams = {
    altId: string;
    altType: 'location';
    contactId?: string;
    endAt?: string;
    funnelProductIds?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    status?: string;
};
type SubscriptionSearchParams = {
    altId: string;
    altType: 'location';
    contactId?: string;
    endAt?: string;
    entityId?: string;
    entitySourceType?: string;
    id?: string;
    limit?: number;
    offset?: number;
    paymentMode?: string;
    search?: string;
    startAt?: string;
};
type TransactionSearchParams = {
    altId: string;
    altType: string;
    contactId?: string;
    endAt?: string;
    entityId?: string;
    entitySourceSubType?: string;
    entitySourceType?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
    paymentMode?: string;
    search?: string;
    startAt?: string;
    subscriptionId?: string;
};

declare class PaymentsClient extends GhlClient {
    constructor(accessToken: string);
    createWhiteLabelIntegrationProvider(dto: CreateWhiteLabelIntegrationProviderDto): Promise<PaymentIntegrationProvider>;
    findWhiteLabelIntegrationProviders(params: IntegrationProviderSearchParams): Promise<ListIntegrationProvidersResponse>;
    findOrders(params: OrderSearchParams): Promise<ListOrdersResponse>;
    findOrderById(orderId: string, locationId: string): Promise<Order>;
    createOrderFullfillment(orderId: string, dto: CreateOrderFulfillmentDto): Promise<OrderFulfillmentResponse>;
    findOrderFullfillments(orderId: string, locationId: string): Promise<OrderFulfillmentResponse>;
    findTransactions(params: TransactionSearchParams): Promise<ListTransactionsResponse>;
    findTransactionById(transactionId: string, locationId: string): Promise<TransactionDetailsResponse>;
    findSubscriptions(params: SubscriptionSearchParams): Promise<ListSubscriptionsResponse>;
    findSubscriptionById(subscriptionId: string, locationId: string): Promise<SubscriptionDetailsReponse>;
    createCustomIntegrationProvider(locationId: string, dto: CreateCustomIntegrationProviderDto): Promise<CustomIntegrationProviderResponse>;
    removeCustomIntegrationProvider(locationId: string): Promise<SuccessDeleteResponse>;
    findCustomIntegrationConnection(locationId: string): Promise<CustomIntegrationProviderResponse>;
    connectCustomIntegration(locationId: string, dto: CustomIntegrationProviderConnectDetails): Promise<CustomIntegrationProviderResponse>;
    disconnectCustomIntegration(locationId: string, liveMode: boolean): Promise<DisconnectCustomIntegrationProviderResponse>;
}

type RecurringInterval = 'day' | 'week' | 'month' | 'year';
type RecurringData = {
    interval: RecurringInterval;
    intervalCount: number;
};
type MembershipOffer = {
    _id: string;
    label: string;
    value: number;
};
type InternalSource = 'agency_plan' | 'funnel' | 'membership';
type PriceMeta = {
    source: string;
    stripePriceId: string;
    internalSource: InternalSource;
};
type PriceType = 'one_time' | 'recurring';
type ProductSearchParams = {
    locationId: string;
    limit?: number;
    offset?: number;
    search?: string;
};
type ProductPriceSearchParams = {
    locationId: string;
    ids?: string;
    limit?: number;
    offset?: number;
};
type ProductPriceDto = {
    locationId: string;
    name: string;
    type: PriceType;
    currency: string;
    amount: number;
    recurring?: RecurringData;
    description?: string;
    membershipOffers?: MembershipOffer[];
    trialPeriod?: number;
    totalCycles?: number;
    setupFee?: number;
    variantOptionIds?: string[];
    compareAtPrice?: number;
    userId?: string;
    meta?: PriceMeta;
    trackInventory?: boolean;
    availableQuantity?: number;
    allowOutOfStockPurchases?: boolean;
};
type ProductPrice = {
    _id: string;
    membershipOffers?: MembershipOffer[];
    variantOptionIds?: string[];
    locationId: string;
    product?: string;
    userId?: string;
    name: string;
    type: PriceType;
    currency: string;
    amount: number;
    recurring?: RecurringData;
    createdAt?: string;
    updatedAt?: string;
    compareAtPrice?: number;
    trackInventory?: boolean;
    availableQuantity?: number;
    allowOutOfStockPurchases?: boolean;
};
type ListProductPricesResponse = {
    prices: ProductPrice[];
    total: number;
};
type ProductVariantOption = {
    id: string;
    name: string;
};
type ProductVariant = {
    id: string;
    name: string;
    options: ProductVariantOption[];
};
type ProductMedia = {
    id: string;
    title: string;
    url: string;
    type: 'image' | 'video';
    isFeatured?: boolean;
};
type ProductType = 'DIGITAL' | 'PHYSICAL' | 'SERVICE';
type Product = {
    _id: string;
    description?: string;
    variants: ProductVariant[];
    medias: ProductMedia[];
    locationId: string;
    name: string;
    productType: ProductType;
    availableInStore?: boolean;
    userId?: string;
    createdAt: string;
    updatedAt: string;
    statementDescriptor?: string;
    image?: string;
};
type ProductsDeleteResponse = {
    status: boolean;
};
type ProductDto = {
    locationId: string;
    name: string;
    description?: string;
    productType: ProductType;
    image?: string;
    statementDescriptor?: string;
    availableInStore?: boolean;
    medias?: ProductMedia[];
    variants: ProductVariant[];
};
type ListProductStats = {
    total: number;
};
type ListProductsResponse = {
    products: Product[];
    total: ListProductStats;
};

declare class ProductsClient extends GhlClient {
    constructor(accessToken: string);
    findById(productId: string, locationId: string): Promise<Product>;
    remove(productId: string, locationId: string): Promise<ProductsDeleteResponse>;
    update(productId: string, dto: ProductDto): Promise<Product>;
    create(dto: ProductDto): Promise<Product>;
    find(params: ProductSearchParams): Promise<ListProductsResponse>;
    createPrice(productId: string, dto: ProductPriceDto): Promise<ProductPrice>;
    findPrices(productId: string, params: ProductPriceSearchParams): Promise<ListProductPricesResponse>;
    findPriceById(productId: string, priceId: string, locationId: string): Promise<ProductPrice>;
    updatePrice(productId: string, priceId: string, dto: ProductPriceDto): Promise<ProductPrice>;
    removePrice(productId: string, priceId: string, locationId: string): Promise<ProductsDeleteResponse>;
}

type SaasSubscriptionDto = {
    subscriptionId: string;
    customerId: string;
    companyId: string;
};
type SaasSubscriptionResponse = {
    message: string;
    status: number;
    data: string[];
    traceId: string;
};
type EnableSaasSubscriptionDto = {
    stripeAccountId: string;
    name: string;
    email: string;
    stripeCustomerId: string;
    companyId: string;
};
type RebillingProduct = 'contentAI' | 'workflow_premium_actions' | 'workflow_ai' | 'conversationAI' | 'whatsApp' | 'reviewsAI' | 'Phone' | 'Email';
type RebillingConfig = {
    optIn: boolean;
    enabled: boolean;
    markup: number;
};
type SaasRebillingDto = {
    locationIds: string[];
    product: RebillingProduct;
    config: RebillingConfig;
};

declare class SaasClient extends GhlClient {
    constructor(accessToken: string);
    findLocations(params: SaasSubscriptionDto): Promise<SaasSubscriptionResponse>;
    update(locationId: string, dto: SaasSubscriptionDto): Promise<unknown>;
    bulkDisable(companyId: string, locationIds: string[]): Promise<unknown>;
    enable(locationId: string, dto: EnableSaasSubscriptionDto): Promise<unknown>;
    pause(locationId: string, companyId: string, paused: boolean): Promise<unknown>;
    updateRebilling(companyId: string, dto: SaasRebillingDto): Promise<unknown>;
}

type Snapshot = {
    id?: string;
    name?: string;
    type?: string;
};
type ListSnapshotsResponse = {
    snapshots?: Snapshot[];
};
type ShareType = 'link' | 'permanent_link' | 'agency_link' | 'location_link';
type SnapshotShareLinkDto = {
    snapshot_id: string;
    share_type: ShareType;
    relationship_number?: string;
    share_location_id?: string;
};
type SnapshotShareLinkResponse = {
    id?: string;
    shareLink?: string;
};
type SnapshotStatusSearchParams = {
    companyId: string;
    from: string;
    lastDoc: string;
    limit: string;
    to: string;
};
type SnapshotStatus = {
    id?: string;
    locationId?: string;
    status?: string;
    dateAdded?: string;
};
type SnapshotStatusResponse = {
    data: SnapshotStatus[];
};
type SnapshotAssetsStatus = {
    id?: string;
    locationId?: string;
    status?: string;
    completed?: string[];
    pending?: string[];
};
type SnapshotAssetsStatusResponse = {
    data: SnapshotAssetsStatus[];
};

declare class SnapshotsClient extends GhlClient {
    constructor(accessToken: string);
    find(companyId: string): Promise<ListSnapshotsResponse>;
    createShareLink(companyId: string, dto: SnapshotShareLinkDto): Promise<SnapshotShareLinkResponse>;
    findPushBetweenDates(snapshotId: string, params: SnapshotStatusSearchParams): Promise<SnapshotStatusResponse>;
    findLastPushByLocationId(locationId: string, snapshotId: string, companyId: string): Promise<SnapshotAssetsStatus>;
}

type SurveySearchParams = {
    limit?: number;
    skip?: number;
    type?: string;
    locationId: string;
};
type SurveySubmissionSearchParams = {
    endAt?: string;
    limit?: number;
    page?: number;
    q?: string;
    startAt?: string;
    surveyId?: string;
    locationId: string;
};
type Survey = {
    id?: string;
    name?: string;
    locationId?: string;
};
type ListSurveysResponse = {
    surveys: Survey[];
    total: number;
};
type SurveyPageDetails = {
    url?: string;
    title?: string;
};
type SurveyContactSessionIds = {
    ids: string[];
};
type SurveyEventData = {
    fbc?: string;
    fbp?: string;
    page?: SurveyPageDetails;
    domain?: string;
    medium?: string;
    source?: string;
    version?: string;
    adSource?: string;
    mediumId?: string;
    parentId?: string;
    referrer?: string;
    fbEventId?: string;
    timestamp?: number;
    parentName?: string;
    fingerprint?: string;
    pageVisitType?: string;
    contactSessionIds?: SurveyContactSessionIds | null;
};
type OtherSurveyData = {
    [key: string]: any;
    eventData?: SurveyEventData;
    fieldsOriSequance?: string[];
};
type SurveySubmission = {
    id?: string;
    contactId?: string;
    createdAt?: string;
    surveyId?: string;
    name?: string;
    email?: string;
    others?: OtherSurveyData;
};
type SurveySubmissionsMeta = {
    total?: number;
    currentPage?: number;
    nextPage?: number | null;
    prevPage?: number | null;
};
type ListSurveySubmissionsResponse = {
    submissions: SurveySubmission[];
    meta: SurveySubmissionsMeta;
};

declare class SurveysClient extends GhlClient {
    constructor(accessToken: string);
    find(params: SurveySearchParams): Promise<ListSurveysResponse>;
    findSubmissions(params: SurveySubmissionSearchParams): Promise<ListSurveySubmissionsResponse>;
}

type UserPermissions = {
    campaignsEnabled?: boolean;
    campaignsReadOnly?: boolean;
    contactsEnabled?: boolean;
    workflowsEnabled?: boolean;
    workflowsReadOnly?: boolean;
    triggersEnabled?: boolean;
    funnelsEnabled?: boolean;
    websitesEnabled?: boolean;
    opportunitiesEnabled?: boolean;
    dashboardStatsEnabled?: boolean;
    bulkRequestsEnabled?: boolean;
    appointmentsEnabled?: boolean;
    reviewsEnabled?: boolean;
    onlineListingsEnabled?: boolean;
    phoneCallEnabled?: boolean;
    conversationsEnabled?: boolean;
    assignedDataOnly?: boolean;
    adwordsReportingEnabled?: boolean;
    membershipEnabled?: boolean;
    facebookAdsReportingEnabled?: boolean;
    attributionsReportingEnabled?: boolean;
    settingsEnabled?: boolean;
    tagsEnabled?: boolean;
    leadValueEnabled?: boolean;
    marketingEnabled?: boolean;
    agentReportingEnabled?: boolean;
    botService?: boolean;
    socialPlanner?: boolean;
    bloggingEnabled?: boolean;
    invoiceEnabled?: boolean;
    affiliateManagerEnabled?: boolean;
    contentAiEnabled?: boolean;
    refundsEnabled?: boolean;
    recordPaymentEnabled?: boolean;
    cancelSubscriptionEnabled?: boolean;
    paymentsEnabled?: boolean;
    communitiesEnabled?: boolean;
    exportPaymentsEnabled?: boolean;
};
type UserRole = 'admin' | 'user';
type UserType = 'account' | 'agency';
type UserRoleDetails = {
    type?: UserType;
    role?: UserRole;
    locationIds?: string[];
    restrictSubAccount?: boolean;
};
type UserScope = 'campaigns.readonly' | 'campaigns.write' | 'calendars/events.write' | 'calendars/events.readonly' | 'contacts.write' | 'contacts/bulkActions.write' | 'workflows.readonly' | 'workflows.write' | 'triggers.write' | 'funnels.write' | 'websites.write' | 'medias.write' | 'medias.readonly' | 'opportunities.write' | 'opportunities/leadValue.readonly' | 'reporting/phone.readonly' | 'reporting/adwords.readonly' | 'reporting/facebookAds.readonly' | 'reporting/attributions.readonly' | 'reporting/agent.write' | 'reporting/agent.readonly' | 'reporting/reports.write' | 'reporting/reports.readonly' | 'payments.write' | 'payments/refunds.write' | 'payments/records.write' | 'payments/exports.write' | 'payments/subscriptionsCancel.write' | 'invoices.write' | 'invoices.readonly' | 'invoices/schedule.readonly' | 'invoices/schedule.write' | 'invoices/template.readonly' | 'invoices/template.write' | 'reputation/review.write' | 'reputation/listing.write' | 'conversations.write' | 'conversations.readonly' | 'conversations/message.readonly' | 'conversations/message.write' | 'contentAI.write' | 'dashboard/stats.readonly' | 'locations/tags.write' | 'locations/tags.readonly' | 'marketing.write' | 'eliza.write' | 'settings.write' | 'socialplanner/post.write' | 'marketing/affiliate.write' | 'blogs.write' | 'membership.write' | 'communities.write' | 'certificates.write' | 'certificates.readonly' | 'adPublishing.write' | 'adPublishing.readonly' | 'private-integration-location.readonly' | 'private-integration-location.write' | 'private-integration-company.readonly' | 'private-integration-company.write' | 'native-integrations.readonly' | 'native-integrations.write' | 'wordpress.write' | 'wordpress.read' | 'custom-menu-link.readonly' | 'custom-menu-link.write';
type User = {
    id?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    extension?: string;
    permissions?: UserPermissions;
    scopes?: UserScope;
    roles?: UserRoleDetails;
    deleted?: boolean;
    lcPhone?: object;
};
type SearchUsersResponse = {
    users: User[];
    count: number;
};
type ListUsersResponse = {
    users: User[];
};
type CreateUserDto = {
    companyId: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    phone?: string;
    type: UserType;
    role: UserRole;
    isEjectedUser: boolean;
    locationIds: string[];
    permissions?: UserPermissions;
    scopes?: UserScope;
    scopesAssignedToOnly?: UserScope;
    profilePhoto?: string;
};
type UpdateUserDto = {
    companyId?: string;
    isEjectedUser?: boolean;
    firstName?: string;
    lastName?: string;
    email?: string;
    emailChangeOTP?: string;
    password?: string;
    phone?: string;
    type?: UserType;
    role?: UserRole;
    locationIds?: string[];
    permissions?: UserPermissions;
    scopes?: UserScope;
    scopesAssignedToOnly?: UserScope;
    profilePhoto?: string;
};
type DeleteUserResponse = {
    succeeded: boolean;
    message: string;
};
type UserSearchParams = {
    companyId: string;
    ids?: string;
    enabled2waySync?: boolean;
    limit?: string;
    locationId?: string;
    query?: string;
    role?: UserRole;
    skip?: string;
    sort?: string;
    sortDirection?: string;
    type?: UserType;
};

declare class UsersClient extends GhlClient {
    constructor(accessToken: string);
    findById(userId: string): Promise<User>;
    update(userId: string, dto: UpdateUserDto): Promise<User>;
    remove(userId: string): Promise<DeleteUserResponse>;
    findByLocation(locationId: string): Promise<ListUsersResponse>;
    create(dto: CreateUserDto): Promise<User>;
    search(params: UserSearchParams): Promise<SearchUsersResponse>;
}

type Workflow = {
    id?: string;
    name?: string;
    status?: string;
    version?: number;
    createdAt?: string;
    updatedAt?: string;
    locationId?: string;
};
type ListWorkflowsResponse = {
    workflows: Workflow[];
};

declare class WorkflowsClient extends GhlClient {
    constructor(accessToken: string);
    findByLocationId(locationId: string): Promise<ListWorkflowsResponse>;
}

export { type AmountSummary, type AppointmentCreateUpdateDto, type AppointmentCreateUpdateResponse, type AppointmentNote, type AppointmentNoteDto, type AppointmentNoteResponse, type BlockSlotCreateUpdateResponse, type BlogsAuthorSocialsSchema, type BlogsAuthorsSchema, type BlogsCategorySchema, BlogsClient, type BlogsSearchParams, type Business, type BusinessContactSearchParams, BusinessesClient, type Calendar, type CalendarAppointmentEditSchemaDTO, type CalendarAvailability, type CalendarBaseCreateUpdateDto, type CalendarBaseDto, type CalendarCreateNonUserAssignedDto, type CalendarCreateUserAssignedDto, type CalendarDay, type CalendarEvent, type CalendarEventSearchParams, type CalendarEventType, type CalendarGetFreeSlots, type CalendarGroup, type CalendarGroupStatusUpdateParams, type CalendarHour, type CalendarLookBusyConfiguration, type CalendarMeetingLocationTypes, type CalendarNonUserAssignedDTO, type CalendarNonUserAssignedType, type CalendarNotification, type CalendarOpenHour, type CalendarRecurring, type CalendarRecurringCount, type CalendarResourceResponse, type CalendarResourceSearchParams, type CalendarResourceType, type CalendarSearchParams, type CalendarSlotsSchema, type CalendarTeamMember, type CalendarTeamMemberPriorityTypes, type CalendarUpdateAvailabilityDTO, type CalendarUserAssignedDTO, type CalendarUserAssignedType, type CalendarWidgetType, CalendarsClient, type Campaign, type CampaignSearchParams, CampaignsClient, type CampaignsResponse, type ChannelDNDSettings, type CheckSlugDto, type CheckSlugResponse, type CompaniesAgencyProAddOn, CompaniesAgencyProAddonActivePlansEnum, type CompaniesBillingInfo, CompaniesClient, type CompaniesDowngrade, type CompaniesEndTrial, type CompaniesIOnboarding, type CompaniesPauseSubscriptionInfo, type CompaniesReactivationAttempt, type Company, type CompanyAccessCodeResponse, type CompanyResponse, type CompanyScope, CompanySubscriptionStatusEnum, type Contact, type ContactActionResponse, type ContactAddFollowersResponse, type ContactAttributionSource, type ContactBulkUpateResponse, type ContactBusinessUpdateDto, type ContactCreateSuccessfulResponseSchema, type ContactCustomField, type ContactCustomFieldsInputArray, type ContactCustomFieldsInputObject, type ContactCustomFieldsInputString, type ContactDndSetting, type ContactDndSettings, ContactDndStatus, type ContactEvent, type ContactInboundDndSetting, type ContactInboundDndSettings, type ContactLegacySearchParams, type ContactNote, type ContactNoteDto, type ContactNoteResponse, type ContactOpportunity, type ContactRemoveFollowersResponse, type ContactResponse, type ContactSearchOptions, type ContactSearchResponse, type ContactSearchResult, type ContactTagsDto, type ContactTask, type ContactTaskResponse, type ContactUpdateSuccessfulResponseSchema, ContactsClient, type ContactsDuplicateSearchResponse, type ContactsMetaSchema, type ConvStartAfterArrayNumber, type ConvStartAfterDate, type Conversation, type ConversationActionResponse, type ConversationCallData, type ConversationCallStatus, type ConversationCancelScheduledResponse, type ConversationDirection, type ConversationEmailResponse, type ConversationError, type ConversationInboundMessageDto, type ConversationMessageDto, type ConversationMessageResponse, type ConversationMessageType, ConversationMessageTypeNumbered, type ConversationMessageTypeString, type ConversationOutboundMessageDto, type ConversationProcessMessageResponse, type ConversationReplyMode, type ConversationResponse, type ConversationSchema, type ConversationSearchParams, type ConversationSearchResponse, type ConversationSource, type ConversationStatus, type ConversationType, type ConversationUpdateMessageStatusDto, type ConversationUpdateMessageStatusOptions, type ConversationUploadFilesDto, type ConversationUploadFilesErrorResponseDto, type ConversationUploadFilesResponse, ConversationsClient, type ConverstationMessageTranscriptionResponse, type CourseCategoryInterface, type CourseContentType, type CourseFileType, type CourseInstructorDetails, type CoursePostInterface, type CoursePostMaterialInterface, type CourseProductInterface, type CoursePublicExporterPayload, type CourseSubCategoryInterface, type CourseVisibility, CoursesClient, type CreateBlockSlotDto, type CreateBusinessDto, type CreateCalendarDto, type CreateCalendarGroupDto, type CreateCalendarResourceDto, type CreateContactDto, type CreateContactTaskDto, type CreateConversationDto, type CreateCustomFieldDto, type CreateCustomFieldFolderDto, type CreateCustomIntegrationProviderDto, type CreateCustomMenuDto, type CreateCustomObjectDto, type CreateCustomObjectRecordDto, type CreateEmailTemplateDto, type CreateEmailTemplateResponse, type CreateFunnelRedirectDto, type CreateInvoiceDto, type CreateInvoiceResponse, type CreateInvoiceScheduleDto, type CreateInvoiceTemplateDto, type CreateLinkDto, type CreateLocationCustomFieldDto, type CreateLocationDto, type CreateOrderFulfillmentDto, type CreatePostDto, type CreatePostResponse, type CreateUpdateBusinessResponse, type CreateUpdateCalendarGroupResponse, type CreateUpdateLocationResponse, type CreateUserDto, type CreateWhiteLabelIntegrationProviderDto, type CustomField, type CustomFieldFolder, type CustomFieldOption, type CustomFieldResponse, CustomFieldsClient, type CustomFileInterface, type CustomIntegrationProviderConnectDetails, type CustomIntegrationProviderKeys, type CustomIntegrationProviderLiveModeConnectDetails, type CustomIntegrationProviderResponse, type CustomMenu, type CustomMenuIcon, type CustomMenuOpenMode, type CustomMenuResponse, type CustomMenuSearchParams, type CustomMenuUserRole, CustomMenusClient, type CustomObject, type CustomObjectField, type CustomObjectRecord, type CustomObjectRecordMetaData, type CustomObjectRecordResponse, type CustomObjectRecordSearchResponse, type CustomObjectRecordSearchResult, type CustomObjectResponse, type CustomObjectSchemaResponse, type CustomObjectTypeUpdateDirective, type DNDSettings, type DeleteCustomIntegrationProviderResponse, type DeleteCustomMenuResponse, type DeleteCustomObjectRecordResponse, type DeleteEmailTemplateResponse, type DeleteFunnelRedirectResponse, type DeleteInvoiceResponse, type DeleteLocationResponse, type DeleteUserResponse, type DisconnectCustomIntegrationProviderResponse, type DisplayPropertyDetails, type DuplicateContactSearchParams, type EmailBuilderJSONMapper, type EmailBuilderVersion, type EmailImportProvider, type EmailParams, type EmailTemplateSearchParams, type EmailType, type EmailVerificationDto, type EmailVerificationResponse, type EmailVerificationResult, type EmailVerificationRisk, EmailsClient, type EmailsTemplateSettings, type EnableSaasSubscriptionDto, type FetchEmailTemplateResponse, type FindContactsResponse, type Form, type FormSearchParams, type FormSubmission, type FormSubmissionSearchParams, FormsClient, type FormsContactSessionIds, type FormsEventData, type FormsPageDetailsSchema, type Funnel, type FunnelPageCountParams, type FunnelPageCountResponse, type FunnelPageResponse, type FunnelPageSearchParams, type FunnelRedirect, type FunnelRedirectAction, type FunnelRedirectResponse, type FunnelRedirectSearchParams, type FunnelSearchParams, type FunnelStep, FunnelsClient, type GenerateInvoiceNumberResponse, type GetAccessCodeBaseSchema, type GetAccessTokenDto, type GetAccessTokenResponse, type GetBusinessResponse, type GetCalendarEventResponse, type GetCalendarResponse, type GetCalendarSlotsResponse, type GetInstalledLocationsParams, type GetInstalledLocationsResponse, type GetLocationTokenDto, type GetLocationTokenResponse, type Hour, type InstalledLocationSchema, type IntegrationProviderSearchParams, type InternalSource, type Inverval, type InvoiceAddress, type InvoiceAddtitionalEmails, type InvoiceAutoPaymentDetails, type InvoiceBusinessDetails, type InvoiceCard, type InvoiceCheque, type InvoiceContactDetails, type InvoiceDiscount, type InvoiceDiscountUpdate, type InvoiceItem, type InvoiceItemDto, type InvoiceResponse, type InvoiceScheduleResponse, type InvoiceScheduleSearchParams, type InvoiceSenderConfig, type InvoiceStatusOptions, type InvoiceTax, type InvoiceTemplateResponse, type InvoicesAutoPaymentDto, InvoicesClient, type InvoicesSchedule, type InvoicesSearchParams, type InvoicesSendTo, LCEmailClient, type Labels, type LeadConnectorRecommendation, type Link, type LinkResponse, LinksClient, type ListAppointmentNotesResponse, type ListAuthorsResponse, type ListBusinessesResponse, type ListCalendarEventsResponse, type ListCalendarGroupsResponse, type ListCalendarsResponse, type ListCategoriesResponse, type ListContactEventsResponse, type ListContactNotesResponse, type ListContactTaskResponse, type ListConversationMessagesResponse, type ListCustomFieldsResponse, type ListCustomMenusResponse, type ListCustomObjectsResponse, type ListFormSubmissionsResponse, type ListFormSubmissionsResponseMeta, type ListFormsResponse, type ListFunnelRedirectsResponse, type ListFunnelsResponse, type ListIntegrationProvidersResponse, type ListInvoiceSchedulesResponse, type ListInvoiceTemplatesResponse, type ListInvoicesResponse, type ListLinksResponse, type ListLocationCustomFieldsResponse, type ListLocationCustomValuesResponse, type ListLocationTagsResponse, type ListLocationTasksResponse, type ListLocationTemplatesResponse, type ListLocationsResponse, type ListMediaFilesResponse, type ListOrdersResponse, type ListProductPricesResponse, type ListProductStats, type ListProductsResponse, type ListSnapshotsResponse, type ListSubscriptionsResponse, type ListSurveySubmissionsResponse, type ListSurveysResponse, type ListTransactionsResponse, type ListUsersResponse, type ListWorkflowsResponse, type Location, type LocationAccessCodeResponse, type LocationBusiness, type LocationCustomField, type LocationCustomFieldFileFormat, type LocationCustomFieldModel, type LocationCustomFieldResponse, type LocationCustomFieldTextBoxListOptions, type LocationCustomFieldType, type LocationCustomValue, type LocationCustomValueDto, type LocationCustomValueResponse, type LocationDetails, type LocationEmailTemplate, type LocationEmailTemplateDetails, type LocationProspectInfo, type LocationResponse, type LocationSMSTemplate, type LocationSMSTemplateDetails, type LocationScope, type LocationSearchParams, type LocationSettings, type LocationSocial, type LocationTag, type LocationTagResponse, type LocationTask, type LocationTaskContact, type LocationTaskSearchParams, type LocationTaskUser, type LocationTemplateSearchParams, type LocationTimeZonesResponse, LocationsClient, type LocationsFileInterface, type LocationsFileUploadBody, type LocationsFileUploadResponse, type LocationsFileuploadMeta, type LocationsMailgunSchema, type LocationsSnapshotPutSchema, type LocationsTwilioSchema, MediaClient, type MediaFileDetails, type MediaFileSearchParams, type MembershipOffer, type Minute, OAuthClient, type OAuthSearchParams, ObjectsClient, OpportunityStatus, type Option, type Order, type OrderContactSnapshot, type OrderCoupon, type OrderFulfillmentData, type OrderFulfillmentItem, type OrderFulfillmentResponse, type OrderFulfillmentTracking, type OrderItem, type OrderItemProduct, type OrderMetaData, type OrderResponse, type OrderSearchParams, type OrderSource, type OrderSourceMetaData, type OrderSourceSubType, type OrderSourceType, type OtherFormFields, type OtherSurveyData, type PaymentIntegrationProvider, type PaymentMembershipOffer, type PaymentPriceType, type PaymentProduct, type PaymentProductMediaDto, type PaymentProductMediaType, PaymentsClient, type PaymentsProductVariantOptionSchema, type PaymentsProductVariantSchema, type PriceMeta, type PriceResponse, type PriceType, type Product, type ProductDto, type ProductLabel, type ProductMedia, type ProductPrice, type ProductPriceDto, type ProductPriceSearchParams, type ProductSEO, type ProductSearchParams, type ProductType, type ProductVariant, type ProductVariantOption, ProductsClient, type ProductsDeleteResponse, type RebillingConfig, type RebillingProduct, type RecordInvoicePaymentDto, type RecordInvoicePaymentResponse, type RecurringData, type RecurringInterval, type RecurringPayment, type RemoveCustomFieldResponse, SaasClient, type SaasRebillingDto, type SaasSubscriptionDto, type SaasSubscriptionResponse, type Scope, type SearchActiveWorkflows, type SearchActiveWorkflowsExists, type SearchActiveWorkflowsValue, type SearchAddress, type SearchAddressExists, type SearchAddressValue, type SearchAssignedTo, type SearchAssignedToExists, type SearchAssignedToValue, type SearchBusinessName, type SearchBusinessNameExists, type SearchBusinessNameValue, type SearchCity, type SearchCityExists, type SearchCityValue, type SearchCompanyName, type SearchCompanyNameExists, type SearchCompanyNameValue, type SearchConfigDates, type SearchContactId, type SearchContactType, type SearchContactTypeExists, type SearchContactTypeValue, type SearchCountry, type SearchCountryExists, type SearchCountryValue, type SearchCustomField, type SearchCustomFieldType1, type SearchCustomFieldType1Exists, type SearchCustomFieldType1Value, type SearchCustomFieldType2, type SearchCustomFieldType2Exists, type SearchCustomFieldType2Value, type SearchCustomFieldType3, type SearchCustomFieldType3Exists, type SearchCustomFieldType3Range, type SearchCustomFieldType3Value, type SearchCustomFieldType4, type SearchCustomFieldType4Exists, type SearchCustomFieldType4Range, type SearchCustomFieldType5, type SearchCustomFieldType5Exists, type SearchCustomFieldType5Value, type SearchCustomObjectRecordsDto, type SearchDND, type SearchDNDExists, type SearchDNDValue, type SearchDateAdded, type SearchDateAddedExists, type SearchDateAddedRange, type SearchDateUpdated, type SearchDateUpdatedExists, type SearchDateUpdatedRange, type SearchEmail, type SearchEmailExists, type SearchEmailValue, type SearchFilter, type SearchFilterConfig, SearchFilterOpporators, type SearchFinishedWorkflows, type SearchFinishedWorkflowsExists, type SearchFinishedWorkflowsValue, type SearchFirstNameLower, type SearchFirstNameLowerExists, type SearchFirstNameLowerValue, type SearchFollowers, type SearchFollowersExists, type SearchFollowersValue, type SearchIsValidWhatsapp, type SearchIsValidWhatsappExists, type SearchIsValidWhatsappValue, type SearchLastAppointment, type SearchLastAppointmentExists, type SearchLastAppointmentRange, type SearchLastEmailClickedDate, type SearchLastEmailClickedDateExists, type SearchLastEmailClickedDateRange, type SearchLastEmailOpenedDate, type SearchLastEmailOpenedDateExists, type SearchLastEmailOpenedDateRange, type SearchLastNameLower, type SearchLastNameLowerExists, type SearchLastNameLowerValue, type SearchOpportunity, type SearchOpportunityStatus, type SearchOpportunityStatusExists, type SearchOpportunityStatusValue, type SearchPhone, type SearchPhoneExists, type SearchPhoneValue, type SearchPipelineId, type SearchPipelineIdExists, type SearchPipelineIdValue, type SearchPipelineStageId, type SearchPipelineStageIdExists, type SearchPipelineStageIdValue, type SearchPostalCode, type SearchPostalCodeExists, type SearchPostalCodeValue, type SearchSort, type SearchSource, type SearchSourceExists, type SearchSourceValue, type SearchState, type SearchStateExists, type SearchStateValue, type SearchTags, type SearchTagsExists, type SearchTagsValue, type SearchTimezone, type SearchTimezoneExists, type SearchTimezoneValue, type SearchUsersResponse, type SearchValidEmail, type SearchValidEmailExists, type SearchValidEmailValue, type SearchWebsite, type SearchWebsiteExists, type SearchWebsiteValue, type SendConversationMessageResponse, type SendInvoiceDto, type SendInvoiceResponse, type ShareType, type Snapshot, type SnapshotAssetsStatus, type SnapshotAssetsStatusResponse, type SnapshotShareLinkDto, type SnapshotShareLinkResponse, type SnapshotStatus, type SnapshotStatusResponse, type SnapshotStatusSearchParams, SnapshotsClient, type SubscriptionAutoPayment, type SubscriptionCoupon, type SubscriptionData, type SubscriptionDetailsReponse, type SubscriptionRecurringProduct, type SubscriptionSchedule, type SubscriptionSearchParams, type SubscriptionSnapshot, type Survey, type SurveyContactSessionIds, type SurveyEventData, type SurveyPageDetails, type SurveySearchParams, type SurveySubmission, type SurveySubmissionSearchParams, type SurveySubmissionsMeta, SurveysClient, type Text2PayInvoice, type Text2PayInvoiceDto, type Text2PayResponse, type TotalInvoiceSummary, type TransactionChargeSnapshot, type TransactionData, type TransactionDetailsResponse, type TransactionMethods, type TransactionPaymentProvider, type TransactionQboDetails, type TransactionSearchParams, type USBankAccount, type UpdateBlockSlotDto, type UpdateBusinessDto, type UpdateCalendarDto, type UpdateCalendarGroupDto, type UpdateCalendarGroupStatusResponse, type UpdateCalendarResourceDto, type UpdateContactDto, type UpdateContactResponse, type UpdateContactTaskDto, type UpdateConversationDto, type UpdateCustomFieldDto, type UpdateCustomFieldFolderDto, type UpdateCustomMenuDto, type UpdateCustomMenuResponse, type UpdateCustomObjectDto, type UpdateCustomObjectRecordDto, type UpdateEmailTemplateDto, type UpdateEmailTemplateResponse, type UpdateFunnelRedirectDto, type UpdateInvoiceDto, type UpdateInvoiceResponse, type UpdateInvoiceScheduleDto, type UpdateInvoiceTemplateDto, type UpdateLinkDto, type UpdateLocationCustomFieldDto, type UpdateLocationDto, type UpdatePostDto, type UpdatePostResponse, type UpdateUserDto, type UploadFileDto, type UploadFileResponse, type UpsertContactResponse, type User, type UserPermissions, type UserRole, type UserRoleDetails, type UserScope, type UserSearchParams, type UserType, UsersClient, type ValidateCalendarGroupSlugDto, type ValidateCalendarGroupSlugResponse, type VoidInvoiceResponse, type WhiteListProviderType, type Workflow, WorkflowsClient };
