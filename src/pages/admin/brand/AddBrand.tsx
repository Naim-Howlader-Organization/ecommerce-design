import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { store } from "@/data/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddBrand = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return toast.error("Name is required");
    store.addBrand({ name, description });
    toast.success("Brand added");
    navigate("/admin/brand/all");
  };

  return (
    <div className="max-w-xl">
      <h1 className="font-display text-3xl font-bold mb-2">Add Brand</h1>
      <p className="text-muted-foreground mb-8">Register a new brand in your catalog</p>

      <form onSubmit={onSubmit} className="bg-background border rounded-xl p-6 space-y-5">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Atelier 21" />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="flex gap-3">
          <Button type="submit">Save Brand</Button>
          <Button type="button" variant="outline" onClick={() => navigate("/admin/brand/all")}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default AddBrand;
