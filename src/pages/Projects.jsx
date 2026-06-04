import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import Icon from "../components/common/Icon.jsx";
import { images } from "../data/images.js";
import { industriesServed, realEstateValuePropositions } from "../data/services.js";

const partnerLogos = [
  "partners-1.png",
  "partners-2.png",
  "partners-3.png",
  "partners-4.png",
  "partners-5.png",
  "partners-6.png",
  "partners-7.png"
];

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Partners"
        title="Industries, clients, and partners"
        description="The old site presents AnthonyRhodes through industries served, partner logos, and real estate value propositions without publishing named project case studies."
        image={images.hero}
      />
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Industries we serve"
            title="Facility services across residential, commercial, institutional, and public environments"
            description="The source site lists these industries and environments as areas AnthonyRhodes serves."
            align="center"
          />
          <div className="service-list-grid">
            {industriesServed.map((industry) => (
              <article key={industry} className="list-card">
                <Icon name="UsersRound" />
                <h2>{industry}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Our clients & partners"
            title="Partner logos preserved from the old site"
            description="The old site displays partner logos without published names, so the redesign keeps the logos without inventing client labels."
            align="center"
          />
          <div className="partner-logo-grid">
            {partnerLogos.map((logo) => (
              <img
                key={logo}
                src={`https://facility.anthonyrhodes.net/images/partners/${logo}`}
                alt="AnthonyRhodes partner logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Value proposition"
            title="Property and facility support carried over from the source site"
            description="These statements come from the old AnthonyRhodes value proposition section and have been lightly edited for clarity."
            align="center"
          />
          <div className="service-list-grid">
            {realEstateValuePropositions.map((item) => (
              <article key={item} className="list-card">
                <Icon name="CheckCircle2" />
                <h2>{item}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Discuss support for your property or portfolio"
        description="Share the type of facility, estate, or property you manage and the services you need."
      />
    </>
  );
}
