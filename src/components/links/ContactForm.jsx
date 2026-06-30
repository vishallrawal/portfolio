import React, { useState } from "react";
import { FiSend, FiLoader, FiCheckCircle } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/5 shadow-2xl space-y-6 w-full max-w-lg">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white tracking-tight">Send a Message</h3>
        <p className="text-xs font-semibold text-gray-500">I will respond to you within 24 hours.</p>
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center animate-fade-in">
          <FiCheckCircle className="text-emerald-500 text-6xl animate-bounce" />
          <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
          <p className="text-sm font-medium text-gray-400 max-w-xs">
            Thank you for reaching out! I've received your details and will get back to you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              disabled={status === "sending"}
              className="px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              disabled={status === "sending"}
              className="px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Subject Input */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Collaboration Opportunity"
              disabled={status === "sending"}
              className="px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              disabled={status === "sending"}
              className="px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 glow-btn-purple text-sm uppercase tracking-wider flex items-center justify-center gap-2"
          >
            {status === "sending" ? (
              <>
                <FiLoader className="animate-spin" size={16} />
                <span>Sending message...</span>
              </>
            ) : (
              <>
                <FiSend size={15} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
