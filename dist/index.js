"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/ghl.client.ts
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _axiosretry = require('axios-retry'); var _axiosretry2 = _interopRequireDefault(_axiosretry);
var GhlClient = class {
  constructor(accessToken) {
    __publicField(this, "baseUrl", "https://services.leadconnectorhq.com");
    __publicField(this, "axiosInstance");
    this.axiosInstance = _axios2.default.create({
      baseURL: this.baseUrl,
      headers: {
        accept: "application/json",
        version: "2021-07-28",
        ...accessToken && { authorization: `Bearer ${accessToken}` }
      },
      timeout: 1e4,
      validateStatus: (status) => status >= 200 && status < 300
    });
    this.axiosInstance.interceptors.response.use(
      (response) => response.data,
      (error) => this.handleError(error)
    );
    _axiosretry2.default.call(void 0, this.axiosInstance, {
      retryDelay: (retryCount, error) => _axiosretry2.default.exponentialDelay(retryCount, error, 1e3)
    });
  }
  handleError(error) {
    const { response, request } = error;
    if (response && response.data) {
      return Promise.reject(response.data);
    } else if (request) {
      return Promise.reject({ message: `Could not reach ${this.baseUrl}` });
    }
    return Promise.reject({ message: error.message });
  }
  async get(url, config) {
    return this.axiosInstance.get(url, config);
  }
  async post(url, data, config) {
    const defaultHeaders = { "content-type": "application/json" };
    return this.axiosInstance.post(url, data, {
      ...config,
      headers: { ...defaultHeaders, ..._optionalChain([config, 'optionalAccess', _ => _.headers]) || {} }
    });
  }
  async put(url, data, config) {
    const defaultHeaders = { "content-type": "application/json" };
    return this.axiosInstance.put(url, data, {
      ...config,
      headers: { ...defaultHeaders, ..._optionalChain([config, 'optionalAccess', _2 => _2.headers]) || {} }
    });
  }
  async patch(url, data, config) {
    const defaultHeaders = { "content-type": "application/json" };
    return this.axiosInstance.patch(url, data, {
      ...config,
      headers: { ...defaultHeaders, ..._optionalChain([config, 'optionalAccess', _3 => _3.headers]) || {} }
    });
  }
  async delete(url, config) {
    return this.axiosInstance.delete(url, config);
  }
};

// src/blogs/blogs.client.ts
var BlogsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findAuthors(params) {
    return this.get("/blogs/authors", { params });
  }
  async findCategories(params) {
    return this.get("/blogs/categories", {
      params
    });
  }
  async checkSlug(dto) {
    return this.post("/blogs/posts/url-slug-exists", dto);
  }
  async create(dto) {
    return this.post("/blogs/posts", dto);
  }
  async update(id, dto) {
    return this.put(`/blogs/${id}`, dto);
  }
};

// src/businesses/businesses.client.ts
var BusinessesClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findByLocation(locationId) {
    return this.get("/businesses", {
      params: { locationId }
    });
  }
  async findById(id) {
    return this.get(`/businesses/${id}`);
  }
  async create(dto) {
    return this.post("/businesses", dto);
  }
  async update(id, dto) {
    return this.put(`/businesses/${id}`, dto);
  }
  async remove(id) {
    return this.delete(`/businesses/${id}`);
  }
};

