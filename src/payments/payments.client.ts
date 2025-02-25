import { GhlClient } from '../ghl.client';
import {
  PaymentIntegrationProvider,
  CreateWhiteLabelIntegrationProviderDto,
  IntegrationProviderSearchParams,
  ListIntegrationProvidersResponse,
  OrderSearchParams,
  ListOrdersResponse,
  Order,
  CreateOrderFulfillmentDto,
  OrderFulfillmentResponse,
  TransactionSearchParams,
  ListTransactionsResponse,
  TransactionDetailsResponse,
  SubscriptionSearchParams,
  ListSubscriptionsResponse,
  SubscriptionDetailsReponse,
  CreateCustomIntegrationProviderDto,
  CustomIntegrationProviderResponse,
  CustomIntegrationProviderConnectDetails,
  DisconnectCustomIntegrationProviderResponse,
} from './payments.types';
import { SuccessDeleteResponse } from '../common.types';

export class PaymentsClient extends GhlClient {
  constructor(accessToken: string) {
    super(accessToken);
  }

  public async createWhiteLabelIntegrationProvider(
    dto: CreateWhiteLabelIntegrationProviderDto,
  ): Promise<PaymentIntegrationProvider> {
    return this.post<PaymentIntegrationProvider>(
      '/payments/integrations/providers/whitelabel',
      dto,
    );
  }

  public async findWhiteLabelIntegrationProviders(
    params: IntegrationProviderSearchParams,
  ): Promise<ListIntegrationProvidersResponse> {
    return this.get<ListIntegrationProvidersResponse>(
      '/payments/integrations/providers/whitelabel',
      { params },
    );
  }

  public async findOrders(
    params: OrderSearchParams,
  ): Promise<ListOrdersResponse> {
    return this.get<ListOrdersResponse>('/payments/orders', { params });
  }

  public async findOrderById(
    orderId: string,
    locationId: string,
  ): Promise<Order> {
    return this.get<Order>(`/payments/orders/${orderId}`, {
      params: { locationId, altType: 'location', altId: locationId },
    });
  }

  public async createOrderFullfillment(
    orderId: string,
    dto: CreateOrderFulfillmentDto,
  ): Promise<OrderFulfillmentResponse> {
    return this.post<OrderFulfillmentResponse>(
      `/payments/orders/${orderId}/fulfillments`,
      dto,
    );
  }

  public async findOrderFullfillments(
    orderId: string,
    locationId: string,
  ): Promise<OrderFulfillmentResponse> {
    return this.get<OrderFulfillmentResponse>(
      `/payments/orders/${orderId}/fulfillments`,
      { params: { altType: 'location', altId: locationId } },
    );
  }

  public async findTransactions(
    params: TransactionSearchParams,
  ): Promise<ListTransactionsResponse> {
    return this.get<ListTransactionsResponse>('/payments/transactions', {
      params,
    });
  }

  public async findTransactionById(
    transactionId: string,
    locationId: string,
  ): Promise<TransactionDetailsResponse> {
    return this.get<TransactionDetailsResponse>(
      `/payments/transactions/${transactionId}`,
      { params: { locationId, altId: locationId, altType: 'location' } },
    );
  }

  public async findSubscriptions(
    params: SubscriptionSearchParams,
  ): Promise<ListSubscriptionsResponse> {
    return this.get<ListSubscriptionsResponse>('/payments/subscriptions', {
      params,
    });
  }

  public async findSubscriptionById(
    subscriptionId: string,
    locationId: string,
  ): Promise<SubscriptionDetailsReponse> {
    return this.get<SubscriptionDetailsReponse>(
      `/payments/subscriptions/${subscriptionId}`,
      { params: { altType: 'location', altId: locationId } },
    );
  }

  public async createCustomIntegrationProvider(
    locationId: string,
    dto: CreateCustomIntegrationProviderDto,
  ): Promise<CustomIntegrationProviderResponse> {
    return this.post<CustomIntegrationProviderResponse>(
      '/payments/custom-provider/provider',
      dto,
      { params: { locationId } },
    );
  }

  public async removeCustomIntegrationProvider(
    locationId: string,
  ): Promise<SuccessDeleteResponse> {
    return this.delete<SuccessDeleteResponse>(
      '/payments/custom-provider/provider',
      { params: { locationId } },
    );
  }

  public async findCustomIntegrationConnection(
    locationId: string,
  ): Promise<CustomIntegrationProviderResponse> {
    return this.get<CustomIntegrationProviderResponse>(
      '/payments/custom-provider/connect',
      { params: { locationId } },
    );
  }

  public async connectCustomIntegration(
    locationId: string,
    dto: CustomIntegrationProviderConnectDetails,
  ): Promise<CustomIntegrationProviderResponse> {
    return this.post<CustomIntegrationProviderResponse>(
      '/payments/custom-provider/connect',
      dto,
      { params: { locationId } },
    );
  }

  public async disconnectCustomIntegration(
    locationId: string,
    liveMode: boolean,
  ): Promise<DisconnectCustomIntegrationProviderResponse> {
    return this.post<DisconnectCustomIntegrationProviderResponse>(
      '/payments/custom-provider/disconnect',
      { liveMode },
      { params: { locationId } },
    );
  }
}
