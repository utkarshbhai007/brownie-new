import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us or visit our outlet for the most 
            delicious brownie experience in Gandhinagar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-coral" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Brown Art - Sizzling Brownie Van</strong><br />
                    Opp. DAICT, Nr Kerela Doshaji,<br />
                    GH-0 circle to reliance cross road,<br />
                    Kudasan, Gandhinagar, Gujarat
                  </p>
                  <p className="text-muted-foreground mt-3">
                    <strong>Other Venture:</strong><br />
                    488/2, Sector-7/B,<br />
                    Near GH-2 Circle, Gandhinagar
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-coral" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Contact Numbers</h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+919904624888" 
                      className="block text-muted-foreground hover:text-coral transition-colors"
                    >
                      <strong>Dhara Patel:</strong> +91 99046 24888
                    </a>
                    <a 
                      href="tel:+919978900948" 
                      className="block text-muted-foreground hover:text-coral transition-colors"
                    >
                      <strong>Mantha:</strong> +91 99789 00948
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timing Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-coral" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    <strong>Monday - Sunday:</strong> 5:00 PM - 11:00 PM
                  </p>
                  <p className="text-coral text-sm mt-2 font-medium">
                    🔥 Fresh brownies served hot daily!
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-chocolate rounded-full flex items-center justify-center text-cream hover:bg-coral transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-chocolate rounded-full flex items-center justify-center text-cream hover:bg-coral transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919904624888" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-chocolate rounded-full flex items-center justify-center text-cream hover:bg-coral transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map / CTA Section */}
          <div className="bg-chocolate rounded-3xl p-8 lg:p-12 shadow-elevated">
            <div className="text-center">
              <h3 className="font-script text-4xl lg:text-5xl text-cream mb-4">
                Love the life with Brownies
              </h3>
              <div className="w-24 h-1 bg-coral mx-auto mb-6 rounded-full" />
              <p className="text-cream/70 text-lg mb-8 leading-relaxed">
                Whether it's a celebration, a treat for yourself, or just a craving 
                that won't quit – our sizzling brownies are here to make your day sweeter.
              </p>
              
              <div className="bg-cream/10 rounded-2xl p-6 mb-8">
                <p className="text-coral font-display text-2xl mb-2">Order Now!</p>
                <p className="text-cream/80">Call us or WhatsApp for quick orders</p>
                <a 
                  href="tel:+919904624888"
                  className="inline-flex items-center justify-center mt-4 px-8 py-4 bg-coral text-cream font-medium rounded-full hover:bg-coral-light transition-all duration-300 shadow-glow"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +91 99046 24888
                </a>
              </div>

              <p className="text-cream/50 text-sm">
                📍 Find us opposite DAICT, Gandhinagar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
