import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StampCardForm } from "@/components/stamp-card/StampCardForm";
import { StampCardPreview } from "@/components/stamp-card/StampCardPreview";
import { useState } from "react";
import { StampCardFormValues } from "@/types/stamp-card";

const CreateStampCard = () => {
  const [formValues, setFormValues] = useState<StampCardFormValues>({
    cardName: "",
    stamps: 6,
    joinStamps: 0,
    cardDescription: "",
    websiteUrl: "",
    businessName: "",
    offerDetails: "",
    selectedIcon: "circle", // Set a default icon
    customImage: null,
  });

  console.log("Form values updated:", formValues); // Add logging to track updates

  return (
    <div className="min-h-screen bg-[#F6F6F7] py-8">
      <div className="container max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#F2FCE2]">
                <ChevronLeft className="h-6 w-6 text-[#1A1F2C]" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-[#1A1F2C]">Create Stamp Card</h1>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1A1F2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>

        <Tabs defaultValue="card-design" className="w-full">
          <TabsList className="grid w-full max-w-[600px] grid-cols-4 mb-8">
            <TabsTrigger value="card-design" className="data-[state=active]:border-b-2 data-[state=active]:border-[#ea384c]">
              Card Design
            </TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-8">
          <div className="flex-1 space-y-6">
            <StampCardForm onFormChange={setFormValues} />
          </div>
          <div className="w-[400px]">
            <StampCardPreview formValues={formValues} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStampCard;