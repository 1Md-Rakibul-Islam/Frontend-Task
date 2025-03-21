import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Droplets />
              <span>HydroSmart</span>
            </div>
            <p className="footer-description">
              Making hydration smarter, one sip at a time.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <p className="footer-link">Email: info@hydrosmart.com</p>
              <p className="footer-link">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Follow Us</h4>
            <div className="footer-links">
              <p className="footer-link">Twitter</p>
              <p className="footer-link">Instagram</p>
              <p className="footer-link">Facebook</p>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Legal</h4>
            <div className="footer-links">
              <p className="footer-link">Privacy Policy</p>
              <p className="footer-link">Terms of Service</p>
              <p className="footer-link">Returns Policy</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 HydroSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
