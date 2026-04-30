import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { useStore, store } from "@/data/store";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const ProductsPage = () => {
  const products = useStore(store.getProducts);
  const categoryObjs = useStore(store.getCategories);
  const categories = ["All", ...categoryObjs.map((c) => c.name)];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const filtered = products.filter((p) => {
    const matchCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchCat && matchPrice;
  });

  return (
    <Layout>
      <div className="container py-10">
        <h1 className="font-display text-4xl font-bold mb-2">All Products</h1>
        <p className="text-muted-foreground mb-8">Browse our complete collection</p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters sidebar */}
          <aside className="w-full md:w-56 shrink-0 space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Category</h3>
              <div className="flex flex-wrap md:flex-col gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    className="rounded-full text-xs"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Price Range</h3>
              <Slider
                defaultValue={[0, 500]}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} products</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center py-16 text-muted-foreground">No products match your filters.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
