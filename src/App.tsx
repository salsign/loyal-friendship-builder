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
        <AppSidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/stamp-cards" element={<Index />} />
            <Route path="/stamp-cards/create" element={<CreateStampCard />} />
          </Routes>
        </main>
      </SidebarProvider>
    </Router>
  );
}

export default App;