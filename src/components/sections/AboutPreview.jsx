import { images } from "../../data/images.js";
import Button from "../common/Button.jsx";
import SectionHeader from "../common/SectionHeader.jsx";

export default function AboutPreview() {
  return (
    <section className="section split-section">
      <div className="container split-grid">
        <div>
          <SectionHeader
            eyebrow="About AnthonyRhodes"
            title="Integrated property support with a more considered service standard"
            description="We combine technical expertise, trained personnel, transparent processes, and technology-enabled operations to keep facilities safe, efficient, clean, and fully functional."
            variant="editorial"
          />
          <p>
            AnthonyRhodes manages and delivers facility management services across soft services,
            maintenance, cleaning, security support, technical operations, turnkey solutions, and
            consultancy. Deep technical expertise sits at the center of the company’s service model.
          </p>
          <div className="editorial-metrics">
            <div>
              <strong>Integrated</strong>
              <span>technical and soft services</span>
            </div>
            <div>
              <strong>Accountable</strong>
              <span>operational oversight</span>
            </div>
          </div>
          <Button to="/about" icon="ArrowRight">More About Us</Button>
        </div>
        <img className="rounded-image" src={images.facility} alt="Facility technician inspecting building systems" loading="lazy" />
      </div>
    </section>
  );
}
