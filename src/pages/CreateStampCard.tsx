import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { StampCardForm } from "@/components/stamp-card/StampCardForm";
import { StampCardPreview } from "@/components/stamp-card/StampCardPreview";

const CreateStampCard = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7] py-8">
      <div className="container max-w-6xl space-y-8">
        <div className="flex items-center gap-6">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#F2FCE2]">
              <ChevronLeft className="h-6 w-6 text-[#1A1F2C]" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-[#1A1F2C]">Create Stamp Card</h1>
        </div>

        <div className="flex gap-8">
          <div className="flex-1 space-y-6">
            <Card className="p-6">
              <StampCardForm />
            </Card>
          </div>

          <div className="w-[400px]">
            <StampCardPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStampCard;