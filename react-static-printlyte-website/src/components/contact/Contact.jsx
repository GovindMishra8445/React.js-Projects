// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     company: "",
//     employee_count: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const publicKey = "karx15GpWAiRxPy6W";
//     const serviceId = "service_e9yinm2";
//     const templateId = "template_tl5eqqj"; // Corrected templateId

//     emailjs
//       .sendForm(serviceId, templateId, form.current, publicKey)
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           alert("Email sent successfully!");
//         },
//         (error) => {
//           console.error("FAILED...", error.text);
//           alert("Something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <section id="contact" className="bg-sky-500 py-10 max-sm:py-5 max-sm:px-1">
//       <div className="bg-slate-50 rounded-lg shadow-lg mx-auto w-3/4 sm:w-1/2 p-20 max-sm:p-5">
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="grid grid-cols-1 gap-6"
//         >
//           <h2 className="text-3xl font-bold text-center text-black pt-5 pb-10 max-sm:text-xl">
//             Looking for the right business solutions? <br />
//             Let us help—fill out the form today!
//           </h2>

//           <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
//             <div>
//               <label
//                 htmlFor="fullName"
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Business Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 placeholder="rahul@healthcarer.com"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="contactNumber"
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Contact Number
//               </label>
//               <input
//                 type="tel"
//                 id="contactNumber"
//                 name="contactNumber"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 placeholder="9898989898"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="companyName"
//                 className="block mb-2 text-base text-black font-bold"
//               >
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                 placeholder="Wellness Company"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="employeeCount"
//               className="block mb-2 text-base text-black font-bold"
//             >
//               Employee Count
//             </label>
//             <select
//               id="employeeCount"
//               name="employeeCount"
//               value={formData.employeeCount}
//               onChange={handleChange}
//               className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//               required
//             >
//               <option value="0-10">0-10</option>
//               <option value="10-20">10-20</option>
//               <option value="30-40">30-40</option>
//             </select>
//           </div>
//           <div>
//             <label
//               htmlFor="requirements"
//               className="block mb-2 text-base text-black font-bold"
//             >
//               What are you looking for?
//             </label>
//             <input
//               type="text"
//               id="requirements"
//               name="requirements"
//               value={formData.requirements}
//               onChange={handleChange}
//               className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//               placeholder="Joining Kits"
//               required
//             />
//           </div>
//           <div className="flex justify-center items-center p-5">
//             <button
//               type="submit"
//               className="text-white bg-[#05629c] border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg"
//             >
//               Get Quote
//             </button>
//           </div>
//         </form>
//         <div className="flex justify-center items-center pb-6">
//           <button className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg">
//             WhatsApp Us
//           </button>
//         </div>
//         <p className="text-gray-600 font-semibold flex justify-center items-center">
//           *We typically reply within 30 minutes 10 AM to 7 PM MON to SAT.
//         </p>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";
import { Send, Phone, MessageSquare, User, Mail, Building, Users, CheckCircle, Loader } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    employeeCount: "0-10",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const publicKey = "karx15GpWAiRxPy6W";
    const serviceId = "service_e9yinm2";
    const templateId = "template_tl5eqqj";

    // Simulate sending email - in production, use the actual emailjs code
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // After showing success message, reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);

    // Actual emailjs implementation (commented out for demo)
    /*
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setError(error.text || "Failed to send email. Please try again.");
        }
      );
    */
  };

  return (
    <section className="bg-gradient-to-b from-sky-400 to-blue-600 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Let's Connect</h2>
            <p className="text-blue-100 text-lg">Discover the right business solutions for your needs</p>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="bg-green-50 p-6 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Thank you for reaching out!</h3>
              <p className="text-green-700">We've received your inquiry and will contact you shortly.</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 p-4 text-center">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {/* Form */}
          {!isSubmitted && (
            <form ref={form} onSubmit={sendEmail} className="p-6 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="flex items-center text-gray-700 font-medium">
                    <User size={18} className="mr-2 text-blue-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-gray-700 font-medium">
                    <Mail size={18} className="mr-2 text-blue-600" />
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                  <label htmlFor="contactNumber" className="flex items-center text-gray-700 font-medium">
                    <Phone size={18} className="mr-2 text-blue-600" />
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Your phone number"
                    required
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="companyName" className="flex items-center text-gray-700 font-medium">
                    <Building size={18} className="mr-2 text-blue-600" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Your company"
                    required
                  />
                </div>
              </div>

              {/* Employee Count */}
              <div className="space-y-2">
                <label htmlFor="employeeCount" className="flex items-center text-gray-700 font-medium">
                  <Users size={18} className="mr-2 text-blue-600" />
                  Employee Count
                </label>
                <select
                  id="employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
                  required
                >
                  <option value="0-10">0-10 employees</option>
                  <option value="10-20">10-20 employees</option>
                  <option value="30-40">30-40 employees</option>
                  <option value="50+">50+ employees</option>
                </select>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label htmlFor="requirements" className="flex items-center text-gray-700 font-medium">
                  <MessageSquare size={18} className="mr-2 text-blue-600" />
                  What are you looking for?
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              {/* Submission Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-48 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Get Quote
                    </>
                  )}
                </button>
                
                <a href="https://wa.me/1234567890" className="min-w-48 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
                  <MessageSquare size={20} />
                  WhatsApp Us
                </a>
              </div>
              
              <div className="text-center text-gray-600 mt-6">
                <p className="flex items-center justify-center text-sm">
                  <Clock size={14} className="mr-2" />
                  We typically reply within 30 minutes (10 AM to 7 PM, MON to SAT)
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Clock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}