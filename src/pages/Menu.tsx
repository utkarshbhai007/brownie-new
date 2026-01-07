import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sizzlingBrownies = [
        { name: "All Time Favourite", description: "Chocolate brownie with vanilla ice-cream", price: 80, image: "https://images.unsplash.com/photo-1582239634289-e1ae6506d860?w=800&q=80" },
        { name: "Walnut Fudge", description: "Choco-brownie with fudge & walnut toppings", price: 100, image: "https://images.unsplash.com/photo-1629837567789-9133bd5767b0?w=800&q=80" },
        { name: "Chocolate Loaded", description: "Loaded with all chocolate topping & ice-cream", price: 100, image: "https://images.unsplash.com/photo-1606313564200-e75d5e3d4431?w=800&q=80" },
        { name: "Oreo", description: "Loaded with oreo biscuit & cookie cream ice-cream", price: 110, image: "https://images.unsplash.com/photo-1551024601-569d6f44e2a7?w=800&q=80" },
        { name: "Chocolate Mocha", description: "Coffee & almond toppings with coffee ice-cream", price: 120, image: "https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?w=800&q=80" },
        { name: "Kit-Kat", description: "With kit-kat, choco syrup & vanilla ice-cream", price: 140, image: "https://images.unsplash.com/photo-1627885237883-820893043232?w=800&q=80" },
        { name: "Red Velvet", description: "Red velvet brownie with chocolate topping", price: 110, image: "https://images.unsplash.com/photo-1619158401201-8fa932695178?w=800&q=80" },
        { name: "Chocolate Caramel", description: "With caramel & choco toppings & ice-cream", price: 130, image: "https://images.unsplash.com/photo-1542568603-91b61923ce6a?w=800&q=80" },
        { name: "Nuttela Thunder", description: "Loaded with nuttela & choco topping", price: 140, image: "https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?w=800&q=80" },
        { name: "Ferrero Rocher", description: "With ferrero rocher toppings & ice-cream", price: 160, image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&q=80" },
        { name: "Lotus Biscoff", description: "Loaded with biscoff spread", price: 180, image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800&q=80" },
        { name: "Sizzling Boat", description: "All chocolate toppings with 3 ice-cream flavors", price: 301, image: "https://images.unsplash.com/photo-1616238382054-d372579dfd4a?w=800&q=80" },
    ];

    const brownieTubs = [
        { name: "Chocolate", description: "Chocolate brownie cubes with chips and sauce", price: 150, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80" },
        { name: "Chocolate Walnut", description: "With chocolate sauce and walnut", price: 180, image: "https://images.unsplash.com/photo-1595055042880-77a82c44249a?w=800&q=80" },
        { name: "Chocolate Caramel", description: "With chocolate and caramel sauce", price: 180, image: "https://images.unsplash.com/photo-1595055042895-46aa1a85cb13?w=800&q=80" },
        { name: "Chocolate Oreo", description: "With chocolate and oreo toppings", price: 180, image: "https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=800&q=80" },
        { name: "Chocolate Nuttela", description: "With nutella & hazelnut toppings", price: 200, image: "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?w=800&q=80" },
    ];

    const shakes = [
        { name: "Chocolate", price: 80, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80" },
        { name: "Butterscotch", price: 90, image: "https://images.unsplash.com/photo-1516054575922-f0b8ee258055?w=800&q=80" },
        { name: "Rose", price: 90, image: "https://images.unsplash.com/photo-1582292723326-0df75a008c4e?w=800&q=80" },
        { name: "Vanilla", price: 100, image: "https://images.unsplash.com/photo-1579954115545-a95591f28dfc?w=800&q=80" },
        { name: "Blueberry", price: 100, image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&q=80" },
        { name: "Oreo Choco", price: 100, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80" },
        { name: "Strawberry", price: 100, image: "https://images.unsplash.com/photo-1583064669865-c72eb8d5ce87?w=800&q=80" },
        { name: "Choco Brownie", price: 110, image: "https://images.unsplash.com/photo-1624781445214-43282b0e9805?w=800&q=80" },
        { name: "Badam Pista", price: 110, image: "https://images.unsplash.com/photo-1577805947697-b984381e94cf?w=800&q=80" },
        { name: "Kit-Kat Choco", price: 120, image: "https://images.unsplash.com/photo-1602166548842-a15d0e2e718b?w=800&q=80" },
        { name: "Hazelnut Choco", price: 120, image: "https://images.unsplash.com/photo-1602100827297-c86e0881c15f?w=800&q=80" },
    ];

    const coldCoffee = [
        { name: "Sp. Cold Coffee", price: 80, image: "https://images.unsplash.com/photo-1461023058943-71649d463b86?w=800&q=80" },
        { name: "Sp. Choco Coffee Mix", price: 90, image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80" },
        { name: "Sp. Oreo Coffee Mix", price: 100, image: "https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=800&q=80" },
        { name: "Mocha Coffee", price: 100, image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80" },
        { name: "Hazelnut Coffee", price: 110, image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80" },
        { name: "Irish Coffee", price: 120, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80" },
        { name: "Bournvita Coffee", price: 80, image: "https://images.unsplash.com/photo-1582092144709-322409f8745c?w=800&q=80" },
        { name: "Hazelnut with Brownie Coffee", price: 130, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" },
    ];

    return (
        <div className="min-h-screen bg-secondary/30">
            <Navbar />

            <main className="pt-24 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
                            Full Menu
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chocolate mb-6">
                            Indulgence Awaits
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our wide range of handcrafted desserts and beverages.
                        </p>
                    </div>

                    {/* Sizzling Brownies */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px flex-1 bg-chocolate/10" />
                            <h2 className="font-script text-4xl text-coral text-center">Sizzling Brownies</h2>
                            <div className="h-px flex-1 bg-chocolate/10" />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {sizzlingBrownies.map((item, index) => (
                                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-chocolate/5">
                                    <div className="h-48 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-display text-lg text-chocolate line-clamp-1">{item.name}</h3>
                                            <span className="font-bold text-coral bg-coral/10 px-2 py-1 rounded-lg text-sm">₹{item.price}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Brownie Tubs */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px flex-1 bg-chocolate/10" />
                            <h2 className="font-script text-4xl text-coral text-center">Brownie Tubs</h2>
                            <div className="h-px flex-1 bg-chocolate/10" />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {brownieTubs.map((item, index) => (
                                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-chocolate/5">
                                    <div className="h-48 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-display text-lg text-chocolate line-clamp-1">{item.name}</h3>
                                            <span className="font-bold text-coral bg-coral/10 px-2 py-1 rounded-lg text-sm">₹{item.price}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Beverages */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Shakes */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="font-script text-4xl text-coral">Shakes</h3>
                                <div className="h-px flex-1 bg-chocolate/10" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {shakes.map((item, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-white rounded-2xl hover:shadow-md transition-all border border-chocolate/5">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="font-medium text-chocolate">{item.name}</h4>
                                            <span className="text-coral font-bold text-sm">₹{item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cold Coffee */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="font-script text-4xl text-coral">Cold Coffee</h3>
                                <div className="h-px flex-1 bg-chocolate/10" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {coldCoffee.map((item, index) => (
                                    <div key={index} className="flex gap-4 p-4 bg-white rounded-2xl hover:shadow-md transition-all border border-chocolate/5">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="font-medium text-chocolate">{item.name}</h4>
                                            <span className="text-coral font-bold text-sm">₹{item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Menu;
