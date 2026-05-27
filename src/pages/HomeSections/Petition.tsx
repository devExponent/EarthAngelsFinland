export default function VideoAndPetitionSection() {
  return (
    <>
      <section className="bg-[#0B1D13] py-16 md:py-24 px-4">
        <div className="w-10/12 lg:w-8/12 mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-[2px] w-5 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              Watch and Reflect
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2
                className="text-white text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Islam Ended Racism{" "}
                <span className="text-[#C9A84C]">1400 Years Ago</span>
              </h2>

              <p className="text-[#8BAF96] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
                A powerful reminder that the fight against racism is not new.
                This video explores how Islam established a vision of human
                equality long before modern movements, and what that message
                means for us today.
              </p>

              <p className="text-[#8BAF96] text-lg md:text-xl leading-relaxed">
                Featuring reflections on Malcolm X, the Farewell Sermon, and the
                universal principle that no person is superior to another based
                on race or colour.
              </p>
            </div>

            <div className="w-full rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/V59hIPdkoX0"
                title="Islam Ended Racism 1400 Years Ago"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-16 md:py-24 px-4">
        <div className="w-10/12 lg:w-8/12 mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-[2px] w-5 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              Take Action · UN Women Finland
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2
                className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Stand for{" "}
                <span className="text-[#C9A84C]">Gender Equality</span>
              </h2>

              <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
                UN Women Finland is the national committee working to advance
                gender equality and women's rights across Finland and around the
                world. They support UN Women's global mission to ensure every
                woman and girl can live free from violence and discrimination.
              </p>

              <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
                We encourage everyone in our community to visit the UN Women
                Finland website and take part in their survey. Your experience
                and opinion matter, and this is your chance to make your voice
                heard.
              </p>

              <p className="text-[#0B1D13] font-semibold text-lg md:text-xl lg:text-2xl mb-10">
                Please take a few minutes to fill out the survey and share it
                with people around you. Every response counts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://unwomen.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#0B1D13] hover:bg-[#C9A84C] text-white hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
                >
                  Take the Survey
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="https://unwomen.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-[#0B1D13] text-[#0B1D13] hover:bg-[#0B1D13] hover:text-white text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Visit UN Women Finland
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "✊",
                  title: "Why It Matters",
                  body: "Violence against women and girls is one of the most widespread human rights violations in the world. Together we can change that.",
                },
                {
                  icon: "🌍",
                  title: "Global Reach",
                  body: "UN Women operates in over 90 countries, supporting programmes that put women and girls at the centre of change.",
                },
                {
                  icon: "📝",
                  title: "Your Response Counts",
                  body: "Every person who fills out the survey and shares it amplifies the call for equality. It takes just a few minutes and makes a real difference.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6 flex items-start gap-4"
                >
                  <span className="text-2xl md:text-3xl flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                      {item.title}
                    </p>
                    <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
