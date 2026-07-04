const MommaAriaHonour = () => {
  return (
    <div className="w-10/12 lg:w-8/12 mx-auto flex flex-col gap-16 md:gap-24 my-8">
      <div className="border-t border-[#1E4A2B] pt-16 md:pt-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-lg md:text-xl tracking-[0.2em] uppercase font-black text-black">
            A Look Back
          </span>
        </div>

        <h2
          className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl leading-snug mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          The Miss XL Story and Aria Arai's Role in It
        </h2>

        <p className="text-xl md:text-2xl leading-relaxed mb-6 font-bold text-black">
          Twenty years ago, the Miss XL pageant arrived in Finland and changed
          how the country talked about beauty and body confidence. American born
          presenter Aria Arai is credited with bringing the idea to Finland and
          pitching it first to Seiska magazine.
        </p>

        <p className="text-xl md:text-2xl leading-relaxed mb-10 font-bold text-black">
          The first contest was held in 1999 at Ikaalisten Kylpylä, drawing over
          300 entrants and nearly 2,000 spectators at the final, which was
          broadcast on MTV3. It was one of the earliest mainstream celebrations
          of plus size beauty in Finland, running for over a decade until 2013.
        </p>

        <a
          href="https://www.seiska.fi/kotimaa/muistatko-miss-xl-kisa-saapui-suomeen-20-vuotta-sitten-voittaja-kuoli-traagisesti-thaimaan-tsunamissa/963268"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
        >
          Read the Full Story
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <div className="border-t border-[#1E4A2B] pt-16 md:pt-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-lg md:text-xl tracking-[0.2em] uppercase font-black text-black">
            Honouring Our Founder
          </span>
        </div>

        <h2
          className="text-black text-3xl md:text-4xl lg:text-5xl leading-snug mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Momma Aria Receives a Citation of Honour
        </h2>

        <p className="text-xl md:text-2xl leading-relaxed mb-6 font-bold text-black">
          Ceci Educare Oy, Finland honoured Momma Aria as their first awardee,
          recognising her remarkable contributions to promoting inclusivity
          within the African diaspora community, both in Finland and globally.
        </p>

        <p className="text-xl md:text-2xl leading-relaxed mb-10 font-bold text-black">
          Through her leadership, she has carved a path of community, unity, and
          belonging, while inspiring others toward determination and
          achievement. Her work spans body acceptance advocacy, founding
          EarthAngels Finland, and producing Say It Loud during Black American
          History Month.
        </p>

        <a
          href="https://www.facebook.com/groups/189252330655645/permalink/548854248028783/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#0B1D13] border border-[#C9A84C] hover:bg-[#C9A84C] text-[#C9A84C] hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
        >
          View the Full Post
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default MommaAriaHonour;
