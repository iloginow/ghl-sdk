export type StrictOmit<T, K extends keyof T> = Omit<T, K>;

export type BadRequestResponse = {
  statusCode?: number /** Status Code (400) */;
  message?: string /** Error Message (Bad Request) */;
};

export type UnauthorizedResponse = {
  statusCode?: number /** Status Code (401) */;
  message?: string /** Error Message (Invalid token: access token is invalid) */;
  error?: string /** Error Type (Unauthorized) */;
};

export type UnprocessableResponse = {
  statusCode?: number /** Status Code (422) */;
  message?: string /** Error Message (["Unprocessable Entity"]) */;
  error?: string /** Error Type (Unprocessable Entity) */;
};

export type SuccessDeleteResponse = {
  success?: boolean /** Success Status (true) */;
};

export type SuccededDeleteResponse = {
  succeded?: boolean /** Success Status (true) */;
};

type IntervalType =
  | 'yearly'
  | 'monthly'
  | 'weekly'
  | 'daily'
  | 'hourly'
  | 'minutely'
  | 'secondly';

type DayOfMonth =
  | -1
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28;

type DayOfWeek = 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su';

type NumOfWeek = -1 | 1 | 2 | 3 | 4;

type MonthOfYear =
  | 'jan'
  | 'feb'
  | 'mar'
  | 'apr'
  | 'may'
  | 'jun'
  | 'jul'
  | 'aug'
  | 'sep'
  | 'oct'
  | 'nov'
  | 'dec';

export type CustomRRuleOptions = {
  intervalType: IntervalType /** Interval Type (monthly) */;
  interval: number /** Interval (2) */;
  startDate: string /** Start Date (2023-01-01) */;
  startTime?: string /** Start Time (20:45:00) */;
  endDate?: string /** End Date (2029-11-01) */;
  endTime?: string /** End Time (18:45:00) */;
  dayOfMonth?: DayOfMonth /** Day of Month (15) */;
  dayOfWeek?: DayOfWeek /** Day of Week (mo) */;
  numOfWeek?: NumOfWeek /** Number of Week (1) */;
  monthOfYear?: MonthOfYear /** Month of Year (jan) */;
  count?: number /** Count (10) */;
  daysBefore?: number /** Days Before (5) */;
};

export type ScheduleOptions = {
  executeAt: string /** Execute At (2023-01-01T20:45:00) */;
  rrule: CustomRRuleOptions /** Custom RRule Options */;
};

