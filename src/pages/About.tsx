import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cake, Coffee, IceCream, Award, Heart, Utensils } from "lucide-react";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Cake,
            title: "100% Homemade",
            description: "Crafted with love using premium ingredients",
        },
        {
            icon: Coffee,
            title: "Fresh Daily",
            description: "Baked every morning for that perfect melt-in-mouth texture",
        },
        {
            icon: IceCream,
            title: "Unique Combos",
            description: "Exclusive flavor pairings you won't find elsewhere",
        },
        {
            icon: Award,
            title: "Quality First",
            description: "No compromises, only the finest chocolate and dairy",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-20">
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-chocolate/5 rounded-full blur-3xl" />

                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                            {/* Left: Visual Composition */}
                            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                <div className="relative group">
                                    {/* Main Artistic Card */}
                                    <div className="relative z-10 bg-gradient-to-br from-chocolate to-[#2a1810] p-6 md:p-10 lg:p-16 rounded-[2.5rem] shadow-2xl transform transition-transform duration-500 group-hover:-rotate-1">
                                        <div className="absolute top-6 right-6 opacity-20">
                                            <Utensils className="w-12 h-12 text-cream" />
                                        </div>

                                        <div className="text-center space-y-6">
                                            <span className="text-coral uppercase tracking-[0.3em] text-xs font-bold">Est. 2020</span>
                                            <h3 className="font-script text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">Brown Art</h3>
                                            <div className="h-px w-20 bg-coral/40 mx-auto" />

                                            <p className="text-cream/80 text-lg font-light italic leading-relaxed">
                                                Sizzling Brownies • Artisan Cookies • Rich Muffins <br />
                                                Gourmet Cupcakes • Natural Energy Bars
                                            </p>
                                        </div>
                                    </div>

                                    {/* Founder Spotlight Overlay Card */}
                                    <div className="absolute -bottom-8 right-0 md:-right-4 lg:-right-12 z-20 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl max-w-[240px] border border-coral/10 animate-float">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                                                <Heart className="w-6 h-6 text-coral fill-coral" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Founder</p>
                                                <p className="font-display text-foreground">Dhara Patel</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground italic leading-snug">
                                            "Every bite is a masterpiece designed to bring you joy."
                                        </p>
                                    </div>

                                    {/* Decorative Blur Circles */}
                                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-coral/10 rounded-full blur-2xl animate-pulse" />
                                </div>
                            </div>

                            {/* Right: Text Content */}
                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <div className="space-y-8">
                                    <div>
                                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-semibold mb-6">
                                            <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
                                            Our Story
                                        </span>
                                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-foreground leading-[1.1] mb-8">
                                            Crafted with <span className="italic text-coral">Passion</span>,<br />
                                            Served with Love.
                                        </h1>
                                        <p className="text-muted-foreground text-xl leading-relaxed max-w-xl">
                                            At Brown Art, we believe a dessert is more than just sugar—it's a
                                            <span className="text-foreground font-medium"> sensory journey</span>. From the hiss of our sizzling brownies to the aroma of freshly ground coffee.
                                            <br /><br />
                                            What started as a small home kitchen experiment has grown into a beloved dessert destination in Gandhinagar. Our mission remains simple: to serve the most indulgent, high-quality treats that make every moment special.
                                        </p>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="group flex flex-col p-6 rounded-2xl border border-transparent hover:border-coral/20 hover:bg-coral/[0.02] transition-all duration-300"
                                            >
                                                <div className="w-12 h-12 mb-4 bg-secondary/80 rounded-xl flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                                                    <feature.icon className="w-6 h-6" />
                                                </div>
                                                <h4 className="text-lg font-bold text-foreground mb-1">{feature.title}</h4>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional 'Values' Section for the dedicated page */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-display text-chocolate mb-12">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-chocolate/5">
                                <h3 className="font-bold text-xl mb-4 text-coral">Authenticity</h3>
                                <p className="text-muted-foreground">We stay true to traditional recipes while innovating with new flavors. No premixes, just pure baking.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-chocolate/5">
                                <h3 className="font-bold text-xl mb-4 text-coral">Community</h3>
                                <p className="text-muted-foreground">We are proud to be a part of the Gandhinagar community, serving smiles one dessert at a time.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-chocolate/5">
                                <h3 className="font-bold text-xl mb-4 text-coral">Excellence</h3>
                                <p className="text-muted-foreground">From the ingredients we source to the way we plate, we strive for perfection in every detail.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
