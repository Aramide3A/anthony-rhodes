import { services } from "../../data/services.js";
import SectionHeader from "../common/SectionHeader.jsx";
import ServiceCard from "../common/ServiceCard.jsx";

export default function ServicesPreview({ limit = 6 }) {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHeader
          eyebrow="Featured capabilities"
          title="Operational services shaped around premium property standards"
          description="From MEP and HVAC to cleaning, security support, renovation, and infrastructure maintenance, AnthonyRhodes provides practical services for different property types."
        />
        <div className="card-grid">
          {services.slice(0, limit).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
