import { useEffect, useState } from "react";

export type Role = "admin" | "customer";
export interface AuthUser {
  email: string;
  name: string;
  role: Role;
}

const KEY = "luxe.auth";

export const auth = {
  get(): AuthUser | null {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
      return null;
    }
  },
  login(user: AuthUser) {
    localStorage.setItem(KEY, JSON.stringify(user));
    window.dispatchEvent(new Event("luxe-auth-change"));
  },
  logout() {
    localStorage.removeItem(KEY);
    window.dispatchEvent(new Event("luxe-auth-change"));
  },
};

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(auth.get());
  useEffect(() => {
    const h = () => setUser(auth.get());
    window.addEventListener("luxe-auth-change", h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener("luxe-auth-change", h);
      window.removeEventListener("storage", h);
    };
  }, []);
  return user;
}