// src/calendars/calendars.client.ts
var CalendarsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async find(params) {
    return this.get("/calendars", { params });
  }
  async findById(id) {
    return this.get(`/calendars/${id}`);
  }
  async create(dto) {
    return this.post("/calendars", dto);
  }
  async update(id, dto) {
    return this.put(`/calendars/${id}`, dto);
  }
  async remove(id) {
    return this.delete(`/calendars/${id}`);
  }
  async findFreeSlots(calendarId) {
    return this.get(
      `/calendars/${calendarId}/free-slots`
    );
  }
  async findGroups(calendarId) {
    return this.get(
      `/calendars/${calendarId}/groups`
    );
  }
  async createGroup(dto) {
    return this.post(
      "/calendars/groups",
      dto
    );
  }
  async validateGroupSlug(dto) {
    return this.post(
      "/calendars/groups/validate-slug",
      dto
    );
  }
  async removeGroup(groupId) {
    return this.delete(`/calendars/groups/${groupId}`);
  }
  async updateGroup(groupId, dto) {
    return this.put(
      `/calendars/groups/${groupId}`,
      dto
    );
  }
  async updateGroupStatus(groupId, isActive) {
    return this.put(
      `/calendars/groups/${groupId}/status`,
      { isActive }
    );
  }
  async findEvents(params) {
    return this.get("/calendars/events", {
      params
    });
  }
  async findBlockedSlots(params) {
    return this.get("/calendars/blocked-slots", {
      params
    });
  }
  async findAppointmentById(eventId) {
    return this.get(
      `/calendars/events/appointments/${eventId}`
    );
  }
  async updateAppointment(eventId, dto) {
    return this.put(
      `/calendars/events/appointments/${eventId}`,
      dto
    );
  }
  async createAppointment(dto) {
    return this.post(
      "/calendars/events/appointments",
      dto
    );
  }
  async createBlockSlot(dto) {
    return this.post(
      "/calendars/block-slots",
      dto
    );
  }
  async updateBlockSlot(eventId, dto) {
    return this.put(
      `/calendars/block-slots/${eventId}`,
      dto
    );
  }
  async removeEvent(eventId) {
    return this.delete(`/calendars/events/${eventId}`);
  }
  async findAppointmentNotes(appointmentId) {
    return this.get(
      `/calendars/appointments/${appointmentId}/notes`
    );
  }
  async createAppointmentNote(appointmentId, dto) {
    return this.post(
      `/calendars/appointments/${appointmentId}/notes`,
      dto
    );
  }
  async updateAppointmentNote(appointmentId, noteId, dto) {
    return this.put(
      `/calendars/appointments/${appointmentId}/notes/${noteId}`,
      dto
    );
  }
  async removeAppointmentNote(appointmentId, noteId) {
    return this.delete(
      `/calendars/appointments/${appointmentId}/notes/${noteId}`
    );
  }
  async findResourceById(resourceId, resourceType) {
    return this.get(
      `/calendars/resources/${resourceType}/${resourceId}`
    );
  }
  async updateResource(resourceId, resourceType, dto) {
    return this.put(
      `/calendars/resources/${resourceType}/${resourceId}`,
      dto
    );
  }
  async deleteResource(resourceId, resourceType) {
    return this.delete(
      `/calendars/resources/${resourceType}/${resourceId}`
    );
  }
  async findResourcesByType(resourceType, params) {
    return this.get(
      `/calendars/resources/${resourceType}`,
      { params }
    );
  }
  async createCalendarResource(resourceType, dto) {
    return this.post(
      `/calendars/resources/${resourceType}`,
      dto
    );
  }
};

// src/campaigns/campaigns.client.ts
var CampaignsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async find(params) {
    return this.get("/campaigns", { params });
  }
};

// src/companies/companies.client.ts
var CompaniesClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(id) {
    return this.get(`/companies/${id}`);
  }
};

