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
  businessLogo?: {
    type: string;
    value: string;
  } | null;
};