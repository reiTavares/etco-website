import React from 'react';
import Hero from '@/components/Hero';
import ServiceHighlights from '@/components/ServiceHighlights';
import DiagnosticCenter from '@/components/DiagnosticCenter';
import PartnershipCTA from '@/components/PartnershipCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <DiagnosticCenter />
        <PartnershipCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
