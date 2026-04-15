export default function MboaMarketSpotlight() {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
            Community Spotlight
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h2
              className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl leading-snug mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A Taste of Home,{" "}
              <span className="text-[#C9A84C]">Right Here in Turku</span>
            </h2>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              Moving to a new country is hard enough — finding the food you grew
              up with shouldn't be.{" "}
              <strong className="text-[#0B1D13]">Mboa Market</strong> is Turku's
              own African mini-shop, stocked with authentic ingredients, fresh
              produce, spices, and traditional products straight from the
              continent.
            </p>

            <p className="text-[#6B7280] text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
              Whether you're looking for fresh okra, cassava, palm oil, African
              plum, or specialized spices for a recipe from back home — Mboa
              Market has you covered. For many in the diaspora, it truly is a
              home away from home.
            </p>

            <a
              href="https://mboamarket.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0B1D13] hover:bg-[#C9A84C] text-white hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
            >
              Visit Mboa Market
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#0B1D13] rounded-2xl p-6 md:p-8">
              <h3
                className="text-[#C9A84C] text-2xl md:text-3xl font-semibold mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                What You'll Find
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Fresh Okra",
                  "Cassava",
                  "African Plum",
                  "Plantains & Avocado",
                  "Palm Oil",
                  "Traditional Spices",
                  "Snacks & Beverages",
                  "Handmade Crafts",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[#8BAF96] text-base md:text-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-3xl block mb-3">📍</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  Location
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  Hämeenkatu 14,
                  <br />
                  Turku, Finland
                </p>
              </div>
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-3xl block mb-3">🕙</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  Opening Hours
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  Mon – Sun
                  <br />
                  10:00 AM – 10:00 PM
                </p>
              </div>
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-3xl block mb-3">🚚</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  Delivery
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  Local & nationwide.
                  <br />
                  Free from €100
                </p>
              </div>
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-5 md:p-6">
                <span className="text-3xl block mb-3">📞</span>
                <p className="text-[#0B1D13] font-semibold text-base md:text-lg mb-1">
                  Contact
                </p>
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                  +358 46 548 1069
                  <br />
                  info@mboamarket.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
