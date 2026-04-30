import { Button } from "@/components/ui/button";
import { useStore, store } from "@/data/store";
import { Link } from "react-router-dom";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

const AllProducts = () => {
  const products = useStore(store.getProducts);

  const remove = (id: number) => {
    store.deleteProduct(id);
    toast.success("Product removed");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground text-sm mt-1">{products.length} items in your catalog</p>
        </div>
        <Button asChild>
          <Link to="/admin/products/add">
            <Plus className="h-4 w-4 mr-2" /> Add Product
          </Link>
        </Button>
      </div>

      <div className="bg-background border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Rating</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-muted/30">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="h-10 w-10 rounded object-cover" />
                    <span className="font-medium">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.category}</td>
                <td className="px-4 py-3">${p.price}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.rating} ★</td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="icon" onClick={() => remove(p.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
