import ServiceCard from '../components/common/ServiceCard.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import ContactForm from '../components/common/ContactForm.jsx'
import HomeHero from '../components/sections/HomeHero.jsx'
import AboutPreview from '../components/sections/AboutPreview.jsx'
import ServicesPreview from '../components/sections/ServicesPreview.jsx'
import MaintenanceApproach from '../components/sections/MaintenanceApproach.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import ContactCTA from '../components/sections/ContactCTA.jsx'
import Icon from '../components/common/Icon.jsx'
import proj from '../assets/images/proj-dev.jpg'
import {
    facilityCoverage,
    homeFacilityServices,
    services,
} from '../data/services.js'
import { images } from '../data/images.js'

export default function Home() {
    return (
        <>
            <HomeHero />
            <ServicesPreview />
            <AboutPreview />
            <section className="section media-band">
                <div className="container split-grid">
                    <div>
                        <SectionHeader
                            eyebrow="Facility management"
                            title="Hard and soft services curated under one accountable operating partner"
                            description="AnthonyRhodes supports property owners, developers, estate managers, and corporate organizations with services that keep built environments safe, clean, efficient, and functional."
                            variant="editorial"
                        />
                        <div className="mini-card-grid">
                            {homeFacilityServices.slice(0, 4).map((service) => (
                                <article
                                    key={service.title}
                                    className="list-card home-facility-card"
                                >
                                    <Icon name={service.icon} />
                                    <h3>{service.title}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                    <img
                        className="rounded-image"
                        src={images.cleaning}
                        alt="Facility cleaning team preparing a commercial space"
                        loading="lazy"
                    />
                </div>
            </section>
            <section className="section alt">
                <div className="container split-grid">
                    <img
                        className="rounded-image"
                        src={proj}
                        alt="Modern residential estate development"
                        loading="lazy"
                    />
                    <div>
                        <SectionHeader
                            eyebrow="Real estate and property development"
                            title="Support for developments that must feel functional, secure, and enduring"
                            description="The company’s real estate services include project development, project management, project financing, leasing, strategic planning and procurement, sales services, architectural designs, land survey, and asset management."
                            variant="editorial"
                        />
                    </div>
                </div>
            </section>
            <MaintenanceApproach />
            <WhyChooseUs />
            <section className="section">
                <div className="container split-grid compact">
                    <SectionHeader
                        eyebrow="Clients & partners"
                        title="Reliable support for property stakeholders"
                        description="AnthonyRhodes supports property owners, estate managers, developers, commercial property teams, public and private buildings, and real estate investors with facility management and property support services."
                        variant="editorial"
                    />
                    <div className="partner-panel">
                        <span>
                            <Icon name="Home" />
                            Property owners
                        </span>
                        <span>
                            <Icon name="UsersRound" />
                            Estate managers
                        </span>
                        <span>
                            <Icon name="Hammer" />
                            Developers
                        </span>
                        <span>
                            <Icon name="Building2" />
                            Corporate organizations
                        </span>
                    </div>
                </div>
            </section>
            <ContactCTA />
        </>
    )
}
