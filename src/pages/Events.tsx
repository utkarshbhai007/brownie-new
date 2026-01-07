import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, PartyPopper, Users, ShoppingBag, Calendar, StarIcon } from "lucide-react";
import { useEffect } from "react";

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const events = [
        {
            title: "DAIICT - Synapse",
            category: "College Fest",
            icon: <Building2 className="w-6 h-6 text-cream" />,
            description: "Serving delicious treats at Gujarat's premier tech fest. We brought our signature sizzling brownies to hundreds of students.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "IIT - Palaj",
            category: "Campus Event",
            icon: <Users className="w-6 h-6 text-cream" />,
            description: "Proud partners for IIT Gandhinagar's campus events. A delight to serve the brilliant minds of the country.",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "GMC Shopping Festival",
            category: "Public Festival",
            icon: <ShoppingBag className="w-6 h-6 text-cream" />,
            description: "Delighting the crowd at Gandhinagar's biggest shopping carnival. Our stall was a favorite stop for shoppers.",
            image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Birthday Parties",
            category: "Celebration",
            icon: <PartyPopper className="w-6 h-6 text-cream" />,
            description: "Making special days sweeter with our live brownie counters. Customized menus for kids and adults alike.",
            image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Marriage Orders",
            category: "Wedding",
            icon: <Calendar className="w-6 h-6 text-cream" />,
            description: "Adding a touch of indulgence to your big day. We cater for receptions, sangeet, and pre-wedding functions.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Corporate Meets",
            category: "Corporate",
            icon: <StarIcon className="w-6 h-6 text-cream" />,
            description: "Elevate your business meetings with our premium coffee and brownie hampers.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-20">
                <section className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
                            Our Portfolio
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chocolate mb-6">
                            Events & Celebrations
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            From prestigious college fests to intimate family gatherings,
                            Brown Art has been part of countless memorable moments. We bring the sweetness to your special occasions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="relative h-96 rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                                </div>

                                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                                    <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-coral group-hover:border-coral transition-all duration-300">
                                        {event.icon}
                                    </div>

                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-coral/90 text-cream text-[10px] font-bold tracking-wider uppercase rounded-full">
                                            {event.category}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-2xl mb-3 text-cream group-hover:text-coral-light transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-cream/80 text-sm leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-display text-chocolate mb-6">Want us at your next event?</h2>
                        <a href="/bulk-orders" className="inline-block px-8 py-4 bg-coral text-white font-medium rounded-full shadow-lg hover:bg-coral/90 hover:shadow-xl transition-all hover:-translate-y-1">
                            Book Us Now
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Events;
