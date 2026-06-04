import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function ServiceCard({ title, description, path, icon = "Building2" }) {
  return (
    <article className="service-card">
      <div className="icon-tile">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {path && (
        <Link to={path} className="text-link" aria-label={`Learn more about ${title}`}>
          Learn more <Icon name="ArrowRight" size={16} />
        </Link>
      )}
    </article>
  );
}
