import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "@/lib/auth";
import { toast } from "sonner";

const CUSTOMER_EMAIL = "customer@gmail.com";
const CUSTOMER_PASSWORD = "12345678";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (email.trim().toLowerCase() !== CUSTOMER_EMAIL || password !== CUSTOMER_PASSWORD) {
      setError("Invalid email or password.");
      toast.error("Invalid email or password");
      return;
    }
    auth.login({ email: CUSTOMER_EMAIL, name: "Customer", role: "customer" });
    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="container flex items-center justify-center py-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold">Welcome Back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to your account</p>
          </div>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full rounded-full" size="lg">
              Sign In
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent font-medium hover:underline">
              Create one
            </Link>
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Admin?{" "}
            <Link to="/admin/login" className="underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
