import { GhlClient } from 'src/ghl.client';
import { GenerateInvoiceNumberResponse } from './invoices.types';

export class InvoicesClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async generateInvoiceNumber(
    locationId: string,
  ): Promise<GenerateInvoiceNumberResponse> {
    return this.get<GenerateInvoiceNumberResponse>(
      '/invoices/generate-invoice-number',
      { params: { altType: 'location', altId: locationId } },
    );
  }
}
