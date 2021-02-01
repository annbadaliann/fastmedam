import React from "react";

import NavBar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div style={{minHeight: "100vh", position: 'relative', paddingBottom: '2.5rem'}}>
      <NavBar />
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
