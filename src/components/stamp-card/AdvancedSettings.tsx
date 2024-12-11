import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

interface AdvancedSettingsProps {
  stamps: number;
  joinStamps: number;
  onStampsChange: (value: number) => void;
  onJoinStampsChange: (value: number) => void;
}

export const AdvancedSettings = ({ 
  stamps, 
  joinStamps, 
  onStampsChange, 
  onJoinStampsChange 
}: AdvancedSettingsProps) => {
  const [isTimeDelayEnabled, setIsTimeDelayEnabled] = useState(false);
  const [isMultiStampingEnabled, setIsMultiStampingEnabled] = useState(false);

  return (
    <div className="space-y-4 border-t border-b py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-[#1A1F2C]">Advanced card settings (optional)</h3>
        <button className="text-[#1A1F2C]">
          <svg
            className="w-6 h-6"
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
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="font-medium text-[#1A1F2C]">Stamping time delay</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Prevent multiple stamps in quick succession</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {isTimeDelayEnabled && (
              <div className="flex items-center gap-2 mt-2">
                <Input
                  type="number"
                  min={0}
                  className="w-16"
                  placeholder="0"
                />
                <div>
                  <Select defaultValue="seconds">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seconds">seconds</SelectItem>
                      <SelectItem value="minutes">minutes</SelectItem>
                      <SelectItem value="hours">hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
          <Switch 
            checked={isTimeDelayEnabled}
            onCheckedChange={setIsTimeDelayEnabled}
            className="data-[state=checked]:bg-[#4ade80] data-[state=checked]:border-[#4ade80]" 
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="font-medium text-[#1A1F2C]">Member multi-stamping</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Allow members to receive multiple stamps at once</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <Switch 
            checked={isMultiStampingEnabled}
            onCheckedChange={setIsMultiStampingEnabled}
            className="data-[state=checked]:bg-[#4ade80] data-[state=checked]:border-[#4ade80]" 
          />
        </div>
      </div>
    </div>
  );
};