// src/contacts/contacts.client.ts
var ContactsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(id) {
    return this.get(`/contacts/${id}`);
  }
  async update(id, dto) {
    return this.put(`/contacts/${id}`, dto);
  }
  async remove(id) {
    return this.delete(`/contacts/${id}`);
  }
  async upsert(dto) {
    return this.post("/contacts/upsert", dto);
  }
  async findByBusiness(businessId, params) {
    return this.get(`/contacts/business/${businessId}`, { params });
  }
  async create(dto) {
    return this.post("/contacts", dto);
  }
  async find(params) {
    return this.get("/contacts", {
      params
    });
  }
  async findTasks(contactId) {
    return this.get(`/contacts/${contactId}/tasks`);
  }
  async createTask(contactId, dto) {
    return this.post(`/contacts/${contactId}/tasks`, dto);
  }
  async findTaskById(contactId, taskId) {
    return this.get(
      `/contacts/${contactId}/tasks/${taskId}`
    );
  }
  async updateTask(contactId, taskId, dto) {
    return this.put(
      `/contacts/${contactId}/tasks/${taskId}`,
      dto
    );
  }
  async removeTask(contactId, taskId) {
    return this.delete(
      `/contacts/${contactId}/tasks/${taskId}`
    );
  }
  async updateTaskStatus(contactId, taskId, completed) {
    return this.put(
      `/contacts/${contactId}/tasks/${taskId}/completed`,
      { completed }
    );
  }
  async findAppointments(contactId) {
    return this.get(
      `/contacts/${contactId}/appointments`
    );
  }
  async addTags(contactId, dto) {
    return this.post(`/contacts/${contactId}/tags`, dto);
  }
  async removeTags(contactId, data) {
    return this.delete(`/contacts/${contactId}/tags`, { data });
  }
  async findNotes(contactId) {
    return this.get(`/contacts/${contactId}/notes`);
  }
  async createNote(contactId, dto) {
    return this.post(`/contacts/${contactId}/notes`, dto);
  }
  async findNoteById(contactId, noteId) {
    return this.get(
      `/contacts/${contactId}/notes/${noteId}`
    );
  }
  async updateNote(contactId, noteId, dto) {
    return this.put(
      `/contacts/${contactId}/notes/${noteId}`,
      dto
    );
  }
  async removeNote(contactId, noteId) {
    return this.delete(
      `/contacts/${contactId}/notes/${noteId}`
    );
  }
  async addToCampaign(contactId, campaignId) {
    return this.post(
      `/contacts/${contactId}/campaigns/${campaignId}`
    );
  }
  async removeFromCampaign(contactId, campaignId) {
    return this.delete(
      `/contacts/${contactId}/campaigns/${campaignId}`
    );
  }
  async removeFromEveryCampaign(contactId) {
    return this.delete(
      `/contacts/${contactId}/campaigns/removeAll`
    );
  }
  async addToWorkflow(contactId, workflowId, startTime) {
    return this.post(
      `/contacts/${contactId}/workflow/${workflowId}`,
      { startTime }
    );
  }
  async removeFromWorkflow(contactId, workflowId) {
    return this.delete(
      `/contacts/${contactId}/workflow/${workflowId}`
    );
  }
  async addRemoveFromBusiness(dto) {
    return this.post("/contacts/bulk/business", dto);
  }
  async search(dto) {
    return this.post("/contacts/search", dto);
  }
  async findDuplicates(params) {
    return this.get(
      "/contacts/search/duplicate",
      {
        params
      }
    );
  }
  async addFollowers(contactId, followers) {
    return this.post(
      `/contacts/${contactId}/followers`,
      { followers }
    );
  }
  async removeFollowers(contactId, followers) {
    return this.delete(
      `/contacts/${contactId}/followers`,
      { data: { followers } }
    );
  }
};

// src/conversations/conversations.client.ts
var ConversationsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(id) {
    return this.get(`/conversations/${id}`);
  }
  async update(id, dto) {
    return this.put(`/conversations/${id}`, dto);
  }
  async remove(id) {
    return this.delete(`/conversations/${id}`);
  }
  async create(dto) {
    return this.post("/conversations", dto);
  }
  async search(params) {
    return this.get("/conversations/search", { params });
  }
  async findEmailById(emailId) {
    return this.get(`/conversations/messages/email/${emailId}`);
  }
  async cancelScheduledEmail(emailId) {
    return this.delete(`/conversations/messages/email/${emailId}/schedule`);
  }
  async findMessageById(messageId) {
    return this.get(`/conversations/messages/${messageId}`);
  }
  async findMessagesByConversationId(conversationId, params) {
    return this.get(`/conversations/${conversationId}/messages`, { params });
  }
  async sendMessage(dto) {
    return this.post(`/conversations/messages`, dto);
  }
  async addInboundMessage(dto) {
    return this.post(`/conversations/messages/inbound`, dto);
  }
  async addOutboundMessage(dto) {
    return this.post(`/conversations/messages/outbound`, dto);
  }
  async cancelScheduledMessage(messageId) {
    return this.delete(`/conversations/messages/${messageId}/schedule`);
  }
  async uploadFileAttachments(dto) {
    return this.post(`/conversations/messages/upload`, dto);
  }
  async updateMessageStatus(messageId, dto) {
    return this.put(`/conversations/messages/${messageId}/status`, dto);
  }
  async findMessageRecording(locationId, messageId) {
    return this.get(
      `/conversations/messages/${messageId}/locations/${locationId}/recording`
    );
  }
  async findMessageTranscription(locationId, messageId) {
    return this.get(
      `/conversations/locations/${locationId}/messages/${messageId}/transcription`
    );
  }
  async downloadMessageTranscription(locationId, messageId) {
    return this.get(
      `/conversations/locations/${locationId}/messages/${messageId}/transcription/download`
    );
  }
};

