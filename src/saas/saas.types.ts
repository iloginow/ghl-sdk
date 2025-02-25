export type SaasSubscriptionDto = {
  subscriptionId: string /** The ID of the subscription to update */;
  customerId: string /** The ID of the customer to update */;
  companyId: string /** The ID of the company to update */;
};

export type SaasSubscriptionResponse = {
  message: string /** The message of the response */;
  status: number /** The status of the response */;
  data: string[] /** The data of the response */;
  traceId: string /** The trace ID of the response */;
};

export type EnableSaasSubscriptionDto = {
  stripeAccountId: string /** The Stripe account ID */;
  name: string /** The name of the subscription */;
  email: string /** The email of the subscription */;
  stripeCustomerId: string /** The Stripe customer ID */;
  companyId: string /** The ID of the company */;
};

export type RebillingProduct =
  | 'contentAI'
  | 'workflow_premium_actions'
  | 'workflow_ai'
  | 'conversationAI'
  | 'whatsApp'
  | 'reviewsAI'
  | 'Phone'
  | 'Email';

export type RebillingConfig = {
  optIn: boolean /** Whether the location is paused */;
  enabled: boolean /** Whether the location is paused */;
  markup: number /** Whether the location is paused */;
};

export type SaasRebillingDto = {
  locationIds: string[] /** The ID of the location to update */;
  product: RebillingProduct /** The product to update */;
  config: RebillingConfig /** The configuration to update */;
};
