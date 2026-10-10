import HeroSection from "./HomeSections/HeroSection";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import BoardMeetingPost from "../components/Posts/BoardMeeting";
import NewsPostsCarousel from "../components/newsPostCarousel";
import SayItLoudMenEvent from "../components/Posts/Sayitloundmenevent";
import NigeriaIndependence from "../components/Posts/NigeriaIndependece";

export default function Home() {
  return (
    <div>
    
      <HeroSection />
      <MissionHighlight />
      <NigeriaIndependence />
      <SayItLoudMenEvent />
      <BoardMeetingPost />
      <NewsPostsCarousel />
      <CollaborateWithUs />
      <ImpactThreeCards />
    </div>
  );
}
