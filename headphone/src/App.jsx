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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
