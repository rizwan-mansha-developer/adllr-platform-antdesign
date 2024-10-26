import { Button } from "antd";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import About from "./components/about/About";
import OurServices from "./components/ourServices/OurServices";

function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <OurServices />
    </div>
  );
}

export default App;
