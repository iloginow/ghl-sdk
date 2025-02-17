import { GhlClient } from 'src/ghl.client';

import {
  CreateEmailTemplateDto,
  CreateEmailTemplateResponse,
  EmailTemplateSearchParams,
  FetchEmailTemplateResponse,
  DeleteEmailTemplateResponse,
  UpdateEmailTemplateDto,
  UpdateEmailTemplateResponse,
} from './emails.types';

export class EmailsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async create(
    dto: CreateEmailTemplateDto,
  ): Promise<CreateEmailTemplateResponse> {
    return this.post<CreateEmailTemplateResponse>('/emails/builder', dto);
  }

  public async find(
    params: EmailTemplateSearchParams,
  ): Promise<FetchEmailTemplateResponse> {
    return this.get<FetchEmailTemplateResponse>('/emails/builder', {
      params,
    });
  }

  public async remove(
    locationId: string,
    templateId: string,
  ): Promise<DeleteEmailTemplateResponse> {
    return this.delete<DeleteEmailTemplateResponse>(
      `/emails/builder/${locationId}/${templateId}`,
    );
  }

  public async update(
    dto: UpdateEmailTemplateDto,
  ): Promise<UpdateEmailTemplateResponse> {
    return this.put<UpdateEmailTemplateResponse>('/emails/builder/data', dto);
  }
}
