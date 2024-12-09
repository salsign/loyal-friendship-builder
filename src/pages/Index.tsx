import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7] flex items-center justify-center">
      <Link to="/create-stamp-card">
        <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
          Create Stamp Card
        </Button>
      </Link>
    </div>
  );
};

export default Index;