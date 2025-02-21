import "../styles/footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-container">
            <div className="footer-logo">
              <img
                loading="lazy"
                src="src\assets\Logo.png"
                className="footer-logo-image"
              />
              <p
                className="header-logo-text"
                style={{
                  display: "inline-block",
                  maxWidth: "20%",
                  textAlign: "center",
                }}
              >
                THE DESIGN
                <br />
                HAVEN
              </p>
            </div>
          </div>
          <div className="footer-contact-details">
            <div className="footer-column">
              <h4 className="footer-heading">Get In Touch</h4>
              <p className="footer-text">www.designhavenusa.com</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us:</h4>
              <p className="footer-text">+1 469 781-4780</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Email ID:</h4>
              <p className="footer-text">
                <a href="mailto:info@designhavenusa.com">
                  info@designhavenusa.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid", marginTop: 20 }} />
        <div style={{ border: "1px solid", marginTop: 5 }} />
        <div className="copyright">
          <p>
            Copyright © 2025 The Design Haven | All Rights Reserved | Powered by
            AAPMOR
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