// src/courses/courses.client.ts
var CoursesClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async import(dto) {
    return this.post("/courses/courses-exporter/public/import", dto);
  }
};

// src/custom-fields/custom-fields.client.ts
var CustomFieldsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(id) {
    return this.get(`/custom-fields/${id}`);
  }
  async update(id, dto) {
    return this.put(`/custom-fields/${id}`, dto);
  }
  async remove(id) {
    return this.delete(`/custom-fields/${id}`);
  }
  async findByObjectKey(locationId, objectKey) {
    return this.get(
      `/custom-fields/object-key/${objectKey}`,
      { params: { locationId } }
    );
  }
  async createFolder(dto) {
    return this.post(`/custom-fields/folder`, dto);
  }
  async updateFolder(folderId, dto) {
    return this.put(
      `/custom-fields/folder/${folderId}`,
      dto
    );
  }
  async removeFolder(locationId, folderId) {
    return this.delete(
      `/custom-fields/folder/${folderId}`,
      { params: { locationId } }
    );
  }
  async create(dto) {
    return this.post("/custom-fields", dto);
  }
};

// src/custom-menus/custom-menus.client.ts
var CustomMenusClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(customMenuId) {
    return this.get(`/custom-menus/${customMenuId}`);
  }
  async remove(customMenuId) {
    return this.delete(
      `/custom-menus/${customMenuId}`
    );
  }
  async update(customMenuId, dto) {
    return this.put(
      `/custom-menus/${customMenuId}`,
      dto
    );
  }
  async find(params) {
    return this.get("/custom-menus", { params });
  }
  async create(dto) {
    return this.post("/custom-menus", dto);
  }
};

// src/emails/emails.client.ts
var EmailsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async create(dto) {
    return this.post("/emails/builder", dto);
  }
  async find(params) {
    return this.get("/emails/builder", {
      params
    });
  }
  async remove(locationId, templateId) {
    return this.delete(
      `/emails/builder/${locationId}/${templateId}`
    );
  }
  async update(dto) {
    return this.put("/emails/builder/data", dto);
  }
};

// src/forms/forms.client.ts
var FormsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  generateRandomId() {
    return `${Math.random().toString(36).slice(2, 18)}${Date.now().toString(36)}`;
  }
  async find(params) {
    return this.get("/forms", {
      params
    });
  }
  async uploadCustomFiles(locationId, contactId, files) {
    const data = files.reduce((acc, f) => {
      const id = this.generateRandomId();
      return { ...acc, [`${f.customFieldId}_${id}`]: f.blob };
    }, {});
    return this.post("/forms/upload-custom-files", data, {
      params: { locationId, contactId },
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  }
  async findSubmissions(params) {
    return this.get("/forms/submissions", {
      params
    });
  }
};

// src/funnels/funnels.client.ts
var FunnelsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findFunnels(params) {
    return this.get("/funnels/funnel/list", { params });
  }
  async findPages(params) {
    return this.get("/funnels/page", { params });
  }
  async countPages(params) {
    return this.get("/funnels/page/count", { params });
  }
  async createRedirect(dto) {
    return this.post("/funnels/lookup/redirect", dto);
  }
  async updateRedirect(redirectId, dto) {
    return this.patch(
      `/funnels/lookup/redirect/${redirectId}`,
      dto
    );
  }
  async removeRedirect(redirectId, locationId) {
    return this.delete(
      `/funnels/lookup/redirect/${redirectId}`,
      { params: { locationId } }
    );
  }
  async findRedirects(params) {
    return this.get(
      "funnels/lookup/redirect/list",
      { params }
    );
  }
};

