import { GhlClient } from 'src/ghl.client';
import {
  FormSearchParams,
  FormSubmissionSearchParams,
  ListFormSubmissionsResponse,
  ListFormsResponse,
} from './forms.types';

export class FormsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async find(params: FormSearchParams): Promise<ListFormsResponse> {
    return this.get<ListFormsResponse>('/forms', {
      params,
    });
  }

  public async findSubmissions(
    params: FormSubmissionSearchParams,
  ): Promise<ListFormSubmissionsResponse> {
    return this.get<ListFormSubmissionsResponse>('/forms/submissions', {
      params,
    });
  }
}
