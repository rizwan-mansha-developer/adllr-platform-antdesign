import { Button } from "antd";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import About from "./components/about/About";
import OurServices from "./components/ourServices/OurServices";
import Gallery from "./components/gallery/Gallery";
import Testimonials from "./components/testimonials/Testimonials";
import FollowUs from "./components/followUs/FollowUs";
import Offers from "./components/offer/Offer";

function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <OurServices />
      <Gallery />
      <Testimonials />
      <FollowUs />
      <Offers />
    </div>
  );
}

export default App;
