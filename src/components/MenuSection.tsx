import { Clock, Coffee, CupSoda, Plus, Sparkles } from "lucide-react";
import waffleImg from "@/assets/menu-waffle.png";
import pancakeImg from "@/assets/menu-pancake.png";
import cheesecakeImg from "@/assets/menu-cheesecake.png";

export const sizzlingBrownies = [
  { name: "All Time Favourite", description: "Chocolate brownie served with vanilla ice-cream", price: 100 },
  { name: "Walnut Fudge", description: "Choco-brownie served with fudge & walnut toppings & vanilla icecream", price: 120 },
  { name: "Chocolate Loaded", description: "Choco-brownie loaded with all chocolate topping & ice-cream", price: 120 },
  { name: "Chocolate Caramel", description: "Choco-brownie served with caramel & choco toppings & chocolate ice-cream", price: 130 },
  { name: "Oreo", description: "Chocolate brownie loaded with oreo biscuit & cookie cream ice-cream", price: 130 },
  { name: "Kit-Kat", description: "Choco-brownie loaded with KIT-KAT, choco toppings served with ice-cream", price: 140 },
  { name: "Nuttela Thunder", description: "Choco-brownie loaded with all nuttela topping & chocolate ice-cream", price: 160 },
  { name: "Ferrero Rocher", description: "Choco-brownie loaded with all nuttella, choco & ferrero rocher toppings served with chocolate ice-cream", price: 180 },
  { name: "Lotus Biscoff", description: "Choco-brownie loaded with biscoff, biscoff syrup toppings served with vanilla ice-cream", price: 200 },
  { name: "Chocolate Mocha", description: "Chocolate brownie loaded with coffee & almond toppings with coffee ice-cream", price: 140 },
  { name: "Sizzling Boat", description: "Chocolate brownie loaded with all chocolate toppings served with 3 different flavors of ice-cream", price: 350 },
];

export const brownieTubs = [
  { name: "Chocolate", description: "Chocolate brownie cubes with chocolate chips and sauce", price: 180 },
  { name: "Chocolate Walnut", description: "Chocolate walnut brownie cubes with chocolate sauce and walnut", price: 200 },
  { name: "Chocolate Caramel", description: "Chocolate brownie cubes with chocolate and caramel sauce", price: 200 },
  { name: "Chocolate Oreo", description: "Chocolate brownie cubes with chocolate and oreo toppings", price: 200 },
  { name: "Chocolate Kitkat", description: "Chocolate brownie cubes with chocolate and kitkat toppings", price: 250 },
  { name: "Chocolate Nuttela", description: "Chocolate brownie cubes with nutella & hazelnut toppings", price: 250 },
  { name: "Lotus Biscoff", description: "Chocolate brownie cubes with lotus spread & lotus crumble", price: 300 },
];

export const newArrivals = [
  { name: "Choco Cookies", description: "Chocolate brownie loaded with cookies crumble, chips & vanilla ice-cream", price: 130 },
  { name: "Peanut Butter", description: "Chocolate brownie loaded with peanut butter, peanuts & chocolate ice-cream", price: 140 },
  { name: "Choco Truffle", description: "Chocolate brownie loaded with choco truffle spread, chips & chocolate ice-cream", price: 150 },
  { name: "Royal Taj Mahal", description: "Chocolate brownie loaded with dryfruit & taj mahal ice-cream", price: 200 },
];

export const waffles = [
  { name: "Choco Overloaded", price: 120 },
  { name: "Butterscotch", price: 120 },
  { name: "Peanut Butter", price: 120 },
  { name: "Triple Chocolate", price: 150 },
  { name: "Kit Kat", price: 150 },
  { name: "Oreo", price: 150 },
  { name: "Red Velvet", price: 150 },
  { name: "Rich Coffee Almond", price: 150 },
  { name: "Nuttella", price: 160 },
  { name: "Ferrero Rocher", price: 180 },
  { name: "Lotus Biscoff", price: 180 },
];

export const creamCheeseWaffles = [
  { name: "Blueberry", price: 220 },
  { name: "Lotus Biscoff", price: 220 },
  { name: "Nutty Nuttella", price: 240 },
];

export const pancakes = [
  { name: "Kit Kat", price: 100 },
  { name: "Oreo", price: 100 },
  { name: "Nuttella", price: 140 },
  { name: "Blue Berry", price: 110 },
  { name: "Lotus Biscoff", price: 150 },
];

export const cheeseCakes = [
  { name: "Blue Berry", price: 140 },
  { name: "Nuttella", price: 160 },
  { name: "Coffee Caramel", price: 160 },
  { name: "Lotus Biscoff", price: 180 },
  { name: "Choco Strawberry", price: 160 },
];

export const shakes = [
  { name: "Chocolate", price: 80 },
  { name: "Butterscotch", price: 90 },
  { name: "Rose", price: 90 },
  { name: "Vanilla", price: 100 },
  { name: "Blue Berry", price: 100 },
  { name: "Oreo Choco", price: 100 },
  { name: "Strawberry", price: 100 },
  { name: "Choco Brownie", price: 110 },
  { name: "Badam Pista", price: 110 },
  { name: "Kit Kat Choco", price: 120 },
  { name: "Hazelnut Choco", price: 120 },
  { name: "Lotus Biscoff", price: 150 },
];

