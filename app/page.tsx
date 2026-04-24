import Hero from "../app/components/sections/Hero";
import Offers from "../app/components/sections/Offers";
import Treatments from "../app/components/sections/Treatments";
import Experience from "./components/sections/Experience";
import LuxuryIntro from "./components/sections/LuxuryIntro";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <LuxuryIntro />
      <Experience />
      <Offers />
      <Treatments />
    </div>
  );
}
