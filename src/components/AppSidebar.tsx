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
    <Sidebar variant="inset" className="bg-sidebar w-full max-w-[var(--sidebar-width)]">
      <SidebarContent>
        {/* Logo/Business Name Section */}
        <div className="p-4 text-sidebar-foreground text-center">
          <h2 className="text-xl font-bold mb-1">ZAINAB</h2>
          <p className="text-sm">FOOD</p>
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
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm">{item.label}</span>
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