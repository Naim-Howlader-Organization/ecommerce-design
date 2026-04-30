import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  List,
  Tag,
  Bookmark,
  LogOut,
  ChevronDown,
  ShoppingCart,
  Users,
} from "lucide-react";
import { auth, useAuth } from "@/lib/auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Group {
  label: string;
  icon: any;
  base: string;
  children: { label: string; to: string }[];
}

const groups: Group[] = [
  {
    label: "Products",
    icon: Package,
    base: "/admin/products",
    children: [
      { label: "All Products", to: "/admin/products/all" },
      { label: "Add Product", to: "/admin/products/add" },
    ],
  },
  {
    label: "Categories",
    icon: Tag,
    base: "/admin/category",
    children: [
      { label: "All Categories", to: "/admin/category/all" },
      { label: "Add Category", to: "/admin/category/add" },
    ],
  },
  {
    label: "Brands",
    icon: Bookmark,
    base: "/admin/brand",
    children: [
      { label: "All Brands", to: "/admin/brand/all" },
      { label: "Add Brand", to: "/admin/brand/add" },
    ],
  },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const [openGroup, setOpenGroup] = useState<string | null>("Products");

  const logout = () => {
    auth.logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-surface">
      <aside className="w-64 bg-background border-r flex flex-col">
        <div className="p-6 border-b">
          <p className="font-display text-xl font-bold">
            LUXE<span className="text-accent">.</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">Admin Console</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 text-sm">
          <NavLink
            to="/admin/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive ? "bg-foreground text-background" : "hover:bg-muted"
              }`
            }
          >
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </NavLink>

          {groups.map((g) => {
            const open = openGroup === g.label;
            return (
              <div key={g.label}>
                <button
                  onClick={() => setOpenGroup(open ? null : g.label)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted"
                >
                  <span className="flex items-center gap-3">
                    <g.icon className="h-4 w-4" /> {g.label}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div className="ml-7 mt-1 space-y-1 border-l pl-3">
                    {g.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-2 py-1.5 rounded text-xs ${
                            isActive ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
                          }`
                        }
                      >
                        {c.label.startsWith("Add") ? (
                          <PlusCircle className="h-3 w-3" />
                        ) : (
                          <List className="h-3 w-3" />
                        )}
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="p-4 border-t">
          <p className="text-xs text-muted-foreground mb-2">Signed in as</p>
          <p className="text-sm font-medium truncate">{user?.email}</p>
          <Button variant="outline" size="sm" className="w-full mt-3" onClick={logout}>
            <LogOut className="h-3 w-3 mr-2" /> Logout
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
