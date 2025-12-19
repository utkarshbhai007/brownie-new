import { Cake, Coffee, IceCream, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Cake,
      title: "100% Homemade",
      description: "Every brownie is crafted with love using the finest ingredients",
    },
    {
      icon: Coffee,
      title: "Fresh Daily",
      description: "Made fresh every day for the perfect taste and texture",
    },
    {
      icon: IceCream,
      title: "Unique Combos",
      description: "Exclusive combinations of flavors you won't find anywhere else",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Premium chocolate and ingredients for an unforgettable experience",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Crafted with <span className="text-coral">Passion</span>,<br />
              Served with Love
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Brown Art, we believe that the perfect brownie is more than just a dessert – 
              it's an experience. Our sizzling brownies, creamy shakes, and refreshing cold 
              coffees are made with the finest ingredients and a whole lot of love.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded by <span className="text-foreground font-medium">Dhara Patel</span>, 
              Brown Art has become a beloved destination for dessert lovers in Gandhinagar. 
              Each creation is a masterpiece, designed to bring joy with every bite.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Decorative */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto">
              {/* Main decorative card */}
              <div className="bg-chocolate rounded-3xl p-8 lg:p-12 shadow-elevated">
                <div className="text-center">
                  <div className="font-script text-5xl lg:text-6xl text-cream mb-4">
                    Brown Art
                  </div>
                  <div className="w-24 h-1 bg-coral mx-auto mb-4 rounded-full" />
                  <p className="font-display text-xl text-coral mb-6">
                    Sizzling Brownie
                  </p>
                  <p className="text-cream/70 mb-8">
                    Cake • Cookies • Chocolate<br />
                    Nan Khatai • Muffin • Cupcake<br />
                    Brownie • Energy Bar
                  </p>
                  <div className="inline-block px-6 py-3 bg-coral/20 rounded-full">
                    <span className="text-coral-light font-medium">Since 2020</span>
                  </div>
                </div>
              </div>
              
              {/* Floating decorations */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-coral/20 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-caramel/30 blob-shape animate-float-delayed" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
