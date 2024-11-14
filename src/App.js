import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Accueil from "./components/accueil";
import Apropos from "./components/apropos";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/apropos">Apropos</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
