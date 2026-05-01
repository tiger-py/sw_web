"use client";

import { useState } from "react";

const projectTypes = [
  "Ground-Mount",
  "Over Canals",
  "Agrivoltaics",
  "Floating Solar",
  "Mobile Power",
  "Car Parks",
  "EV Charging Stations",
  "Other / Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      projectType: String(formData.get("projectType") || ""),
      location: String(formData.get("location") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    setStatus("sending");
    setError("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.ok) {
      setStatus("error");
      setError(result?.error || "The message could not be sent.");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-4xl border border-black/10 bg-sw-panel p-6 shadow-soft lg:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-sw-text" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sw-text outline-none transition focus:border-sw-green"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-sw-text" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sw-text outline-none transition focus:border-sw-green"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-sw-text" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-2 w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sw-text outline-none transition focus:border-sw-green"
          />
        </div>

        <div>
          <label
            className="text-sm font-medium text-sw-text"
            htmlFor="projectType"
          >
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="mt-2 w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sw-text outline-none transition focus:border-sw-green"
          >
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-sw-text" htmlFor="location">
            Project location
          </label>
          <input
            id="location"
            name="location"
            className="mt-2 w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sw-text outline-none transition focus:border-sw-green"
          />
        </div>

        {/* Honeypot field */}
        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-sw-text" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-2 w-full rounded-3xl border border-black/10 bg-white px-4 py-3 text-sw-text outline-none transition focus:border-sw-green"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-sw-green px-6 py-3 text-sm font-medium text-white transition hover:bg-sw-green/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send enquiry"}
        </button>

        {status === "sent" && (
          <p className="text-sm font-medium text-sw-green">
            Message sent. We’ll get back to you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm font-medium text-red-700">{error}</p>
        )}
      </div>
    </form>
  );
}