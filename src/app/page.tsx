import OurProducts from "./Components1/OurProducts";
import HeroComponent from "./Components1/HeroComponent";
import Features from "./Components1/Features";
import Features2 from "./Components1/Features2";
import JoinUs from "./Components1/JoinUs";
import NewCeramics from "./Components1/NewCeramics";


export default function Home() {
  return (
    <div>
      <HeroComponent />
      <Features />
     <NewCeramics />
      <OurProducts />
      <JoinUs />
      <Features2 />
    </div>
  );
}
