import { useParams, NavLink } from "react-router-dom";

import ArtHouseNewsletter from "../components/Posts/ArtHouse";
import ChrodaWeekHighlight from "../components/Posts/HeedFinland";
import MboaMarketSpotlight from "../components/Posts/Mboa";
import MboaTilapiaOffer from "../components/Posts/MboaOffer";
import TurkuAwardSection from "../components/Posts/TurkuAwardSection";
import TurkuEventsHighlight from "../components/Posts/TurkuEvent";
import YleArticleHighlight from "../components/Posts/YleArticle";
import CommunitySpotlightSection from "../components/Posts/CommunitySpotlight";
import HerSpaceRetreat from "../components/Posts/herSpace";
import SoundsOfSouthFestival from "../components/Posts/SoundofSoul";
import BoardMeetingPost from "../components/Posts/BoardMeeting";
import VideoAndPetitionSection from "../components/Posts/Petition";
import EmmaTamankagSpotlight from "../components/Posts/Emma";
import MommaAriaHonour from "../components/Posts/MommaAriaHonour";
import OurvisionHighlight from "../components/Posts/ourVisionHighlights";
import JuneteenthSaveTheDate from "../components/Posts/Juneteenth";
import WomensDay from "../components/Posts/WomensDay";
import OpenMic from "../components/Posts/OpenMic";

const POST_COMPONENTS: Record<string, React.ComponentType> = {
  "art-house-newsletter": ArtHouseNewsletter,
  "chroda-week": ChrodaWeekHighlight,
  "mboa-market": MboaMarketSpotlight,
  "mboa-tilapia-offer": MboaTilapiaOffer,
  "momma-award": MommaAriaHonour,
  JuneteenthFreedomDay: JuneteenthSaveTheDate,
  WomensDayCelebration: WomensDay,
  "turku-award": TurkuAwardSection,
  "turku-events": TurkuEventsHighlight,
  "yle-article": YleArticleHighlight,
  "community-spotlight": CommunitySpotlightSection,
  "her-space-retreat": HerSpaceRetreat,
  "sounds-of-south": SoundsOfSouthFestival,
  "board-meeting": BoardMeetingPost,
  "video-and-petition": VideoAndPetitionSection,
  "emma-tamankag": EmmaTamankagSpotlight,
  ourvision: OurvisionHighlight,
  openMicEvent: OpenMic,
};

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const PostComponent = id ? POST_COMPONENTS[id] : undefined;

  if (!PostComponent) {
    return (
      <div className="min-h-screen bg-[#F7F5F0] flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-3xl font-bold text-[#0B1D13]">Post not found</h1>
        <NavLink
          to="/"
          className="text-[#0097D0] font-semibold hover:underline underline-offset-4"
        >
          ← Back to Home
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <div className="px-4 py-6 bg-[#F7F5F0]">
        <div className="w-10/12 lg:w-8/12 mx-auto">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-[#0097D0] font-semibold text-sm uppercase tracking-widest hover:underline underline-offset-4"
          >
            ← Back to Home
          </NavLink>
        </div>
      </div>
      <PostComponent />
    </div>
  );
}
