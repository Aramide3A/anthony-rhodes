import { Link } from "react-router-dom";
import { footerServiceLinks, navigationLinks } from "../../data/navigation.js";
import { contactDetails } from "../../data/contact.js";

export default function Footer() {
  const quickLinks = navigationLinks.filter((link) =>
    ["/about", "/services", "/hse-quality", "/projects", "/contact"].includes(link.path)
  );

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">AR</span>
            <span>
              <strong>AnthonyRhodes</strong>
              <small>Facility Management</small>
            </span>
          </Link>
          <p>
            AnthonyRhodes delivers integrated facility management, maintenance, real estate
            development, and property support services for modern residential, commercial, and
            corporate environments.
          </p>
        </div>
        <div>
          <h2>Quick links</h2>
          {quickLinks.map((link) => (
            <Link key={link.path} to={link.path}>{link.label}</Link>
          ))}
        </div>
        <div>
          <h2>Services</h2>
          {footerServiceLinks.map((link) => (
            <Link key={link.path} to={link.path}>{link.label}</Link>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          {contactDetails.phone && (
            <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>{contactDetails.phone}</a>
          )}
          {contactDetails.emails?.map((email) => (
            <a key={email} href={`mailto:${email}`}>{email}</a>
          ))}
          {contactDetails.businessHours && <p>{contactDetails.businessHours}</p>}
          {contactDetails.offices?.[0] && (
            <p>
              <strong>{contactDetails.offices[0].name}:</strong> {contactDetails.offices[0].address}
            </p>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright {new Date().getFullYear()} AnthonyRhodes Facility Management.</span>
        <span>ISO HSEQ Certified</span>
      </div>
    </footer>
  );
}
