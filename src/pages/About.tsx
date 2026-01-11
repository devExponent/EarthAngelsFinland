import AboutTop from "./AboutUs/AboutTopSection";
import { IntroVideo } from "./HomeSections/HeroVideoSection";
import Gallery from "./AboutUs/Gallery";
import TeamSection from "./AboutUs/Team";
const About = () => {
  return (
    <div>
      <AboutTop />
      <IntroVideo />
      <Gallery />
      <TeamSection />
    </div>
  );
};

export default About;
