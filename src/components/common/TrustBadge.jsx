import Icon from "./Icon.jsx";

export default function TrustBadge({ title = "ISO HSEQ Certified", description }) {
  return (
    <div className="trust-badge">
      <Icon name="BadgeCheck" />
      <div>
        <strong>{title}</strong>
        {description && <span>{description}</span>}
      </div>
    </div>
  );
}
