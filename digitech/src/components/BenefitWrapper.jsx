import React, { useState } from "react";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="32" height="32" rx="8" fill="#fff" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h3m4 0h2a1 1 0 011 1v7" />
      </svg>
    ),
    title: "Secures Payments",
    desc: "Free shipping on all your order",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="32" height="32" rx="8" fill="#fff" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" />
      </svg>
    ),
    title: "Customer Support 24/7",
    desc: "Instant access to Support",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="32" height="32" rx="8" fill="#fff" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m8-10h2M2 12H4m15.364-7.364l1.414 1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222l1.414 1.414" />
      </svg>
    ),
    title: "100% Secure Payment",
    desc: "We ensure your money is save",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-red-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="32" height="32" rx="8" fill="#fff" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m8-10h2M2 12H4m15.364-7.364l1.414 1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222l1.414 1.414" />
      </svg>
    ),
    title: "Money-Back Guarantee",
    desc: "30 Days",
  },
];

export default function BenefitWrapper() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-8" style={{ background: "#880e13" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {benefits.map((b, idx) => {
            const isActive = hovered === idx;
            return (
              <div
                key={idx}
                className={`flex items-start w md:w-100 h-30 w-80 gap-4 px-6 py-5 rounded-md border transition-all duration-200 cursor-pointer
                  ${isActive
                    ? "border-[#f3cfa2] bg-[#b17a43] text-white"
                    : "border-[#f3cfa2] bg-transparent text-white hover:bg-[#b17a43]/80"}
                `}
                style={{
                 
                  fontFamily: "Quicksand, Arial, serif",
                  borderWidth: 1,
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="rounded-md bg-white flex items-center justify-center" style={{ width: 40, height: 40 }}>
                    {b.icon}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-lg font-medium mb-1" style={{ color: "#fff" }}>
                    {b.title}
                  </div>
                  <div className="text-base" style={{ color: "#fff" }}>
                    {b.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}