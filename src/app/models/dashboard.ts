export interface PullPayment {
  id: string;
  merchantID: string;
  title: string;
  description: string;
  amount: number;
  initialPaymentAmount: number;
  trialPeriod: number;
  currency: string;
  numberOfPayments: number;
  typeID: number;
  frequency: number;
  networkID: number;
  automatedCashOut: boolean;
  cashOutFrequency: number;
}