export const coldCoffee = [
  { name: "Sp. Cold Coffee", price: 80 },
  { name: "Sp. Choco Coffee Mix", price: 100 },
  { name: "Sp. Oreo Coffee Mix", price: 100 },
  { name: "Mocha Coffee", price: 100 },
  { name: "Hazelnut Coffee", price: 120 },
  { name: "Irish Coffee", price: 130 },
  { name: "Hazelnut with Brownie Coffee", price: 130 },
];

export const extras = [
  { name: "Ice-Cream Scoop (Vanilla)", price: 25 },
  { name: "Ice-Cream Scoop (Chocolate)", price: 30 },
  { name: "Any Topping", price: 30 },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-10 lg:py-16 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-chocolate/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" /> Discover Our Signature Flavors
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-chocolate mb-6">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Crafted with passion using the finest ingredients. Indulge in our updated selection of sizzling brownies, custom waffles, thick shakes, and cold coffee.
          </p>
        </div>

        {/* 1. Sizzling Brownies */}
        <div className="mb-20">
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

        {/* 2. New Arrivals */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-border" />
            <span className="flex items-center gap-2 font-script text-4xl md:text-5xl text-coral px-4">
              <Sparkles className="w-6 h-6 text-coral animate-pulse" /> New Arrivals
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((item, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-b from-white to-secondary/10 p-6 rounded-[2rem] shadow-soft hover:shadow-elevated transition-all duration-300 border border-coral/20 hover:border-coral/40 hover:-translate-y-1 relative overflow-hidden"
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
        </div>

        {/* 3. Brownie Tubs */}
        <div className="mb-20">
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

        {/* 4. Waffles, Pancakes & Cheesecakes (Rich Cards with Circle Images) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Waffles */}
          <div className="bg-card rounded-[2.5rem] border border-border/40 shadow-soft overflow-hidden p-8 flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-coral/20 shadow-md mb-6 hover:scale-105 transition-transform duration-300">
              <img src={waffleImg} alt="Gourmet Waffles" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-script text-4xl text-coral mb-6 text-center">Waffles</h3>
            <div className="w-full space-y-4 flex-1">
              <div className="space-y-2">
                {waffles.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-1 border-b border-border/10 last:border-0 text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-semibold text-coral">₹{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border/30">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold block mb-2 text-center">Cream Cheese Waffles</span>
                {creamCheeseWaffles.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-1 border-b border-border/10 last:border-0 text-sm">
                    <span className="font-medium italic">{item.name}</span>
                    <span className="font-semibold text-coral">₹{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pancakes */}
          <div className="bg-card rounded-[2.5rem] border border-border/40 shadow-soft overflow-hidden p-8 flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-coral/20 shadow-md mb-6 hover:scale-105 transition-transform duration-300">
              <img src={pancakeImg} alt="Fresh Pancakes" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-script text-4xl text-coral mb-6 text-center">Pancakes</h3>
            <div className="w-full space-y-2 flex-1">
              {pancakes.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-1 border-b border-border/10 last:border-0 text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold text-coral">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cheesecakes */}
          <div className="bg-card rounded-[2.5rem] border border-border/40 shadow-soft overflow-hidden p-8 flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-coral/20 shadow-md mb-6 hover:scale-105 transition-transform duration-300">
              <img src={cheesecakeImg} alt="Creamy Cheesecakes" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-script text-4xl text-coral mb-6 text-center">Cheese Cake</h3>
            <div className="w-full space-y-2 flex-1">
              {cheeseCakes.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-chocolate/90 hover:text-coral transition-colors py-1 border-b border-border/10 last:border-0 text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold text-coral">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Shakes & Cold Coffee (Aesthetic Dark Cocoa Cards) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Shakes */}
          <div className="bg-chocolate-gradient rounded-[2.5rem] p-8 md:p-10 shadow-elevated relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-4 mb-8 justify-center">
              <CupSoda className="w-8 h-8 text-coral animate-bounce" />
              <h3 className="font-script text-4xl md:text-5xl text-coral text-center">Shakes</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {shakes.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1.5 border-b border-white/5 text-cream/90 hover:text-cream transition-colors text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-coral font-semibold">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cold Coffee */}
          <div className="bg-chocolate-gradient rounded-[2.5rem] p-8 md:p-10 shadow-elevated relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-4 mb-8 justify-center">
              <Coffee className="w-8 h-8 text-coral animate-bounce" />
              <h3 className="font-script text-4xl md:text-5xl text-coral text-center">Cold Coffee</h3>
            </div>
            <div className="space-y-3">
              {coldCoffee.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1.5 border-b border-white/5 text-cream/90 hover:text-cream transition-colors text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-coral font-semibold">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Extras & Prep Note */}
        <div className="max-w-xl mx-auto">
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
                <div key={index} className="flex justify-between items-center py-2.5 border-b border-border/10 last:border-0">
                  <span className="text-chocolate font-medium">{item.name}</span>
                  <span className="text-coral font-semibold text-lg">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="flex justify-center items-center gap-2 text-muted-foreground mt-16 text-sm bg-white/50 backdrop-blur-sm py-3 px-6 rounded-full w-fit mx-auto border border-border/30 shadow-sm animate-pulse">
          <Clock className="w-4 h-4 text-coral" />
          <span>⏱ Atleast 25 minutes will be required to prepare your order</span>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

