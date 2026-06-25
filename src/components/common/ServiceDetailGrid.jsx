import { useEffect, useId, useState } from "react";
import Icon from "./Icon.jsx";

export default function ServiceDetailGrid({ services, titleAs: TitleTag = "h3" }) {
  const [activeService, setActiveService] = useState(null);
  const titleId = useId();

  useEffect(() => {
    if (!activeService) {
      document.body.classList.remove("modal-open");
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  return (
    <>
      <div className="service-list-grid">
        {services.map((service) => (
          <button
            key={service.title}
            type="button"
            className="list-card image-list-card service-detail-trigger"
            aria-haspopup="dialog"
            aria-expanded={activeService?.title === service.title}
            onClick={() => setActiveService(service)}
          >
            <img src={service.image} alt={service.alt} loading="lazy" />
            <div className="service-detail-trigger-copy">
              <TitleTag>{service.title}</TitleTag>
              <span>
                View details <Icon name="ArrowRight" size={16} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeService && (
        <div className="service-modal-backdrop" onClick={() => setActiveService(null)}>
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setActiveService(null)}
              aria-label={`Close ${activeService.title} details`}
            >
              <Icon name="X" size={18} />
            </button>
            <div className="service-modal-media">
              <img src={activeService.image} alt={activeService.alt} />
            </div>
            <div className="service-modal-body">
              {/* <p className="service-modal-kicker">AnthonyRhodes service details</p> */}
              <h2 id={titleId}>{activeService.title}</h2>
              {activeService.details.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {activeService.details.highlights?.length ? (
                <ul className="service-modal-list">
                  {activeService.details.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
