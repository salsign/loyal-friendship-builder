import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateStampCard from "./pages/CreateStampCard";
import Members from "./pages/Members";
import Communications from "./pages/Communications";
import Campaigns from "./pages/Campaigns";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/stamp-cards" element={<Index />} />
              <Route path="/stamp-cards/create" element={<CreateStampCard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/communications" element={<Communications />} />
              <Route path="/campaigns" element={<Campaigns />} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;