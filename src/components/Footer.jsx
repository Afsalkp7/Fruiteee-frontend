import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Fruiteee</h3>
          <p>Your one-stop shop for fresh vegetables and fruits. Quality products at great prices.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@fruiteee.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="#" className="social-link">Facebook</a> | <a href="#" className="social-link">Instagram</a> | <a href="#" className="social-link">Twitter</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fruiteee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
