import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { StampCardForm } from "@/components/stamp-card/StampCardForm";
import { StampCardPreview } from "@/components/stamp-card/StampCardPreview";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StampCardFormValues } from "@/types/stamp-card";

const STEPS = ["Card Design", "Rewards", "Locations", "Review"];

const CreateStampCard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState<StampCardFormValues>({
    cardName: "",
    stamps: 6,
    joinStamps: 0,
    cardDescription: "",
    websiteUrl: "",
    businessName: "",
    offerDetails: "",
    selectedIcon: "circle",
    customImage: null,
  });

  console.log("Form values updated:", formValues);

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      console.log("Moving to next step:", currentStep + 1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSaveAndExit = () => {
    console.log("Saving and exiting...");
    // Here you would typically save the form state
    // For now, just redirect to home
    window.location.href = "/";
  };

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

        <div className="space-y-2 max-w-[600px]">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-gray-500">
            {STEPS.map((step, index) => (
              <div
                key={step}
                className={`${
                  index <= currentStep ? "text-[#1A1F2C] font-medium" : ""
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1 space-y-6">
            <StampCardForm onFormChange={setFormValues} />
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleSaveAndExit}
                className="px-6"
              >
                Save & Exit
              </Button>
              <Button 
                onClick={handleNext}
                className="px-6"
                disabled={currentStep === STEPS.length - 1}
              >
                Next
              </Button>
            </div>
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