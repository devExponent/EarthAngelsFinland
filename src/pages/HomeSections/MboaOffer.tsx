import tilapiaImage from "../../assets/MboaTilapiaOffer.jpeg";

export default function MboaTilapiaOffer() {
  return (
    <section className="bg-[#0B1D13] py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Special Offer · Mboa Market
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2
              className="text-white text-4xl md:text-5xl lg:text-6xl leading-snug mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Box Tilapia at a{" "}
              <span className="text-[#C9A84C]">Special Price</span>
            </h2>

            <p className="text-[#8BAF96] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              Mboa Market is offering whole box tilapia at an exceptional price.
              Fresh, quality fish at a price that works for your family. Stock
              is limited so act fast.
            </p>

            <div className="flex items-end gap-3 mb-10">
              <span
                className="text-[#C9A84C] text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                €17.99
              </span>
              <span className="text-[#5A8A6A] text-lg md:text-xl mb-2">
                only
              </span>
            </div>

            <ul className="flex flex-col gap-3 mb-10">
              {[
                { icon: "✅", text: "Fresh whole tilapia" },
                { icon: "✅", text: "Exceptional price" },
                { icon: "⚠️", text: "Limited stock available" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white text-lg md:text-xl lg:text-2xl">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://mboamarket.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-white text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Order from Mboa Market
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="tel:+358465481069"
                className="inline-flex items-center justify-center gap-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1D13] text-base md:text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                📞 +358 46 548 1069
              </a>
            </div>
          </div>

          <div>
            {/*
              IMAGE SETUP:
              1. Copy the image into: src/assets/
              2. The import at the top of this file handles the rest
              filename: WhatsApp_Image_2026-05-21_at_13_22_35.jpeg
              Or rename it to: tilapia-offer.jpeg and update the import accordingly
            */}
            <img
              src={tilapiaImage}
              alt="Box Tilapia special offer at Mboa Market for only 17.99 euros"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
