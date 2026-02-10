import AboutTop from "./AboutUs/AboutTopSection";
import { IntroVideoCard } from "./HomeSections/HeroVideoSection";
import Gallery from "./AboutUs/Gallery";
import TeamSection from "./AboutUs/Team";
const About = () => {
  return (
    <div>
      <AboutTop />
      <IntroVideoCard />
      <Gallery />
      <TeamSection />
    </div>
  );
};

export default About;
