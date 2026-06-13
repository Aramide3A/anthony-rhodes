import PageHero from '../components/common/PageHero.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import CTASection from '../components/common/CTASection.jsx'
import Icon from '../components/common/Icon.jsx'
import britishCouncilLogo from '../assets/images/partners/partners-3.png'
import ipdcLogo from '../assets/images/partners/partners-1.png'
import lotusLogo from '../assets/images/partners/partners-2.png'
import rockmould from '../assets/images/partners/rockmould.jpeg'
import Venco from '../assets/images/partners/venco.png'
import IFMA from '../assets/images/partners/IFMA_logo.jpg'
import Iobotech from '../assets/images/partners/iobotech_limited_logo.jpeg'
import { images } from '../data/images.js'
import {
    industriesServed,
    realEstateValuePropositions,
} from '../data/services.js'

const clients = [
    { name: 'British Council', logo: britishCouncilLogo },
    { name: 'Lotus Apartments', logo: lotusLogo },
    { name: 'IPDC', logo: ipdcLogo },
    { name: 'Rockmould', logo: rockmould },
    { name: 'Pinecourt Apartments' },
    { name: 'Dej Apartments' },
    { name: 'Premium Apartments' },
    { name: 'Premium Homes' },
    { name: 'Triangle Apartments' },
    { name: 'Cooplag Estate' },
    { name: 'SandStone Apartments' },
    { name: 'Urban Prime Estates' },
    { name: 'Pleasant Apartments' },
    { name: 'D.F GEO Engineering' },
]
const partners = [
    { name: 'Venco', logo: Venco },
    { name: 'IOBOTECH', logo: Iobotech },
    { name: 'IFMA', logo: IFMA },
]

export default function Projects() {
    return (
        <>
            <PageHero
                eyebrow="Clients & Partners"
                title="Clients & Partners"
                image={images.hero}
            />
            {/* <section className="section">
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
      </section> */}
            <section className="section alt">
                <div className="container">
                    <SectionHeader
                        eyebrow="Our clients"
                        title="Clients"
                        description="Trusted by residential communities, institutions, and property developers to keep their spaces efficient, secure, and well managed."
                        align="center"
                    />
                    <div className="partner-logo-grid">
                        {clients.map((client) => (
                            <article
                                key={client.name}
                                className="partner-logo-card"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        loading="lazy"
                                    />
                                ) : (
                                    <span>{client.name}</span>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <SectionHeader
                        eyebrow="Our partners"
                        title="Partners"
                        description="We work with strategic technology and professional partners who strengthen our service delivery, standards, and operational reach."
                        align="center"
                    />
                    <div className="partner-logo-grid">
                        {partners.map((partner) => (
                            <article
                                key={partner.name}
                                className="partner-logo-card"
                            >
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        loading="lazy"
                                    />
                                ) : (
                                    <span>{partner.name}</span>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
