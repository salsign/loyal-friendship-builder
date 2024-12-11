import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Upload } from "lucide-react";

interface AddLocationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddLocationDialog = ({ open, onOpenChange }: AddLocationDialogProps) => {
  console.log("Rendering AddLocationDialog component");

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

          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="logo">Logo</Label>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <div className="border-2 border-dashed rounded-md p-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <Upload className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-blue-500">Upload</span>
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
                  className="h-12 text-xl"
                >
                  {logo.icon}
                </Button>
              ))}
            </div>
          </div>

          <Button className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white">
            Save location
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};