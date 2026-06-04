import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import Icon from "../components/common/Icon.jsx";
import { images } from "../data/images.js";
import { realEstateValuePropositions } from "../data/services.js";

const steps = [
  "Planning",
  "Coordination",
  "Supervision",
  "Execution",
  "Quality and compliance"
];

export default function ProjectManagement() {
  return (
    <>
      <PageHero
        eyebrow="Project Management"
        title="Project management within real estate and facility delivery"
        description="The old AnthonyRhodes site lists project management as part of its real estate development services, alongside project development, project financing, leasing, procurement, sales, architectural design, land survey, and asset management."
        image={images.project}
      />
      <section className="section">
        <div className="container content-grid">
          <SectionHeader
            eyebrow="Delivery approach"
            title="Planning and coordination for property-related work"
            description="AnthonyRhodes positions its real estate service around helping clients move through development, sales, leasing, and management processes with the services, contacts, technology, and know-how required for the venture."
          />
        </div>
      </section>
      <section className="section alt">
        <div className="container process-grid">
          {steps.map((step, index) => (
            <article key={step} className="process-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon name="ClipboardCheck" />
              <h2>{step}</h2>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Related value proposition"
            title="Real estate support connected to project management"
            description="These related points are preserved from the old site’s value proposition and real estate content."
            align="center"
          />
          <div className="service-list-grid">
            {realEstateValuePropositions.slice(1).map((item) => (
              <article key={item} className="list-card">
                <Icon name="CheckCircle2" />
                <h2>{item}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
