import Hero from "../app/components/sections/Hero";
import Offers from "../app/components/sections/Offers";
import Treatments from "../app/components/sections/Treatments";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Offers />
      <Treatments />
    </div>
  );
}
