import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  icon,
  type = "button",
  className = "",
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const content = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}
