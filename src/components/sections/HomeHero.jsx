import { images } from "../../data/images.js";
import Button from "../common/Button.jsx";
import TrustBadge from "../common/TrustBadge.jsx";

const heroStats = [
  { value: "24/7", label: "Response coordination" },
  { value: "Integrated", label: "hard and soft services" },
  { value: "HSEQ", label: "quality-led operations" }
];

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-media" aria-hidden="true">
        <img src={images.hero} alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="container home-hero-content">
        <div className="hero-copy">
          <h1>Technology-Driven Facility Management for Modern Properties</h1>
          <p>
            AnthonyRhodes delivers integrated facility management, infrastructure maintenance,
            real estate development, and technical support services for residential, commercial,
            and corporate properties.
          </p>
          <div className="hero-actions">
            <Button to="/services" icon="Grid3X3">Explore Our Services</Button>
            <Button to="/contact" variant="secondary" icon="Send">Request a Quote</Button>
          </div>
          <div className="hero-stats" aria-label="AnthonyRhodes highlights">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-side-panel">
          <div className="hero-inquiry-panel">
            <div className="hero-inquiry-grid">
              <div>
                <span>Service category</span>
                <strong>Facility Management</strong>
              </div>
              <div>
                <span>Property type</span>
                <strong>Residential / Commercial</strong>
              </div>
              <div>
                <span>Support mode</span>
                <strong>Planned or urgent response</strong>
              </div>
            </div>
            <Button to="/contact" icon="Send" className="hero-inquiry-action">Start an Inquiry</Button>
          </div>
          <TrustBadge
            className="trust-badge-red-icon"
            title="ISO HSEQ Certified"
            description="Safety, quality, and accountable service delivery are central to how AnthonyRhodes works."
          />
        </div>
      </div>
    </section>
  );
}
