import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            Welcome to Stamp Me, User 👋
          </h1>
          <p className="text-gray-600 text-base">
            We can't wait to help you grow your business by retaining more customers!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Stamp Card Preview */}
          <Card className="w-full aspect-[3/4] max-w-[280px] mx-auto flex items-center justify-center p-4 border-2 border-dashed">
            <div className="space-y-6 w-full">
              {/* Placeholder circle at the top */}
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto" />
              
              {/* Grid of smaller circles */}
              <div className="grid grid-cols-3 gap-3 max-w-[180px] mx-auto">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gray-100 rounded-full" />
                ))}
              </div>

              {/* Bottom rectangle */}
              <div className="h-6 bg-gray-100 rounded-md w-full" />
            </div>
          </Card>

          {/* Call to Action Section */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Get started by creating your first stamp card!
            </h2>
            
            <Link to="/stamp-cards/create">
              <Button 
                className="bg-[#FF4B55] hover:bg-[#FF4B55]/90 text-white px-6 py-4 text-base h-auto"
              >
                + Create Stamp Card
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;