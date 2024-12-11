import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Circle, Coffee, Heart, Store, UtensilsCrossed, Diamond, Gift, Star } from "lucide-react";
import { useState } from "react";

interface AddLocationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddLocationDialog = ({ open, onOpenChange }: AddLocationDialogProps) => {
  console.log("Rendering AddLocationDialog component");
  const [selectedLogo, setSelectedLogo] = useState<string>('store');
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  const predefinedLogos = [
    { id: 'store', icon: Store, color: '#555555' },
    { id: 'diamond', icon: Diamond, color: '#9b87f5' },
    { id: 'heart', icon: Heart, color: '#ea384c' },
    { id: 'gift', icon: Gift, color: '#FF5A5F' },
    { id: 'coffee', icon: Coffee, color: '#8B4513' },
    { id: 'circle', icon: Circle, color: '#ea384c' },
    { id: 'utensils', icon: UtensilsCrossed, color: '#555555' },
    { id: 'star', icon: Star, color: '#FFD700' },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        console.error("File size too large. Please upload an image smaller than 2MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setCustomLogo(imageUrl);
        setSelectedLogo('custom');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add location</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="businessName">
              Business name<span className="text-red-500">*</span>
            </Label>
            <Input id="businessName" placeholder="Enter business name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">
              Address<span className="text-red-500">*</span>
            </Label>
            <Input id="address" placeholder="Enter a location" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Can't find your address?</span>
              <Button variant="link" className="h-auto p-0 text-blue-500">
                Enter manually
              </Button>
            </div>
          </div>

          <div className="space-y-4 border-t border-b py-4">
            <div className="flex items-center justify-between">
              <Label>Business Logo</Label>
            </div>
            
            <p className="text-sm text-[#8E9196]">Select a logo or upload your own image.</p>
            
            <div className="grid grid-cols-4 gap-4">
              {predefinedLogos.map((logo) => {
                const IconComponent = logo.icon;
                return (
                  <div
                    key={logo.id}
                    className={`p-4 border-2 ${
                      selectedLogo === logo.id ? 'border-[#9b87f5]' : 'border-gray-200'
                    } rounded-lg relative cursor-pointer flex items-center justify-center`}
                    onClick={() => setSelectedLogo(logo.id)}
                  >
                    <IconComponent className="w-12 h-12" style={{ color: logo.color }} />
                    {selectedLogo === logo.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#9b87f5] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Upload custom logo</p>
              <Input
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={handleFileUpload}
                className="cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">
                Supported formats: JPG, PNG, GIF. Max size: 2MB
              </p>
            </div>

            {customLogo && selectedLogo === 'custom' && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Preview:</p>
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={customLogo} 
                    alt="Custom logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <Button className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white">
            Save location
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};