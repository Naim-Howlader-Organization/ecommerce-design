import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import StarRating from "./StarRating";
import { Badge } from "@/components/ui/badge";

const badgeLabel: Record<string, string> = {
  sale: "Sale",
  new: "New",
  featured: "Featured",
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
    >
      <div className="relative overflow-hidden rounded-lg bg-surface">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground border-0 font-semibold text-xs">
            {badgeLabel[product.badge]}
          </Badge>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <div className="flex items-center gap-2">
          <span className="font-semibold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
