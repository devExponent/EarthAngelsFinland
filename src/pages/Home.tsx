import HeroSection from "./HomeSections/HeroSection";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import BoardMeetingPost from "../components/Posts/BoardMeeting";
import NewsPostsCarousel from "../components/newsPostCarousel";
import SayItLoudMenEvent from "../components/Posts/Sayitloundmenevent";
import HealthwellnessHighlights from "../components/Posts/HealthwellnessHighlights";

export default function Home() {
  return (
    <div>
    
      <HeroSection />
      <HealthwellnessHighlights />
      <MissionHighlight />
      <SayItLoudMenEvent />
      <BoardMeetingPost />
      <NewsPostsCarousel />
      <CollaborateWithUs />
      <ImpactThreeCards />
    </div>
  );
}
