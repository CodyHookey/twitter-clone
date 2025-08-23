import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <NavBar />
        <div className="container"></div>
        <Footer />
      </React.StrictMode>
    );
  }
});
