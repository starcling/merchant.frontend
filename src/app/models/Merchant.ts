export interface Merchant {
  merchantID: string;
  firstName: string;
  lastName: string;
  businessName: string;
  phoneNumber: string;
  phonePrefix: string;
  streetNo: string;
  country: string;
  streetAddress: string;
  state: string;
  city: string;
  address2: string;
  zipCode: string;
  businessType: string;
  corporation: string;
  businessCategory: string;
  businessSubcategory: string;
  estimatedMonthlySales: string;
  merchantUrl: string;
  websiteUrl: string;
  description: string;
  logo: string;
  vatNumber: string;
  walletAddresses: string[];
  apiKeyID: string;
  servicesID: string;
  registrationDate: string;
}

export interface UpdateMerchantDetails {
  firstName: string;
  lastName: string;
  businessName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  phonePrefix: string;
  streetNo: string;
  address2: string;
  zipCode: string;
  country: string;
  businessType: string;
  corporation: string;
  businessCategory: string;
  businessSubcategory: string;
  estimatedMonthlySales: string;
  vatNumber: string;
  walletAddress: string;
  merchantUrl: string;
  websiteUrl: string;
  description: string;
  logo: string;
  apiKeyId: string;
  servicesId: string;
}

export interface CreateMerchantDetails {
  firstName: string;
  lastName: string;
  businessName: string;
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  phonePrefix: string;
  streetNo: string;
  streetAddress: string;
  address2: string;
}
