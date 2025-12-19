import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-script text-4xl text-cream mb-2">Brown Art</h3>
          <p className="text-coral font-display text-lg mb-6">Sizzling Brownie</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-cream/60">
            <a href="#" className="hover:text-coral transition-colors">Home</a>
            <a href="#about" className="hover:text-coral transition-colors">About</a>
            <a href="#menu" className="hover:text-coral transition-colors">Menu</a>
            <a href="#contact" className="hover:text-coral transition-colors">Contact</a>
          </div>
          
          <div className="w-24 h-px bg-cream/20 mx-auto mb-8" />
          
          <p className="text-cream/50 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral" fill="currentColor" /> by Brown Art
          </p>
          <p className="text-cream/40 text-xs mt-2">
            © {new Date().getFullYear()} Brown Art - Sizzling Brownie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
