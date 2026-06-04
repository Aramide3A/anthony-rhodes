import { images } from "../../data/images.js";
import Button from "../common/Button.jsx";
import SectionHeader from "../common/SectionHeader.jsx";
import TrustBadge from "../common/TrustBadge.jsx";

export default function HSEQualityPreview() {
  return (
    <section className="section alt">
      <div className="container split-grid">
        <img className="rounded-image" src={images.hse} alt="Construction and facility safety supervision" loading="lazy" />
        <div>
          <SectionHeader
            eyebrow="HSE & Quality"
            title="Safety-focused operations and quality-managed delivery"
            description="Safety is central to how AnthonyRhodes works. The company prioritizes the wellbeing of employees, contractors, clients, visitors, and personnel under supervision."
          />
          <p>
            Quality management is supported by strategic planning, experienced personnel,
            transparent processes, measurable service levels, and best-practice standards.
          </p>
          <TrustBadge />
          <Button to="/hse-quality" icon="ShieldCheck">View HSE & Quality</Button>
        </div>
      </div>
    </section>
  );
}
