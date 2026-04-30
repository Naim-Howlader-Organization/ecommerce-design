import { useStore, store } from "@/data/store";
import { Package, Tag, Bookmark, ShoppingCart } from "lucide-react";

const Stat = ({ icon: Icon, label, value }: { icon: any; label: string; value: number | string }) => (
  <div className="bg-background border rounded-xl p-6">
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">{label}</p>
      <Icon className="h-5 w-5 text-muted-foreground" />
    </div>
    <p className="text-3xl font-display font-bold mt-3">{value}</p>
  </div>
);

const AdminDashboard = () => {
  const products = useStore(store.getProducts);
  const categories = useStore(store.getCategories);
  const brands = useStore(store.getBrands);

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Overview of your store</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Stat icon={Package} label="Products" value={products.length} />
        <Stat icon={Tag} label="Categories" value={categories.length} />
        <Stat icon={Bookmark} label="Brands" value={brands.length} />
        <Stat icon={ShoppingCart} label="Orders" value={42} />
      </div>

      <div className="bg-background border rounded-xl p-6">
        <h2 className="font-display text-xl font-bold mb-4">Recent Products</h2>
        <div className="divide-y">
          {products.slice(-5).reverse().map((p) => (
            <div key={p.id} className="flex items-center gap-4 py-3">
              <img src={p.image} alt={p.name} className="h-12 w-12 rounded object-cover" />
              <div className="flex-1">
                <p className="font-medium text-sm">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.category}</p>
              </div>
              <p className="font-medium">${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
