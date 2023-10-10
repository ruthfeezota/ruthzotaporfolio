import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ShepherdLaw from "./pages/ShepherdLaw";
import Leaf from "./pages/Leaf";
import Pause from "./pages/Pause";
import Cookbook from './pages/Cookbook'
import Bahasa from "./pages/Bahasa";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/ShepherdLaw" element={<ShepherdLaw/>} />
        <Route path="/Leaf" element={<Leaf/>} />
        <Route path="/Pause" element={<Pause/>} />
        <Route path="/Cookbook" element={<Cookbook/>} />
        <Route path="/Bahasa" element={<Bahasa/>} />




		<Route path="/Contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
