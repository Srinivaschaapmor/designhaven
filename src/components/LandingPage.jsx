import "../styles/landingPage.css";
import OurBestSeller from "./OurBestSeller";

const LandingPage = () => {
  return (
    <>
      <div style={{ paddingLeft: "3%", paddingRight: "3%" }}>
        {/* <!-- HERO SECTION -->
        <!--  --> */}
        <div className="hero-section">
          <h2 className="hero-text-1">UP TO 25% OFF</h2>
          <h3 className="hero-text-2">
            ALL WINDOW TREATMENT  | HIGH QUALITY WITH PRICE MATCH GUARANTEE
          </h3>

          {/* <!-- hero section carasouel --> */}

          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
            data-intervel="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block"
                  src="src\assets\Hero-Section-Images\1.jpeg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="src\assets\Hero-Section-Images\2.jpeg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="src\assets\Hero-Section-Images\3.jpeg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="src\assets\Hero-Section-Images\4.jpeg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="src\assets\Hero-Section-Images\5.jpeg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="src\assets\Hero-Section-Images\6.jpeg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="src\assets\Hero-Section-Images\7.jpeg"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
          <h3 className="hero-text-2">
            10% OFF ORDER $2000+ | 25% OFF ORDER $5000+ | ADDITIONAL $250 IN
            REFERRAL
          </h3>
          {/* <!-- Hero Section --> */}
        </div>
        {/* <!-- HERO SECTION -->

        <!-- BODY --> */}
        <h2 className="main-title">
          “Elegance in every detail - window Treatments & interior design”
        </h2>

        {/* <!-- carosouel -->
        <!-- <div style="height: 50vh"></div> --> */}
        <section className="carosouel-blinds-container">
          <div className="carosouel-image-grid">
            <div className="carosouel-image-row">
              <div className="carosouel-image-column image-slider carosouel-product-image">
                <img
                  loading="lazy"
                  src="src\assets\Body\shades\image-1.png"
                  alt="Blinds product image 1"
                />
                <img
                  loading="lazy"
                  src="src/assets/Body/drapery/image-1.png"
                  alt="Blinds product image 2"
                />
                <img
                  loading="lazy"
                  src="src/assets/Body/closet/image-5.png"
                  alt="Blinds product image 3"
                />
                <img
                  loading="lazy"
                  src="src/assets/Body/design/image-5.png"
                  alt="Blinds product image 4"
                />
              </div>

              <div className="carosouel-image-column image-slider carosouel-product-image">
                <img
                  loading="lazy"
                  src="src\assets\Body\shades\image-2.png"
                  alt="shades product image 1"
                />
                <img
                  loading="lazy"
                  src="src/assets/Body/drapery/image-2.png"
                  alt="shades product image 2"
                />
                <img
                  loading="lazy"
                  src="src/assets/Body/closet/image-6.png"
                  alt="shades product image 3"
                />
                <img
                  loading="lazy"
                  src="src/assets/Body/design/image-6.png"
                  alt="shades product image 4"
                />
              </div>
            </div>
          </div>
          <header className="carosouel-section-header">
            <h2 className="carosouel-section-title">SHADES</h2>
            <h2 className="carosouel-section-title">DRAPERY</h2>
            <h2 className="carosouel-section-title">CUSTOM CLOSET</h2>
            <h2 className="carosouel-section-title">DESIGN SERVICES</h2>
          </header>
        </section>

        <h3 className="tagline">
          “Upscale designs, unmatched prices - your vision your budget!”
        </h3>
        <h2 className="tagline-text">Our Best Sellers</h2>
        {/* <!-- style="padding-left: 5%; padding-right: 5%" -->
        <!-- best seller --> */}

        <OurBestSeller />
        {/* <!-- ##### --> */}
        <div className="separator"></div>
      </div>
    </>
  );
};

export default LandingPage;
