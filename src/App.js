import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ShepherdLaw from "./pages/ShepherdLaw";
import Leaf from "./pages/Leaf";
import Pause from "./pages/Pause";
import Cookbook from './pages/Cookbook'
import Bahasa from "./pages/Bahasa";
import ContactPage from "./pages/ContactPage";
import Kongsberg from "./pages/Kongsberg";
import { ShopContextProvider } from "./components/context/shop-context";
import { Cart } from "./pages/cart/cart";
import { ShopNew } from "./pages/shop/shop-new";




function App() {

  return (
    <div className="scroll-smooth">
    <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/ShepherdLaw" element={<ShepherdLaw/>} />
        <Route path="/Leaf" element={<Leaf/>} />
        <Route path="/Pause" element={<Pause/>} />
        <Route path="/Cookbook" element={<Cookbook/>} />
        <Route path="/Kongberg" element={<Kongsberg/>} />
        <Route path="/Bahasa" element={<Bahasa/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Shop" element={<ShopNew/>} />
      </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
