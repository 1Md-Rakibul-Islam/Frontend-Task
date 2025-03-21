import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content container">
        <div className="hero-grid">
          <div>
            <div className="badge">
              <Sparkles />
              <span>New Release 2025</span>
            </div>
            <h1 className="hero-title">
              Smart Hydration for a{" "}
              <span className="text-primary">Healthier You</span>
            </h1>
            <p className="hero-description">
              Meet HydroSmart, the intelligent water bottle that tracks your
              hydration, reminds you to drink, and helps you maintain optimal
              health through advanced hydration monitoring.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary">Learn More</button>
              <div>
                <p className="price">$59.99</p>
                <p className="price-note">Limited time offer</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&h=600&q=80"
              alt="Smart Water Bottle"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
