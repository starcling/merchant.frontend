export interface PaymentCreationDetails {
  title: string;
  description: string;
  amount: number;
  currency: string;
  initialPaymentAmount: number;
  startTimestamp: number;
  endTimestamp: number;
  numberOfPayments: number;
  type: number;
  frequency: number;
  networkID: number;
  merchantAddress: string;
}
