import { Star } from "lucide-react";
import heroImage from "@/assets/hero-brownie.jpg"; // Using existing image for now as placeholder

const HotFavoritesSection = () => {
    const items = [
        {
            id: 1,
            name: "Sizzling Brownie",
            price: "₹180",
            image: heroImage,
            description: "Hot brownie with vanilla ice cream",
        },
        {
            id: 2,
            name: "Chocolate Overload",
            price: "₹200",
            image: heroImage,
            description: "Triple chocolate indulgence",
        },
        {
            id: 3,
            name: "Caramel Crunch",
            price: "₹190",
            image: heroImage,
            description: "Gooey caramel with roasted nuts",
        },
        {
            id: 4,
            name: "Nutty Delight",
            price: "₹210",
            image: heroImage,
            description: "Loaded with walnuts and almonds",
        },
        {
            id: 5,
            name: "Classic Fudge",
            price: "₹160",
            image: heroImage,
            description: "The classic fudgy experience",
        },
        {
            id: 6,
            name: "Brownie Shake",
            price: "₹150",
            image: heroImage,
            description: "Thick, creamy brownie shake",
        },
    ];

    return (
        <section className="py-20 bg-chocolate/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
                    Daily Specials
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-chocolate">
                    Today's Hot Fav
                </h2>
            </div>

            <div className="relative w-full">
                <div className="flex w-max animate-scroll hover:pause-animation">
                    {/* First set of items */}
                    <div className="flex gap-8 px-4">
                        {items.map((item) => (
                            <div
                                key={`a-${item.id}`}
                                className="w-80 flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group cursor-pointer"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="text-sm font-medium">Bestseller</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-2xl text-chocolate mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-coral font-bold text-xl">
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for infinite scroll */}
                    <div className="flex gap-8 px-4">
                        {items.map((item) => (
                            <div
                                key={`b-${item.id}`}
                                className="w-80 flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group cursor-pointer"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="text-sm font-medium">Bestseller</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-2xl text-chocolate mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-coral font-bold text-xl">
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotFavoritesSection;
