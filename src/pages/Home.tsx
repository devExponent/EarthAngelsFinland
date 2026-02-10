import HeroSection from "./HomeSections/HeroSection";
import { IntroVideoCard } from "./HomeSections/HeroVideoSection";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import OpeningEventSection from "./HomeSections/OpeningEvent";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionHighlight />
      <OpeningEventSection />
      <IntroVideoCard />
      <ImpactThreeCards />
      {/* <JoinMission /> */}
    </div>
  );
}
