import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import About from "./pages/About";
import CTA from "./components/CTA";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/CTA" element={<CTA />} />
      </Routes>
    </BrowserRouter>
  );
}
