'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import TestimonialsSection from '@/components/home/TestiminialSection';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/home/ServicesSection';
import ShopifyStoreSection from '@/components/home/ShopifyStoreSection';
import HeroSection from '@/components/home/HeroSection';
import CtaSection from '@/components/home/CtaSection';
import SatisfiedClientSection from '@/components/home/SatisfiedClientSection';
import CultureSection from '@/components/home/CultureSection';
import TechPartnerSection from '@/components/home/TechPartnerSection';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
     <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why We Are The Best Section */}
      
      <TechPartnerSection />

      {/* Satisfied Clientele Section */}

      <SatisfiedClientSection />

      <ShopifyStoreSection />

      {/* Why Work With Us Section */}
       <CultureSection />

      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />
      { /* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
