import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Globe, Repeat, Circle, Coffee, Heart, UtensilsCrossed } from "lucide-react";
import { StampCardFormValues } from "@/types/stamp-card";

interface StampCardPreviewProps {
  formValues: StampCardFormValues;
}

export const StampCardPreview = ({ formValues }: StampCardPreviewProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getStampIcon = (iconName: string) => {
    switch (iconName) {
      case "coffee":
        return <Coffee className="w-6 h-6 text-[#8B4513]" />;
      case "heart":
        return <Heart className="w-6 h-6 text-[#ea384c]" fill="#ea384c" />;
      case "utensils":
        return <UtensilsCrossed className="w-6 h-6 text-[#555555]" />;
      default:
        return <Circle className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[320px]">
        <Card className={`w-full h-[500px] bg-white transition-all duration-500 transform perspective-1000 ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="absolute inset-0 backface-hidden">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">{formValues.cardName || "Card Name"}</h3>
                <Globe className="w-5 h-5 text-gray-600" />
              </div>

              <p className="text-sm text-gray-600 mb-6">
                {formValues.cardDescription || "Card Description"}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: formValues.stamps }, (_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full border-2 border-gray-200 flex items-center justify-center"
                  >
                    {getStampIcon(formValues.selectedIcon)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Terms & Conditions</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  {formValues.offerDetails || "Offer details will appear here"}
                </p>
                <p className="text-sm text-gray-600">
                  {formValues.businessName || "Business Name"}
                </p>
                <p className="text-sm text-gray-600">
                  {formValues.websiteUrl || "Website URL"}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="absolute top-2 right-2">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Repeat className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4 italic">
        Preview updates as you type
      </p>
    </div>
  );
};