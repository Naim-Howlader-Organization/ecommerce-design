import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { useStore, store } from "@/data/store";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useStore(store.getProducts);
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold">Product not found</h1>
          <Button asChild variant="outline" className="mt-6 rounded-full">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-accent">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg bg-surface">
              <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`overflow-hidden rounded-md border-2 ${i === 1 ? "border-accent" : "border-transparent"} cursor-pointer`}>
                  <img src={product.image} alt="" className="aspect-square object-cover opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold">{product.name}</h1>
            <StarRating rating={product.rating} reviews={product.reviews} />
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Qty */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center border rounded-full">
                <button className="p-2 hover:bg-muted rounded-l-full" onClick={() => setQty(Math.max(1, qty - 1))}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button className="p-2 hover:bg-muted rounded-r-full" onClick={() => setQty(qty + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button size="lg" className="flex-1 rounded-full">
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-4">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t pt-6 space-y-2 text-sm text-muted-foreground">
              <p>✓ Free shipping on orders over $100</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Ethically sourced materials</p>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
