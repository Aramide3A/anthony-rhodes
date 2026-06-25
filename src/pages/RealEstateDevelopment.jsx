import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import BenefitCard from "../components/common/BenefitCard.jsx";
import TrustBadge from "../components/common/TrustBadge.jsx";
import Icon from "../components/common/Icon.jsx";
import ServiceDetailGrid from "../components/common/ServiceDetailGrid.jsx";
import { facilityCoverage, realEstateServices, realEstateValuePropositions } from "../data/services.js";
import { images } from "../data/images.js";

export default function RealEstateDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Real Estate Development"
        title="Property development support for secure, functional environments"
        description="AnthonyRhodes manages and delivers real estate development services throughout the country, including project development, project management, project financing, leasing, sales, architectural designs, land survey, and asset management."
        image={images.estate}
      />
      <section className="section">
        <div className="container content-grid">
          <SectionHeader
            eyebrow="Overview"
            title="Development services shaped around usability and long-term property value"
            description="The company is focused on bringing real estate dreams to reality through affordable landed properties and homes for commercial and private property investors."
          />
          <p>
            AnthonyRhodes works to improve estate functionality so developments are more
            accommodating to existing clients, prospective clients, and property users. Its real
            estate focus includes residential and commercial property investment.
          </p>
          <TrustBadge title="ISO 9001 | OHSAS 18001 | ISO 14001" />
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Service range"
            title="Real estate services AnthonyRhodes provides"
            description="Hover, focus or tap any service card to open details sourced from the legacy AnthonyRhodes real estate pages."
            align="center"
          />
          <ServiceDetailGrid services={realEstateServices} titleAs="h2" />
        </div>
      </section>
      <section className="section">
        <div className="container split-grid compact">
          <SectionHeader
            eyebrow="Why work with AnthonyRhodes"
            title="Property management experience applied to real estate services"
            description="AnthonyRhodes brings property management experience into community association management, sales, leasing, and asset-related real estate services."
          />
          <div className="benefit-grid">
            {realEstateValuePropositions.slice(0, 4).map((item) => (
              <BenefitCard key={item}>{item}</BenefitCard>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Coverage"
            title="Real estate service range"
            description="The old site lists the real estate service range across these building and community categories."
            align="center"
          />
          <div className="service-list-grid">
            {facilityCoverage.map((item) => (
              <article key={item} className="list-card">
                <Icon name="Landmark" />
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