export enum CountryCodes {
  Afghanistan = 'AF',
  AlandIslands = 'AX',
  Albania = 'AL',
  Algeria = 'DZ',
  AmericanSamoa = 'AS',
  AndorrA = 'AD',
  Angola = 'AO',
  Anguilla = 'AI',
  Antarctica = 'AQ',
  AntiguaAndBarbuda = 'AG',
  Argentina = 'AR',
  Armenia = 'AM',
  Aruba = 'AW',
  Australia = 'AU',
  Austria = 'AT',
  Azerbaijan = 'AZ',
  Bahamas = 'BS',
  Bahrain = 'BH',
  Bangladesh = 'BD',
  Barbados = 'BB',
  Belarus = 'BY',
  Belgium = 'BE',
  Belize = 'BZ',
  Benin = 'BJ',
  Bermuda = 'BM',
  Bhutan = 'BT',
  Bolivia = 'BO',
  BosniaAndHerzegovina = 'BA',
  Botswana = 'BW',
  BouvetIsland = 'BV',
  Brazil = 'BR',
  BritishIndianOceanTerritory = 'IO',
  BruneiDarussalam = 'BN',
  Bulgaria = 'BG',
  BurkinaFaso = 'BF',
  Burundi = 'BI',
  Cambodia = 'KH',
  Cameroon = 'CM',
  Canada = 'CA',
  CapeVerde = 'CV',
  CaymanIslands = 'KY',
  CentralAfricanRepublic = 'CF',
  Chad = 'TD',
  Chile = 'CL',
  China = 'CN',
  ChristmasIsland = 'CX',
  CocosKeelingIslands = 'CC',
  Colombia = 'CO',
  Comoros = 'KM',
  Congo = 'CG',
  CongoTheDemocraticRepublicOfThe = 'CD',
  CookIslands = 'CK',
  CostaRica = 'CR',
  CoteDIvoire = 'CI',
  Croatia = 'HR',
  Cuba = 'CU',
  Cyprus = 'CY',
  CzechRepublic = 'CZ',
  Denmark = 'DK',
  Djibouti = 'DJ',
  Dominica = 'DM',
  DominicanRepublic = 'DO',
  Ecuador = 'EC',
  Egypt = 'EG',
  ElSalvador = 'SV',
  EquatorialGuinea = 'GQ',
  Eritrea = 'ER',
  Estonia = 'EE',
  Ethiopia = 'ET',
  FalklandIslandsMalvinas = 'FK',
  FaroeIslands = 'FO',
  Fiji = 'FJ',
  Finland = 'FI',
  France = 'FR',
  FrenchGuiana = 'GF',
  FrenchPolynesia = 'PF',
  FrenchSouthernTerritories = 'TF',
  Gabon = 'GA',
  Gambia = 'GM',
  Georgia = 'GE',
  Germany = 'DE',
  Ghana = 'GH',
  Gibraltar = 'GI',
  Greece = 'GR',
  Greenland = 'GL',
  Grenada = 'GD',
  Guadeloupe = 'GP',
  Guam = 'GU',
  Guatemala = 'GT',
  Guernsey = 'GG',
  Guinea = 'GN',
  GuineaBissau = 'GW',
  Guyana = 'GY',
  Haiti = 'HT',
  HeardIslandAndMcdonaldIslands = 'HM',
  HolySeeVaticanCityState = 'VA',
  Honduras = 'HN',
  HongKong = 'HK',
  Hungary = 'HU',
  Iceland = 'IS',
  India = 'IN',
  Indonesia = 'ID',
  IranIslamicRepublicOf = 'IR',
  Iraq = 'IQ',
  Ireland = 'IE',
  IsleOfMan = 'IM',
  Isreal = 'IL',
  Italy = 'IT',
  Jamaica = 'JM',
  Japan = 'JP',
  Jersey = 'JE',
  Jordan = 'JO',
  Kazakhstan = 'KZ',
  Kenya = 'KE',
  Kiribati = 'KI',
  KoreaDemocraticPeoplesRepublic = 'KP',
  KoreaRepublicOf = 'KR',
  Kosovo = 'XK',
  Kuwait = 'KW',
  Kyrgyzstan = 'KG',
  LaoPeoplesDemocraticRepublic = 'LA',
  Latvia = 'LV',
  Lebanon = 'LB',
  Lesotho = 'LS',
  Liberia = 'LR',
  LibyanArabJamahiriya = 'LY',
  Liechtenstein = 'LI',
  Lithuania = 'LT',
  Luxembourg = 'LU',
  Macao = 'MO',
  MacedoniaTheFormerYugoslavRepublicOf = 'MK',
  Madagascar = 'MG',
  Malawi = 'MW',
  Malaysia = 'MY',
  Maldives = 'MV',
  Mali = 'ML',
  Malta = 'MT',
  MarshallIslands = 'MH',
  Martinique = 'MQ',
  Mauritania = 'MR',
  Mauritius = 'MU',
  Mayotte = 'YT',
  Mexico = 'MX',
  MicronesiaFederatedStatesOf = 'FM',
  MoldovaRepublicOf = 'MD',
  Monaco = 'MC',
  Mongolia = 'MN',
  Montenegro = 'ME',
  Montserrat = 'MS',
  Morocco = 'MA',
  Mozambique = 'MZ',
  Myanmar = 'MM',
  Namibia = 'NA',
  Nauru = 'NR',
  Nepal = 'NP',
  Netherlands = 'NL',
  NetherlandsAntilles = 'AN',
  NewCaledonia = 'NC',
  NewZealand = 'NZ',
  Nicaragua = 'NI',
  Niger = 'NE',
  Nigeria = 'NG',
  Niue = 'NU',
  NorfolkIsland = 'NF',
  NorthernMarianaIslands = 'MP',
  Norway = 'NO',
  Oman = 'OM',
  Pakistan = 'PK',
  Palau = 'PW',
  PalestinianTerritoryOccupied = 'PS',
  Panama = 'PA',
  PapuaNewGuinea = 'PG',
  Paraguay = 'PY',
  Peru = 'PE',
  Philippines = 'PH',
  Pitcairn = 'PN',
  Poland = 'PL',
  Portugal = 'PT',
  PuertoRico = 'PR',
  Qatar = 'QA',
  Reunion = 'RE',
  Romania = 'RO',
  RussianFederation = 'RU',
  Rwanda = 'RW',
  SaintHelena = 'SH',
  SaintKittsAndNevis = 'KN',
  SaintLucia = 'LC',
  SaintMartin = 'MF',
  SaintPierreAndMiquelon = 'PM',
  SaintVincentAndTheGrenadines = 'VC',
  Samoa = 'WS',
  SanMarino = 'SM',
  SaoTomeAndPrincipe = 'ST',
  SaudiArabia = 'SA',
  Senegal = 'SN',
  Serbia = 'RS',
  Seychelles = 'SC',
  SierraLeone = 'SL',
  Singapore = 'SG',
  SintMaarten = 'SX',
  Slovakia = 'SK',
  Slovenia = 'SI',
  SolomonIslands = 'SB',
  Somalia = 'SO',
  SouthAfrica = 'ZA',
  SouthGeorgiaAndTheSouthSandwichIslands = 'GS',
  Spain = 'ES',
  SriLanka = 'LK',
  Sudan = 'SD',
  Suriname = 'SR',
  SvalbardAndJanMayen = 'SJ',
  Swaziland = 'SZ',
  Sweden = 'SE',
  Switzerland = 'CH',
  SyrianArabRepublic = 'SY',
  Taiwan = 'TW',
  Tajikistan = 'TJ',
  Tanzania = 'TZ',
  Thailand = 'TH',
  TimorLeste = 'TL',
  Togo = 'TG',
  Tokelau = 'TK',
  Tonga = 'TO',
  TrinidadAndTobago = 'TT',
  Tunisia = 'TN',
  Turkey = 'TR',
  Turkmenistan = 'TM',
  TurksAndCaicosIslands = 'TC',
  Tuvalu = 'TV',
  Uganda = 'UG',
  UK = 'GB',
  Ukraine = 'UA',
  UnitedArabEmirates = 'AE',
  UnitedStates = 'US',
  UnitedStatesMinorOutlyingIslands = 'UM',
  Uruguay = 'UY',
  Uzbekistan = 'UZ',
  Vanuatu = 'VU',
  Venezuela = 'VE',
  VietNam = 'VN',
  VirginIslandsBritish = 'VG',
  VirginIslandsUS = 'VI',
  WallisAndFutuna = 'WF',
  WesternSahara = 'EH',
  Yemen = 'YE',
  Zambia = 'ZM',
  Zimbabwe = 'ZW',
}

export type FieldType =
  | 'TEXT'
  | 'LARGE_TEXT'
  | 'NUMERICAL'
  | 'PHONE'
  | 'MONETORY'
  | 'CHECKBOX'
  | 'SINGLE_OPTIONS'
  | 'MULTIPLE_OPTIONS'
  | 'DATE'
  | 'TEXTBOX_LIST'
  | 'FILE_UPLOAD'
  | 'RADIO';

export type FileFormat =
  | '.pdf'
  | '.docx'
  | '.doc'
  | '.jpg'
  | '.jpeg'
  | '.png'
  | '.gif'
  | '.csv'
  | '.xlsx'
  | '.xls'
  | 'all';
