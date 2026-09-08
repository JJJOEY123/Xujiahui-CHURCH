import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscoverSection } from './components/DiscoverSection';
import { VirtualExperience } from './components/VirtualExperience';
import { BookingSection } from './components/BookingSection';
import { LiturgySection } from './components/LiturgySection';
import { VisitorGuidelines } from './components/VisitorGuidelines';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('zh');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#edebe6] selection:bg-[#d4af37] selection:text-black">
      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBookingModal={() => scrollToSection('booking')}
      />

      {/* Hero Entrance */}
      <Hero
        currentLang={currentLang}
        onExploreClick={() => scrollToSection('discover')}
        onBookingClick={() => scrollToSection('booking')}
        onVirtualTourClick={() => scrollToSection('virtual')}
      />

      {/* 1. Discover the Cathedral Section (modeled after St. Peter's Discover the Basilica) */}
      <DiscoverSection currentLang={currentLang} />

      {/* 2. Virtual Experience & Digital Tour (modeled after St. Peter's Pétros ení) */}
      <VirtualExperience currentLang={currentLang} />

      {/* 3. Booking Experience & Tours (modeled after St. Peter's Book Your Visit) */}
      <BookingSection currentLang={currentLang} />

      {/* 4. Sacred Liturgies & Mass Times (modeled after St. Peter's Celebrations) */}
      <LiturgySection currentLang={currentLang} />

      {/* 5. Visitor Guidelines & Sacred Decorum (modeled after St. Peter's Info & Opening Hours) */}
      <VisitorGuidelines currentLang={currentLang} />

      {/* 6. Cathedral News & Announcements (modeled after St. Peter's News) */}
      <NewsSection currentLang={currentLang} />

      {/* Official Dignified Vatican-style Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
