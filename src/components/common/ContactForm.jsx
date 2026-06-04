import { useState } from "react";
import { services } from "../../data/services.js";
import Button from "./Button.jsx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  street: "",
  suite: "",
  city: "",
  state: "",
  zipCode: "",
  service: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.service) nextErrors.service = "Select a service.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    // Connect this handler to the client's email, CRM, or form API when backend details are available.
    setStatus("Your inquiry is ready to send. Backend submission can be connected here.");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" value={form.name} onChange={updateField} autoComplete="name" />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>
        <label>
          Email address
          <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>
        <label>
          Phone number
          <input name="phone" value={form.phone} onChange={updateField} autoComplete="tel" />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </label>
        <label>
          Company / Property name
          <input name="company" value={form.company} onChange={updateField} autoComplete="organization" />
        </label>
        <label>
          Street
          <input name="street" value={form.street} onChange={updateField} autoComplete="street-address" />
        </label>
        <label>
          Suite, unit, apt
          <input name="suite" value={form.suite} onChange={updateField} />
        </label>
        <label>
          City
          <input name="city" value={form.city} onChange={updateField} autoComplete="address-level2" />
        </label>
        <label>
          State
          <input name="state" value={form.state} onChange={updateField} autoComplete="address-level1" />
        </label>
        <label className="span-2">
          Zip code
          <input name="zipCode" value={form.zipCode} onChange={updateField} autoComplete="postal-code" />
        </label>
        <label className="span-2">
          Service needed
          <select name="service" value={form.service} onChange={updateField}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && <span className="field-error">{errors.service}</span>}
        </label>
        <label className="span-2">
          Message
          <textarea name="message" rows="5" value={form.message} onChange={updateField} />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </label>
      </div>
      {status && <p className="form-status" role="status">{status}</p>}
      <Button type="submit" icon="Send">Prepare Inquiry</Button>
    </form>
  );
}
