import Icon from "./Icon.jsx";

export default function MaintenanceCard({ title, description, icon }) {
  return (
    <article className="maintenance-card">
      <Icon name={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
