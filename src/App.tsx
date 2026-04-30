import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import RequireRole from "./components/RequireRole";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AllProducts from "./pages/admin/products/AllProducts";
import AddProduct from "./pages/admin/products/AddProduct";
import AllCategories from "./pages/admin/category/AllCategories";
import AddCategory from "./pages/admin/category/AddCategory";
import AllBrands from "./pages/admin/brand/AllBrands";
import AddBrand from "./pages/admin/brand/AddBrand";
import AdminOrders from "./pages/admin/Orders";
import AdminCustomers from "./pages/admin/Customers";

import CustomerLayout from "./components/customer/CustomerLayout";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Orders from "./pages/customer/Orders";
import Profile from "./pages/customer/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <RequireRole role="admin">
                <AdminLayout />
              </RequireRole>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/all" element={<AllProducts />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="category" element={<AllCategories />} />
            <Route path="category/all" element={<AllCategories />} />
            <Route path="category/add" element={<AddCategory />} />
            <Route path="brand" element={<AllBrands />} />
            <Route path="brand/all" element={<AllBrands />} />
            <Route path="brand/add" element={<AddBrand />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<AdminCustomers />} />
          </Route>

          {/* Customer */}
          <Route
            path="/dashboard"
            element={
              <RequireRole role="customer">
                <CustomerLayout />
              </RequireRole>
            }
          >
            <Route index element={<CustomerDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
