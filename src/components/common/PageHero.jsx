import Button from "./Button.jsx";

export default function PageHero({ eyebrow, title, description, image, cta, secondaryCta }) {
  return (
    <section className="page-hero">
      <div className="hero-media" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="container page-hero-content">
        {eyebrow && <p className="eyebrow light">{eyebrow}</p>}
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
    </section>
  );
}
