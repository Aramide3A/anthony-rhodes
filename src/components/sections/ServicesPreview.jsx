import { services } from "../../data/services.js";
import SectionHeader from "../common/SectionHeader.jsx";
import ServiceCard from "../common/ServiceCard.jsx";

export default function ServicesPreview({ limit = 6 }) {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHeader
          eyebrow="Core services"
          title="A broad range of services for modern facilities"
          description="From MEP and HVAC to cleaning, security support, renovation, and infrastructure maintenance, AnthonyRhodes provides practical services for different property types."
          align="center"
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
