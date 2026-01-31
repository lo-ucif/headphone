import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Family from "./pages/Family";
import Store from "./pages/Store";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/family/ :type" element={<headphonedetaile />} />
      </Routes>
      <div style={{ textAlign: "center" }}>
        headphone sound @ all rights reserved 2026
      </div>
    </Router>
  );
}
