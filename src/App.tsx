import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateStampCard from "./pages/CreateStampCard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create-stamp-card" element={<CreateStampCard />} />
      </Routes>
    </Router>
  );
}

export default App;