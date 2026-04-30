import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
}

const customers: Customer[] = [
  { id: 1, name: "Emma Johnson", email: "emma.j@example.com", phone: "+1 202-555-0181", totalOrders: 12 },
  { id: 2, name: "Liam Smith", email: "liam.smith@example.com", phone: "+1 202-555-0142", totalOrders: 5 },
  { id: 3, name: "Olivia Brown", email: "olivia.b@example.com", phone: "+1 202-555-0166", totalOrders: 9 },
  { id: 4, name: "Noah Davis", email: "noah.d@example.com", phone: "+1 202-555-0123", totalOrders: 2 },
  { id: 5, name: "Ava Wilson", email: "ava.w@example.com", phone: "+1 202-555-0199", totalOrders: 17 },
  { id: 6, name: "Ethan Miller", email: "ethan.m@example.com", phone: "+1 202-555-0110", totalOrders: 1 },
  { id: 7, name: "Sophia Garcia", email: "sophia.g@example.com", phone: "+1 202-555-0177", totalOrders: 8 },
  { id: 8, name: "Mason Martinez", email: "mason.m@example.com", phone: "+1 202-555-0154", totalOrders: 4 },
];

const AdminCustomers = () => {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-2">Customers</h1>
      <p className="text-muted-foreground mb-8">Your registered customers</p>

      <div className="bg-background border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Total Orders</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell className="text-muted-foreground">{c.email}</TableCell>
                <TableCell className="text-muted-foreground">{c.phone}</TableCell>
                <TableCell>{c.totalOrders}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminCustomers;
