import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddLocationDialog } from "./AddLocationDialog";

interface BusinessLogo {
  type: 'emoji' | 'custom';
  value: string;
}

interface LocationsStepProps {
  onLogoSelect: (logo: BusinessLogo) => void;
}

export const LocationsStep = ({ onLogoSelect }: LocationsStepProps) => {
  console.log("Rendering LocationsStep component");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<BusinessLogo | null>(null);
  
  const handleLogoSelect = (logo: BusinessLogo) => {
    console.log("Logo selected:", logo);
    setSelectedLogo(logo);
    onLogoSelect(logo);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-[#1A1F2C]">Location details</h2>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13.3334V10" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 6.66663H10.0083" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <p className="text-sm text-gray-600">
          Please provide details of the locations where this stamp card will be available. If this is not applicable, please enter a HQ address.
        </p>

        <Button 
          className="w-full justify-center gap-2 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white"
          onClick={() => setDialogOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Add location
        </Button>
      </div>

      <AddLocationDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onLogoSelect={handleLogoSelect}
      />
    </div>
  );
};