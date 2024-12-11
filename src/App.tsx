import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateStampCard from "./pages/CreateStampCard";
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
              <Route path="/" element={<Index />} />
              <Route path="/create-stamp-card" element={<CreateStampCard />} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;