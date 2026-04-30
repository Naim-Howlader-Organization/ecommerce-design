import { Button } from "@/components/ui/button";
import { useStore, store } from "@/data/store";
import { Link } from "react-router-dom";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

const AllBrands = () => {
  const brands = useStore(store.getBrands);

  const remove = (id: number) => {
    store.deleteBrand(id);
    toast.success("Brand removed");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold">All Brands</h1>
          <p className="text-muted-foreground text-sm mt-1">{brands.length} brands</p>
        </div>
        <Button asChild>
          <Link to="/admin/brand/add"><Plus className="h-4 w-4 mr-2" /> Add Brand</Link>
        </Button>
      </div>

      <div className="bg-background border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {brands.map((b) => (
              <tr key={b.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 font-medium">{b.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{b.description}</td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="icon" onClick={() => remove(b.id)}>
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

export default AllBrands;
