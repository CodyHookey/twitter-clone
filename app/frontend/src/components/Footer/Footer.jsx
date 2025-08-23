import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center py-3 bg-secondary">
        <div className="container">
          <p className="mb-1">© 2025 Ripple. All rights reserved.</p>
          <a href="/privacy-policy" className="mx-2">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="mx-2">
            Terms of Service
          </a>{" "}
          |
          <a href="/contact" className="mx-2">
            Contact
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
