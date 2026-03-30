import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const cartItems = [
  { product: products[0], qty: 1 },
  { product: products[2], qty: 2 },
  { product: products[5], qty: 1 },
];

const CartPage = () => {
  const subtotal = cartItems.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <Layout>
      <div className="container py-10">
        <h1 className="font-display text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-4 border-b pb-6">
                <img src={product.image} alt={product.name} className="h-28 w-28 rounded-lg object-cover" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-full">
                      <button className="p-1.5 hover:bg-muted rounded-l-full"><Minus className="h-3 w-3" /></button>
                      <span className="w-8 text-center text-sm">{qty}</span>
                      <button className="p-1.5 hover:bg-muted rounded-r-full"><Plus className="h-3 w-3" /></button>
                    </div>
                    <span className="font-semibold">${product.price * qty}</span>
                  </div>
                </div>
                <button className="self-start text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-lg border p-6 h-fit space-y-4">
            <h2 className="font-display text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>${subtotal}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span>Free</span></div>
            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span><span>${subtotal}</span>
            </div>
            <Button className="w-full rounded-full" size="lg">Checkout</Button>
            <Button asChild variant="outline" className="w-full rounded-full" size="lg">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
