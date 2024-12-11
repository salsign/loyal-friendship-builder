import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { RotateCw, Store } from "lucide-react";
import { StampCardFormValues } from "@/types/stamp-card";

interface StampCardPreviewProps {
  formValues: StampCardFormValues;
  selectedLogo?: { type: 'emoji' | 'custom'; value: string } | null;
}

export const StampCardPreview = ({ formValues, selectedLogo }: StampCardPreviewProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showStamps, setShowStamps] = useState(true);
  
  const numberOfStamps = Math.min(Math.max(1, formValues.stamps || 6), 12);

  const renderBusinessLogo = () => {
    if (selectedLogo) {
      if (selectedLogo.type === 'emoji') {
        return (
          <div className="text-4xl">
            {selectedLogo.value}
          </div>
        );
      } else if (selectedLogo.type === 'custom') {
        return (
          <img 
            src={selectedLogo.value} 
            alt="Business logo" 
            className="w-12 h-12 object-cover"
          />
        );
      }
    }
    return <Store className="w-12 h-12 text-gray-500" />;
  };

  const renderStampIcon = () => {
    if (!showStamps) return null;
    
    switch (formValues.selectedIcon) {
      case 'circle':
        return <Circle className="w-full h-full text-[#ea384c]" />;
      case 'coffee':
        return <Coffee className="w-full h-full text-[#8B4513]" />;
      case 'utensils':
        return <UtensilsCrossed className="w-full h-full text-[#555555]" />;
      case 'heart':
        return <Heart className="w-full h-full text-[#ea384c] fill-current" />;
      case 'custom':
        return formValues.customImage ? (
          <img 
            src={formValues.customImage} 
            alt="Custom stamp" 
            className="w-full h-full object-cover"
          />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 sticky top-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-gray-600">Preview card with stamps</span>
        <Switch
          checked={showStamps}
          onCheckedChange={setShowStamps}
          className="data-[state=checked]:bg-[#5BC236]"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{formValues.cardName || "Card Description"}</h2>
      </div>

      <div className="relative">
        <div className={`aspect-[9/16] w-[240px] mx-auto bg-white rounded-3xl border-8 border-black relative overflow-hidden transition-all duration-500 transform-gpu ${isFlipped ? "rotate-y-180" : ""}`} style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
          {/* Front of the card */}
          <div className={`absolute inset-0 backface-hidden transition-all duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}>
            <div className="flex flex-col items-center pt-12 px-6 h-full">
              <div className="w-20 h-20 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                {renderBusinessLogo()}
              </div>
              <p className="text-center text-xs font-medium mb-6 w-full px-2 break-words whitespace-pre-wrap overflow-hidden">{formValues.cardDescription || "Card Description"}</p>
              <div className="grid grid-cols-3 gap-3 w-full">
                {[...Array(numberOfStamps)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-full border-2 border-gray-200 flex items-center justify-center p-1">
                    {renderStampIcon()}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back of the card */}
          <div className={`absolute inset-0 backface-hidden transition-all duration-500 rotate-y-180 ${isFlipped ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col items-center pt-12 px-6">
              <div className="w-20 h-20 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                {renderBusinessLogo()}
              </div>
              <h3 className="text-lg font-medium mb-4">{formValues.businessName || "Business Name"}</h3>
              {formValues.websiteUrl && (
                <a href={formValues.websiteUrl} className="text-blue-600 flex items-center gap-1 mb-6" target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              )}
              <div className="w-full">
                <h4 className="font-medium mb-2">More Details</h4>
                <p className="text-sm text-gray-600 break-words whitespace-pre-wrap overflow-hidden">{formValues.offerDetails || "Offer Details"}</p>
              </div>
            </div>
          </div>

          {/* Flip button */}
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <RotateCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4 italic">
        For illustrative purposes only. Your real stamp card may appear slightly different on the app.
      </p>
    </Card>
  );
};