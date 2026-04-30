import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStore, store } from "@/data/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddProduct = () => {
  const navigate = useNavigate();
  const categories = useStore(store.getCategories);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&q=80",
    category: categories[0]?.name ?? "Accessories",
    description: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      toast.error("Name and price are required");
      return;
    }
    store.addProduct({
      name: form.name,
      price: Number(form.price),
      image: form.image,
      category: form.category,
      description: form.description,
      rating: 4.5,
      reviews: 0,
      badge: "new",
    });
    toast.success("Product added");
    navigate("/admin/products/all");
  };

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-3xl font-bold mb-2">Add Product</h1>
      <p className="text-muted-foreground mb-8">Create a new item in your catalog</p>

      <form onSubmit={onSubmit} className="bg-background border rounded-xl p-6 space-y-5">
        <div className="space-y-2">
          <Label>Product Name</Label>
          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Classic Leather Watch" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Price (USD)</Label>
            <Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="149" />
          </div>
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Image URL</Label>
          <Input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        <div className="flex gap-3">
          <Button type="submit">Save Product</Button>
          <Button type="button" variant="outline" onClick={() => navigate("/admin/products/all")}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
