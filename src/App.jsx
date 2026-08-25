import { Routes, Route } from "react-router-dom";
import Header from "./Home components/Header.jsx";
import Home from "./pages/Home.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Blog from "./pages/Blogs.jsx";
import './App.css'
import Footer from "./Home components/Footer.jsx";
import Products from "./pages/ProductPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import CartDrawerMobile from "./context/CartDrawerMobile.jsx";
import BottomNav from "./Home components/BottomNav.jsx";
import Cart from "./pages/Cart.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Account from "./pages/Account.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
export default function App() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <CartDrawerMobile  />
      <BottomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Account />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
      <Footer />
    </>
  );
}