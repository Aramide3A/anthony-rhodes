import Icon from "./Icon.jsx";

export default function TrustBadge({ title = "ISO HSEQ Certified", description, className = "" }) {
  return (
    <div className={`trust-badge ${className}`.trim()}>
      <Icon name="ShieldCheck" />
      <div>
        <strong>{title}</strong>
        {description && <span>{description}</span>}
      </div>
    </div>
  );
}
