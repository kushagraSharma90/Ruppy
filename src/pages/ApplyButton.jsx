import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Info, HelpCircle } from "lucide-react";

const ApplyPage = () => {
  const [form, setForm] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Location: "",
    LoanAmount: "",
    LoanPurpose: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.FullName.trim()) newErrors.FullName = "Full Name is required.";
    if (!form.Email.trim()) {
      newErrors.Email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.Email)) {
      newErrors.Email = "Enter a valid email.";
    }

    if (!form.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.PhoneNumber)) {
      newErrors.PhoneNumber = "Enter a valid 10-digit phone number.";
    }

    if (!form.Location) newErrors.Location = "Location is required.";
    if (!form.LoanAmount) newErrors.LoanAmount = "Loan amount is required.";
    if (!form.LoanPurpose.trim()) newErrors.LoanPurpose = "Purpose is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    if (e.target.name === "PhoneNumber") {
      const numericValue = e.target.value.replace(/\D/g, "");
      setForm({ ...form, [e.target.name]: numericValue.slice(0, 10) });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/loan-purpose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Application submitted successfully!");
        setForm({
          FullName: "",
          Email: "",
          PhoneNumber: "",
          Location: "",
          LoanAmount: "",
          LoanPurpose: "",
        });
        setErrors({});
      } else {
        alert(data.error || "Submission failed.");
      }
    } catch (err) {
      alert("Server error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#3870A6] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Fast, Easy Loan Application
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Fill in the form below to apply for a loan. Our team will get in touch within 24 hours.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Application Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-xl mx-auto w-full my-8"
      >
        <h2 className="text-3xl font-bold text-[#3870A6] mb-6 text-center">
          Apply for a Loan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
          {[
            { name: "FullName", type: "text", label: "Full Name" },
            { name: "Email", type: "email", label: "Email" },
            {
              name: "PhoneNumber",
              type: "tel",
              label: "Phone Number",
              maxLength: 10,
              pattern: "[0-9]{10}",
              inputMode: "numeric",
            },
            {
              name: "Location",
              type: "select",
              label: "Location",
              options: [
                { value: "", label: "Select a location" },
                { value: "Mumbai", label: "Mumbai" },
                { value: "Pune", label: "Pune" },
                { value: "Nashik", label: "Nashik" },
                { value: "Other", label: "Other cities coming soon" },
              ],
            },
            { name: "LoanAmount", type: "number", label: "Loan Amount (₹)" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  maxLength={field.maxLength}
                  pattern={field.pattern}
                  inputMode={field.inputMode}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                />
              )}
              {errors[field.name] && (
                <p className="text-sm text-red-500 mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Loan Purpose
            </label>
            <textarea
              name="LoanPurpose"
              value={form.LoanPurpose}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
            ></textarea>
            {errors.LoanPurpose && (
              <p className="text-sm text-red-500 mt-1">{errors.LoanPurpose}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#3870A6] hover:bg-[#2c5684] text-white font-semibold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <CheckCircle className="h-8 w-8 text-[#D47734] mx-auto" />,
              title: "Fast Approval",
              desc: "Get your loan approved within 24 hours.",
            },
            {
              icon: <Info className="h-8 w-8 text-[#3870A6] mx-auto" />,
              title: "Transparent Process",
              desc: "No hidden fees. Complete transparency in all steps.",
            },
            {
              icon: <HelpCircle className="h-8 w-8 text-[#D47734] mx-auto" />,
              title: "Support Team",
              desc: "Our support team is available 7 days a week to help you.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
