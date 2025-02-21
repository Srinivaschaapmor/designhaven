import "../styles/header.css";
import logo from "../assets/Logo.png";
const Header = () => {
  return (
    <>
      {/* promo */}

      <div className="promo-banner">
        <div className="promo-text">
          UP TO 25% OFF ALL WINDOW TREATMENTS | $250 IN REFERRAL | FREE MEASURE
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06dd7e7ac51d9a561802740a875eed81745066616b188ec2ae9fe6dd8b321c6f?placeholderIfAbsent=true&apiKey=669a15aeea094032a94f5dafee6640c7"
            className="logo"
            alt=""
          />
        </div>
      </div>
      {/* header */}
      <div className="header-footer">
     <div>
      <div className="header-footer">
        <div className="header-divider" />
        <div className="header-footer-content">
          {/* 1 */}
          <div className="header-logo-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img loading="lazy" src={logo} className="header-logo-image" />
              <p
                className="header-logo-text"
                style={{
                  display: "inline-block",
                  maxWidth: "20%",
                  textAlign: "center",
                  fontFamily: "Albert Sans",
                }}
              >
                THE DESIGN
                <br />
                HAVEN
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="header-nav-container">
            <h2 className="header-brand-name">THE DESIGN HAVEN</h2>
          </div>
          {/* 3 */}
          <nav className="header-nav-links">
            <div className="header-nav-items">
              <a
                href="mailto:info@designhavenusa.com"
                className="header-contact-link"
              >
                Contact Us
              </a>
              <a href="#" className="header-social-link">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b0269966e8434841de3251f9740a5ece65e4db108da2b4dd4d3607522fdf9a?placeholderIfAbsent=true&apiKey=d33c24c7ba51439a94d37dc2e6c9524d"
                  className="header-social-icon"
                />
              </a>
              <a href="#" className="header-social-link">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d255af69649afd94a42179fbbd5ce948e3419bd224b2da10da5f47e73e5e64a?placeholderIfAbsent=true&apiKey=d33c24c7ba51439a94d37dc2e6c9524d"
                  className="header-social-icon"
                />
              </a>
              <a href="#" className="header-social-link">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/afae25a69113c49d3cfa0482a02284c22f0806b0347602df28bb4e40ac96c976?placeholderIfAbsent=true&apiKey=d33c24c7ba51439a94d37dc2e6c9524d"
                  className="header-social-icon"
                />
              </a>
            </div>
          </nav>
        </div>
        <div className="header-divider" />
      </div>
      </div>
      </div>
    </>
   
   
  );
};

export default Header;
