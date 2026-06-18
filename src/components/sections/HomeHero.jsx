import { useEffect, useState } from "react";
import { images } from "../../data/images.js";
import Button from "../common/Button.jsx";
import Icon from "../common/Icon.jsx";
import TrustBadge from "../common/TrustBadge.jsx";
import slider_2 from "../../assets/images/slider-2.jpg";
import slider_3 from '../../assets/images/slide-3.jpg'

const heroStats = [
  { value: "24/7", label: "Response coordination" },
  { value: "Integrated", label: "hard and soft services" },
  { value: "HSEQ", label: "quality-led operations" }
];

const heroSlides = [images.hero, slider_2, slider_3]

export default function HomeHero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="home-hero">
      <div className="hero-media hero-slider" aria-hidden="true">
        {heroSlides.map((heroImage, index) => (
          <img
            key={heroImage}
            className={index === activeImage ? "is-active" : ""}
            src={heroImage}
            alt=""
          />
        ))}
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
      <button
        className="hero-slide-button"
        type="button"
        aria-label="Show next hero image"
        onClick={showNextImage}
      >
        <Icon name="ArrowRight" size={22} />
      </button>
    </section>
  );
}
