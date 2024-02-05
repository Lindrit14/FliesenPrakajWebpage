import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import MoreProjects from "./components/MoreProjects";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-projects" element={<MoreProjects />} />
        <Route path="/contact" element={<MoreProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