// src/invoices/invoices.client.ts
var InvoicesClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async generateInvoiceNumber(locationId) {
    return this.get(
      "/invoices/generate-invoice-number",
      { params: { altType: "location", altId: locationId } }
    );
  }
  async findById(invoiceId, locationId) {
    return this.get(`/invoices/${invoiceId}`, {
      params: { altType: "location", altId: locationId }
    });
  }
  async update(invoiceId, dto) {
    return this.put(`/invoices/${invoiceId}`, dto);
  }
  async remove(invoiceId, locationId) {
    return this.delete(`/invoices/${invoiceId}`, {
      params: { altType: "location", altId: locationId }
    });
  }
  async voidById(invoiceId, locationId) {
    return this.post(`/invoices/${invoiceId}/void`, {
      altType: "location",
      altId: locationId
    });
  }
  async send(invoiceId, dto) {
    return this.post(`/invoices/${invoiceId}/send`, dto);
  }
  async recordPayment(invoiceId, dto) {
    return this.post(
      `/invoices/${invoiceId}/record-payment`,
      dto
    );
  }
  async create(dto) {
    return this.post("/invoices", dto);
  }
  async find(params) {
    return this.get("/invoices", { params });
  }
  async createTemplate(dto) {
    return this.post("/invoices/template", dto);
  }
  async findTemplates(params) {
    return this.get("/invoices/template", {
      params
    });
  }
  async findTemplateById(templateId, locationId) {
    return this.get(
      `/invoices/template/${templateId}`,
      { params: { altType: "location", altId: locationId } }
    );
  }
  async updateTemplate(templateId, dto) {
    return this.put(
      `/invoices/template/${templateId}`,
      dto
    );
  }
  async removeTemplate(templateId, locationId) {
    return this.delete(
      `/invoices/template/${templateId}`,
      { params: { altType: "location", altId: locationId } }
    );
  }
  async createSchedule(dto) {
    return this.post(`/invoices/schedule`, dto);
  }
  async findSchedules(params) {
    return this.get(`/invoices/schedule`, {
      params
    });
  }
  async findScheduleById(scheduleId, locationId) {
    return this.get(
      `/invoices/schedule/${scheduleId}`,
      { params: { altType: "location", altId: locationId } }
    );
  }
  async updateSchedule(scheduleId, dto) {
    return this.put(
      `/invoices/schedule/${scheduleId}`,
      dto
    );
  }
  async removeSchedule(scheduleId, locationId) {
    return this.delete(
      `/invoices/schedule/${scheduleId}`,
      { params: { altType: "location", altId: locationId } }
    );
  }
  async createScheduledInvoice(scheduleId, dto) {
    return this.post(
      `/invoices/schedule/${scheduleId}/schedule`,
      dto
    );
  }
  async manageAutoPayment(scheduleId, dto) {
    return this.post(
      `/invoices/schedule/${scheduleId}/auto-payment`,
      dto
    );
  }
  async cancelScheduledInvoice(scheduleId, locationId) {
    return this.post(
      `/invoices/schedule/${scheduleId}/cancel`,
      { altType: "location", altId: locationId }
    );
  }
  async createText2Pay(dto) {
    return this.post("/invoices/text2pay", dto);
  }
};

// src/lc-email/lc-email.client.ts
var LCEmailClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async verify(locationId, dto) {
    return this.post("/email/verify", dto, {
      params: { locationId }
    });
  }
};

// src/links/links.client.ts
var LinksClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async update(linkId, dto) {
    return this.put(`/links/${linkId}`, dto);
  }
  async remove(linkId) {
    return this.delete(`/links/${linkId}`);
  }
  async find(locationId) {
    return this.get("/links", { params: { locationId } });
  }
  async create(dto) {
    return this.post("/links", dto);
  }
};

