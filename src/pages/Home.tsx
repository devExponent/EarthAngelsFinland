import HeroSection from "./HomeSections/HeroSection";
import { IntroVideoCard } from "./HomeSections/HeroVideoSection";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import WomensDay from "./HomeSections/WomensDay";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionHighlight />
      <WomensDay />
      {/* <OpeningEventSection /> */}
      <IntroVideoCard />
      <ImpactThreeCards />
      {/* <JoinMission /> */}
    </div>
  );
}
