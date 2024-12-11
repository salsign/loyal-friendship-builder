export type StampCardFormValues = {
  cardName: string;
  stamps: number;
  joinStamps: number;
  cardDescription: string;
  websiteUrl: string;
  businessName: string;
  offerDetails: string;
  selectedIcon?: string;
  customImage?: string | null;
};

export type LocationDetails = {
  businessName: string;
  address: string;
  logo?: {
    type: 'emoji' | 'custom';
    value: string;
  };
};