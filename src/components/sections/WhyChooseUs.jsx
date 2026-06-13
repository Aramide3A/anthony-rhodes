import { benefits } from "../../data/benefits.js";
import BenefitCard from "../common/BenefitCard.jsx";
import SectionHeader from "../common/SectionHeader.jsx";

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us">
      <div className="container split-grid compact">
        <SectionHeader
          eyebrow="Why choose AnthonyRhodes"
          title="A reliable operating partner for properties that must work every day"
          description="The company’s value sits in combining skilled people, transparent processes, and responsive service delivery."
        />
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit}>{benefit}</BenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
}
