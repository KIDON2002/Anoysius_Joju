import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home1 from "./routes/Home1";
import About1 from "./routes/About1";
import Services1 from "./routes/projects";
import Contact1 from "./routes/Contact1";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/About" element={<About1 />} />
        <Route path="/Projects" element={<Services1 />} />
        <Route path="/Contact" element={<Contact1 />} />
      </Routes>
    </div>
  );
}
