import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Home components/Header.jsx";
import Footer from "./Home components/Footer.jsx";
import BottomNav from "./Home components/BottomNav.jsx";

import Home from "./pages/Home.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Blog from "./pages/Blogs.jsx";
import Products from "./pages/ProductPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Cart from "./pages/Cart.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Account from "./pages/Account.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import Checkout from "./pages/Checkout.jsx";
import AuthPage from "./pages/AuthPage.jsx";

import CartDrawerMobile from "./context/CartDrawerMobile.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

import "./App.css";

function MainLayout() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <CartDrawerMobile />

      <BottomNav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/best-sellers" element={<BestSellers />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:id" element={<BlogDetail />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/profile" element={<Account />} />

        <Route path="/help" element={<HelpCenter />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  const location = useLocation();

  /*
    Login page باید بدون Header و Footer نمایش داده شود
  */
  if (location.pathname === "/login") {
    return <AuthPage />;
  }

  return <MainLayout />;
}
