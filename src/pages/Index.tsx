import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { useStore, store } from "@/data/store";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8 text-center">
    <h2 className="font-display text-3xl font-bold">{title}</h2>
    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
  </div>
);

const HomePage = () => {
  const products = useStore(store.getProducts);
  const getBestSales = () => products.filter((p) => p.badge === "sale");
  const getNewArrivals = () => products.filter((p) => p.badge === "new");
  const getFeatured = () => products.filter((p) => p.badge === "featured");
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-surface">
        <div className="container flex flex-col items-center py-20 md:py-32 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Spring / Summer 2026</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
            Elevate Your <span className="text-accent">Everyday</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Discover curated essentials designed for modern living. Quality craftsmanship meets timeless design.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/products">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Banner strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="container flex flex-wrap items-center justify-center gap-8 py-4 text-sm font-medium">
          <span>Free Shipping Over $100</span>
          <span className="hidden sm:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline">•</span>
          <span>Sustainable Materials</span>
        </div>
      </section>

      {/* Best Sales */}
      <section className="container py-16">
        <SectionHeader title="Best Sellers" subtitle="Our most loved products" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {getBestSales().map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-light">
        <div className="container flex flex-col md:flex-row items-center justify-between py-12 gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold">New Season, New Essentials</h2>
            <p className="mt-2 text-muted-foreground">Up to 40% off on selected items</p>
          </div>
          <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/products">Shop the Sale</Link>
          </Button>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container py-16">
        <SectionHeader title="New Arrivals" subtitle="Fresh drops just for you" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {getNewArrivals().map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-surface py-16">
        <div className="container">
          <SectionHeader title="Featured Products" subtitle="Hand-picked by our editors" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {getFeatured().map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* All products teaser */}
      <section className="container py-16 text-center">
        <SectionHeader title="Explore All Products" subtitle="Browse our complete collection" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Button asChild variant="outline" size="lg" className="mt-10 rounded-full px-8">
          <Link to="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>
    </Layout>
  );
};

export default HomePage;
