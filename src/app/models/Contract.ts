export interface CreateContract {
  merchantID: string;
  title: string;
  description: string;
  promo: string;
  amount: number;
  initialPaymentAmount: number;
  trialPeriod: number;
  currency: string;
  numberOfPayments: number;
  frequency: number;
  typeID: number;
  networkID: number;
}
