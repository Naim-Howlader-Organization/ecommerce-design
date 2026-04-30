import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { LayoutDashboard, Package, User, LogOut } from "lucide-react";
import { auth, useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/orders", label: "My Orders", icon: Package },
  { to: "/dashboard/profile", label: "Profile", icon: User },
];

const CustomerLayout = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const logout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <Layout>
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold mb-1">My Account</h1>
        <p className="text-muted-foreground mb-8">Welcome back, {user?.name}</p>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-60 shrink-0">
            <nav className="bg-background border rounded-xl p-2 space-y-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive ? "bg-foreground text-background" : "hover:bg-muted"
                    }`
                  }
                >
                  <l.icon className="h-4 w-4" /> {l.label}
                </NavLink>
              ))}
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-destructive hover:bg-muted"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </nav>
          </aside>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerLayout;
