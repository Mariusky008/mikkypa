'use client';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveGuide from './components/InteractiveGuide';
import CommunityImpact from './components/CommunityImpact';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InteractiveGuide />
        <CommunityImpact />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
} 