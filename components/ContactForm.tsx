"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(next: FormState): FormErrors {
    const nextErrors: FormErrors = {};
    if (!next.name.trim()) nextErrors.name = "Please enter your name.";
    if (!next.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(next.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!next.message.trim()) nextErrors.message = "Please enter a message.";
    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (errors[name as keyof FormState]) {
      setErrors(validate(next));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // TODO: Wire up form submission (e.g. an API route, email service like
    // Resend/Formspree, or a mailto link). No backend is connected yet.
    setSubmitted(true);
    setValues(EMPTY);
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus-visible:border-navy-500 dark:border-navy-700 dark:bg-navy-950 dark:text-white";

  return (
    <form onSubmit={handleSubmit} noValidate className="card">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-800 dark:text-navy-100">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-800 dark:text-navy-100">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-navy-800 dark:text-navy-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClass} resize-y`}
            placeholder="How can I help?"
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
        Send Message
      </button>

      <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm font-medium text-green-700 dark:text-green-400">
        {submitted ? "Thanks! Your message has been validated. (Submission not yet connected.)" : ""}
      </p>
    </form>
  );
}
