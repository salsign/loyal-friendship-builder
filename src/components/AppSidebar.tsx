import { Book, Home, MessageCircle, Star, Store, Users } from "lucide-react";
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
    icon: Store,
    label: "Business",
    path: "/",
  },
  {
    icon: Users,
    label: "Customers",
    path: "/customers",
  },
  {
    icon: MessageCircle,
    label: "Marketing",
    path: "/marketing",
  },
  {
    icon: Star,
    label: "Rewards",
    path: "/rewards",
  },
  {
    icon: Book,
    label: "Learn",
    path: "/learn",
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="bg-sidebar">
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