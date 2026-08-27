import HeroSection from "./HomeSections/HeroSection";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import BoardMeetingPost from "../components/Posts/BoardMeeting";
import CommunitySpotlightSection from "../components/Posts/CommunitySpotlight";
import NewsPostsCarousel from "../components/newsPostCarousel";
import RapuVideoHero from "../components/Posts/RapuVideo";
import ChrodaWellbeingEvening from "../components/Posts/Chrodawellbeingevening";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RapuVideoHero />
      <MissionHighlight />
      <CommunitySpotlightSection />
      <ChrodaWellbeingEvening />
      <BoardMeetingPost />
      <NewsPostsCarousel />
      <CollaborateWithUs />
      <ImpactThreeCards />
    </div>
  );
}
