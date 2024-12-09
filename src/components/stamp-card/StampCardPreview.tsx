import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const StampCardPreview = () => {
  return (
    <Card className="p-6 sticky top-8">
      <div className="aspect-[9/16] bg-white rounded-3xl border-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center pt-16 px-8">
          <div className="w-24 h-24 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-xs text-gray-500">
            YOUR LOGO HERE
          </div>
          <p className="text-center text-sm font-medium mb-8">CARD DESCRIPTION</p>
          <div className="grid grid-cols-3 gap-4 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-full border-2 border-gray-200" />
            ))}
          </div>
          <div className="mt-auto mb-8 w-full">
            <Button 
              variant="destructive" 
              className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90"
            >
              STAMP ME
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};