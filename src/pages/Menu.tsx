import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Coffee, CupSoda, Sparkles, Plus, Clock, Flame } from "lucide-react";
import {
  sizzlingBrownies,
  brownieTubs,
  newArrivals,
  waffles,
  creamCheeseWaffles,
  pancakes,
  cheeseCakes,
  shakes,
  coldCoffee,
  extras
} from "@/components/MenuSection";
import waffleImg from "@/assets/menu-waffle.png";
import pancakeImg from "@/assets/menu-pancake.png";
import cheesecakeImg from "@/assets/menu-cheesecake.png";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Menu" },
    { id: "sizzling", name: "Sizzling Brownies" },
    { id: "tubs", name: "Tubs & New Arrivals" },
    { id: "waffles", name: "Waffles & Pancakes" },
    { id: "cheesecakes", name: "Cheesecakes" },
    { id: "drinks", name: "Shakes & Coffees" },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      <Navbar />

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-chocolate/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-semibold mb-6">
              <Flame className="w-4 h-4 text-coral animate-pulse" /> Dhara Patel's Creation
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-chocolate mb-6 leading-tight">
              Brown Art Dessert Library
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Explore our freshly updated selection of premium sizzling brownies, artisan waffles, signature cheesecakes, and chilled drinks. Find your next favorite sweet moment.
            </p>
          </div>

          {/* Interactive Categories switcher */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 max-w-4xl mx-auto bg-white/40 backdrop-blur-md p-2 rounded-[2rem] border border-chocolate/5 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-chocolate text-cream shadow-md scale-105"
                    : "text-chocolate-light hover:bg-chocolate/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sizzling Brownies (Condition) */}
          {(activeCategory === "all" || activeCategory === "sizzling") && (
            <div className="mb-20 animate-fade-up">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-border" />
                <h3 className="font-script text-4xl md:text-5xl text-coral px-4">Sizzling Brownies</h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sizzlingBrownies.map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-card p-6 rounded-[2rem] shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/40 hover:border-coral/30 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-display text-lg text-chocolate group-hover:text-coral transition-colors font-semibold">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-2 font-light leading-relaxed">{item.description}</p>
                      </div>
                      <span className="flex-shrink-0 bg-coral text-cream text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tubs & New Arrivals (Condition) */}
          {(activeCategory === "all" || activeCategory === "tubs") && (
            <div className="mb-20 animate-fade-up">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-border" />
                <span className="flex items-center gap-2 font-script text-4xl md:text-5xl text-coral px-4">
                  <Sparkles className="w-6 h-6 text-coral animate-pulse" /> New Arrivals
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {newArrivals.map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-b from-white to-secondary/15 p-6 rounded-[2rem] shadow-soft hover:shadow-elevated transition-all duration-300 border border-coral/20 hover:border-coral/40 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-coral/10 rounded-bl-[2rem] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-coral" />
                    </div>
                    <div className="flex flex-col h-full justify-between pt-4">
                      <div>
                        <h4 className="font-display text-lg text-chocolate group-hover:text-coral transition-colors font-semibold pr-6">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-xs mt-2 font-light leading-relaxed">{item.description}</p>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <span className="text-coral font-bold text-lg">₹{item.price}</span>
                        <span className="text-xs px-2.5 py-1 bg-coral/10 text-coral rounded-full font-medium">New</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-border" />
                <h3 className="font-script text-4xl md:text-5xl text-coral px-4">Brownie Tubs</h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brownieTubs.map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-card p-6 rounded-[2rem] shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/40 hover:border-coral/30 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-display text-lg text-chocolate group-hover:text-coral transition-colors font-semibold">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-2 font-light leading-relaxed">{item.description}</p>
                      </div>
                      <span className="flex-shrink-0 bg-coral text-cream text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Waffles & Pancakes (Condition) */}
          {(activeCategory === "all" || activeCategory === "waffles") && (
            <div className="mb-20 animate-fade-up">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-border" />
                <h3 className="font-script text-4xl md:text-5xl text-coral px-4">Waffles & Pancakes</h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:px-12">
                {/* Waffles Block */}
                <div className="bg-card rounded-[2.5rem] border border-border/40 shadow-soft overflow-hidden p-8 md:p-12 flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-coral/20 shadow-md mb-8 hover:scale-105 transition-transform duration-300">
                    <img src={waffleImg} alt="Gourmet Waffles" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-display text-3xl text-chocolate mb-8 text-center font-bold">Waffle Selection</h4>
                  
                  <div className="w-full space-y-3">
                    {waffles.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-1.5 border-b border-border/10 last:border-0">
                        <span className="font-medium text-sm md:text-base">{item.name}</span>
                        <span className="font-semibold text-coral">₹{item.price}</span>
                      </div>
                    ))}
                    
                    <div className="pt-6 mt-6 border-t-2 border-border/40">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold block mb-4 text-center">Cream Cheese Waffle Specials</span>
                      {creamCheeseWaffles.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-1.5 border-b border-border/10 last:border-0">
                          <span className="font-semibold italic text-sm md:text-base">{item.name}</span>
                          <span className="font-semibold text-coral">₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pancakes Block */}
                <div className="bg-card rounded-[2.5rem] border border-border/40 shadow-soft overflow-hidden p-8 md:p-12 flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-coral/20 shadow-md mb-8 hover:scale-105 transition-transform duration-300">
                    <img src={pancakeImg} alt="Fresh Pancakes" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-display text-3xl text-chocolate mb-8 text-center font-bold">Fluffy Pancakes</h4>
                  
                  <div className="w-full space-y-3">
                    {pancakes.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-1.5 border-b border-border/10 last:border-0">
                        <span className="font-medium text-sm md:text-base">{item.name}</span>
                        <span className="font-semibold text-coral">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cheesecakes (Condition) */}
          {(activeCategory === "all" || activeCategory === "cheesecakes") && (
            <div className="mb-20 animate-fade-up">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-border" />
                <h3 className="font-script text-4xl md:text-5xl text-coral px-4">Artisan Cheesecakes</h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="max-w-2xl mx-auto bg-card rounded-[2.5rem] border border-border/40 shadow-soft overflow-hidden p-8 md:p-12 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-coral/20 shadow-md mb-8 hover:scale-105 transition-transform duration-300">
                  <img src={cheesecakeImg} alt="Gourmet Cheesecakes" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display text-3xl text-chocolate mb-8 text-center font-bold">Cheesecake Slices</h4>
                
                <div className="w-full space-y-3">
                  {cheeseCakes.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-2 border-b border-border/10 last:border-0">
                      <span className="font-medium text-sm md:text-base">{item.name}</span>
                      <span className="font-semibold text-coral">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Drinks (Condition) */}
          {(activeCategory === "all" || activeCategory === "drinks") && (
            <div className="mb-20 animate-fade-up">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-border" />
                <h3 className="font-script text-4xl md:text-5xl text-coral px-4">Shakes & Cold Coffees</h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Shakes */}
                <div className="bg-chocolate-gradient rounded-[2.5rem] p-8 md:p-12 shadow-elevated relative overflow-hidden group">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <div className="flex items-center gap-4 mb-8 justify-center">
                    <CupSoda className="w-8 h-8 text-coral animate-bounce" />
                    <h4 className="font-script text-4xl text-coral text-center">Thick Shakes</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {shakes.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-white/5 text-cream/90 hover:text-cream transition-colors text-sm md:text-base">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-coral font-semibold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cold Coffee */}
                <div className="bg-chocolate-gradient rounded-[2.5rem] p-8 md:p-12 shadow-elevated relative overflow-hidden group">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <div className="flex items-center gap-4 mb-8 justify-center">
                    <Coffee className="w-8 h-8 text-coral animate-bounce" />
                    <h4 className="font-script text-4xl text-coral text-center">Brewed Cold Coffee</h4>
                  </div>
                  <div className="space-y-3 max-w-md mx-auto">
                    {coldCoffee.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-white/5 text-cream/90 hover:text-cream transition-colors text-sm md:text-base">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-coral font-semibold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Extras (Condition: only show on 'all' or 'cheesecakes' or if we want a separate little note) */}
          {activeCategory === "all" && (
            <div className="max-w-xl mx-auto animate-fade-up mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border" />
                <span className="flex items-center gap-2 font-script text-3xl text-coral">
                  <Plus className="w-6 h-6 text-coral" /> Extras
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/40 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-coral/5 rounded-full blur-xl" />
                <div className="space-y-4">
                  {extras.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2.5 border-b border-border/10 last:border-0 text-sm md:text-base">
                      <span className="text-chocolate font-medium">{item.name}</span>
                      <span className="text-coral font-semibold text-lg">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Preparation Note */}
          <div className="flex justify-center items-center gap-2 text-muted-foreground mt-8 text-sm bg-white/50 backdrop-blur-sm py-3.5 px-6 rounded-full w-fit mx-auto border border-border/30 shadow-sm">
            <Clock className="w-4 h-4 text-coral animate-pulse" />
            <span>⏱ Atleast 25 minutes will be required to prepare your order</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
