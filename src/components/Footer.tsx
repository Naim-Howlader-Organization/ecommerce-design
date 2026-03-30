import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">LUXE<span className="text-accent">.</span></h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Curated essentials for modern living. Quality craftsmanship meets timeless design.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/products" className="hover:text-accent transition-colors">All Products</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">New Arrivals</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Best Sellers</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Sale</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
          <div className="flex gap-4">
            {["Instagram", "Twitter", "Facebook", "Pinterest"].map((s) => (
              <a key={s} href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                {s.slice(0, 2)}
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-primary-foreground/50">
            © 2026 LUXE. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
