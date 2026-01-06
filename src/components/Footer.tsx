import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-chocolate pt-20 pb-10 overflow-hidden">
      {/* Decorative background texture or glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-coral/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-script text-5xl text-cream mb-2">Brown Art</h3>
            <p className="text-coral font-display tracking-widest text-sm uppercase mb-6">Sizzling Brownie</p>
            <p className="text-cream/60 leading-relaxed mb-6">
              Crafting premium desserts and unforgettable experiences in Gandhinagar since 2020.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/brownart_sizzlingbrownie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center text-cream hover:bg-coral hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-bold mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Menu', href: '#menu' },
                { name: 'Events', href: '#events' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-cream/50 hover:text-coral transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-coral mr-0 group-hover:mr-2 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream font-bold mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
            <ul className="space-y-4 text-cream/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral shrink-0" />
                <span>Gandhinagar, Gujarat,<br />India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coral shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-coral shrink-0" />
                <span>hello@brownart.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Time */}
          <div>
            <h4 className="text-cream font-bold mb-6 uppercase tracking-wider text-sm">Hours</h4>
            <div className="bg-cream/5 p-6 rounded-2xl border border-cream/10">
              <p className="text-cream/80 text-sm mb-2 flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-coral">11 AM - 11 PM</span>
              </p>
              <p className="text-cream/80 text-sm flex justify-between">
                <span>Sat - Sun:</span>
                <span className="text-coral">11 AM - 12 AM</span>
              </p>
              <div className="mt-4 pt-4 border-t border-cream/10">
                <p className="text-xs text-cream/40 italic text-center">Open for dine-in and takeaway</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Brown Art. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-cream/40 text-sm">
            <span>Made by</span>
            <a href="https://www.udaanworks.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors font-medium">Udaan Works</a>
          </div>

          <div className="flex gap-6 text-xs text-cream/30 uppercase tracking-widest">
            <a href="/privacy" className="hover:text-cream transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-cream transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;