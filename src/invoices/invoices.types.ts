import { CountryCodes, ScheduleOptions } from '../common.types';

export type InvoiceAddress = {
  addressLine1?: string /** The address line 1 (123 Main St) */;
  addressLine2?: string /** The address line 2 (Apt 1) */;
  city?: string /** The city (New York) */;
  state?: string /** The state (NY) */;
  countryCode?: CountryCodes /** The 2 letter country code (US) */;
  postalCode?: string /** The zip code (10001) */;
};

export type InvoiceBusinessDetails = {
  logoUrl?: string /** The logo URL (https://example.com/logo.png) */;
  name?: string /** The name of the business (Example Business) */;
  phoneNo?: string /** The phone number of the business (+1-214-559-6993) */;
  address?: InvoiceAddress /** The address of the business */;
  website?: string /** The website of the business (https://example.com) */;
  customValues?: string[] /** The custom values of the business (["value1", "value2"]) */;
};

export type InvoiceTax = {
  _id: string /** The ID of the tax */;
  name: string /** The name of the tax */;
  rate: number /** The rate of the tax */;
  calculation: 'exclusive' /** The calculation of the tax */;
  description: string /** The description of the tax */;
  taxId: string /** The tax ID */;
};

export type InvoiceItemDto = {
  name: string /** Invoice Item Name (ABC Product) */;
  currency: string /** Currency (USD) */;
  amount: number /** Product amount (999) (decimals allowed) */;
  qty: number /** Product Quantity (1) */;
  description?: string /** Invoice descriptions (ABC Corp.) */;
  productId?: string /** Product Id (6578278e879ad2646715ba9c) */;
  priceId?: string /** Price Id (6578278e879ad2646715ba9c) */;
  taxes?: InvoiceTax[] /** Taxes */;
};

export type InvoiceItem = InvoiceItemDto & { _id: string };

export type InvoiceDiscount = {
  type: 'percentage' | 'fixed' /** Discount Type (percentage) */;
  value?: number /** Discount Value (10) */;
};

export type InvoiceDiscountUpdate = InvoiceDiscount & {
  value: number /** Discount Value (10) */;
};

export type CreateInvoiceTemplateDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Name of the template (New Template) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  currency: string /** Currency */;
  items: InvoiceItemDto[] /** Items */;
  internal?: boolean /** Internal */;
  discount?: InvoiceDiscount /** Discount */;
  termsNotes?: string /** Terms Notes */;
  title?: string /** Template title (New Template) */;
};

export type InvoiceTemplateResponse = {
  _id: string /** Template Id (6578278e879ad2646715ba9c) */;
  altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Name of the Template (New Template) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  currency: string /** Currency (USD) */;
  items: InvoiceItem[] /** Invoice Items */;
  total: number /** Total Amount (999) (decimals allowed) */;
  createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
  updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
  discount?: InvoiceDiscount /** Discount */;
};

export type ListInvoiceTemplatesResponse = {
  data: InvoiceTemplateResponse[] /** List of Templates */;
  totalCount: number /** Total Count of Templates */;
};

export type UpdateInvoiceTemplateDto = CreateInvoiceTemplateDto;

export type InvoiceAddtitionalEmails = {
  email: string /** Email Address (john@does.com) */;
};

export type InvoiceContactDetails = {
  id: string /** Contact ID (6578278e879ad2646715ba9c) */;
  name: string /** Contact Name (Alex) */;
  phoneNo: string /** Contact Phone Number (+1-214-559-6993) */;
  email: string /** Contact Email (john@does.com) */;
  additionalEmails?: InvoiceAddtitionalEmails[] /** Secondary email addresses for the contact to be saved */;
  companyName?: string /** Contact Company Name (ABC Corp.) */;
  address?: InvoiceAddress /** Contact Address */;
  customFields?: string[] /** Custom Values */;
};

export type CreateInvoiceScheduleDto = CreateInvoiceTemplateDto & {
  schedule: ScheduleOptions /** Schedule Options */;
  liveMode: boolean /** Live Mode (true) */;
};

type InvoiceStatusOptions =
  | 'draft'
  | 'sent'
  | 'payment_processing'
  | 'paid'
  | 'void'
  | 'partially_paid';

export type InvoiceScheduleResponse = {
  _id: string /** Schedule Id (6578278e879ad2646715ba9c) */;
  status: InvoiceStatusOptions /** Schedule Status (draft) */;
  liveMode: boolean /** Live Mode (true) */;
  altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Name of the Schedule (New Schedule) */;
  schedule: ScheduleOptions /** Schedule Options */;
  invoices: CreateInvoiceResponse[] /** List of invoices */;
  currency: string /** Currency (USD) */;
  discount?: InvoiceDiscount /** Discount */;
  contactDetails: InvoiceContactDetails /** Contact Details */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  termsNotes: string /** Terms Notes */;
  compiledTermNotes: string /** Compiled Term Notes */;
  createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
  updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
};

export type ListInvoiceSchedulesResponse = {
  schedules: InvoiceScheduleResponse[] /** List of Schedules */;
  total: number /** Total Count of Schedules */;
};

export type UpdateInvoiceScheduleDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Name of the Schedule (New Schedule) */;
  contactDetails: InvoiceContactDetails /** Contact Details */;
  schedule: ScheduleOptions /** Schedule Options */;
  liveMode: boolean /** Live Mode (true) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  currency: string /** Currency */;
  items: InvoiceItem[] /** Items */;
  discount?: InvoiceDiscount /** Discount */;
  termsNotes?: string /** Terms Notes */;
  title?: string /** Schedule title (New Schedule) */;
};

export type InvoiceCard = {
  brand: string /** Card Brand (Visa) */;
  last4: string /** Last 4 Digits (4242) */;
};

export type USBankAccount = {
  bank_name: string /** Bank Name (Bank of America) */;
  last4: string /** Last 4 Digits (4242) */;
};

export type InvoiceAutoPaymentDetails = {
  enable: boolean /** Enable Auto Payment (true) */;
  type?: string /** Payment Type (card) */;
  paymentMethodId?: string /** Payment Method Id (6578278e879ad2646715ba9c) */;
  card?: InvoiceCard /** Card Details */;
  usBankAccount?: USBankAccount /** US Bank Account Details */;
};

export type InvoicesSchedule = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  liveMode: boolean /** Live Mode (true) */;
  autoPayment?: InvoiceAutoPaymentDetails /** Auto Payment Details */;
};

export type InvoicesAutoPaymentDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  id: string /** Schedule Id (6578278e879ad2646715ba9c) */;
  autoPayment: InvoiceAutoPaymentDetails /** Auto Payment Details */;
};

export type InvoicesSendTo = {
  email: string[] /** Email Address (john@does.com) */;
  emailCc?: string[] /** Email CC Address (["jake@does.com", "jane@does.com"]) */;
  emailBcc?: string[] /** Email BCC Address (["jake@does.com", "jane@does.com"]) */;
  phoneNo?: string /** Phone Number (+1-214-559-6993) */;
};

export type Text2PayInvoiceDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Invoice Name (New Invoice) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  currency: string /** Currency code (USD) */;
  items: InvoiceItem[] /** Items */;
  contactDetails: InvoiceContactDetails /** Contact Details */;
  issueDate: string /** Issue Date (2023-01-01) */;
  sentTo: InvoicesSendTo /** Send To Details */;
  liveMode: boolean /** Live Mode (true) */;
  action: 'draft' | 'send' /** Action (draft) */;
  userId: string /** User Id (6578278e879ad2646715ba9c) */;
  termNotes?: string /** Terms Notes */;
  title?: string /** Invoice Title (New Invoice) */;
  invoiceNumber?: string /** Invoice Number (1001) */;
  dueDate?: string /** Due Date (2023-01-14) */;
  id?: string /** Invoice Id (6578278e879ad2646715ba9c) */;
  includeTermsNote?: boolean /** Include terms & notes with receipts (true) */;
  discount?: InvoiceDiscount /** Discount */;
};

type Text2PayInvoice = {
  _id: string /** Invoice Id (6578278e879ad2646715ba9c) */;
  status: InvoiceStatusOptions /** Invoice Status (draft) */;
  liveMode: boolean /** Live Mode (true) */;
  amountPaid: number /** Amount Paid (0) (decimals allowed) */;
  altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Name of the invoice (New Invoice) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  invoiceNumber: number /** Invoice Number (19) */;
  currency: string /** Currency (USD) */;
  contactDetails: InvoiceContactDetails /** Contact Details */;
  issueDate: string /** Issue Date (2023-01-01) */;
  dueDate: string /** Due Date (2023-01-01) */;
  discount?: InvoiceDiscount /** Discount */;
  invoiceItems: InvoiceItem[] /** Invoice Items */;
  total: number /** Total Amount (999) (decimals allowed) */;
  title: string /** Title (INVOICE) */;
  amountDue: number /** Total Amount Due (999) (decimals allowed) */;
  createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
  updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
};

export type Text2PayResponse = {
  invoice: Text2PayInvoice /** Invoice */;
  invoiceUrl: string /** preview url of generated invoice */;
};

export type GenerateInvoiceNumberResponse = {
  invoiceNumber: number /** Invoice Number (1001) */;
};

export type CreateInvoiceDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Invoice Name (New Invoice) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  currency: string /** Currency code (USD) */;
  items: InvoiceItem[] /** Items */;
  discount?: InvoiceDiscount /** Discount Details */;
  termsNotes?: string /** Terms Notes */;
  title?: string /** Invoice Title (New Invoice) */;
  contactDetails: InvoiceContactDetails /** Contact Details */;
  invoiceNumber?: string /** Invoice Number (1001) */;
  issueDate: string /** Issue Date (2023-01-01) */;
  dueDate: string /** Due Date (2023-01-14) */;
  sentTo: InvoicesSendTo /** Send To Details */;
  liveMode: boolean /** Live Mode (true) */;
};

