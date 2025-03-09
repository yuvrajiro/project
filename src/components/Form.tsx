import { useState } from "react";
import { Mail } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Add state for success message

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required!";
    if (!formData.company) tempErrors.company = "Company name is required!";
    if (!formData.email) tempErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format!";
    if (!formData.interest) tempErrors.interest = "Please select an interest!";
    if (!formData.message) tempErrors.message = "Message cannot be empty!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    // Remove e.preventDefault() to allow Netlify to handle submission
    if (validate()) {
      // Client-side validation passed, form will be submitted to Netlify
      setSubmissionSuccess(true); // Show success message
      setErrors({}); // Clear any previous errors
      setFormData({ name: "", company: "", email: "", interest: "", message: "" }); // Reset form
      // Netlify will handle the actual submission and redirect (or you handle success page)
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Request a Consultation
      </h2>

      {submissionSuccess && ( // Conditional rendering for success message
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your form has been submitted. We will be in touch soon.</span>
        </div>
      )}

      <form
        className="space-y-4"
        onSubmit={handleSubmit}
        name="contact" // Form name for Netlify
        method="POST"
        netlify // Enable Netlify Forms
      >
        {/* Hidden input to make sure form name is processed correctly - best practice */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // Add name attribute
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company" // Add name attribute
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={`w-full px-4 py-2 border ${
              errors.company ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700`}
            placeholder="Your company"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email" // Add name attribute
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700`}
            placeholder="your.email@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Dataset Interest */}
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Dataset Interest
          </label>
          <select
            id="interest"
            name="interest" // Add name attribute
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className={`w-full px-4 py-2 border ${
              errors.interest ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700`}
          >
            <option value="">Select your interest</option>
            <option value="stem">STEM Data</option>
            <option value="coding">Coding Data</option>
            <option value="reasoning">Reasoning Data</option>
            <option value="custom">Custom Solution</option>
          </select>
          {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            name="message" // Add name attribute
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700`}
            placeholder="Tell us about your specific needs..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors font-medium flex items-center justify-center"
        >
          Request a Consultation
          <Mail className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}