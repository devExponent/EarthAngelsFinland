import HeroSection from "./HomeSections/HeroSection";
import { IntroVideoCard } from "./HomeSections/HeroVideoSection";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
// import JoinMission from "./HomeSections/JoinMission";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionHighlight />
      <IntroVideoCard />
      <ImpactThreeCards />
      {/* <JoinMission /> */}
    </div>
  );
}
