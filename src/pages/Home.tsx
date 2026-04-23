import HeroSection from "./HomeSections/HeroSection";
import OpenMic from "./HomeSections/OpenMic";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import WomensDay from "./HomeSections/WomensDay";
import JuneteenthSaveTheDate from "./HomeSections/Juneteenth";
import EmmaTamankagSpotlight from "./HomeSections/Emma";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import OurvisionHighlight from "./HomeSections/ourVisionHighlights";
import PartnersSection from "./HomeSections/Partners";
import MboaMarketSpotlight from "./HomeSections/Mboa";
import TurkuAwardSection from "./HomeSections/TurkuAwardSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionHighlight />
      <TurkuAwardSection />
      <PartnersSection />
      <MboaMarketSpotlight />
      <OurvisionHighlight />
      <CollaborateWithUs />
      <EmmaTamankagSpotlight />
      <JuneteenthSaveTheDate />
      <WomensDay />
      <OpenMic />
      <ImpactThreeCards />
    </div>
  );
}
