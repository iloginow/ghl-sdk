import { GhlClient } from '../ghl.client';
import {
  EmailVerificationDto,
  EmailVerificationResponse,
} from './lc-email.types';

export class LCEmailClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async verify(
    locationId: string,
    dto: EmailVerificationDto,
  ): Promise<EmailVerificationResponse> {
    return this.post<EmailVerificationResponse>('/email/verify', dto, {
      params: { locationId },
    });
  }
}
