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
  locations?: LocationDetails[];
};

export type LocationDetails = {
  businessName: string;
  address: string;
  logo?: {
    type: 'upload' | 'emoji';
    content: string;
  };
};