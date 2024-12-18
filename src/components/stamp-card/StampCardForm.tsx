import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StampIconSelector } from "./StampIconSelector";
import { AdvancedSettings } from "./AdvancedSettings";
import { StampCardFormValues } from "@/types/stamp-card";
import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StampCardFormProps {
  onFormChange: (values: StampCardFormValues) => void;
}

export const StampCardForm = ({ onFormChange }: StampCardFormProps) => {
  const [formState, setFormState] = useState<StampCardFormValues>({
    cardName: "",
    stamps: 6,
    joinStamps: 0,
    cardDescription: "",
    websiteUrl: "",
    businessName: "",
    offerDetails: "",
    selectedIcon: "circle",
    customImage: null,
  });

  const handleChange = (field: keyof StampCardFormValues, value: any) => {
    // Limit cardName and cardDescription to 50 characters
    if ((field === 'cardName' || field === 'cardDescription') && typeof value === 'string') {
      value = value.slice(0, 50);
    }
    
    const newState = { ...formState, [field]: value };
    setFormState(newState);
    onFormChange(newState);
  };

  const handleIconSelect = (icon: string, customImage: string | null = null) => {
    const newState = {
      ...formState,
      selectedIcon: icon,
      customImage: customImage,
    };
    setFormState(newState);
    onFormChange(newState);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-[#1A1F2C]">Card Details</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-sm font-medium text-[#1A1F2C]">Card Name</span>
              <span className="text-red-500">*</span>
            </div>
            <Input
              placeholder="Card Name"
              value={formState.cardName}
              onChange={(e) => handleChange("cardName", e.target.value)}
              maxLength={50}
            />
            <p className="text-sm text-gray-500 mt-1">
              {formState.cardName.length}/50 characters
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <p className="font-medium text-[#1A1F2C]">Stamps</p>
                  <span className="text-red-500">*</span>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total number of stamps needed to complete the card and receive the reward</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={1}
                  max={12}
                  value={formState.stamps}
                  onChange={(e) => handleChange("stamps", parseInt(e.target.value) || 6)}
                  className="w-24"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-[#1A1F2C]">Join Stamps</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Number of stamps given when a customer first joins</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={0}
                  max={formState.stamps}
                  value={formState.joinStamps}
                  onChange={(e) => handleChange("joinStamps", parseInt(e.target.value) || 0)}
                  className="w-24"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-sm font-medium text-[#1A1F2C]">Card Description</span>
              <span className="text-red-500">*</span>
            </div>
            <Textarea
              placeholder="Card Description"
              value={formState.cardDescription}
              onChange={(e) => handleChange("cardDescription", e.target.value)}
              maxLength={50}
            />
            <p className="text-sm text-gray-500 mt-1">
              {formState.cardDescription.length}/50 characters
            </p>
          </div>
        </div>
      </div>

      <StampIconSelector 
        onSelectIcon={(icon) => handleIconSelect(icon)}
        onCustomImageUpload={(image) => handleIconSelect("custom", image)}
      />

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-[#1A1F2C]">Business Details</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-sm font-medium text-[#1A1F2C]">Business Name</span>
              <span className="text-red-500">*</span>
            </div>
            <Input
              placeholder="Business Name"
              value={formState.businessName}
              onChange={(e) => handleChange("businessName", e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Website URL"
              value={formState.websiteUrl}
              onChange={(e) => handleChange("websiteUrl", e.target.value)}
            />
          </div>
          <div>
            <Textarea
              placeholder="Offer Details"
              value={formState.offerDetails}
              onChange={(e) => handleChange("offerDetails", e.target.value)}
            />
          </div>
        </div>
      </div>

      <AdvancedSettings
        stamps={formState.stamps}
        joinStamps={formState.joinStamps}
        onStampsChange={(value) => handleChange("stamps", value)}
        onJoinStampsChange={(value) => handleChange("joinStamps", value)}
      />
    </div>
  );
};