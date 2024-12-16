import Image from "next/image";
import TopNav from "./Components/TopNav";
// import HeroBlocks from "./Components/HeroBlocks";
import ArrayMap from "./Components/products";
import OurProducts from "./Components/OurProducts";
import Footer from "./Components/Footer";
import HeroComponent from "./Components/HeroComponent";
import Features from "./Components/Features";
import Features2 from "./Components/Features2";
import Signup from "./Components/SignUp";






export default function Home() {
  return (
    <div>
      <TopNav />
      <HeroComponent />
    <Features />
      {/* <HeroBlocks /> */}
      <ArrayMap />
      {/* <ParentComponent /> */}
    
    <Signup />
      <Features2 />
      <OurProducts />
      <Footer />
     
  
      
    </div>
  );
}
