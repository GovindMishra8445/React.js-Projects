import React from "react";
import Hero from "../components/Hero";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import CategorySection from "../components/CategorySection";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="p-4">
        <CategorySection />
        <OurPolicy />
        <NewsletterBox />
      </div>
    </>
  );
};

export default Home;
