import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

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
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#1A1F2C]">Number of stamps needed</p>
            <p className="text-sm text-[#8E9196]">How many stamps to complete the card (1-12)</p>
          </div>
          <Input
            type="number"
            min={1}
            max={12}
            value={stamps}
            onChange={(e) => onStampsChange(parseInt(e.target.value) || 6)}
            className="w-20"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#1A1F2C]">Join bonus stamps</p>
            <p className="text-sm text-[#8E9196]">Number of stamps given when joining</p>
          </div>
          <Input
            type="number"
            min={0}
            max={stamps}
            value={joinStamps}
            onChange={(e) => onJoinStampsChange(parseInt(e.target.value) || 0)}
            className="w-20"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#1A1F2C]">Stamping time delay</p>
            <p className="text-sm text-[#8E9196]">Prevent multiple stamps in quick succession</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#1A1F2C]">Member multi-stamping</p>
            <p className="text-sm text-[#8E9196]">Allow members to receive multiple stamps at once</p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
};