import Button from "./Button.jsx";

export default function CTASection({
  title = "Ready to improve your facility operations?",
  description = "Speak with AnthonyRhodes about facility management, maintenance, development, or project support for your property.",
  primary = { label: "Request a Quote", path: "/contact" },
  secondary = { label: "Explore Services", path: "/services" }
}) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow light">Start a conversation</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Button to={primary.path} icon="Send">{primary.label}</Button>
          <Button to={secondary.path} variant="secondary" icon="Grid3X3">
            {secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
