import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { auth, useAuth } from "@/lib/auth";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useAuth();
  const [open, setOpen] = useState(false);
  const accountHref = user ? (user.role === "admin" ? "/admin/dashboard" : "/dashboard") : "/login";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          LUXE<span className="text-accent">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === l.to ? "text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to={accountHref} className="hidden md:flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors">
            <User className="h-5 w-5" />
            {user && <span className="hidden lg:inline">{user.name}</span>}
          </Link>
          {user && (
            <button
              onClick={() => { auth.logout(); navigate("/"); }}
              className="hidden md:inline text-foreground hover:text-accent transition-colors"
              aria-label="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          )}
          <Link to="/cart" className="relative text-foreground hover:text-accent transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              3
            </span>
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium ${
                pathname === l.to ? "text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground">
            Login / Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
