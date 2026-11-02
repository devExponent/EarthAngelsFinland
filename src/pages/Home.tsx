import HeroSection from "./HomeSections/HeroSection";
import ImpactThreeCards from "./HomeSections/Impact";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import NewsPostsCarousel from "../components/newsPostCarousel";
import NominateAnEarthAngel from "./HomeSections/Nominateanearthangel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NominateAnEarthAngel />
      <NewsPostsCarousel />
      <CollaborateWithUs />
      <ImpactThreeCards />
    </div>
  );
}
