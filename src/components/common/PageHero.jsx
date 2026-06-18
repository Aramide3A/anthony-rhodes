import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function PageHero({
  title,
  description,
  image,
  cta,
  secondaryCta
}) {
  const heroImages = Array.isArray(image) ? image : [image];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) {
      setActiveImage(0);
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  const showSliderControl = heroImages.length > 1;
  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % heroImages.length);
  };

  return (
    <section className="page-hero">
      <div className={`hero-media${heroImages.length > 1 ? " hero-slider" : ""}`} aria-hidden="true">
        {heroImages.map((heroImage, index) => (
          <img
            key={heroImage}
            className={index === activeImage ? "is-active" : ""}
            src={heroImage}
            alt=""
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="container page-hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {(cta || secondaryCta) && (
          <div className="hero-actions">
            {cta && <Button to={cta.path} icon={cta.icon}>{cta.label}</Button>}
            {secondaryCta && (
              <Button to={secondaryCta.path} variant="secondary" icon={secondaryCta.icon}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
      {showSliderControl && (
        <button
          className="hero-slide-button"
          type="button"
          aria-label="Show next hero image"
          onClick={showNextImage}
        >
          <Icon name="ArrowRight" size={22} />
        </button>
      )}
    </section>
  );
}
