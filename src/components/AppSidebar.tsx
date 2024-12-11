import { LayoutDashboard, CreditCard, Users, MessageSquare, Star, BookOpen, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: CreditCard,
    label: "Stamp Cards",
    path: "/stamp-cards",
  },
  {
    icon: Users,
    label: "Members",
    path: "/members",
  },
  {
    icon: MessageSquare,
    label: "Communications",
    path: "/communications",
  },
  {
    icon: Star,
    label: "Campaigns",
    path: "/campaigns",
  },
  {
    icon: BookOpen,
    label: "Resources",
    path: "/resources",
  },
  {
    icon: HelpCircle,
    label: "Help & Support",
    path: "/help",
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="bg-sidebar">
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-4 text-sidebar-foreground">
          <img 
            src="/lovable-uploads/0687548f-40c1-4aff-8aa9-411a2f3c2132.png" 
            alt="Loyaze Logo" 
            className="w-full h-auto max-w-[180px] mx-auto"
          />
        </div>

        {/* Menu Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    className="text-sidebar-foreground hover:bg-sidebar-accent data-[active=true]:bg-sidebar-accent"
                  >
                    <Link to={item.path}>
                      <item.icon className="w-6 h-6" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}