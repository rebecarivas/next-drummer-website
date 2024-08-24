import React from "react";
import Menu from "./Menu/menu.js";
import Footer from "./Footer/footer.js";

function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
