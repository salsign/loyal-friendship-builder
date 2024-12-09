import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Store } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const hasStampCards = false;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F6F6F7]">
        <Sidebar variant="inset">
          <SidebarHeader className="border-b border-sidebar-border">
            <div className="flex items-center gap-3 px-4 py-3">
              <Store className="h-6 w-6 text-[#9b87f5]" />
              <span className="font-semibold text-lg text-[#1A1F2C]">Zainab Foods</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <div className="space-y-1 p-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start gap-3 text-[#8E9196] hover:text-[#1A1F2C] hover:bg-[#F2FCE2]"
                >
                  <Store className="h-5 w-5" />
                  <span className="font-medium">Stamp Cards</span>
                </Button>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <div className="container max-w-6xl py-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#1A1F2C]">Welcome, Zainab!</h1>
                <p className="text-[#8E9196] mt-2 text-lg">Manage your loyalty stamp cards</p>
              </div>
              <SidebarTrigger className="bg-white hover:bg-[#F2FCE2]" />
            </div>

            {!hasStampCards ? (
              <Card className="border-2 border-dashed border-[#E5DEFF] bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="rounded-full bg-[#9b87f5] p-4 mb-6 shadow-lg">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#1A1F2C]">Create Your First Stamp Card</h3>
                  <p className="text-[#8E9196] text-lg mb-8 max-w-lg">
                    Start building customer loyalty by creating a digital stamp card for your business
                  </p>
                  <Link to="/create">
                    <Button 
                      className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6 py-6 h-auto text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Create Stamp Card
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stamp cards would be mapped here */}
              </div>
            )}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;