export type CreateInvoiceResponse = {
  _id: string /** Invoice Id (6578278e879ad2646715ba9c) */;
  status: InvoiceStatusOptions /** Invoice Status (draft) */;
  liveMode: boolean /** Live Mode (true) */;
  amountPaid: number /** Amount Paid (0) (decimals allowed) */;
  altId: string /** Location Id or Agency Id (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Name of the invoice (New Invoice) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  invoiceNumber: number /** Invoice Number (19) */;
  currency: string /** Currency (USD) */;
  contactDetails: InvoiceContactDetails /** Contact Details */;
  issueDate: string /** Issue Date (2023-01-01) */;
  dueDate: string /** Due Date (2023-01-01) */;
  discount?: InvoiceDiscount /** Discount */;
  invoiceItems: InvoiceItem[] /** Invoice Items */;
  total: number /** Total Amount (999) (decimals allowed) */;
  title: string /** Title (INVOICE) */;
  amountDue: number /** Total Amount Due (999) (decimals allowed) */;
  createdAt: string /** created at (2023-12-12T09:27:42.355Z) */;
  updatedAt: string /** updated at (2023-12-12T09:27:42.355Z) */;
};

export type TotalInvoiceSummary = {
  subTotal: number /** Sub Total (999) */;
  discount: number /** Discount (10) */;
};

export type InvoiceResponse = CreateInvoiceResponse & {
  totalSummary: TotalInvoiceSummary /** Total Summary */;
};

export type ListInvoicesResponse = {
  invoices: InvoiceResponse[] /** List of Invoices */;
  total: number /** Total Count of Invoices */;
};

export type UpdateInvoiceDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  name: string /** Invoice Name (New Invoice) */;
  businessDetails: InvoiceBusinessDetails /** Business Details */;
  currency: string /** Currency code (USD) */;
  discount?: InvoiceDiscount /** Discount Details */;
  termsNotes?: string /** Terms Notes */;
  title?: string /** Invoice Title (New Invoice) */;
  contactDetails: InvoiceContactDetails /** Contact Details */;
  invoiceNumber?: string /** Invoice Number (1001) */;
  issueDate: string /** Issue Date (2023-01-01) */;
  dueDate: string /** Due Date (2023-01-14) */;
  liveMode: boolean /** Live Mode (true) */;
  invoiceItems: InvoiceItem[] /** Items */;
};

export type UpdateInvoiceResponse = CreateInvoiceResponse;

export type DeleteInvoiceResponse = CreateInvoiceResponse;

export type VoidInvoiceResponse = CreateInvoiceResponse;

export type InvoiceSenderConfig = {
  fromName?: string /** The name of the sender (John Doe) */;
  fromEmail?: string /** The email of the sender (john@does.com) */;
};

export type SendInvoiceDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  userId: string /** User Id (6578278e879ad2646715ba9c) */;
  action: 'sms_and_email' | 'email' | 'sms' /** Action (sms_and_email) */;
  liveMode: boolean /** Live Mode (true) */;
};

export type SendInvoiceResponse = {
  invoice: Text2PayInvoice /** Invoice Details */;
  smsData: object;
  emailData: object;
};

export type InvoiceCheque = {
  number: string /** Cheque Number (129-129-129-912) */;
};

export type RecordInvoicePaymentDto = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  mode:
    | 'cash'
    | 'card'
    | 'cheque'
    | 'bank_transfer'
    | 'other' /** Payment Method (card) */;
  card?: InvoiceCard /** Card Details */;
  cheque?: InvoiceCheque /** Cheque Details */;
  notes: string /** Notes (This was a direct payment) */;
  amount?: number /** Amount (999) */;
};

export type RecordInvoicePaymentResponse = {
  success: boolean /** Success Status (true) */;
  invoice: Text2PayInvoice /** Invoice Details */;
};

export type InvoiceScheduleSearchParams = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: 'location' /** Alt Type (location) */;
  limit: string /** Limit the number of items to return (10) */;
  offset: string /** Number of items to skip (10) */;
  endAt?: string /** endAt in YYYY-MM-DD format (2023-01-01) */;
  paymentMode?: 'default' | 'live' /** Payment Mode (live) */;
  search?: string /** To search for an invoice by id / name / email / phoneNo (Alex) */;
  startAt?: string /** startAt in YYYY-MM-DD format (2023-01-01) */;
  status?: string /** status to be filtered */;
};

export type InvoicesSearchParams = {
  altId: string /** location Id / company Id based on altType (6578278e879ad2646715ba9c) */;
  altType: string /** Alt Type (location) */;
  limit: string /** Limit the number of items to return (10) */;
  offset: string /** Number of items to skip (10) */;
  contactId?: string /** Contact ID for the invoice (AmuzcoPBpgKeccNsFlib) */;
  endAt?: string /** endAt in YYYY-MM-DD format (2023-01-01) */;
  paymentMode?: string /** Payment Mode (live) */;
  search?: string /** To search for an invoice by id / name / email / phoneNo (Alex) */;
  startAt?: string /** startAt in YYYY-MM-DD format (2023-01-01) */;
  status?: string /** status to be filtered */;
};
