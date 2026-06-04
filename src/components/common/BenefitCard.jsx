import Icon from "./Icon.jsx";

export default function BenefitCard({ children }) {
  return (
    <article className="benefit-card">
      <Icon name="CheckCircle2" size={20} />
      <span>{children}</span>
    </article>
  );
}
