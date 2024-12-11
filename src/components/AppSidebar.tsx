import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";
import {
  LayoutGrid,
  Receipt,
  Users,
  Settings,
  CreditCard,
  Store,
  Wallet,
  Gift,
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: Receipt,
    label: "Transactions",
    path: "/transactions",
  },
  {
    icon: Users,
    label: "Customers",
    path: "/customers",
  },
  {
    icon: CreditCard,
    label: "Cards",
    path: "/cards",
  },
  {
    icon: Store,
    label: "Locations",
    path: "/locations",
  },
  {
    icon: Wallet,
    label: "Payments",
    path: "/payments",
  },
  {
    icon: Gift,
    label: "Rewards",
    path: "/rewards",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar variant="inset" className="bg-sidebar">
      <div className="p-3 text-sidebar-foreground text-center">
        <h2 className="text-lg font-bold">ZAINAB</h2>
        <p className="text-xs">FOOD</p>
      </div>

      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarMenuButton
              className="text-sidebar-foreground hover:bg-sidebar-accent data-[active=true]:bg-sidebar-accent"
            >
              <Link to={item.path} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </Sidebar>
  );
};