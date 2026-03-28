import HeroSection from "./HomeSections/HeroSection";
import OpenMic from "./HomeSections/OpenMic";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import WomensDay from "./HomeSections/WomensDay";
import JuneteenthSaveTheDate from "./HomeSections/Juneteenth";
import EmmaTamankagSpotlight from "./HomeSections/Emma";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionHighlight />
      <EmmaTamankagSpotlight />
      <JuneteenthSaveTheDate />
      <WomensDay />

      <OpenMic />
      <ImpactThreeCards />
    </div>
  );
}
