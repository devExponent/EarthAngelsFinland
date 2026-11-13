import HeroSection from "./HomeSections/HeroSection";
import ImpactThreeCards from "./HomeSections/Impact";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import NewsPostsCarousel from "../components/newsPostCarousel";
import NominateAnEarthAngel from "./HomeSections/Nominateanearthangel";
import RapuHighlights from "./RapuHighlights";
import HerSpaceHighlights from "./HerSpaceHighlights";
import Bhmvolunteer from "./HomeSections/Bhmvolunteer ";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NominateAnEarthAngel />
      <Bhmvolunteer />
      <NewsPostsCarousel />
      <RapuHighlights />
      <HerSpaceHighlights />
      <CollaborateWithUs />
      <ImpactThreeCards />
    </div>
  );
}
