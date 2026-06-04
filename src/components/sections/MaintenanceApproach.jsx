import { maintenanceTypes } from "../../data/maintenance.js";
import MaintenanceCard from "../common/MaintenanceCard.jsx";
import SectionHeader from "../common/SectionHeader.jsx";

export default function MaintenanceApproach() {
  return (
    <section className="section maintenance-section">
      <div className="container">
        <SectionHeader
          eyebrow="Maintenance approach"
          title="Planned, preventive, corrective, and emergency support"
          description="AnthonyRhodes keeps maintenance structured so facilities can run reliably while urgent issues receive practical attention."
          align="center"
        />
        <div className="maintenance-grid">
          {maintenanceTypes.map((item) => (
            <MaintenanceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
