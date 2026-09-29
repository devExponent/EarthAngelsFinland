import herspace1 from "../assets/Herspace1.jpeg";
import herspace2 from "../assets/Herspace2.jpeg";
import herspace3 from "../assets/herSpace3.jpeg";
import herspace4 from "../assets/Herspace4.jpeg";
import herspace5 from "../assets/Herspace5.jpeg";
import herspace6 from "../assets/Herspace6.jpeg";
// import herspaceVideoHighlight from "../assets/HerSpaceHighlight.mp4";

const topRow = [herspace1, herspace2];
const bottomRow = [herspace3, herspace4, herspace5, herspace6];

const HerSpaceHighlights = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#7dafc7] to-[#F7F5F0] py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Intro */}
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-[#0B2A4A] text-4xl md:text-6xl font-extrabold">
            Her Space Retreat: How It Went
          </h1>
          <p className="text-white text-xl md:text-3xl font-bold">
            26 September 2026 · Taiteen Talo, Turku
          </p>
          <p className="text-[#0B2A4A] text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            On 26 September, women from across Turku and beyond filled Taiteen
            Talo for a full day built around one idea: every woman deserves a
            space to be heard, to rest, and to grow. Speakers shared honest
            stories about identity, resilience and building a life in a new
            country. Between sessions, the room stayed busy with conversation,
            laughter and new friendships.
          </p>
        </div>

        {/* Gallery: 2 images, video centrepiece, then 4 images */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {topRow.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Her Space Retreat moment ${i + 1}`}
                className="w-full h-64 md:h-[32rem] object-cover rounded-2xl shadow-xl"
              />
            ))}
          </div>

          {/* Video slot: uncomment this block and the import above when the video is ready */}
          {/*
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={herspaceVideoHighlight}
              controls
              playsInline
              className="w-full max-h-[80vh] object-cover bg-black"
            />
          </div>
          */}

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {bottomRow.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Her Space Retreat moment ${i + 3}`}
                className="w-full h-56 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="text-center flex flex-col gap-3">
          <p className="text-[#0B2A4A] text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Thank you to every speaker, volunteer and guest who made the day
            what it was. Her Space is only the beginning, and we look forward
            to seeing you at the next one.
          </p>
          <p className="text-[#0B2A4A] text-lg md:text-2xl font-bold">
            Follow Earth Angels Finland for upcoming events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HerSpaceHighlights;