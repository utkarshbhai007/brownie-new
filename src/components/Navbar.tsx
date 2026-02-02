import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
    { name: "Bulk Orders", href: "/bulk-orders" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${isScrolled ? "max-w-4xl mx-auto" : "max-w-7xl mx-auto"
          }`}
      >
        <div
          className={`
            relative px-6 py-4 rounded-full border transition-all duration-300
            ${isScrolled
              ? "bg-chocolate/40 backdrop-blur-xl border-cream/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
              : "bg-white/5 backdrop-blur-md border-white/10 shadow-lg"
            }
          `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Brown Art Logo" className="h-20 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center bg-black/20 rounded-full px-2 py-1 mr-4 border border-white/5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-2 text-sm text-cream/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <a
                href="tel:+919978900948"
                className="px-6 py-2.5 bg-gradient-to-r from-coral to-coral-light text-cream font-medium rounded-full hover:shadow-[0_0_20px_rgba(255,127,80,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cream p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`
            absolute top-full left-0 right-0 mt-2 p-4 rounded-3xl
            bg-chocolate/90 backdrop-blur-xl border border-cream/10 shadow-xl
            transition-all duration-300 origin-top
            ${isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
          `}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-center py-3 text-cream/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919978900948"
              className="mt-2 text-center py-3 bg-coral text-cream font-medium rounded-xl shadow-lg hover:bg-coral-light transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
