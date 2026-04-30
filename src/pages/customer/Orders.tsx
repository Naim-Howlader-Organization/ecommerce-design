const orders = [
  { id: "ORD-1042", date: "2026-04-22", items: 3, status: "Delivered", total: 178 },
  { id: "ORD-1039", date: "2026-04-10", items: 1, status: "Shipped", total: 95 },
  { id: "ORD-1031", date: "2026-03-28", items: 2, status: "Processing", total: 240 },
  { id: "ORD-1024", date: "2026-03-12", items: 4, status: "Delivered", total: 312 },
  { id: "ORD-1019", date: "2026-02-28", items: 1, status: "Cancelled", total: 45 },
];

const statusColor: Record<string, string> = {
  Delivered: "bg-green-100 text-green-800",
  Shipped: "bg-blue-100 text-blue-800",
  Processing: "bg-amber-100 text-amber-800",
  Cancelled: "bg-red-100 text-red-800",
};

const Orders = () => (
  <div className="bg-background border rounded-xl overflow-hidden">
    <div className="p-6 border-b">
      <h2 className="font-display text-xl font-bold">My Orders</h2>
      <p className="text-sm text-muted-foreground mt-1">Track and manage your purchases</p>
    </div>
    <table className="w-full text-sm">
      <thead className="bg-muted/50 text-left">
        <tr>
          <th className="px-6 py-3 font-medium">Order</th>
          <th className="px-6 py-3 font-medium">Date</th>
          <th className="px-6 py-3 font-medium">Items</th>
          <th className="px-6 py-3 font-medium">Status</th>
          <th className="px-6 py-3 font-medium text-right">Total</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {orders.map((o) => (
          <tr key={o.id} className="hover:bg-muted/30">
            <td className="px-6 py-4 font-medium">{o.id}</td>
            <td className="px-6 py-4 text-muted-foreground">{o.date}</td>
            <td className="px-6 py-4">{o.items}</td>
            <td className="px-6 py-4">
              <span className={`text-xs px-2 py-1 rounded-full ${statusColor[o.status]}`}>{o.status}</span>
            </td>
            <td className="px-6 py-4 text-right font-medium">${o.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Orders;
