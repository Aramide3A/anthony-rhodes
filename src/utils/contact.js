export function getPhoneHref(phoneNumber = "") {
  return `tel:${phoneNumber.replace(/\s/g, "")}`;
}

export function getWhatsAppHref(phoneNumber = "") {
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  if (!digitsOnly) {
    return "";
  }

  const normalizedNumber = digitsOnly.replace(/^2340/, "234");

  return `https://wa.me/${normalizedNumber}`;
}
