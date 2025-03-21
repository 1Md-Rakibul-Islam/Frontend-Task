import { Activity, Battery, Bluetooth } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Smart Features for Smart Hydration</h2>
          <p className="section-description">
            Experience the perfect blend of technology and wellness with our
            innovative features.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Battery />
            </div>
            <h3 className="feature-title">Long Battery Life</h3>
            <p className="feature-description">
              30-day battery life with a single charge, keeping you informed
              without frequent charging. Smart power management ensures reliable
              performance.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Activity />
            </div>
            <h3 className="feature-title">Smart Reminders</h3>
            <p className="feature-description">
              Personalized hydration reminders based on your activity level,
              environment, and personal goals. AI-powered insights adapt to your
              lifestyle.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Bluetooth />
            </div>
            <h3 className="feature-title">Seamless Connectivity</h3>
            <p className="feature-description">
              Bluetooth connectivity for real-time tracking and smartphone
              notifications. Sync with your favorite fitness apps for
              comprehensive health monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
