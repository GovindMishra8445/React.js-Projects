import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import ShopByCategory from "../components/ShopByCategory";
import PremiumDryFruitCollection from "../components/PremiumDryFruitCollection";
import BestsellingDryFruits from "../components/BestsellingDryFruits";
import DealsSection from "../components/DealsSection";
import SpiceStaples from "../components/SpiceStaples";
import TopRatedSpices from "../components/TopRatedSpices";
import PopularProducts from "../components/PopularProducts";
import DailyEssentialsPulses from "../components/DailyEssentialsPulses";
import NutritiousPulses from "../components/NutritiousPulses";
import MostLovedPulses from "../components/MostLovedPulses";
import NewsTipsUpdates from "../components/NewsTipsUpdates";
import ClientTestimonial from "../components/ClientTestimonial";
import BenefitWrapper from "../components/BenefitWrapper";
import TradePartnerCTA from "../components/TradePartnerCTA";
import FAQAccordion from "../components/FAQAccordion";
import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <TopHeader/>
      <Header />
      <Navbar/>
      <HeroSlider />
      <ShopByCategory />
      <PremiumDryFruitCollection />
      <BestsellingDryFruits />
      <DealsSection />
      <SpiceStaples />
      <TopRatedSpices />
      <PopularProducts />
      <DailyEssentialsPulses />
      <NutritiousPulses />
      <MostLovedPulses />
      <NewsTipsUpdates />
      <ClientTestimonial />
      <BenefitWrapper />
      <TradePartnerCTA />
      {/* <FAQAccordion /> */}
      <Footer />
      {/* Other homepage sections will be added here */}
    </>
  );
} 