import { Battery, Bluetooth, ShieldCheck } from "lucide-react";
import { useState } from "react";

const SpecesSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="specs" className="specs">
      <div className="container">
        <div className="specs-container">
          <div className="section-header">
            <h2 className="section-title">Technical Specifications</h2>
            <p className="section-description">
              Everything you need to know about HydroSmart
            </p>
          </div>
          <div className="specs-tabs">
            <button
              className={`specs-tab ${
                activeTab === "overview" ? "active" : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`specs-tab ${activeTab === "tech" ? "active" : ""}`}
              onClick={() => setActiveTab("tech")}
            >
              Tech Specs
            </button>
          </div>
          <div className="specs-content">
            {activeTab === "overview" ? (
              <div className="specs-list">
                <div className="specs-item">
                  <ShieldCheck className="specs-icon" />
                  <div className="specs-details">
                    <h4>Premium Build Quality</h4>
                    <p>Double-wall vacuum insulated stainless steel</p>
                  </div>
                </div>
                <div className="specs-item">
                  <Battery className="specs-icon" />
                  <div className="specs-details">
                    <h4>Battery Life</h4>
                    <p>Up to 30 days on a single charge</p>
                  </div>
                </div>
                <div className="specs-item">
                  <Bluetooth className="specs-icon" />
                  <div className="specs-details">
                    <h4>Connectivity</h4>
                    <p>Bluetooth 5.0 with extended range</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="specs-grid">
                <div>
                  <h4>Capacity</h4>
                  <p>24 oz / 700ml</p>
                </div>
                <div>
                  <h4>Weight</h4>
                  <p>350g</p>
                </div>
                <div>
                  <h4>Temperature Range</h4>
                  <p>4-95°C</p>
                </div>
                <div>
                  <h4>Water Resistance</h4>
                  <p>IPX7 rated</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecesSection;
