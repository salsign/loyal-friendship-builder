import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useState } from "react";

interface AddLocationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogoSelect: (logo: { type: 'emoji' | 'custom', value: string }) => void;
}

export const AddLocationDialog = ({ open, onOpenChange, onLogoSelect }: AddLocationDialogProps) => {
  console.log("Rendering AddLocationDialog component");
  const [selectedLogo, setSelectedLogo] = useState<string>('diamond');
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  const predefinedLogos = [
    { id: 'diamond', emoji: '💎', label: 'Diamond' },
    { id: 'smile', emoji: '😊', label: 'Smile' },
    { id: 'wink', emoji: '😉', label: 'Wink' },
    { id: 'gift', emoji: '🎁', label: 'Gift' },
    { id: 'heart', emoji: '❤️', label: 'Heart' },
    { id: 'store', emoji: '🏪', label: 'Store' },
    { id: 'star', emoji: '⭐', label: 'Star' },
    { id: 'shop', emoji: '🛍️', label: 'Shop' },
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
        onLogoSelect({ type: 'custom', value: imageUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoSelect = (logoId: string) => {
    setSelectedLogo(logoId);
    const selectedPredefinedLogo = predefinedLogos.find(logo => logo.id === logoId);
    if (selectedPredefinedLogo) {
      onLogoSelect({ type: 'emoji', value: selectedPredefinedLogo.emoji });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-[380px] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>Add location</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 py-2">
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

          <div className="space-y-3 border-t border-b py-3">
            <div className="flex items-center justify-between">
              <Label>Business Logo</Label>
            </div>
            
            <p className="text-sm text-[#8E9196]">Select a logo or upload your own image.</p>
            
            <div className="grid grid-cols-4 gap-2">
              {predefinedLogos.map((logo) => (
                <div
                  key={logo.id}
                  className={`p-2 border-2 ${
                    selectedLogo === logo.id ? 'border-[#9b87f5]' : 'border-gray-200'
                  } rounded-lg relative cursor-pointer flex items-center justify-center`}
                  onClick={() => handleLogoSelect(logo.id)}
                >
                  <span className="text-2xl sm:text-3xl" role="img" aria-label={logo.label}>
                    {logo.emoji}
                  </span>
                  {selectedLogo === logo.id && (
                    <div className="absolute top-1 right-1 w-4 h-4 bg-[#9b87f5] rounded-full flex items-center justify-center">
                      <Check className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-3">
              <p className="text-sm font-medium mb-2">Upload custom logo</p>
              <Input
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={handleFileUpload}
                className="cursor-pointer text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Supported formats: JPG, PNG, GIF. Max size: 2MB
              </p>
            </div>

            {customLogo && selectedLogo === 'custom' && (
              <div className="mt-3">
                <p className="text-sm font-medium mb-2">Preview:</p>
                <div className="w-16 h-16 rounded-lg overflow-hidden">
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