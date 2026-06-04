import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navigationLinks, serviceNavigationLinks } from "../../data/navigation.js";
import Button from "../common/Button.jsx";
import Icon from "../common/Icon.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="AnthonyRhodes Facility Management home">
          <span className="brand-mark">AR</span>
          <span>
            <strong>AnthonyRhodes</strong>
            <small>Facility Management</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationLinks.map((link) =>
            link.path === "/services" ? (
              <div className="nav-dropdown" key={link.path}>
                <NavLink to={link.path} className="dropdown-trigger">
                  <span>{link.label}</span>
                  <Icon name="ChevronDown" size={16} />
                </NavLink>
                <div className="dropdown-menu" role="menu" aria-label="Services">
                  {serviceNavigationLinks.map((serviceLink) => (
                    <NavLink key={serviceLink.path} to={serviceLink.path} role="menuitem">
                      {serviceLink.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="header-actions">
          <Button to="/contact" icon="Send">Request a Quote</Button>
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(true)}
          >
            <Icon name="Menu" />
          </button>
        </div>
      </div>
      <div className={`menu-backdrop ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />
      <div id="mobile-menu">
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
