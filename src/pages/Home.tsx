import HeroSection from "./HomeSections/HeroSection";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import BoardMeetingPost from "../components/Posts/BoardMeeting";
import SoundsOfSouthFestival from "../components/Posts/SoundofSoul";
import CommunitySpotlightSection from "../components/Posts/CommunitySpotlight";
import NewsPostsCarousel from "../components/newsPostCarousel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionHighlight />
      <SoundsOfSouthFestival />
      <CommunitySpotlightSection />
      <BoardMeetingPost />
      <NewsPostsCarousel />
      <CollaborateWithUs />
      <ImpactThreeCards />
    </div>
  );
}
