import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  image?: string;
}

interface EventCardProps {
  filtered: Event[];
}

const Eventcard = ({ filtered }: EventCardProps) => {
  return (
    <div>
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <p className="text-white/70">No events found.</p>
        ) : (
          filtered.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-black bg-white p-12 transition my-10"
            >
              <div className="mb-6">
                <img
                  src={event.image}
                  alt="event image"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-black">{event.description}</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-black">
                      <CalendarIcon className="h-5 w-5" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        · {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <MapPinIcon className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-block rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
                  {event.type}
                </span>
              </div>
              {new Date(event.date) >= new Date() && (
                <button className="bg-blue-400 mt-6 py-5 px-5 rounded-xl">
                  RSVP
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Eventcard;
