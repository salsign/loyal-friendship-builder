import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Globe, RotateCw, User, Gift, Settings } from "lucide-react";
import { StampCardFormValues } from "@/types/stamp-card";

interface StampCardPreviewProps {
  formValues: StampCardFormValues;
}

export const StampCardPreview = ({ formValues }: StampCardPreviewProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card className="p-6 sticky top-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{formValues.cardName || "(Card Information)"}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Preview card with stamps</span>
          <div className="w-10 h-6 bg-[#F6F6F7] rounded-full" />
        </div>
      </div>

      <div className="relative">
        <div className={`aspect-[9/16] w-[280px] mx-auto bg-white rounded-3xl border-8 border-black relative overflow-hidden transition-all duration-500 transform-gpu ${isFlipped ? "rotate-y-180" : ""}`} style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
          {/* Front of the card */}
          <div className={`absolute inset-0 backface-hidden transition-all duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}>
            <div className="flex flex-col items-center pt-12 px-6">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-[10px] text-gray-500">
                YOUR LOGO HERE
              </div>
              <p className="text-center text-xs font-medium mb-6">{formValues.cardDescription || "(Card Information)"}</p>
              <div className="grid grid-cols-3 gap-3 w-full">
                {[...Array(formValues.stamps || 6)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-full border-2 border-gray-200" />
                ))}
              </div>
              <div className="mt-auto mb-6 w-full pointer-events-none select-none">
                <Button 
                  variant="destructive" 
                  className="w-full bg-[#ea384c] hover:bg-[#ea384c] cursor-default"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  STAMP ME
                </Button>
              </div>
            </div>
          </div>

          {/* Back of the card */}
          <div className={`absolute inset-0 backface-hidden transition-all duration-500 rotate-y-180 ${isFlipped ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col items-center pt-12 px-6">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-[10px] text-gray-500">
                YOUR LOGO HERE
              </div>
              <h3 className="text-lg font-medium mb-4">{formValues.businessName || "(Business Name)"}</h3>
              {formValues.websiteUrl && (
                <a href={formValues.websiteUrl} className="text-blue-600 flex items-center gap-1 mb-6" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4" />
                  Website
                </a>
              )}
              <div className="w-full">
                <h4 className="font-medium mb-2">More Details</h4>
                <p className="text-sm text-gray-600">{formValues.offerDetails || "(Offer Details)"}</p>
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

        {/* Bottom navigation icons */}
        <div className="flex justify-center gap-12 mt-4">
          <User className="w-6 h-6 text-gray-400" />
          <Gift className="w-6 h-6 text-gray-400" />
          <Settings className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4 italic">
        For illustrative purposes only. Your real stamp card may appear slightly different on the app.
      </p>
    </Card>
  );
};