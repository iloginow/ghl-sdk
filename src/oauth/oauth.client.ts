import { GhlClient } from '../ghl.client';
import {
  GetAccessTokenDto,
  GetAccessTokenResponse,
  GetInstalledLocationsResponse,
  GetLocationTokenDto,
  GetLocationTokenResponse,
  GetInstalledLocationsParams,
} from './oauth.types';

export class OAuthClient extends GhlClient {
  constructor() {
    super();
  }

  public async getAccessToken(
    dto: GetAccessTokenDto,
  ): Promise<GetAccessTokenResponse> {
    return this.post<GetAccessTokenResponse>('/oauth/token', dto, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
  }

  public async findInstalledLocations(
    params: GetInstalledLocationsParams,
  ): Promise<GetInstalledLocationsResponse> {
    return this.get<GetInstalledLocationsResponse>(
      '/oauth/installedLocations',
      { params },
    );
  }

  public async getLocationToken(
    dto: GetLocationTokenDto,
  ): Promise<GetLocationTokenResponse> {
    return this.post<GetLocationTokenResponse>('/oauth/locationToken', dto, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
  }
}
