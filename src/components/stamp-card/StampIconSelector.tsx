import { Circle, Coffee, Heart, Check, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface StampIconSelectorProps {
  onSelectIcon: (icon: string) => void;
  onCustomImageUpload: (imageUrl: string) => void;
}

export const StampIconSelector = ({ onSelectIcon, onCustomImageUpload }: StampIconSelectorProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState<string>("circle");
  const [customImage, setCustomImage] = useState<string | null>(null);

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    onSelectIcon(icon);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        console.error("File size too large. Please upload an image smaller than 2MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setCustomImage(imageUrl);
        setSelectedIcon("custom");
        onCustomImageUpload(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4 border-t border-b py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-[#1A1F2C]">Stamp icon (optional)</h3>
        <button 
          className="text-[#1A1F2C]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg
            className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      
      <p className="text-sm text-[#8E9196]">Select an icon or upload your own image to represent a stamp.</p>
      
      {isExpanded && (
        <>
          <div className="grid grid-cols-4 gap-4">
            {/* Red Circle */}
            <div 
              className={`p-4 border-2 ${selectedIcon === 'circle' ? 'border-[#9b87f5]' : 'border-gray-200'} rounded-lg relative cursor-pointer flex items-center justify-center`}
              onClick={() => handleIconSelect('circle')}
            >
              <Circle className="w-12 h-12 text-[#ea384c]" />
              {selectedIcon === 'circle' && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Coffee Bean/Cup */}
            <div 
              className={`p-4 border-2 ${selectedIcon === 'coffee' ? 'border-[#9b87f5]' : 'border-gray-200'} rounded-lg relative cursor-pointer flex items-center justify-center`}
              onClick={() => handleIconSelect('coffee')}
            >
              <Coffee className="w-12 h-12 text-[#8B4513]" />
              {selectedIcon === 'coffee' && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Fork and Knife */}
            <div 
              className={`p-4 border-2 ${selectedIcon === 'utensils' ? 'border-[#9b87f5]' : 'border-gray-200'} rounded-lg relative cursor-pointer flex items-center justify-center`}
              onClick={() => handleIconSelect('utensils')}
            >
              <UtensilsCrossed className="w-12 h-12 text-[#555555]" />
              {selectedIcon === 'utensils' && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Heart */}
            <div 
              className={`p-4 border-2 ${selectedIcon === 'heart' ? 'border-[#9b87f5]' : 'border-gray-200'} rounded-lg relative cursor-pointer flex items-center justify-center`}
              onClick={() => handleIconSelect('heart')}
            >
              <Heart className="w-12 h-12 text-[#ea384c] fill-current" />
              {selectedIcon === 'heart' && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Upload custom icon</p>
            <Input
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
              onChange={handleFileUpload}
              className="cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">Supported formats: JPG, PNG, GIF. Max size: 2MB</p>
          </div>

          {customImage && selectedIcon === 'custom' && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Preview:</p>
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <img 
                  src={customImage} 
                  alt="Custom stamp" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};