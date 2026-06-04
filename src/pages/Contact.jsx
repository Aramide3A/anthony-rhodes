import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import ContactForm from "../components/common/ContactForm.jsx";
import Icon from "../components/common/Icon.jsx";
import { contactDetails } from "../data/contact.js";
import { images } from "../data/images.js";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote or start a service inquiry"
        description="Tell AnthonyRhodes about your facility management, maintenance, project management, or real estate development needs."
        image={images.facility}
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeader
              eyebrow="Get in touch"
              title="Share your property requirements"
              description="Use the verified phone numbers, email address, business hours, and office locations published on the AnthonyRhodes facility website."
            />
            <div className="contact-info">
              <article>
                <Icon name="Mail" />
                <div>
                  <h2>Email</h2>
                  <div className="stacked-links">
                    {contactDetails.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`}>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
              <article>
                <Icon name="Phone" />
                <div>
                  <h2>Phone & help lines</h2>
                  <div className="stacked-links">
                    {contactDetails.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
              <article>
                <Icon name="MapPin" />
                <div>
                  <h2>Office locations</h2>
                  <div className="office-list">
                    {contactDetails.offices.map((office) => (
                      <p key={office.name}>
                        <strong>{office.name}:</strong> {office.address}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
              <article>
                <Icon name="Clock" />
                <div>
                  <h2>Business hours</h2>
                  <p>{contactDetails.businessHours}</p>
                </div>
              </article>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
