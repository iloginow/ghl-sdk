import { GhlClient } from '../ghl.client';
import { CompanyResponse } from './companies.types';

export class CompaniesClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async findById(id: string): Promise<CompanyResponse> {
    return this.get<CompanyResponse>(`/companies/${id}`);
  }
}
