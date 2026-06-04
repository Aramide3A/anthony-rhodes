import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import ServiceCard from "../components/common/ServiceCard.jsx";
import CTASection from "../components/common/CTASection.jsx";
import MaintenanceApproach from "../components/sections/MaintenanceApproach.jsx";
import { services } from "../data/services.js";
import { images } from "../data/images.js";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Integrated services for facilities, developments, and property operations"
        description="Explore AnthonyRhodes service areas across facility management, infrastructure maintenance, real estate development, property development, and project management."
        image={images.hero}
      />
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Service categories"
            title="Everything your property needs to stay functional"
            description="Each service category is organized so property owners, estate managers, developers, and corporate clients can quickly find the right support."
            align="center"
          />
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <MaintenanceApproach />
      <CTASection />
    </>
  );
}
