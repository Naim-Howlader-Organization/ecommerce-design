import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Order {
  id: string;
  customer: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
}

const orders: Order[] = [
  { id: "ORD-1042", customer: "Emma Johnson", total: 249.0, status: "Delivered", date: "2026-04-22" },
  { id: "ORD-1041", customer: "Liam Smith", total: 89.5, status: "Shipped", date: "2026-04-21" },
  { id: "ORD-1040", customer: "Olivia Brown", total: 432.75, status: "Processing", date: "2026-04-20" },
  { id: "ORD-1039", customer: "Noah Davis", total: 59.0, status: "Pending", date: "2026-04-19" },
  { id: "ORD-1038", customer: "Ava Wilson", total: 1199.0, status: "Delivered", date: "2026-04-18" },
  { id: "ORD-1037", customer: "Ethan Miller", total: 75.25, status: "Cancelled", date: "2026-04-17" },
  { id: "ORD-1036", customer: "Sophia Garcia", total: 320.0, status: "Shipped", date: "2026-04-16" },
  { id: "ORD-1035", customer: "Mason Martinez", total: 145.6, status: "Delivered", date: "2026-04-15" },
];

const statusVariant = (s: Order["status"]) => {
  switch (s) {
    case "Delivered":
      return "default";
    case "Shipped":
    case "Processing":
      return "secondary";
    case "Cancelled":
      return "destructive";
    default:
      return "outline";
  }
};

const AdminOrders = () => {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-2">Orders</h1>
      <p className="text-muted-foreground mb-8">Manage customer orders</p>

      <div className="bg-background border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell>${o.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant(o.status) as any}>{o.status}</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{o.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminOrders;
