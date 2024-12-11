export interface StampCardFormValues {
  cardName: string;
  stamps: number;
  joinStamps: number;
  cardDescription: string;
  websiteUrl: string;
  businessName: string;
  offerDetails: string;
  selectedIcon: string;
  customImage: string | null;
  uploadedLogo?: string | null;
  selectedEmoji?: string | null;
}