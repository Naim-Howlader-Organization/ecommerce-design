export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  badge?: "sale" | "new" | "featured";
}

const IMG = (seed: string) =>
  `https://images.unsplash.com/photo-${seed}?w=600&h=600&fit=crop&q=80`;

export const products: Product[] = [
  { id: 1, name: "Classic Leather Watch", price: 149, originalPrice: 199, image: IMG("1524592714635-d77511a4834d"), category: "Accessories", rating: 4.8, reviews: 124, description: "A timeless leather watch with Swiss movement. The genuine leather strap ages beautifully over time, developing a rich patina unique to its wearer. Features a scratch-resistant sapphire crystal and water resistance up to 50 meters.", badge: "sale" },
  { id: 2, name: "Minimalist Backpack", price: 89, image: IMG("1553062407-98d43420e9e7"), category: "Bags", rating: 4.6, reviews: 89, description: "Sleek, water-resistant backpack perfect for daily use. Made from recycled materials with a padded laptop compartment fitting up to 15-inch devices. Multiple organization pockets keep your essentials within reach.", badge: "new" },
  { id: 3, name: "Wireless Earbuds Pro", price: 129, image: IMG("1590658268037-6bf12f032f55"), category: "Electronics", rating: 4.9, reviews: 312, description: "Premium sound quality with active noise cancellation. 8-hour battery life with an additional 24 hours from the charging case. IPX5 water resistance for workouts and outdoor activities.", badge: "featured" },
  { id: 4, name: "Organic Cotton T-Shirt", price: 35, image: IMG("1521572163474-6864f9cf17ab"), category: "Clothing", rating: 4.5, reviews: 67, description: "Ultra-soft organic cotton tee in a relaxed fit. Pre-shrunk and garment-dyed for a lived-in feel from day one. Ethically manufactured with fair-trade certified cotton." },
  { id: 5, name: "Ceramic Pour-Over Set", price: 45, image: IMG("1517256064527-09c73fc73e38"), category: "Home", rating: 4.7, reviews: 156, description: "Handcrafted ceramic pour-over coffee dripper with matching mug. The unique ribbed interior design ensures optimal water flow for a perfectly extracted cup every time." },
  { id: 6, name: "Running Sneakers", price: 120, originalPrice: 160, image: IMG("1542291026-7eec264c27ff"), category: "Shoes", rating: 4.6, reviews: 203, description: "Lightweight performance running shoes with responsive cushioning. Breathable knit upper with a supportive heel counter. Durable rubber outsole with multidirectional traction pattern.", badge: "sale" },
  { id: 7, name: "Wool Blend Scarf", price: 55, image: IMG("1520903920243-00d872a2d1c9"), category: "Accessories", rating: 4.4, reviews: 45, description: "Luxuriously soft wool-blend scarf in a versatile neutral tone. Generously sized for multiple styling options. Made in Scotland from the finest merino wool blend.", badge: "new" },
  { id: 8, name: "Stainless Water Bottle", price: 32, image: IMG("1602143407151-7111542de6e8"), category: "Home", rating: 4.8, reviews: 278, description: "Double-wall vacuum insulated bottle keeps drinks cold for 24 hours or hot for 12. BPA-free, leak-proof lid. Slim profile fits most cup holders." },
  { id: 9, name: "Canvas Tote Bag", price: 28, image: IMG("1544816155-12df9643f363"), category: "Bags", rating: 4.3, reviews: 91, description: "Durable heavy-duty canvas tote with reinforced handles. Interior zip pocket for valuables. Perfect for groceries, beach days, or everyday carry." },
  { id: 10, name: "Bluetooth Speaker", price: 79, originalPrice: 99, image: IMG("1608043152269-423dbba4e7e1"), category: "Electronics", rating: 4.5, reviews: 167, description: "Portable waterproof Bluetooth speaker with 360-degree sound. 12-hour battery life and built-in microphone for hands-free calls. Pairs with a second speaker for stereo sound.", badge: "sale" },
  { id: 11, name: "Linen Shirt", price: 65, image: IMG("1596755094514-f87e34085b2c"), category: "Clothing", rating: 4.6, reviews: 58, description: "Breathable pure linen shirt perfect for warm weather. Relaxed fit with a button-down collar. Gets softer with every wash.", badge: "featured" },
  { id: 12, name: "Leather Card Holder", price: 25, image: IMG("1627123424654-0b86cb1da8e0"), category: "Accessories", rating: 4.7, reviews: 134, description: "Slim full-grain leather card holder with RFID blocking. Holds up to 6 cards plus folded bills. Vegetable-tanned leather from Italian tanneries." },
  { id: 13, name: "Scented Candle Set", price: 42, image: IMG("1602607003100-0e0c4e62e6fd"), category: "Home", rating: 4.9, reviews: 89, description: "Set of 3 hand-poured soy wax candles in calming scents: lavender, vanilla, and sandalwood. 40-hour burn time each. Reusable ceramic vessels.", badge: "new" },
  { id: 14, name: "Denim Jacket", price: 95, image: IMG("1576995853123-5a10305d93c0"), category: "Clothing", rating: 4.5, reviews: 76, description: "Classic denim jacket in a medium wash. 100% cotton with a slightly cropped fit. Brass button hardware and adjustable waist tabs." },
  { id: 15, name: "Smart Fitness Band", price: 59, image: IMG("1575311373937-5560e02e4d36"), category: "Electronics", rating: 4.4, reviews: 198, description: "Track steps, heart rate, sleep, and more. Water-resistant up to 50m with a bright AMOLED display. 7-day battery life and smartphone notifications.", badge: "featured" },
  { id: 16, name: "Suede Chelsea Boots", price: 140, image: IMG("1638247025967-b4e38f787b76"), category: "Shoes", rating: 4.7, reviews: 112, description: "Premium suede Chelsea boots with elastic side panels. Leather-lined interior with a cushioned insole. Goodyear welted construction for durability and resoling." },
];

export const categories = ["All", "Accessories", "Bags", "Clothing", "Electronics", "Home", "Shoes"];

export const getBestSales = () => products.filter(p => p.badge === "sale");
export const getNewArrivals = () => products.filter(p => p.badge === "new");
export const getFeatured = () => products.filter(p => p.badge === "featured");
export const getRelated = (product: Product) =>
  products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
