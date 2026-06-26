import HeroSection from "./HomeSections/HeroSection";
import OpenMic from "./HomeSections/OpenMic";
import MissionHighlight from "./HomeSections/MissionHighlight";
import ImpactThreeCards from "./HomeSections/Impact";
import WomensDay from "./HomeSections/WomensDay";
import JuneteenthSaveTheDate from "./HomeSections/Juneteenth";
import EmmaTamankagSpotlight from "./HomeSections/Emma";
import CollaborateWithUs from "./HomeSections/CollaborateWithUs";
import OurvisionHighlight from "./HomeSections/ourVisionHighlights";
import PartnersSection from "./HomeSections/Partners";
import MboaMarketSpotlight from "./HomeSections/Mboa";
import TurkuAwardSection from "./HomeSections/TurkuAwardSection";
import YleArticleHighlight from "./HomeSections/YleArticle";
import HerSpaceRetreat from "./HomeSections/herSpace";
import ChrodaWeekHighlight from "./HomeSections/HeedFinland";
import MboaTilapiaOffer from "./HomeSections/MboaOffer";
import VideoAndPetitionSection from "./HomeSections/Petition";
import BoardMeetingPost from "./HomeSections/BoardMeeting";
import TurkuEventsHighlight from "./HomeSections/TurkuEvent";
import ArtHouseNewsletter from "./HomeSections/ArtHouse";
import SoundsOfSouthFestival from "./HomeSections/SoundofSoul";
import CommunitySpotlightSection from "./HomeSections/CommunitySpotlight";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionHighlight />
      <SoundsOfSouthFestival />
      <CommunitySpotlightSection />
      <ArtHouseNewsletter />
      <TurkuEventsHighlight />
      <BoardMeetingPost />
      <VideoAndPetitionSection />
      <MboaTilapiaOffer />
      <ChrodaWeekHighlight />
      <HerSpaceRetreat />
      <YleArticleHighlight />
      <TurkuAwardSection />
      <PartnersSection />
      <MboaMarketSpotlight />
      <OurvisionHighlight />
      <CollaborateWithUs />
      <EmmaTamankagSpotlight />
      <JuneteenthSaveTheDate />
      <WomensDay />
      <OpenMic />
      <ImpactThreeCards />
    </div>
  );
}
