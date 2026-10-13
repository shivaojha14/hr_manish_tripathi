import { site } from "@/data/portfolio";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section bg-navy-50/60 dark:bg-navy-900/40">
      <div className="container-page">
        <Reveal>
          <h2 className="section-heading">Contact</h2>
          <p className="mt-2 max-w-xl text-sm text-navy-600 dark:text-navy-300">
            Open to HR and recruitment opportunities. Reach out by email, phone,
            or the form below.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="card h-full">
              <ul className="space-y-5">
                <li>
                  <span className="text-xs font-medium uppercase tracking-wide text-navy-400">
                    Email
                  </span>
                  <div>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm font-medium text-navy-800 hover:text-navy-600 dark:text-navy-100 dark:hover:text-white"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>

                <li>
                  <span className="text-xs font-medium uppercase tracking-wide text-navy-400">
                    Phone
                  </span>
                  <div className="mt-0.5 flex flex-col gap-1">
                    {site.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-sm font-medium text-navy-800 hover:text-navy-600 dark:text-navy-100 dark:hover:text-white"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </li>

                <li>
                  <span className="text-xs font-medium uppercase tracking-wide text-navy-400">
                    Location
                  </span>
                  <p className="mt-0.5 text-sm font-medium text-navy-800 dark:text-navy-100">
                    {site.location}
                  </p>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-navy-100 pt-6 dark:border-navy-800">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.31-1.93 1.36-.53.05-1.03.24-3.5-.73-2.97-1.17-4.86-4.2-5-4.4-.14-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.24.59.82 2.04.89 2.18.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.34 1.45.29.15.46.12.63-.07.17-.2.72-.84.91-1.13.19-.29.39-.24.66-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.13.07.76-.17 1.44z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
