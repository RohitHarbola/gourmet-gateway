"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: "",
      });
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};
  return (
    <section className="bg-[#F5F1EA] py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto">

        <div className="grid lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="px-8 lg:px-20 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#E6DDD0]">

            <h2
              className="
                font-serif
                text-[#1A1A1A]
                text-[52px]
                md:text-[72px]
                lg:text-[86px]
                leading-[0.95]
                tracking-[-0.03em]
              "
            >
              Let's Start a
              <br />
              <span className="italic text-[#8A6A3B]">
                Conversation
              </span>
            </h2>

            <p className="mt-10 max-w-xl text-lg text-[#746C63] leading-8">
              Whether you're an investor, a potential partner,
              a franchise enquirer, or a media professional —
              we'd love to hear from you.
            </p>

            {/* Corporate Office */}

            <div className="mt-20">

              <p className="contact-label">
                CORPORATE OFFICE
              </p>

              <div className="mt-4">
                <p className="contact-detail">
                  301–304, Vipul Agora Mall
                </p>

                <p className="contact-detail">
                  MG Road, Gurugram
                </p>

                <p className="contact-detail">
                  Haryana 122002, India
                </p>
              </div>

            </div>

            {/* Exchange Listing */}

            <div className="mt-16">

              <p className="contact-label">
                EXCHANGE LISTING
              </p>

              <div className="mt-4">
                <p className="contact-detail">
                  BSE Limited
                </p>

                <p className="contact-detail">
                  Scrip Code: 506134
                </p>

                <p className="contact-detail">
                  Symbol: INTELLCAP
                </p>
              </div>

            </div>

            {/* Brand Enquiries */}

            <div className="mt-16">

              <p className="contact-label">
                BRAND ENQUIRIES
              </p>

              <div className="mt-4">
                <p className="contact-detail">
                  +91 87501 31314
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="px-8 lg:px-20 py-16 lg:py-24">

            <h3 className="font-serif text-[40px] md:text-[48px] text-[#2A241D]">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-14 space-y-10"
            >

              {/* Names */}

              <div className="grid md:grid-cols-2 gap-10">

                <div>
                  <label className="contact-label">
                    FIRST NAME
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="contact-label">
                    LAST NAME
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

              </div>

              {/* Email */}

              <div>
                <label className="contact-label">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="contact-label">
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              {/* Enquiry Type */}

              <div>
                <label className="contact-label">
                  ENQUIRY TYPE
                </label>

                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="contact-input"
                >
                  <option value="">
                    Select enquiry type
                  </option>

                  <option value="Investor Relations">
                    Investor Relations
                  </option>

                  <option value="Franchise">
                    Franchise
                  </option>

                  <option value="Partnership">
                    Partnership
                  </option>

                  <option value="Media">
                    Media
                  </option>

                  <option value="General">
                    General
                  </option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label className="contact-label">
                  YOUR MESSAGE
                </label>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input resize-none"
                />
              </div>

              {/* Submit */}
<div className="pt-8">
  <button
    type="submit"
    disabled={status === "loading"}
    className="
      inline-flex items-center gap-3
      bg-[#B8965A] text-white
      px-10 py-5 uppercase
      tracking-[0.2em] text-sm
      transition-all duration-300
      hover:bg-[#A3834D] hover:-translate-y-1
      disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
    "
  >
    {status === "loading" ? "Sending..." : "Submit Enquiry"}
    {status !== "loading" && <span>→</span>}
  </button>

  {status === "success" && (
    <p className="mt-4 text-sm text-green-700 tracking-wide">
      ✓ Message sent successfully. We'll be in touch soon.
    </p>
  )}
  {status === "error" && (
    <p className="mt-4 text-sm text-red-600 tracking-wide">
      ✗ Something went wrong. Please try again or email us directly.
    </p>
  )}
</div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}