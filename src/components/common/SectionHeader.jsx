export default function SectionHeader({
  title,
  description,
  align = "left"
}) {
  return (
    <div className={`section-header ${align === "center" ? "center" : ""}`.trim()}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
