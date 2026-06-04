import PageHero from "../components/common/PageHero.jsx";
import CTASection from "../components/common/CTASection.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import TrustBadge from "../components/common/TrustBadge.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import HSEQualityPreview from "../components/sections/HSEQualityPreview.jsx";
import { images } from "../data/images.js";
import { realEstateValuePropositions } from "../data/services.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About AnthonyRhodes"
        title="Facility management built on people, process, and technology"
        description="AnthonyRhodes leverages technology, trained personnel, and transparent operations to deliver an excellent facility management experience."
        image={images.facility}
      />
      <section className="section">
        <div className="container content-grid">
          <SectionHeader
            eyebrow="Company overview"
            title="A technical partner for modern residential, commercial, and corporate facilities"
            description="AnthonyRhodes manages and delivers superior facility management services to clients through a valuable blend of FM experience, soft service outsourcing, technical maintenance, complete turnkey support, and consultancy."
          />
          <p>
            AnthonyRhodes is a professional services and contracting company focused on facility
            management, property, and real estate development. The company provides integrated
            facilities management with the capacity and skill to support large, complex, and medium
            portfolios, as well as specialized services for businesses requiring customized facility
            management support.
          </p>
          <p>
            Its teams are professional, innovative, and proactive facility managers. AnthonyRhodes
            combines human capital and technology to work closely with clients, maintain their
            vision, and help services contribute positively to return on investment.
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="container three-grid">
          <article className="feature-block">
            <h2>Our mission</h2>
            <p>To provide end-to-end service by integrating strategic planning with experienced, efficient, well-trained staff, transparent processes, measurable service levels, and accountable facility management delivery.</p>
          </article>
          <article className="feature-block">
            <h2>Our vision</h2>
            <p>To operate with safety as a fundamental part of business, reducing risk for employees, contractors, and personnel under AnthonyRhodes supervision.</p>
          </article>
          <article className="feature-block">
            <h2>Our core value</h2>
            <p>To invest in service employee training through programmes, learning tools, and methods that support professional delivery and staff welfare.</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <SectionHeader
            eyebrow="Property & real estate development"
            title="Real estate support from planning to management"
            description="AnthonyRhodes offers a full range of real estate services and brings property management experience into community association management, sales, leasing, and asset support."
          />
          <div className="benefit-grid">
            {realEstateValuePropositions.slice(0, 4).map((item) => (
              <article key={item} className="benefit-card">
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <TrustBadge description="Published on the old site as an ISO HSEQ certification badge; no certification number was provided." />
          <p>
            Occupational health and safety for employees, contractors, clients, and all personnel
            under supervision is treated as a fundamental part of operations. AnthonyRhodes works
            toward safe supervision, risk reduction, and accident and injury prevention.
          </p>
        </div>
      </section>
      <WhyChooseUs />
      <HSEQualityPreview />
      <CTASection />
    </>
  );
}
