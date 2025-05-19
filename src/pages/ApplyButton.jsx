import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Info, HelpCircle } from "lucide-react";

const ApplyPage = () => {
  const [form, setForm] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
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

    if (!form.LoanAmount) newErrors.LoanAmount = "Loan amount is required.";
    if (!form.LoanPurpose.trim()) newErrors.LoanPurpose = "Purpose is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <div className="min-h-screen bg-blue-50 px-4 py-10 space-y-20">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Fast, Easy Loan Application
        </h1>
        <p className="text-lg text-gray-700">
          Fill in the form below to apply for a loan. Our team will get in touch within 24 hours.
        </p>
      </div>

      {/* Application Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-xl mx-auto w-full"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Apply for a Loan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Fields */}
          {[
            { name: "FullName", type: "text", label: "Full Name" },
            { name: "Email", type: "email", label: "Email" },
            { name: "PhoneNumber", type: "tel", label: "Phone Number" },
            { name: "LoanAmount", type: "number", label: "Loan Amount (₹)" },
          ].map(({ name, type, label }) => (
            <div key={name}>
              <label className="block font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[name] && (
                <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Purpose Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Loan Purpose
            </label>
            <textarea
              name="LoanPurpose"
              value={form.LoanPurpose}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.LoanPurpose && (
              <p className="text-sm text-red-500 mt-1">{errors.LoanPurpose}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <CheckCircle className="h-8 w-8 text-green-600" />,
              title: "Fast Approval",
              desc: "Get your loan approved within 24-48 hours.",
            },
            {
              icon: <Info className="h-8 w-8 text-blue-600" />,
              title: "Transparent Process",
              desc: "No hidden fees. Complete transparency in all steps.",
            },
            {
              icon: <HelpCircle className="h-8 w-8 text-yellow-600" />,
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

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "How long does it take to process my application?",
              a: "Typically, applications are processed within 24-48 hours after submission.",
            },
            {
              q: "Do I need to provide collateral?",
              a: "No, personal loans and car loans are usually unsecured and do not require collateral.",
            },
            {
              q: "Is my personal information safe?",
              a: "Yes, your data is securely encrypted and handled according to our privacy policy.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-blue-700">{faq.q}</h4>
              <p className="text-gray-600 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
