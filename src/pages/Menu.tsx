import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Utensils } from "lucide-react";

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-secondary/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6 min-h-[60vh] flex flex-col items-center justify-center">
                <div className="container mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="w-24 h-24 bg-coral/10 rounded-full flex items-center justify-center animate-bounce">
                            <Utensils className="w-12 h-12 text-coral" />
                        </div>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chocolate mb-6">
                        New Menu Coming Soon
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        We are crafting something delicious for you! Our team is working hard to bring you a brand new selection of sizzling brownies, shakes, and more.
                    </p>

                    <div className="inline-block px-8 py-3 bg-white border border-chocolate/10 rounded-full shadow-sm text-chocolate/80">
                        Stay tuned for the update!
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Menu;