// src/locations/locations.client.ts
var LocationsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(locationId) {
    return this.get(`/locations/${locationId}`);
  }
  async update(locationId, dto) {
    return this.put(
      `/locations/${locationId}`,
      dto
    );
  }
  async remove(locationId, deleteTwilioAccount = false) {
    return this.delete(`/locations/${locationId}`, {
      params: { deleteTwilioAccount }
    });
  }
  async create(dto) {
    return this.post("/locations", dto);
  }
  async search(params) {
    return this.get("/locations/search", {
      params
    });
  }
  async findCustomFields(locationId, model = void 0) {
    return this.get(
      `/locations/${locationId}/customFields`,
      model ? { params: { model } } : void 0
    );
  }
  async createCustomField(locationId, dto) {
    return this.post(
      `/locations/${locationId}/customFields`,
      dto
    );
  }
  async findCustomFieldById(locationId, customFieldId) {
    return this.get(
      `/locations/${locationId}/customFields/${customFieldId}`
    );
  }
  async updateCustomField(locationId, customFieldId, dto) {
    return this.put(
      `/locations/${locationId}/customFields/${customFieldId}`,
      dto
    );
  }
  async removeCustomField(locationId, customFieldId) {
    return this.delete(
      `/locations/${locationId}/customFields/${customFieldId}`
    );
  }
  async uploadCustomFieldFile(locationId, customFieldId, files) {
    return this.post(
      `/locations/${locationId}/customFields/upload`,
      {
        id: customFieldId,
        maxFiles: files.length.toString(10),
        ...files.reduce((acc, f) => ({ ...acc, [f.name]: f.blob }), {})
      },
      { headers: { "content-type": "multipart/form-data" } }
    );
  }
  async findCustomValues(locationId) {
    return this.get(
      `/locations/${locationId}/customValues`
    );
  }
  async createCustomValue(locationId, dto) {
    return this.post(
      `/locations/${locationId}/customValues`,
      dto
    );
  }
  async findCustomValueById(locationId, customValueId) {
    return this.get(
      `/locations/${locationId}/customValues/${customValueId}`
    );
  }
  async updateCustomValue(locationId, customValueId, dto) {
    return this.put(
      `/locations/${locationId}/customValues/${customValueId}`,
      dto
    );
  }
  async removeCustomValue(locationId, customValueId) {
    return this.delete(
      `/locations/${locationId}/customValues/${customValueId}`
    );
  }
  async findTemplates(locationId, params) {
    return this.get(
      `/locations/${locationId}/templates`,
      { params }
    );
  }
  async removeTemplate(locationId, templateId) {
    return this.delete(
      `/locations/${locationId}/templates/${templateId}`
    );
  }
  async findTags(locationId) {
    return this.get(`/locations/${locationId}/tags`);
  }
  async createTag(locationId, name) {
    return this.post(`/locations/${locationId}/tags`, {
      name
    });
  }
  async findTagById(locationId, tagId) {
    return this.get(
      `/locations/${locationId}/tags/${tagId}`
    );
  }
  async updateTag(locationId, tagId, name) {
    return this.put(
      `/locations/${locationId}/tags/${tagId}`,
      { name }
    );
  }
  async removeTag(locationId, tagId) {
    return this.delete(
      `/locations/${locationId}/tags/${tagId}`
    );
  }
  async searchTasks(locationId, dto) {
    return this.post(
      `/locations/${locationId}/tasks/search`,
      dto
    );
  }
  async findTimezones(locationId) {
    return this.get(
      `/locations/${locationId}/timezones`
    );
  }
};

// src/media/media.client.ts
var MediaClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findFiles(params) {
    return this.get("/medias/files", { params });
  }
  async uploadFile(dto) {
    return this.post("medias/upload-file", dto, {
      headers: { "content-type": "multipart/form-data" }
    });
  }
  async deleteFile(fileId, altType, altId) {
    return this.delete(`/medias/${fileId}`, {
      params: { altType, altId }
    });
  }
};

// src/oauth/oauth.client.ts
var OAuthClient = class extends GhlClient {
  constructor() {
    super();
  }
  async getAccessToken(dto) {
    return this.post("/oauth/token", dto, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });
  }
  async findInstalledLocations(params) {
    return this.get(
      "/oauth/installedLocations",
      { params }
    );
  }
  async getLocationToken(dto) {
    return this.post("/oauth/locationToken", dto, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });
  }
};

// src/objects/objects.client.ts
var ObjectsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findByKey(key, locationId, fetchProperties = void 0) {
    return this.get(`/objects/${key}`, {
      params: { locationId, ...fetchProperties && { fetchProperties } }
    });
  }
  async updateByKey(key, dto) {
    return this.put(`/objects/${key}`, dto);
  }
  async findByLocation(locationId) {
    return this.get(`/objects`, {
      params: { locationId }
    });
  }
  async create(dto) {
    return this.post("/objects/schemas", dto);
  }
  async findRecordById(key, recordId) {
    return this.get(
      `/objects/${key}/records/${recordId}`
    );
  }
  async updateRecord(locationId, key, recordId, dto) {
    return this.put(
      `/objects/${key}/records/${recordId}`,
      dto,
      { params: { locationId } }
    );
  }
  async deleteRecord(key, recordId) {
    return this.delete(
      `/objects/${key}/records/${recordId}`
    );
  }
  async createRecord(key, dto) {
    return this.post(
      `/objects/${key}/records`,
      dto
    );
  }
  async searchRecords(key, dto) {
    return this.post(
      `/objects/${key}/records/search`,
      dto
    );
  }
};

