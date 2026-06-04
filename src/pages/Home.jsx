import ServiceCard from "../components/common/ServiceCard.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import ContactForm from "../components/common/ContactForm.jsx";
import HomeHero from "../components/sections/HomeHero.jsx";
import AboutPreview from "../components/sections/AboutPreview.jsx";
import ServicesPreview from "../components/sections/ServicesPreview.jsx";
import MaintenanceApproach from "../components/sections/MaintenanceApproach.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import HSEQualityPreview from "../components/sections/HSEQualityPreview.jsx";
import ContactCTA from "../components/sections/ContactCTA.jsx";
import { facilityCoverage, homeFacilityServices, services } from "../data/services.js";
import { images } from "../data/images.js";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesPreview limit={4} />
      <AboutPreview />
      <section className="section media-band">
        <div className="container split-grid">
          <div>
            <SectionHeader
              eyebrow="Facility management"
              title="Hard and soft services under one accountable partner"
              description="AnthonyRhodes supports property owners, developers, estate managers, and corporate organizations with services that keep built environments safe, clean, efficient, and functional."
            />
            <div className="mini-card-grid">
              {homeFacilityServices.slice(0, 4).map((service) => (
                <article key={service} className="list-card">
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </div>
          <img className="rounded-image" src={images.cleaning} alt="Facility cleaning team preparing a commercial space" loading="lazy" />
        </div>
      </section>
      <section className="section alt">
        <div className="container split-grid">
          <img className="rounded-image" src={images.estate} alt="Modern residential estate development" loading="lazy" />
          <div>
            <SectionHeader
              eyebrow="Real estate and property development"
              title="Support for functional, secure, and attractive developments"
              description="The company’s real estate services include project development, project management, project financing, leasing, strategic planning and procurement, sales services, architectural designs, land survey, and asset management."
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Facilities we manage"
            title="Coverage aligned with the original AnthonyRhodes service scope"
            description="The old site identifies these core facility categories as areas AnthonyRhodes manages."
            align="center"
          />
          <div className="service-list-grid">
            {facilityCoverage.map((item) => (
              <article key={item} className="list-card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <MaintenanceApproach />
      <WhyChooseUs />
      <HSEQualityPreview />
      <section className="section">
        <div className="container split-grid compact">
          <SectionHeader
            eyebrow="Clients & partners"
            title="Reliable support for property stakeholders"
            description="AnthonyRhodes supports property owners, estate managers, developers, commercial property teams, public and private buildings, and real estate investors with facility management and property support services."
          />
          <div className="partner-panel">
            <span>Property owners</span>
            <span>Estate managers</span>
            <span>Developers</span>
            <span>Corporate organizations</span>
            <span>Institutions</span>
          </div>
        </div>
      </section>
      <ContactCTA />
      <section className="section contact-preview">
        <div className="container split-grid">
          <SectionHeader
            eyebrow="Quick inquiry"
            title="Tell us what your property needs"
            description="Use the form to prepare a facility management, project, maintenance, or development inquiry."
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
