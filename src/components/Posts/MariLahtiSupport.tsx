import mommaAria from "../../assets/Momma-Lahti.jpeg";

export default function MariLahtiSupport() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="w-10/12 lg:w-8/12 mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <span className="block h-[2px] w-5 bg-[#0097D0]" />
          <span className="text-[#0097D0] text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
            Community Voice · EarthAngels Stands With
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          <div>
            <h2 className="text-[#0B1D13] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
              We Support{" "}
              <span className="text-[#0097D0]">Mari Lahti</span>{" "}
              for Parliament
            </h2>

            <p className="text-[#4B5563] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              EarthAngels of Finland proudly supports Mari Lahti in her bid for
              Parliament. Mari has been a genuine ally to our community, showing
              up, listening, and taking action on issues that matter to
              immigrants, women, and multicultural families across Finland.
            </p>

            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed mb-6">
              When leaders like Mari step forward, communities like ours move
              forward with them. We believe representation matters, and we
              believe in her.
            </p>

            <p className="text-[#0B1D13] font-bold text-lg md:text-xl">
              EarthAngels of Finland — standing with those who stand with us.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={mommaAria}
              alt="Momma Aria Arai showing support for Mari Lahti for Parliament"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}