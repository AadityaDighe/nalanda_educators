import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "../NavHeader";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout() {
  return (
    <div>
      <NavHeader />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
