import React from "react";

const quickLinks = [
  "About us",
  "Privacy Policy",
  "Cookie Policy",
  "Terms and Conditions",
  "Purchasing Policy",
  "Affiliate",
  "Career",
  "Contact us",
  "Shopping cart",
  "My account",
  "Order Tracking",
  "Delivery Information",
];

const socialLinks = [
  { href: "https://www.facebook.com/", icon: "bi-facebook", label: "Facebook" },
  { href: "https://twitter.com/", icon: "bi-twitter", label: "Twitter" },
  { href: "https://www.instagram.com/", icon: "bi-instagram", label: "Instagram" },
  { href: "https://www.youtube.com/", icon: "bi-youtube", label: "YouTube" },
];

const contactInfo = [
  {
    icon: "bi-envelope-paper",
    label: "Email",
    value: "care@vantaraagro.com",
  },
  {
    icon: "bi-telephone",
    label: "Phone",
    value: "+91-999 999 9999",
  },
  {
    icon: "bi-geo-alt",
    label: "Address",
    value: "New Delhi India",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8 mt-16 mx-4 sm:mx-8 lg:mx-12 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src="/vantara_logo.png" 
              alt="Vantara Agro Logo" 
              className="h-32 mb-6 transform hover:scale-105 transition-transform duration-300" 
            />
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="border-t border-gray-300 w-32 my-4" />
              <h5 className="font-serif font-semibold text-xl text-gray-800 mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8B1C1C] text-white hover:bg-[#a83232] hover:scale-110 transition-all duration-300"
                  >
                    <i className={`bi ${s.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-3xl font-bold text-[#8B1C1C] mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-center md:text-left">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-gray-700 text-sm font-medium hover:text-[#8B1C1C] hover:underline transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-serif text-3xl font-bold text-[#8B1C1C] mb-6">Contact Us</h3>
            <ul className="space-y-5 w-full max-w-sm">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-center gap-4 group">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8B1C1C] text-white text-xl group-hover:bg-[#a83232] transition-colors duration-300">
                    <i className={`bi ${c.icon}`}></i>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#8B1C1C]">{c.label}</span>
                    <span className="text-gray-600 text-sm">{c.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-300 pt-8 mt-12">
          <div className="text-gray-600 text-sm mb-4 md:mb-0 text-center md:text-left">
            Copyright &copy; 2025. All rights reserved by{" "}
            <a href="#" className="text-[#8B1C1C] font-semibold hover:underline">
              Vantara Agro
            </a>
          </div>
          <img 
            src="/16112021165416-payment.png" 
            alt="Payment Methods" 
            className="h-10 transform hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </footer>
  );
}