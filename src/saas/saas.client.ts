import { GhlClient } from '../ghl.client';
import {
  EnableSaasSubscriptionDto,
  SaasRebillingDto,
  SaasSubscriptionDto,
  SaasSubscriptionResponse,
} from './saas.types';

export class SaasClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findLocations(
    params: SaasSubscriptionDto,
  ): Promise<SaasSubscriptionResponse> {
    return this.get<SaasSubscriptionResponse>(
      '/saas-api/public-api/locations',
      {
        params,
        headers: {
          channel: 'OAUTH',
          source: 'INTEGRATION',
        },
      },
    );
  }

  public async update(
    locationId: string,
    dto: SaasSubscriptionDto,
  ): Promise<unknown> {
    return this.put<unknown>(
      `/saas-api/public-api/update-saas-subscription/${locationId}`,
      dto,
      {
        headers: {
          channel: 'OAUTH',
          source: 'INTEGRATION',
        },
      },
    );
  }

  public async bulkDisable(
    companyId: string,
    locationIds: string[],
  ): Promise<unknown> {
    return this.post<unknown>(
      `/saas-api/public-api/bulk-disable-saas/${companyId}`,
      { locationIds },
      {
        headers: {
          channel: 'OAUTH',
          source: 'INTEGRATION',
        },
      },
    );
  }

  public async enable(
    locationId: string,
    dto: EnableSaasSubscriptionDto,
  ): Promise<unknown> {
    return this.post<unknown>(
      `/saas-api/public-api/enable-saas/${locationId}`,
      dto,
      {
        headers: {
          channel: 'OAUTH',
          source: 'INTEGRATION',
        },
      },
    );
  }

  public async pause(
    locationId: string,
    companyId: string,
    paused: boolean,
  ): Promise<unknown> {
    return this.post<unknown>(
      `/saas-api/public-api/pause/${locationId}`,
      { companyId, paused },
      {
        headers: {
          channel: 'OAUTH',
          source: 'INTEGRATION',
        },
      },
    );
  }

  public async updateRebilling(
    companyId: string,
    dto: SaasRebillingDto,
  ): Promise<unknown> {
    return this.post<unknown>(
      `/saas-api/public-api/update-rebilling/${companyId}`,
      dto,
      {
        headers: {
          channel: 'OAUTH',
          source: 'INTEGRATION',
        },
      },
    );
  }
}
