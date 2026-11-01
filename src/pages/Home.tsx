import HeroSection from "./HomeSections/HeroSection";
import ImpactThreeCards from "./HomeSections/Impact";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import NewsPostsCarousel from "../components/newsPostCarousel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewsPostsCarousel />
      <CollaborateWithUs />
      <ImpactThreeCards />
    </div>
  );
}
