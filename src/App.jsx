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
import CartDrawer from "./Home components/CartDrawer.jsx";
import CartDrawerMobile from "./context/CartDrawerMobile.jsx";
import BottomNav from "./Home components/BottomNav.jsx";
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
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}