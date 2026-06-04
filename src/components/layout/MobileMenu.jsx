import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navigationLinks, serviceNavigationLinks } from "../../data/navigation.js";
import Button from "../common/Button.jsx";
import Icon from "../common/Icon.jsx";

export default function MobileMenu({ isOpen, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(true);

  return (
    <div className={`mobile-panel ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      <div className="mobile-panel-header">
        <span className="brand-mark">AR</span>
        <button className="icon-button" type="button" onClick={onClose} aria-label="Close menu">
          <Icon name="X" />
        </button>
      </div>
      <nav aria-label="Mobile navigation">
        {navigationLinks.map((link) =>
          link.path === "/services" ? (
            <div className="mobile-nav-group" key={link.path}>
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services"
              >
                <span>{link.label}</span>
                <Icon name="ChevronDown" size={18} />
              </button>
              <div id="mobile-services" className={servicesOpen ? "open" : ""}>
                {serviceNavigationLinks.map((serviceLink) => (
                  <NavLink key={serviceLink.path} to={serviceLink.path} onClick={onClose}>
                    {serviceLink.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink key={link.path} to={link.path} onClick={onClose}>
              {link.label}
            </NavLink>
          )
        )}
      </nav>
      <Button to="/contact" icon="Send" onClick={onClose}>Request a Quote</Button>
    </div>
  );
}
