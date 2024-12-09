import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const StampCardPreview = () => {
  return (
    <Card className="p-6 sticky top-8">
      <div className="aspect-[9/16] w-[280px] mx-auto bg-white rounded-3xl border-8 border-black relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center pt-12 px-6">
          <div className="w-20 h-20 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-[10px] text-gray-500">
            YOUR LOGO HERE
          </div>
          <p className="text-center text-xs font-medium mb-6">CARD DESCRIPTION</p>
          <div className="grid grid-cols-3 gap-3 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-full border-2 border-gray-200" />
            ))}
          </div>
          <div className="mt-auto mb-6 w-full pointer-events-none select-none">
            <Button 
              variant="destructive" 
              className="w-full bg-[#ea384c] hover:bg-[#ea384c] cursor-default"
              tabIndex={-1}
              aria-hidden="true"
            >
              STAMP ME
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};