// Shared mock store backed by localStorage.
// Seeds from the static `products`/`categories` data on first load,
// then persists changes (admin add/remove) so the storefront stays in sync.

import { products as seedProducts, categories as seedCategories, Product } from "./products";

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Brand {
  id: number;
  name: string;
  description?: string;
}

const PRODUCTS_KEY = "luxe.products";
const CATEGORIES_KEY = "luxe.categories";
const BRANDS_KEY = "luxe.brands";

const seedBrands: Brand[] = [
  { id: 1, name: "LUXE Originals", description: "House label" },
  { id: 2, name: "Northwind", description: "Outdoor gear" },
  { id: 3, name: "Atelier 21", description: "Premium accessories" },
  { id: 4, name: "SoundWave", description: "Audio electronics" },
];

const seedCategoryObjects: Category[] = seedCategories
  .filter((c) => c !== "All")
  .map((name, i) => ({ id: i + 1, name, slug: name.toLowerCase() }));

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("luxe-store-change", { detail: { key } }));
}

export const store = {
  getProducts: (): Product[] => read(PRODUCTS_KEY, seedProducts),
  addProduct: (p: Omit<Product, "id">) => {
    const list = store.getProducts();
    const next = [...list, { ...p, id: Date.now() }];
    write(PRODUCTS_KEY, next);
    return next;
  },
  deleteProduct: (id: number) => {
    write(
      PRODUCTS_KEY,
      store.getProducts().filter((p) => p.id !== id)
    );
  },

  getCategories: (): Category[] => read(CATEGORIES_KEY, seedCategoryObjects),
  addCategory: (c: Omit<Category, "id">) => {
    const list = store.getCategories();
    write(CATEGORIES_KEY, [...list, { ...c, id: Date.now() }]);
  },
  deleteCategory: (id: number) => {
    write(
      CATEGORIES_KEY,
      store.getCategories().filter((c) => c.id !== id)
    );
  },

  getBrands: (): Brand[] => read(BRANDS_KEY, seedBrands),
  addBrand: (b: Omit<Brand, "id">) => {
    const list = store.getBrands();
    write(BRANDS_KEY, [...list, { ...b, id: Date.now() }]);
  },
  deleteBrand: (id: number) => {
    write(
      BRANDS_KEY,
      store.getBrands().filter((b) => b.id !== id)
    );
  },
};

import { useEffect, useState } from "react";

export function useStore<T>(getter: () => T): T {
  const [value, setValue] = useState<T>(getter);
  useEffect(() => {
    const handler = () => setValue(getter());
    window.addEventListener("luxe-store-change", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("luxe-store-change", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return value;
}