// src/payments/payments.client.ts
var PaymentsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async createWhiteLabelIntegrationProvider(dto) {
    return this.post(
      "/payments/integrations/providers/whitelabel",
      dto
    );
  }
  async findWhiteLabelIntegrationProviders(params) {
    return this.get(
      "/payments/integrations/providers/whitelabel",
      { params }
    );
  }
  async findOrders(params) {
    return this.get("/payments/orders", { params });
  }
  async findOrderById(orderId, locationId) {
    return this.get(`/payments/orders/${orderId}`, {
      params: { locationId, altType: "location", altId: locationId }
    });
  }
  async createOrderFullfillment(orderId, dto) {
    return this.post(
      `/payments/orders/${orderId}/fulfillments`,
      dto
    );
  }
  async findOrderFullfillments(orderId, locationId) {
    return this.get(
      `/payments/orders/${orderId}/fulfillments`,
      { params: { altType: "location", altId: locationId } }
    );
  }
  async findTransactions(params) {
    return this.get("/payments/transactions", {
      params
    });
  }
  async findTransactionById(transactionId, locationId) {
    return this.get(
      `/payments/transactions/${transactionId}`,
      { params: { locationId, altId: locationId, altType: "location" } }
    );
  }
  async findSubscriptions(params) {
    return this.get("/payments/subscriptions", {
      params
    });
  }
  async findSubscriptionById(subscriptionId, locationId) {
    return this.get(
      `/payments/subscriptions/${subscriptionId}`,
      { params: { altType: "location", altId: locationId } }
    );
  }
  async createCustomIntegrationProvider(locationId, dto) {
    return this.post(
      "/payments/custom-provider/provider",
      dto,
      { params: { locationId } }
    );
  }
  async removeCustomIntegrationProvider(locationId) {
    return this.delete(
      "/payments/custom-provider/provider",
      { params: { locationId } }
    );
  }
  async findCustomIntegrationConnection(locationId) {
    return this.get(
      "/payments/custom-provider/connect",
      { params: { locationId } }
    );
  }
  async connectCustomIntegration(locationId, dto) {
    return this.post(
      "/payments/custom-provider/connect",
      dto,
      { params: { locationId } }
    );
  }
  async disconnectCustomIntegration(locationId, liveMode) {
    return this.post(
      "/payments/custom-provider/disconnect",
      { liveMode },
      { params: { locationId } }
    );
  }
};

// src/products/products.client.ts
var ProductsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(productId, locationId) {
    return this.get(`/products/${productId}`, {
      params: { locationId }
    });
  }
  async remove(productId, locationId) {
    return this.delete(`/products/${productId}`, {
      params: { locationId }
    });
  }
  async update(productId, dto) {
    return this.put(`/products/${productId}`, dto);
  }
  async create(dto) {
    return this.post("/products", dto);
  }
  async find(params) {
    return this.get("/products", { params });
  }
  async createPrice(productId, dto) {
    return this.post(`/products/${productId}/price`, dto);
  }
  async findPrices(productId, params) {
    return this.get(`/products/${productId}/price`, {
      params
    });
  }
  async findPriceById(productId, priceId, locationId) {
    return this.get(`/products/${productId}/price/${priceId}`, {
      params: { locationId }
    });
  }
  async updatePrice(productId, priceId, dto) {
    return this.put(
      `/products/${productId}/price/${priceId}`,
      dto
    );
  }
  async removePrice(productId, priceId, locationId) {
    return this.delete(
      `/products/${productId}/price/${priceId}`,
      { params: { locationId } }
    );
  }
};

