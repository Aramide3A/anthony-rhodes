import Icon from "../common/Icon.jsx";
import { contactDetails } from "../../data/contact.js";
import { getWhatsAppHref } from "../../utils/contact.js";

export default function WhatsAppButton() {
  const whatsappHref = getWhatsAppHref(contactDetails.phone);

  if (!whatsappHref) {
    return null;
  }

  return (
    <a
      className="whatsapp-float"
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with AnthonyRhodes on WhatsApp at ${contactDetails.phone}`}
    >
      <Icon name="WhatsApp" size={26} />
      <span>WhatsApp</span>
    </a>
  );
}
