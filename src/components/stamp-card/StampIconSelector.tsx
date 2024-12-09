import { Coffee, UtensilsCrossed } from "lucide-react";

export const StampIconSelector = () => {
  return (
    <div className="space-y-4 border-t border-b py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-[#1A1F2C]">Stamp icon (optional)</h3>
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
      <p className="text-sm text-[#8E9196]">Select an icon or upload your own image to represent a stamp.</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 border-2 border-[#9b87f5] rounded-lg relative">
          <div className="w-12 h-12 bg-[#ea384c] rounded-full" />
          <div className="absolute top-2 right-2 w-5 h-5 bg-[#9b87f5] rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          <Coffee className="w-12 h-12 text-[#8E9196]" />
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          <Coffee className="w-12 h-12 text-[#8E9196]" />
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-lg">
          <UtensilsCrossed className="w-12 h-12 text-[#8E9196]" />
        </div>
      </div>
    </div>
  );
};