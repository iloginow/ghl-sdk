import { GhlClient } from 'src/ghl.client';
import {
  CreateFunnelRedirectDto,
  DeleteFunnelRedirectResponse,
  FunnelPageCountParams,
  FunnelPageCountResponse,
  FunnelPageResponse,
  FunnelPageSearchParams,
  FunnelRedirectResponse,
  FunnelRedirectSearchParams,
  FunnelSearchParams,
  ListFunnelRedirectsResponse,
  ListFunnelsResponse,
  UpdateFunnelRedirectDto,
} from './funnels.types';

export class FunnelsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findFunnels(
    params: FunnelSearchParams,
  ): Promise<ListFunnelsResponse> {
    return this.get<ListFunnelsResponse>('/funnels/funnel/list', { params });
  }

  public async findPages(
    params: FunnelPageSearchParams,
  ): Promise<FunnelPageResponse> {
    return this.get<FunnelPageResponse>('/funnels/page', { params });
  }

  public async countPages(
    params: FunnelPageCountParams,
  ): Promise<FunnelPageCountResponse> {
    return this.get<FunnelPageCountResponse>('/funnels/page/count', { params });
  }

  public async createRedirect(
    dto: CreateFunnelRedirectDto,
  ): Promise<FunnelRedirectResponse> {
    return this.post<FunnelRedirectResponse>('/funnels/lookup/redirect', dto);
  }

  public async updateRedirect(
    redirectId: string,
    dto: UpdateFunnelRedirectDto,
  ): Promise<FunnelRedirectResponse> {
    return this.patch<FunnelRedirectResponse>(
      `/funnels/lookup/redirect/${redirectId}`,
      dto,
    );
  }

  public async removeRedirect(
    redirectId: string,
    locationId: string,
  ): Promise<DeleteFunnelRedirectResponse> {
    return this.delete<DeleteFunnelRedirectResponse>(
      `/funnels/lookup/redirect/${redirectId}`,
      { params: { locationId } },
    );
  }

  public async findRedirects(
    params: FunnelRedirectSearchParams,
  ): Promise<ListFunnelRedirectsResponse> {
    return this.get<ListFunnelRedirectsResponse>(
      'funnels/lookup/redirect/list',
      { params },
    );
  }
}
