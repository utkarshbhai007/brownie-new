import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const locations = [
    {
      title: "Brown Art (Daiict /TCS)",
      address: "Near Inflibnet Road, opp Daiict, Gh-0 towards reliance cross road, Gandhinagar",
      mapQuery: "DAIICT Gandhinagar",
    },
    {
      title: "Brown Art (Spicy street)",
      address: "Shop no -3, The spicy street, opp landmark Building, kansar cross road, Kudasan, Gandhinagar",
      mapQuery: "Spicy Street Kudasan Gandhinagar",
    },
    {
      title: "Brown Art (Swarnim park)",
      address: "Near small G-4 Understand, Swarnim Park lane road, Behind Ambedkar Hall, Sector -12c, Gandhinagar",
      mapQuery: "Sector 12c Gandhinagar",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-chocolate/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Visit Our Outlets
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the sizzle at our multiple locations across Gandhinagar.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((loc, index) => (
            <div key={index} className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 flex flex-col group">
              {/* Map Embed */}
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder while loading */}
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  title={loc.title}
                ></iframe>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-coral transition-colors">{loc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Socials Footer Strip */}
        <div className="bg-chocolate rounded-3xl p-8 lg:p-12 shadow-elevated text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-cream">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-cream/60 text-sm">Call for Orders</p>
                <div className="flex flex-col">
                  <a href="tel:+919904624888" className="text-xl text-cream font-medium hover:text-coral transition-colors">+91 99046 24888</a>
                  <a href="tel:+919978900948" className="text-sm text-cream/80 hover:text-coral transition-colors">+91 99789 00948</a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-coral hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-coral hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919904624888" className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-coral hover:scale-110 transition-all duration-300" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-cream">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-cream/60 text-sm">Open Daily</p>
                <p className="text-xl text-cream font-medium">5:00 PM - 11:00 PM</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
