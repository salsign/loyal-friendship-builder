import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, List } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const hasStampCards = false; // This would come from your backend

  const handleCreateCard = () => {
    toast({
      title: "Coming soon!",
      description: "The create stamp card feature will be available soon.",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F6F6F7]">
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border">
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="font-semibold text-lg">Zainab Foods</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <div className="space-y-1 p-2">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <List className="h-4 w-4" />
                  <span>Stamp Cards</span>
                </Button>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <div className="container py-6 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#1A1F2C]">Welcome, Zainab!</h1>
                <p className="text-[#8E9196] mt-1">Manage your loyalty stamp cards</p>
              </div>
              <SidebarTrigger />
            </div>

            {!hasStampCards ? (
              <Card className="border-2 border-dashed border-[#E5DEFF] bg-white">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-[#9b87f5] p-3 mb-4">
                    <Plus className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Create Your First Stamp Card</h3>
                  <p className="text-[#8E9196] mb-6 max-w-md">
                    Start building customer loyalty by creating a digital stamp card for your business
                  </p>
                  <Button 
                    onClick={handleCreateCard}
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Stamp Card
                  </Button>
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