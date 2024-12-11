import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Upload, Check } from "lucide-react";
import { useState } from "react";
import { LocationDetails } from "@/types/stamp-card";

interface AddLocationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (location: LocationDetails) => void;
}

export const AddLocationDialog = ({ open, onOpenChange, onSave }: AddLocationDialogProps) => {
  console.log("Rendering AddLocationDialog component");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedLogo, setSelectedLogo] = useState<LocationDetails['logo']>();
  const [customImage, setCustomImage] = useState<string | null>(null);

  const predefinedLogos = [
    { id: 'diamond', icon: '💎' },
    { id: 'love', icon: '😍' },
    { id: 'smile', icon: '🤗' },
    { id: 'gift', icon: '🎁' },
    { id: 'heart', icon: '❤️' },
    { id: 'card', icon: '💳' },
    { id: 'star', icon: '⭐' },
    { id: 'shop', icon: '🏪' },
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
        setCustomImage(imageUrl);
        setSelectedLogo({ type: 'custom', value: imageUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setSelectedLogo({ type: 'emoji', value: emoji });
    setCustomImage(null);
  };

  const handleSave = () => {
    if (!businessName || !address) return;

    onSave({
      businessName,
      address,
      logo: selectedLogo,
    });

    // Reset form
    setBusinessName("");
    setAddress("");
    setSelectedLogo(undefined);
    setCustomImage(null);
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
            <Input 
              id="businessName" 
              placeholder="Enter business name" 
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">
              Address<span className="text-red-500">*</span>
            </Label>
            <Input 
              id="address" 
              placeholder="Enter a location" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Can't find your address?</span>
              <Button variant="link" className="h-auto p-0 text-blue-500">
                Enter manually
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="logo">Logo</Label>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <div 
              className="border-2 border-dashed rounded-md p-4 cursor-pointer"
              onClick={() => document.getElementById('logo-upload')?.click()}
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <Upload className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-blue-500">Upload</span>
                <input
                  id="logo-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500">JPG/PNG/GIF images only</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm">Or select one of the below:</p>
            <div className="grid grid-cols-4 gap-2">
              {predefinedLogos.map((logo) => (
                <Button
                  key={logo.id}
                  variant="outline"
                  className="h-12 text-xl relative"
                  onClick={() => handleEmojiSelect(logo.icon)}
                >
                  {logo.icon}
                  {selectedLogo?.type === 'emoji' && selectedLogo.value === logo.icon && (
                    <div className="absolute top-1 right-1 w-4 h-4 bg-[#9b87f5] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </Button>
              ))}
            </div>
          </div>

          <Button 
            className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white"
            onClick={handleSave}
            disabled={!businessName || !address}
          >
            Save location
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};