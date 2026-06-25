import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import TrustBadge from "../components/common/TrustBadge.jsx";
import MaintenanceApproach from "../components/sections/MaintenanceApproach.jsx";
import Icon from "../components/common/Icon.jsx";
import ServiceDetailGrid from "../components/common/ServiceDetailGrid.jsx";
import { facilityCoverage, facilityServices } from "../data/services.js";
import proj from "../assets/images/proj-dev.jpg";

export default function FacilityManagement() {
  return (
    <>
      <PageHero
        eyebrow="Facility Management"
        title="Integrated hard and soft services for modern properties"
        description="We provide integrated hard and soft facility management services that help property owners, developers, estate managers, and corporate organizations maintain safe, efficient, and functional environments."
        image={proj}
      />
      <section className="section">
        <div className="container content-grid">
          <SectionHeader
            eyebrow="Overview"
            title="Technical depth with accountable daily operations"
            description="AnthonyRhodes manages and delivers superior FM services throughout the country with a blend of facility management experience, outsourced soft services, technical maintenance, turnkey solutions, and consultancy."
          />
          <p>
            The company provides a wide range of services, from reception, security, stationery,
            photocopying facilities, maintenance, and cleaning through to complete turnkey support.
            Its service approach is positioned to reduce costs while improving standards and
            operational efficiency.
          </p>
          <TrustBadge className="trust-badge-red" title="ISO 9001 | OHSAS 18001 | ISO 14001" />
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Hard and soft services"
            title="Facility services AnthonyRhodes provides"
            description="Hover, focus or tap any service card to open source-backed details from the legacy AnthonyRhodes facility pages."
            align="center"
          />
          <ServiceDetailGrid services={facilityServices} />
        </div>
      </section>
      <section className="section">
        <div className="container split-grid compact">
          <SectionHeader
            eyebrow="Facility coverage"
            title="Facilities AnthonyRhodes manages"
            description="The old site categorizes core facility management coverage across these property types."
          />
          <div className="benefit-grid">
            {facilityCoverage.map((item) => (
              <article key={item} className="benefit-card">
                <Icon name="CheckCircle2" />
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <MaintenanceApproach />
    </>
  );
}
