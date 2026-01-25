import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  company: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "submitting" | "success" | "error";
  message?: string;
}

// This URL will be replaced with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "__GOOGLE_SCRIPT_URL__";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    inquiryType: "general",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "submitting" });

    // Check if the script URL has been configured
    if (GOOGLE_SCRIPT_URL === "__GOOGLE_SCRIPT_URL__") {
      setStatus({
        type: "error",
        message: "Contact form is not yet configured. Please email directly.",
      });
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, but if no error thrown, assume success
      setStatus({
        type: "success",
        message: "Thank you for reaching out! I'll get back to you within 2 business days.",
      });
      setFormData({
        name: "",
        email: "",
        inquiryType: "general",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email directly.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="inquiryType">
            Inquiry Type <span className="required">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
          >
            <option value="general">General Inquiry</option>
            <option value="speaking">Speaking Engagement</option>
            <option value="training">Training & Workshops</option>
            <option value="consulting">Consulting & Advisory</option>
            <option value="press">Press & Media</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company / Organization</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Optional"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your event, project, or inquiry..."
        />
      </div>

      {status.type === "success" && (
        <div className="form-message form-success">{status.message}</div>
      )}

      {status.type === "error" && (
        <div className="form-message form-error">{status.message}</div>
      )}

      <button
        type="submit"
        className="button primary submit-button"
        disabled={status.type === "submitting"}
      >
        {status.type === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
