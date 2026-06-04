import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import TrustBadge from "../components/common/TrustBadge.jsx";
import BenefitCard from "../components/common/BenefitCard.jsx";
import { images } from "../data/images.js";

export default function HSEQuality() {
  return (
    <>
      <PageHero
        eyebrow="HSE & Quality"
        title="Safe supervision, risk-aware operations, and quality-focused delivery"
        description="AnthonyRhodes places health, safety, environment, and quality at the center of facility management and property support operations."
        image={images.hse}
      />
      <section className="section">
        <div className="container content-grid">
          <TrustBadge description="The old site identifies AnthonyRhodes as ISO HSEQ Certified. No certification number was provided." />
          <SectionHeader
            eyebrow="HSE commitment"
            title="Protecting employees, contractors, clients, and visitors"
            description="Safety is central to how AnthonyRhodes works. The company prioritizes the wellbeing of employees, contractors, clients, visitors, and all personnel under supervision through risk-aware operations, safe work practices, and compliant service delivery."
          />
          <p>
            The occupational health and safety of employees, contractors, and supervised personnel
            is a fundamental part of business operations. AnthonyRhodes works to reduce risk and
            support accident and injury prevention across service delivery.
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="container split-grid compact">
          <SectionHeader
            eyebrow="Quality management"
            title="Transparent processes and measurable service levels"
            description="The quality management approach combines strategic planning, experienced personnel, transparent processes, measurable service levels, and best-practice standards to deliver reliable facility management outcomes."
          />
          <div className="benefit-grid">
            <BenefitCard>Employee and contractor safety</BenefitCard>
            <BenefitCard>Client and visitor safety</BenefitCard>
            <BenefitCard>Safe supervision and risk reduction</BenefitCard>
            <BenefitCard>Accident and injury prevention</BenefitCard>
            <BenefitCard>Transparent processes</BenefitCard>
            <BenefitCard>Quality-focused delivery</BenefitCard>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
