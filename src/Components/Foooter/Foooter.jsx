import React from "react";
import "./Foooter.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-container">
        
        {/* ABOUT */}
        <div className="footer-box">
          <h3>PAK Hardware</h3>
          <p>
            Your trusted hardware store for tools, paints, electrical items,
            plumbing materials, and construction essentials. Quality products
            at affordable prices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-box">
          <h3>Categories</h3>
          <ul>
            <li>Paints & Colors</li>
            <li>Power Tools</li>
            <li>Electrical Items</li>
            <li>Plumbing</li>
            <li>Safety Equipment</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Peshawar, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ support@pakhardware.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PAK Hardware. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
