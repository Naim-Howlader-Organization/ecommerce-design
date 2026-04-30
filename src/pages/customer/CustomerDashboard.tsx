import { useStore, store } from "@/data/store";
import { Package, Heart, MapPin } from "lucide-react";

const mockOrders = [
  { id: "ORD-1042", date: "2026-04-22", status: "Delivered", total: 178 },
  { id: "ORD-1039", date: "2026-04-10", status: "Shipped", total: 95 },
  { id: "ORD-1031", date: "2026-03-28", status: "Processing", total: 240 },
];

const Card = ({ icon: Icon, label, value }: any) => (
  <div className="bg-background border rounded-xl p-5">
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">{label}</p>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </div>
    <p className="font-display text-2xl font-bold mt-2">{value}</p>
  </div>
);

const CustomerDashboard = () => {
  const products = useStore(store.getProducts);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card icon={Package} label="Total Orders" value={mockOrders.length} />
        <Card icon={Heart} label="Wishlist" value={5} />
        <Card icon={MapPin} label="Addresses" value={2} />
      </div>

      <div className="bg-background border rounded-xl p-6">
        <h2 className="font-display text-xl font-bold mb-4">Recent Orders</h2>
        <div className="divide-y">
          {mockOrders.slice(0, 3).map((o) => (
            <div key={o.id} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p className="font-medium">{o.id}</p>
                <p className="text-muted-foreground text-xs">{o.date}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-muted">{o.status}</span>
              <p className="font-medium">${o.total}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background border rounded-xl p-6">
        <h2 className="font-display text-xl font-bold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {products.slice(0, 4).map((p) => (
            <div key={p.id} className="text-sm">
              <img src={p.image} alt={p.name} className="aspect-square w-full rounded object-cover mb-2" />
              <p className="font-medium truncate">{p.name}</p>
              <p className="text-muted-foreground">${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
