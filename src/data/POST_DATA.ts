export type Post = {
  id: string;
  title: string;
  image?: string;
  description?: string;
  tag?: string;
};

import SoundofSouth from "../assets/SoundsOfSouth2.jpeg"

export const POSTS: Post[] = [
   {
    id: "sounds-of-south",
    title: "Sounds of South Festival — Cultural Street Parade",
    image: SoundofSouth,
    description: "Showcase your heritage at the Turku Cultural Carnival. 10 July 2026, starting at Turku Market Square.",
    tag: "Festival",
  },
  {
    id: "her-space-retreat",
    title: "Her Space Retreat 2026",
    image: "/src/assets/HerSpace.png",
    description: "A full-day seminar on women's health, healing, and connection. Saturday 26 September 2026 at Taiteen Talo, Turku.",
    tag: "Event",
  },
  {
    id: "community-spotlight",
    title: "Rapu Extravaganza & Momma Aria Citation of Honour",
    image: "/src/assets/RapuExtravaganza.png",
    description: "Join our traditional Finnish crayfish party, and read about Momma Aria's Citation of Honour from Ceci Educare Oy Finland.",
    tag: "Event",
  },

   {
    id: "board-meeting",
    title: "EarthAngels Meets Hon. Mari Lahti, City of Turku",
    image: "/src/assets/Meeting.jpeg",
    description: "A successful meeting with the City of Turku covering mental health, women's health, cultural integration, and support for the elderly.",
    tag: "News",
  },

    {
    id: "momma-award",
    title: "Momma Aria Receives a Citation of Honour",
    image: "/src/assets/mommaAward.png",
    description:"Ceci Educare Oy, Finland honoured Momma Aria as their first awardee, recognising her remarkable contributions to promoting inclusivity within the African diaspora community, both in Finland and globally.",
    tag: "Event",
  },
 
  {
    id: "mboa-tilapia-offer",
    title: "Box Tilapia Special Offer at Mboa Market",
    image: "/src/assets/MboaTilapiaOffer.jpeg",
    description: "Fresh whole box tilapia at only €17.99. Limited stock available at Mboa Market, Turku.",
    tag: "Offer",
  },
  {
    id: "mboa-market",
    title: "A Taste of Home — Mboa Market Turku",
    description: "Mboa Market is Turku's African mini-shop stocked with authentic ingredients, fresh produce, spices, and traditional products.",
    tag: "Community",
  },
   {
    id: "WomensDayCelebration",
    title: "Celebrating International Women's Day",
    image: "/src/assets/WomensDay.jpeg",
    description: "We gather not only to celebrate how far we have come, but to remind each other of how powerful we already are.",
    tag: "News",
  },
  {
    id: "emma-tamankag",
    title: "Celebrating Emma Tamankag",
    description: "Emma Tamankag runs a free health advisory service for immigrants at Itäkeskus, featured in Helsingin Sanomat March 2026.",
    tag: "Spotlight",
  },
 
  {
    id: "chroda-week",
    title: "CHRODA Week 2026 — Volunteers Needed",
    image: "/src/assets/HeedFinlandVolunter.png",
    description: "HEED Finland is calling for volunteers for Chronic Disease Awareness Week, 7 to 12 September 2026 in Helsinki.",
    tag: "Volunteer",
  },
  
  {
    id: "turku-award",
    title: "2026 Multicultural and Anti-Racist Act Award",
    image: "/src/assets/TurkuAward.png",
    description: "The City of Turku is accepting nominations for organisations building genuine connection between immigrants and the local population.",
    tag: "Award",
  },
  
  {
    id: "yle-article",
    title: "Not Finnish Enough — Who Gets to Belong?",
    description: "A Yle podcast episode explores language, identity, and what belonging really means in a changing Finland.",
    tag: "News",
  },
    {
    id: "openMicEvent",
    title: "International Open Mic Youth Night",
    image: "/src/assets/OpenMic.jpeg",
    description: "An electrifying evening of talent, culture, and community celebrating young artists from across the world.",
    tag: "Event",
  },
  
  {
    id: "art-house-newsletter",
    title: "What's Happening at Art House Turku",
    description: "Summer holiday hours, the Cathedral Bridge tram project info session, and upcoming Brinkkala courtyard events.",
    tag: "News",
  },

  {
    id: "JuneteenthFreedomDay",
    title: "Juneteenth InternationalFreedom Day",
    image: "/src/assets/Juneteeth.jpg",
    description: "Juneteenth marks the day in 1865 when the last enslaved people in the United States finally heard the news of their freedom. It is a day that belongs to all of us.",
    tag: "News",
  },

  {
    id: "turku-events",
    title: "Things to Do in Turku Year-Round",
    image: "/src/assets/Turkuevent.png",
    description: "From Ruisrock to the Christmas Market, Turku has something happening every month for everyone.",
    tag: "Resource",
  },
  {
    id: "infofinland-app",
    title: "New InfoFinland App — Now in 26 Languages",
    description: "A free app helping newcomers find reliable information about life, rights, and working in Finland.",
    tag: "Resource",
  },
  {
    id: "video-and-petition",
    title: "Stand for Gender Equality — UN Women Finland",
    image: "/src/assets/Gender.png",
    description: "Visit UN Women Finland, take part in their survey, and watch a powerful video on Islam and equality.",
    tag: "Action",
  },
  {
    id: "ourvision",
    title: "Ourvision Song Contest — Voicing Immigrant Talent",
    description: "A Helsinki-based song contest giving immigrants a stage to perform, representing cultures from Africa, Asia, the Middle East, and beyond.",
    tag: "News",
  },
  
];