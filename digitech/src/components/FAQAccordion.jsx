import React, { useState } from "react";

const faqs = [
  {
    question: "Can I customize my family pack if I do not want some items?",
    answer: "No, you can’t customize a family pack of 5 dry fruit boxes, but we have 4 different combination boxes to choose from. One can check our classic dry fruit range and buy individual dry fruit pouches and make your own family pack.",
  },
  {
    question: "Unable to apply coupon/Invalid Coupon?",
    answer: "For such issues, contact our customer support at +91-7208937626 (Monday to Saturday, 10am to 7pm) or email at support@ministryofnuts.in",
  },
  {
    question: "What should I do if my payment fails?",
    answer: "Please contact our customer support team at +91-7208937626 (Monday to Saturday, 10am to 7pm) or email us at support@ministryofnuts.in.",
  },
  {
    question: "What is the validity of membership?",
    answer: "Membership is valid for 1 year.",
  },
  {
    question: "Can someone else use these coupons from my membership?",
    answer: "Yes, your family and friends can use your membership coupons.",
  },
  {
    question: "Can I use the same coupon on other products?",
    answer: "No, one cannot use a coupon made for a specific product on different products.",
  },
  {
    question: "Are bulk orders available?",
    answer: "Yes, for details please contact our customer care number: +91-7208937626.",
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ's</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-lg">
                <button
                  className="w-full text-left px-4 py-3 font-semibold focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  {faq.question}
                  <span>{openIdx === idx ? "-" : "+"}</span>
                </button>
                {openIdx === idx && (
                  <div className="px-4 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 