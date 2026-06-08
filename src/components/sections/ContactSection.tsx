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
    <section className="bg-[#F5F1EA] py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="px-6 lg:px-12 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-[#E6DDD0]">
            <h2
              className="
                font-serif
                text-[#1A1A1A]
                text-5xl
                md:text-6xl
                lg:text-7xl
                leading-[1.1]
                tracking-[-0.02em]
              "
            >
              Let's Start a
              <br />
              <span className="italic text-[#8A6A3B]">
                Conversation
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base md:text-lg text-[#746C63] leading-relaxed">
              Whether you're an investor, a potential partner,
              a franchise enquirer, or a media professional —
              we'd love to hear from you.
            </p>

            {/* Corporate Office */}
            <div className="mt-12">
              <p className="contact-label text-xs md:text-sm tracking-[0.2em]">CORPORATE OFFICE</p>
              <div className="mt-3 space-y-1">
                <p className="contact-detail text-base md:text-lg font-medium">
                  301–304, Vipul Agora Mall
                </p>
                <p className="contact-detail text-base md:text-lg font-medium">
                  MG Road, Gurugram
                </p>
                <p className="contact-detail text-base md:text-lg font-medium">
                  Haryana 122002, India
                </p>
              </div>
            </div>

            {/* Exchange Listing */}
            <div className="mt-10">
              <p className="contact-label text-xs md:text-sm tracking-[0.2em]">EXCHANGE LISTING</p>
              <div className="mt-3 space-y-1">
                <p className="contact-detail text-base md:text-lg font-medium">
                  BSE Limited
                </p>
                <p className="contact-detail text-base md:text-lg font-medium">
                  Scrip Code: 506134
                </p>
                <p className="contact-detail text-base md:text-lg font-medium">
                  Symbol: INTELLCAP
                </p>
              </div>
            </div>

            {/* Brand Enquiries */}
            <div className="mt-10">
              <p className="contact-label text-xs md:text-sm tracking-[0.2em]">BRAND ENQUIRIES</p>
              <div className="mt-3">
                <p className="contact-detail text-base md:text-lg font-medium">
                  +91 87501 31314
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="px-6 lg:px-12 py-12 lg:py-16">
            <h3 className="font-serif text-3xl md:text-4xl text-[#2A241D]">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Names */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="contact-label text-xs md:text-sm tracking-[0.2em]">FIRST NAME</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="contact-input text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="contact-label text-xs md:text-sm tracking-[0.2em]">LAST NAME</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="contact-input text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="contact-label text-xs md:text-sm tracking-[0.2em]">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input text-sm md:text-base"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="contact-label text-xs md:text-sm tracking-[0.2em]">PHONE NUMBER</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input text-sm md:text-base"
                />
              </div>

              {/* Enquiry Type */}
              <div>
                <label className="contact-label text-xs md:text-sm tracking-[0.2em]">ENQUIRY TYPE</label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="contact-input text-sm md:text-base"
                >
                  <option value="">Select enquiry type</option>
                  <option value="Investor Relations">Investor Relations</option>
                  <option value="Franchise">Franchise</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Media">Media</option>
                  <option value="General">General</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="contact-label text-xs md:text-sm tracking-[0.2em]">YOUR MESSAGE</label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input resize-none text-sm md:text-base"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    inline-flex items-center gap-2
                    bg-[#B8965A] text-white
                    px-8 py-3
                    uppercase
                    tracking-[0.2em] text-xs md:text-sm
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