// src/saas/saas.client.ts
var SaasClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findLocations(params) {
    return this.get(
      "/saas-api/public-api/locations",
      {
        params,
        headers: {
          channel: "OAUTH",
          source: "INTEGRATION"
        }
      }
    );
  }
  async update(locationId, dto) {
    return this.put(
      `/saas-api/public-api/update-saas-subscription/${locationId}`,
      dto,
      {
        headers: {
          channel: "OAUTH",
          source: "INTEGRATION"
        }
      }
    );
  }
  async bulkDisable(companyId, locationIds) {
    return this.post(
      `/saas-api/public-api/bulk-disable-saas/${companyId}`,
      { locationIds },
      {
        headers: {
          channel: "OAUTH",
          source: "INTEGRATION"
        }
      }
    );
  }
  async enable(locationId, dto) {
    return this.post(
      `/saas-api/public-api/enable-saas/${locationId}`,
      dto,
      {
        headers: {
          channel: "OAUTH",
          source: "INTEGRATION"
        }
      }
    );
  }
  async pause(locationId, companyId, paused) {
    return this.post(
      `/saas-api/public-api/pause/${locationId}`,
      { companyId, paused },
      {
        headers: {
          channel: "OAUTH",
          source: "INTEGRATION"
        }
      }
    );
  }
  async updateRebilling(companyId, dto) {
    return this.post(
      `/saas-api/public-api/update-rebilling/${companyId}`,
      dto,
      {
        headers: {
          channel: "OAUTH",
          source: "INTEGRATION"
        }
      }
    );
  }
};

// src/snapshots/snapshots.client.ts
var SnapshotsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async find(companyId) {
    return this.get("/snapshots", {
      params: { companyId }
    });
  }
  async createShareLink(companyId, dto) {
    return this.post("/snapshots/share/link", dto, {
      params: { companyId }
    });
  }
  async findPushBetweenDates(snapshotId, params) {
    return this.get(
      `/snapshots/snapshot-status/${snapshotId}`,
      { params }
    );
  }
  async findLastPushByLocationId(locationId, snapshotId, companyId) {
    return this.get(
      `/snapshots/snapshot-status/${snapshotId}/location/${locationId}`,
      { params: { companyId } }
    );
  }
};

// src/surveys/surveys.client.ts
var SurveysClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async find(params) {
    return this.get("/surveys", { params });
  }
  async findSubmissions(params) {
    return this.get("/surveys/submissions", {
      params
    });
  }
};

// src/users/users.client.ts
var UsersClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findById(userId) {
    return this.get(`/users/${userId}`);
  }
  async update(userId, dto) {
    return this.put(`/users/${userId}`, dto);
  }
  async remove(userId) {
    return this.delete(`/users/${userId}`);
  }
  async findByLocation(locationId) {
    return this.get("/users", { params: { locationId } });
  }
  async create(dto) {
    return this.post("/users", dto);
  }
  async search(params) {
    return this.get("/users/search", { params });
  }
};

// src/workflows/workflows.client.ts
var WorkflowsClient = class extends GhlClient {
  constructor(accessToken) {
    super(accessToken);
  }
  async findByLocationId(locationId) {
    return this.get("/workflows", {
      params: { locationId }
    });
  }
};




























exports.BlogsClient = BlogsClient; exports.BusinessesClient = BusinessesClient; exports.CalendarsClient = CalendarsClient; exports.CampaignsClient = CampaignsClient; exports.CompaniesClient = CompaniesClient; exports.ContactsClient = ContactsClient; exports.ConversationsClient = ConversationsClient; exports.CoursesClient = CoursesClient; exports.CustomFieldsClient = CustomFieldsClient; exports.CustomMenusClient = CustomMenusClient; exports.EmailsClient = EmailsClient; exports.FormsClient = FormsClient; exports.FunnelsClient = FunnelsClient; exports.InvoicesClient = InvoicesClient; exports.LCEmailClient = LCEmailClient; exports.LinksClient = LinksClient; exports.LocationsClient = LocationsClient; exports.MediaClient = MediaClient; exports.OAuthClient = OAuthClient; exports.ObjectsClient = ObjectsClient; exports.PaymentsClient = PaymentsClient; exports.ProductsClient = ProductsClient; exports.SaasClient = SaasClient; exports.SnapshotsClient = SnapshotsClient; exports.SurveysClient = SurveysClient; exports.UsersClient = UsersClient; exports.WorkflowsClient = WorkflowsClient;
