import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { store } from "@/data/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddCategory = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return toast.error("Name is required");
    store.addCategory({ name, slug: slug || name.toLowerCase().replace(/\s+/g, "-") });
    toast.success("Category added");
    navigate("/admin/category/all");
  };

  return (
    <div className="max-w-xl">
      <h1 className="font-display text-3xl font-bold mb-2">Add Category</h1>
      <p className="text-muted-foreground mb-8">Group products under a new collection</p>

      <form onSubmit={onSubmit} className="bg-background border rounded-xl p-6 space-y-5">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Watches" />
        </div>
        <div className="space-y-2">
          <Label>Slug (optional)</Label>
          <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="watches" />
        </div>
        <div className="flex gap-3">
          <Button type="submit">Save Category</Button>
          <Button type="button" variant="outline" onClick={() => navigate("/admin/category/all")}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
