import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";
import SignUpForm from "../components/SignUpFrom/SignUpForm";
import HomeSlogan from "../components/HomeSlogan/HomeSlogan";

class AuthRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <div className="flex-fill align-content-center">
            <div className="container py-5 align-content-center">
              <div className="row mb-3 py-5 justify-content-between h-100">
                <HomeSlogan />
                <AuthRoutes />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
});
