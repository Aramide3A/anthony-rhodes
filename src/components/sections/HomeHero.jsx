import { images } from "../../data/images.js";
import Button from "../common/Button.jsx";
import TrustBadge from "../common/TrustBadge.jsx";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-media" aria-hidden="true">
        <img src={images.hero} alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="container home-hero-content">
        <div>
          <p className="eyebrow light">Facility management, maintenance, development</p>
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
        </div>
        <TrustBadge
          title="ISO HSEQ Certified"
          description="Safety, quality, and accountable service delivery are central to how AnthonyRhodes works."
        />
      </div>
    </section>
  );
}
