export type EmailVerificationDto = {
  type: 'email' | 'contact' /** Email verification type */;
  verify: string /** Email verification recipient (email address / contactId) */;
};

export type EmailVerificationResult =
  | 'deliverable'
  | 'undeliverable'
  | 'do_not_send'
  | 'unknown'
  | 'catch_all';

export type EmailVerificationRisk = 'high' | 'low' | 'medium' | 'unknown';

export type LeadConnectorRecommendation = {
  isEmailValid: boolean;
};

export type EmailVerificationResponse = {
  reason: string[] /** Reason for email verification failure */;
  result: EmailVerificationResult /** Email verification result */;
  risk: EmailVerificationRisk /** Risk level of email sending to bounce */;
  address: string /** Email address */;
  leadconnectorRecomendation: LeadConnectorRecommendation /** Lead Connector email verification recommendation */;
};
