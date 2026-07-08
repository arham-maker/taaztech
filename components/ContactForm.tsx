"use client";

import { FormEvent, useState } from "react";
import { SUPPORT_EMAIL } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to send your message. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Unable to send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span className="contact-form__label">Name</span>
          <input type="text" name="name" required />
        </label>
        <label className="contact-form__field">
          <span className="contact-form__label">Email</span>
          <input type="email" name="email" required />
        </label>
        <label className="contact-form__field">
          <span className="contact-form__label">Phone</span>
          <input type="tel" name="phone" />
        </label>
        <label className="contact-form__field">
          <span className="contact-form__label">Subject</span>
          <input type="text" name="subject" />
        </label>
      </div>

      <label className="contact-form__field contact-form__field--full">
        <span className="contact-form__label">Message</span>
        <textarea name="message" rows={4} required />
      </label>

      <button type="submit" className="btn btn--submit" disabled={submitting}>
        {submitting ? "Sending..." : "Submit"}
      </button>

      {submitted && (
        <p className="contact-form__success" role="status">
          Thank you! Your message has been sent to {SUPPORT_EMAIL}.
        </p>
      )}

      {error && (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
