const MenuSection = () => {
  const sizzlingBrownies = [
    { name: "All Time Favourite", description: "Chocolate brownie with vanilla ice-cream", price: 80 },
    { name: "Walnut Fudge", description: "Choco-brownie with fudge & walnut toppings", price: 100 },
    { name: "Chocolate Loaded", description: "Loaded with all chocolate topping & ice-cream", price: 100 },
    { name: "Oreo", description: "Loaded with oreo biscuit & cookie cream ice-cream", price: 110 },
    { name: "Chocolate Mocha", description: "Coffee & almond toppings with coffee ice-cream", price: 120 },
    { name: "Kit-Kat", description: "With kit-kat, choco syrup & vanilla ice-cream", price: 140 },
    { name: "Red Velvet", description: "Red velvet brownie with chocolate topping", price: 110 },
    { name: "Chocolate Caramel", description: "With caramel & choco toppings & ice-cream", price: 130 },
    { name: "Nuttela Thunder", description: "Loaded with nuttela & choco topping", price: 140 },
    { name: "Ferrero Rocher", description: "With ferrero rocher toppings & ice-cream", price: 160 },
    { name: "Lotus Biscoff", description: "Loaded with biscoff spread", price: 180 },
    { name: "Sizzling Boat", description: "All chocolate toppings with 3 ice-cream flavors", price: 301 },
  ];

  const brownieTubs = [
    { name: "Chocolate", description: "Chocolate brownie cubes with chips and sauce", price: 150 },
    { name: "Chocolate Walnut", description: "With chocolate sauce and walnut", price: 180 },
    { name: "Chocolate Caramel", description: "With chocolate and caramel sauce", price: 180 },
    { name: "Chocolate Oreo", description: "With chocolate and oreo toppings", price: 180 },
    { name: "Chocolate Nuttela", description: "With nutella & hazelnut toppings", price: 200 },
  ];

  const shakes = [
    { name: "Chocolate", price: 80 },
    { name: "Butterscotch", price: 90 },
    { name: "Rose", price: 90 },
    { name: "Vanilla", price: 100 },
    { name: "Blueberry", price: 100 },
    { name: "Oreo Choco", price: 100 },
    { name: "Strawberry", price: 100 },
    { name: "Choco Brownie", price: 110 },
    { name: "Badam Pista", price: 110 },
    { name: "Kit-Kat Choco", price: 120 },
    { name: "Hazelnut Choco", price: 120 },
  ];

  const coldCoffee = [
    { name: "Sp. Cold Coffee", price: 80 },
    { name: "Sp. Choco Coffee Mix", price: 90 },
    { name: "Sp. Oreo Coffee Mix", price: 100 },
    { name: "Mocha Coffee", price: 100 },
    { name: "Hazelnut Coffee", price: 110 },
    { name: "Irish Coffee", price: 120 },
    { name: "Bournvita Coffee", price: 80 },
    { name: "Hazelnut with Brownie Coffee", price: 130 },
  ];

  const extras = [
    { name: "Ice-Cream Scoop (Vanilla)", price: 25 },
    { name: "Ice-Cream Scoop (Chocolate)", price: 30 },
    { name: "Any Topping", price: 30 },
  ];

  return (
    <section id="menu" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
            Our Delicious Offerings
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            The Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From our signature sizzling brownies to refreshing shakes and cold coffees, 
            discover flavors that will make your taste buds dance.
          </p>
        </div>

        {/* Sizzling Brownies */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h3 className="font-script text-4xl text-coral">Sizzling Brownie</h3>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sizzlingBrownies.map((item, index) => (
              <div 
                key={index}
                className="group bg-card p-5 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-coral/30"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-display text-lg text-foreground group-hover:text-coral transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="flex-shrink-0 bg-coral text-cream text-sm font-medium px-3 py-1.5 rounded-full">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brownie Tubs */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h3 className="font-script text-4xl text-coral">Brownie Tubs</h3>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brownieTubs.map((item, index) => (
              <div 
                key={index}
                className="group bg-card p-5 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-coral/30"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-display text-lg text-foreground group-hover:text-coral transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="flex-shrink-0 bg-coral text-cream text-sm font-medium px-3 py-1.5 rounded-full">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shakes and Cold Coffee */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Shakes */}
          <div className="bg-chocolate rounded-3xl p-8">
            <h3 className="font-script text-4xl text-coral mb-6 text-center">Shakes</h3>
            <div className="space-y-3">
              {shakes.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-cream/90 hover:text-cream transition-colors">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-coral">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cold Coffee */}
          <div className="bg-chocolate rounded-3xl p-8">
            <h3 className="font-script text-4xl text-coral mb-6 text-center">Cold Coffee</h3>
            <div className="space-y-3">
              {coldCoffee.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-cream/90 hover:text-cream transition-colors">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-coral">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extras */}
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-border" />
            <h3 className="font-script text-3xl text-coral">Extras</h3>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            {extras.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                <span className="text-foreground">{item.name}</span>
                <span className="text-coral font-medium">₹{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          ⏱ Atleast 20 minutes will be required to prepare your order
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
