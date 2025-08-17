import React from "react";

const testimonials = [
  {
    img: "/user-1.png",
    name: "Priya Sharma",
    role: "Homemaker",
    rating: 5,
    text: "Vantara’s almonds and cashews are of unmatched quality. Fresh, crunchy, and packed hygienically – just what I wanted for my family!",
  },
  {
    img: "/user-2.png",
    name: "Rohit Malhotra",
    role: "Fitness Trainer",
    rating: 5,
    text: "I recommend Vantara dry fruits to all my clients. Pure, premium, and perfect for a high-protein diet. Totally worth it!",
  },
  {
    img: "/user-1.png",
    name: "Meera Singh",
    role: "Corporate",
    rating: 5,
    text: "We chose Vantara for Diwali hampers at our company. The packaging was luxurious and the dry fruits were appreciated by all!",
  },
];

export default function ClientTestimonial() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Client Testimonial</h2>
        <p className="mb-8 text-center text-gray-600">Trusted by health-conscious families and dry fruit lovers across the country.<br />Here's what they say about Vantara.</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center w-full md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-red-800" />
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < t.rating ? '' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                    ))}
                  </div>
                  <h6 className="font-semibold">{t.name}</h6>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <img src="/quotes.png" alt="quotes" className="w-8 h-8 mb-4" />
              <p className="text-center text-gray-700">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 