import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">
            Welcome to Stamp Me, User 👋
          </h1>
          <p className="text-gray-600 text-lg">
            We can't wait to help you grow your business by retaining more customers!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Stamp Card Preview */}
          <Card className="w-full aspect-[3/4] flex items-center justify-center p-6 border-2 border-dashed">
            <div className="space-y-8 w-full">
              {/* Placeholder circle at the top */}
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto" />
              
              {/* Grid of smaller circles */}
              <div className="grid grid-cols-3 gap-4 max-w-[240px] mx-auto">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-gray-100 rounded-full" />
                ))}
              </div>

              {/* Bottom rectangle */}
              <div className="h-8 bg-gray-100 rounded-md w-full" />
            </div>
          </Card>

          {/* Call to Action Section */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold">
              Get started by creating your first stamp card!
            </h2>
            
            <Link to="/create-stamp-card">
              <Button 
                className="bg-[#FF4B55] hover:bg-[#FF4B55]/90 text-white px-8 py-6 text-lg h-auto"
              >
                + Create Stamp Card
              </Button>
            </Link>

            <div className="space-y-2">
              <p className="text-gray-500">Or</p>
              <a 
                href="#" 
                className="text-[#FF4B55] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Book a Set Up Call clicked');
                }}
              >
                Book a Set Up Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;