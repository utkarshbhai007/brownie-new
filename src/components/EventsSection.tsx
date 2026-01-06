import { Calendar, Building2, PartyPopper, Users, ShoppingBag } from "lucide-react";

const EventsSection = () => {
    const events = [
        {
            title: "DAIICT - Synapse",
            category: "College Fest",
            icon: <Building2 className="w-6 h-6 text-cream" />,
            description: "Serving delicious treats at Gujarat's premier tech fest.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "IIT - Palaj",
            category: "Campus Event",
            icon: <Users className="w-6 h-6 text-cream" />,
            description: "Proud partners for IIT Gandhinagar's campus events.",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "GMC Shopping Festival",
            category: "Public Festival",
            icon: <ShoppingBag className="w-6 h-6 text-cream" />,
            description: "Delighting the crowd at Gandhinagar's biggest shopping carnival.",
            image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Birthday Parties",
            category: "Celebration",
            icon: <PartyPopper className="w-6 h-6 text-cream" />,
            description: "Making special days sweeter with our live brownie counters.",
            image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Marriage Orders",
            category: "Wedding",
            icon: <Calendar className="w-6 h-6 text-cream" />,
            description: "Adding a touch of indulgence to your big day.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "And Many More...",
            category: "All Occasions",
            icon: <StarIcon className="w-6 h-6 text-cream" />,
            description: "We cater to all types of gatherings and celebrations.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="events" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/5 skew-x-12" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
                        Our Portfolio
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-chocolate mb-6">
                        Celebrations We Served
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From prestigious college fests to intimate family gatherings,
                        Brown Art has been part of countless memorable moments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="relative h-80 rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                            </div>

                            <div className="relative h-full p-8 flex flex-col justify-end text-white">
                                <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-coral group-hover:border-coral transition-all duration-300">
                                    {event.icon}
                                </div>

                                <div className="mb-2">
                                    <span className="inline-block px-3 py-1 bg-coral/90 text-cream text-[10px] font-bold tracking-wider uppercase rounded-full">
                                        {event.category}
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl mb-3 text-cream group-hover:text-coral-light transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-cream/80 text-sm leading-relaxed max-w-[90%]">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper component for the Star icon
const StarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export default EventsSection;
